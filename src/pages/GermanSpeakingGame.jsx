import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { GERMAN_STATES, GERMANY_CITIES } from '../utils/germanyMapData';
import { useSpeechRecognition, detectSpeechSupport } from '../hooks/useSpeechRecognition';
import '../styles/GermanSpeakingGame.css';

// ---------------------------------------------------------------------------
// Matching helpers
// ---------------------------------------------------------------------------

function normalize(str) {
  return str
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[-–]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Returns true if any of the pipe-separated transcript alternatives contain the expected word.
// For compound names (e.g. "Nordrhein-Westfalen") we require all major parts to appear.
function checkMatch(rawTranscript, expected) {
  const alternatives = rawTranscript.split('|');
  const normExpected = normalize(expected);
  const parts = normExpected.split(' ').filter(p => p.length > 3);

  return alternatives.some(alt => {
    const normAlt = normalize(alt);
    if (normAlt.includes(normExpected)) return true;
    if (parts.length > 1) return parts.every(p => normAlt.includes(p));
    return false;
  });
}

// ---------------------------------------------------------------------------
// Word list
// ---------------------------------------------------------------------------

const ALL_WORDS = [
  ...GERMAN_STATES.map(s => ({
    id: `state-${s.id}`,
    word: s.name,
    ipa: s.ipa,
    type: 'state',
    hint: { en: `State capital: ${s.capital}`, es: `Capital del estado: ${s.capital}` }
  })),
  ...GERMANY_CITIES.map(c => ({
    id: `city-${c.id}`,
    word: c.name,
    ipa: c.ipa,
    type: 'city',
    hint: { en: `City in ${c.state}`, es: `Ciudad en ${c.state}` }
  }))
];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------------------
// Browser unsupported banner
// ---------------------------------------------------------------------------

const UnsupportedBanner = ({ browser, language, onHome }) => (
  <div className="speaking-container">
    <div className="speaking-content">
      <div className="speaking-header">
        <button className="speaking-back-btn" onClick={onHome}>&#8592;</button>
        <h1 className="speaking-title">
          {language === 'es' ? 'Práctica de pronunciación' : 'Pronunciation Practice'}
        </h1>
      </div>
      <div className="speaking-unsupported">
        <div className="speaking-unsupported-icon">🎙️</div>
        <h2>{language === 'es' ? 'Micrófono no disponible' : 'Microphone not available'}</h2>
        {browser === 'firefox' ? (
          <p>
            {language === 'es'
              ? 'Firefox no soporta reconocimiento de voz. Prueba con Chrome, Edge o Safari.'
              : 'Firefox does not support speech recognition. Please try Chrome, Edge, or Safari.'}
          </p>
        ) : (
          <p>
            {language === 'es'
              ? 'Tu navegador no soporta reconocimiento de voz. Prueba con Chrome o Edge.'
              : 'Your browser does not support speech recognition. Please try Chrome or Edge.'}
          </p>
        )}
        <button className="speaking-action-btn" onClick={onHome}>
          {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
        </button>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Main game
// ---------------------------------------------------------------------------

const GAME_STATUS = {
  IDLE: 'idle',
  LISTENING: 'listening',
  CORRECT: 'correct',
  INCORRECT: 'incorrect'
};

const GermanSpeakingGame = ({ onHome }) => {
  const { language } = useI18n();
  const [mode, setMode] = useState('both'); // 'states' | 'cities' | 'both'
  const [showIpa, setShowIpa] = useState(true);
  const [queue, setQueue] = useState(() => shuffleArray(ALL_WORDS));
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState(GAME_STATUS.IDLE);
  const [heard, setHeard] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [attempts, setAttempts] = useState(0); // per-word attempts

  const { supported, browser } = detectSpeechSupport();

  const wordList = useMemo(() => {
    const filtered = ALL_WORDS.filter(w =>
      mode === 'both' ? true : mode === 'states' ? w.type === 'state' : w.type === 'city'
    );
    return shuffleArray(filtered);
  }, [mode]);

  // Reset queue when mode changes
  useEffect(() => {
    setQueue(wordList);
    setIndex(0);
    setStatus(GAME_STATUS.IDLE);
    setHeard('');
    setAttempts(0);
    setScore({ correct: 0, total: 0 });
  }, [wordList]);

  const currentWord = queue[index] || queue[0];

  const { isListening, transcript, error, start, stop } = useSpeechRecognition({ lang: 'de-DE' });

  // React to transcript changes
  useEffect(() => {
    if (!transcript) return;
    const matched = checkMatch(transcript, currentWord.word);
    // Show the first alternative as "heard" text
    const firstAlt = transcript.split('|')[0];
    setHeard(firstAlt);
    if (matched) {
      setStatus(GAME_STATUS.CORRECT);
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setStatus(GAME_STATUS.INCORRECT);
      if (attempts === 0) {
        // Only count one attempt per word towards total on first try
        setScore(prev => ({ ...prev, total: prev.total + 1 }));
      }
      setAttempts(prev => prev + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  const handleMic = useCallback(() => {
    if (isListening) {
      stop();
    } else {
      setStatus(GAME_STATUS.LISTENING);
      setHeard('');
      start();
    }
  }, [isListening, start, stop]);

  const nextWord = useCallback(() => {
    setStatus(GAME_STATUS.IDLE);
    setHeard('');
    setAttempts(0);
    setIndex(prev => (prev + 1) % queue.length);
  }, [queue.length]);

  const resetGame = useCallback(() => {
    setQueue(shuffleArray(wordList));
    setIndex(0);
    setStatus(GAME_STATUS.IDLE);
    setHeard('');
    setAttempts(0);
    setScore({ correct: 0, total: 0 });
  }, [wordList]);

  if (!supported) {
    return <UnsupportedBanner browser={browser} language={language} onHome={onHome} />;
  }

  const isCorrect = status === GAME_STATUS.CORRECT;
  const isIncorrect = status === GAME_STATUS.INCORRECT;
  const isDone = status !== GAME_STATUS.IDLE && status !== GAME_STATUS.LISTENING;
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : null;

  return (
    <div className="speaking-container">
      <div className="speaking-content">
        {/* Header */}
        <div className="speaking-header">
          <button className="speaking-back-btn" onClick={onHome}>&#8592;</button>
          <h1 className="speaking-title">
            {language === 'es' ? 'Práctica de pronunciación' : 'Pronunciation Practice'}
          </h1>
        </div>

        {/* Score bar */}
        <div className="speaking-score-bar">
          <span className="speaking-score-label">
            {score.correct}/{score.total} {language === 'es' ? 'correctas' : 'correct'}
          </span>
          {accuracy !== null && (
            <span className="speaking-accuracy">{accuracy}%</span>
          )}
          <span className="speaking-progress-label">
            {index + 1}/{queue.length}
          </span>
        </div>

        {/* Mode tabs */}
        <div className="speaking-modes">
          {['both', 'states', 'cities'].map(m => (
            <button
              key={m}
              className={`speaking-mode-btn ${mode === m ? 'active' : ''}`}
              onClick={() => setMode(m)}
            >
              {m === 'both'
                ? (language === 'es' ? 'Todo' : 'Both')
                : m === 'states'
                  ? (language === 'es' ? 'Estados' : 'States')
                  : (language === 'es' ? 'Ciudades' : 'Cities')}
            </button>
          ))}
        </div>

        {/* Word card */}
        <div className={`speaking-word-card ${isCorrect ? 'correct' : isIncorrect ? 'incorrect' : ''}`}>
          <div className="speaking-word-type">
            {currentWord.type === 'state'
              ? (language === 'es' ? '🏛️ Estado federal' : '🏛️ Federal state')
              : (language === 'es' ? '🏙️ Ciudad' : '🏙️ City')}
          </div>

          <div className="speaking-word-main">{currentWord.word}</div>

          <button
            className="speaking-ipa-toggle"
            onClick={() => setShowIpa(v => !v)}
          >
            {showIpa ? (language === 'es' ? 'Ocultar pronunciación' : 'Hide pronunciation') : (language === 'es' ? 'Mostrar pronunciación' : 'Show pronunciation')}
          </button>

          {showIpa && (
            <div className="speaking-ipa">{currentWord.ipa}</div>
          )}

          <div className="speaking-hint">
            {currentWord.hint[language] || currentWord.hint.en}
          </div>
        </div>

        {/* Safari note */}
        {browser === 'safari' && status === GAME_STATUS.IDLE && (
          <p className="speaking-safari-note">
            {language === 'es'
              ? '⚠️ Safari: el micrófono puede pedir permiso en cada intento.'
              : '⚠️ Safari: the microphone may prompt for permission each attempt.'}
          </p>
        )}

        {/* Mic button */}
        {!isDone && (
          <div className="speaking-mic-area">
            <button
              className={`speaking-mic-btn ${isListening ? 'listening' : ''}`}
              onClick={handleMic}
              aria-label={isListening ? 'Stop' : 'Start speaking'}
            >
              <span className="speaking-mic-icon">{isListening ? '⏹' : '🎙️'}</span>
              {isListening && <span className="speaking-mic-pulse" />}
            </button>
            <p className="speaking-mic-label">
              {isListening
                ? (language === 'es' ? 'Escuchando...' : 'Listening...')
                : (language === 'es' ? 'Toca para hablar' : 'Tap to speak')}
            </p>
            {error && (
              <p className="speaking-error">
                {error === 'not-allowed'
                  ? (language === 'es' ? 'Permiso de micrófono denegado' : 'Microphone permission denied')
                  : error === 'no-speech'
                    ? (language === 'es' ? 'No se detectó voz. Intenta de nuevo.' : 'No speech detected. Try again.')
                    : (language === 'es' ? `Error: ${error}` : `Error: ${error}`)}
              </p>
            )}
          </div>
        )}

        {/* Result */}
        {isDone && (
          <div className={`speaking-result ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="speaking-result-icon">{isCorrect ? '✓' : '✗'}</div>
            <div className="speaking-result-title">
              {isCorrect
                ? (language === 'es' ? '¡Correcto!' : 'Correct!')
                : (language === 'es' ? 'Inténtalo de nuevo' : 'Try again')}
            </div>
            {heard && (
              <div className="speaking-result-heard">
                {language === 'es' ? 'Se escuchó:' : 'Heard:'}{' '}
                <strong>"{heard}"</strong>
              </div>
            )}
            {isIncorrect && showIpa && (
              <div className="speaking-result-tip">
                {language === 'es' ? 'Pronunciación:' : 'Pronunciation:'}{' '}
                <span className="speaking-result-ipa">{currentWord.ipa}</span>
              </div>
            )}

            <div className="speaking-result-actions">
              {isIncorrect && (
                <button className="speaking-action-btn secondary" onClick={handleMic}>
                  {language === 'es' ? '🎙️ Intentar de nuevo' : '🎙️ Try again'}
                </button>
              )}
              <button className="speaking-action-btn" onClick={nextWord}>
                {language === 'es' ? 'Siguiente →' : 'Next →'}
              </button>
            </div>
          </div>
        )}

        {/* Bottom actions */}
        <div className="speaking-bottom-actions">
          <button className="speaking-text-btn" onClick={resetGame}>
            {language === 'es' ? 'Reiniciar' : 'Restart'}
          </button>
          <button className="speaking-text-btn" onClick={onHome}>
            {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GermanSpeakingGame;
