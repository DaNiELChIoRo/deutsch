import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useSpeechRecognition, detectSpeechSupport } from '../hooks/useSpeechRecognition';
import {
  NUMBERS, DIFFICULTY_POOLS, getNumber, getConfusableDigits,
} from '../utils/germanNumbersData';
import '../styles/GermanNumbersPage.css';

// ─── shared helpers ───────────────────────────────────────────────────────────

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speak(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'de-DE';
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}

function checkSpoken(transcript, number) {
  const alts = transcript.split('|').map(a => a.toLowerCase().trim());
  const targets = new Set([number.de.toLowerCase()]);
  if (number.digit === 1) { targets.add('ein'); targets.add('eine'); }
  if (number.digit === 2) targets.add('zwo');
  return alts.some(a => targets.has(a));
}

function buildDistractors(current) {
  const confusables = getConfusableDigits(current.digit);
  const pool = shuffleArray(confusables)
    .map(d => getNumber(d))
    .filter(Boolean);
  const distractors = [];
  for (const n of pool) {
    if (distractors.length === 3) break;
    if (!distractors.find(x => x.digit === n.digit)) distractors.push(n);
  }
  if (distractors.length < 3) {
    const fallback = shuffleArray(
      NUMBERS.filter(n => n.digit !== current.digit && !distractors.find(d => d.digit === n.digit))
    );
    while (distractors.length < 3 && fallback.length > 0) distractors.push(fallback.shift());
  }
  return shuffleArray([current, ...distractors.slice(0, 3)]);
}

function formatTime(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// ─── Matching Pairs ───────────────────────────────────────────────────────────

const PAIR_CONFIG = {
  easy:   { en: 'Easy (1–10)',       es: 'Fácil (1–10)',          count: 6, pool: 'easy'   },
  medium: { en: 'Medium (1–20)',     es: 'Medio (1–20)',          count: 8, pool: 'medium' },
  hard:   { en: 'Hard (+ tens)',     es: 'Difícil (+ decenas)',   count: 8, pool: 'hard'   },
};

function buildCards(numbers) {
  return shuffleArray(
    numbers.flatMap((num, i) => [
      { id: `d-${i}-${num.digit}`, kind: 'digit', num, pairId: i },
      { id: `w-${i}-${num.digit}`, kind: 'word',  num, pairId: i },
    ])
  );
}

const MatchingPairsMode = ({ language }) => {
  const [diff, setDiff]           = useState('easy');
  const [cards, setCards]         = useState(() => buildCards(shuffleArray([...DIFFICULTY_POOLS.easy]).slice(0, 6)));
  const [selected, setSelected]   = useState([]);
  const [matched, setMatched]     = useState(new Set());
  const [checking, setChecking]   = useState(false);
  const [moves, setMoves]         = useState(0);
  const [elapsed, setElapsed]     = useState(0);
  const [timerOn, setTimerOn]     = useState(false);
  const [won, setWon]             = useState(false);

  useEffect(() => {
    if (!timerOn || won) return;
    const id = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(id);
  }, [timerOn, won]);

  useEffect(() => {
    if (cards.length > 0 && matched.size === cards.length / 2) {
      setWon(true);
      setTimerOn(false);
    }
  }, [matched, cards.length]);

  function newGame(d = diff) {
    const cfg = PAIR_CONFIG[d];
    const pool = shuffleArray([...DIFFICULTY_POOLS[cfg.pool]]).slice(0, cfg.count);
    setCards(buildCards(pool));
    setSelected([]);
    setMatched(new Set());
    setChecking(false);
    setMoves(0);
    setElapsed(0);
    setTimerOn(false);
    setWon(false);
  }

  function handleClick(card) {
    if (checking || matched.has(card.pairId) || selected.includes(card.id) || selected.length >= 2) return;
    if (!timerOn) setTimerOn(true);

    const next = [...selected, card.id];
    setSelected(next);

    if (next.length === 2) {
      setMoves(m => m + 1);
      setChecking(true);
      const [c1, c2] = next.map(id => cards.find(c => c.id === id));
      if (c1.pairId === c2.pairId) {
        speak(c1.num.de);
        setTimeout(() => {
          setMatched(prev => new Set([...prev, c1.pairId]));
          setSelected([]);
          setChecking(false);
        }, 500);
      } else {
        setTimeout(() => {
          setSelected([]);
          setChecking(false);
        }, 900);
      }
    }
  }

  const totalPairs = cards.length / 2;
  const [selC1, selC2] = selected.map(id => cards.find(c => c.id === id));
  const isMismatch = selected.length === 2 && selC1 && selC2 && selC1.pairId !== selC2.pairId;

  return (
    <div className="gn-mode">
      <div className="gn-sub-tabs">
        {Object.entries(PAIR_CONFIG).map(([key, cfg]) => (
          <button
            key={key}
            className={`gn-sub-tab ${diff === key ? 'active' : ''}`}
            onClick={() => { setDiff(key); newGame(key); }}
          >
            {language === 'es' ? cfg.es : cfg.en}
          </button>
        ))}
      </div>

      <div className="gn-stats">
        <span>⏱ {formatTime(elapsed)}</span>
        <span>{matched.size}/{totalPairs} {language === 'es' ? 'pares' : 'pairs'}</span>
        <span>{moves} {language === 'es' ? 'movs.' : 'moves'}</span>
      </div>

      {won ? (
        <div className="gn-win">
          <div className="gn-win-emoji">🎉</div>
          <div className="gn-win-title">{language === 'es' ? '¡Completado!' : 'Complete!'}</div>
          <div className="gn-win-sub">
            {formatTime(elapsed)} &middot; {moves} {language === 'es' ? 'movimientos' : 'moves'}
          </div>
          <button className="gn-btn-primary" onClick={() => newGame()}>
            {language === 'es' ? 'Jugar de nuevo' : 'Play again'}
          </button>
        </div>
      ) : (
        <div className="gn-pairs-grid">
          {cards.map(card => {
            const flipped  = selected.includes(card.id) || matched.has(card.pairId);
            const isMatch  = matched.has(card.pairId);
            const isWrong  = isMismatch && selected.includes(card.id);
            return (
              <div
                key={card.id}
                className={`gn-pair-card${flipped ? ' flipped' : ''}${isMatch ? ' matched' : ''}${isWrong ? ' wrong' : ''}`}
                onClick={() => handleClick(card)}
              >
                <div className="gn-pair-inner">
                  <div className="gn-pair-face gn-pair-hidden">?</div>
                  <div className={`gn-pair-face gn-pair-reveal ${card.kind}`}>
                    {card.kind === 'digit' ? card.num.digit : card.num.de}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <button className="gn-btn-secondary" onClick={() => newGame()}>
        {language === 'es' ? '🔀 Nueva ronda' : '🔀 New round'}
      </button>
    </div>
  );
};

// ─── Pronunciation (Speak) ────────────────────────────────────────────────────

const SPEAK_TIMER = 10;

const PronunciationMode = ({ language }) => {
  const { supported, browser, isListening, transcript, error, start, stop } =
    useSpeechRecognition({ lang: 'de-DE' });

  const [pool]    = useState(() => shuffleArray(NUMBERS.filter(n => n.digit >= 1 && n.digit <= 100)));
  const [idx, setIdx]             = useState(0);
  const [status, setStatus]       = useState('idle'); // idle | listening | correct | incorrect | timeout
  const [heard, setHeard]         = useState('');
  const [timeLeft, setTimeLeft]   = useState(SPEAK_TIMER);
  const [score, setScore]         = useState({ correct: 0, total: 0 });
  const processedRef              = useRef(false);

  const current = pool[idx % pool.length];

  // Countdown while listening
  useEffect(() => {
    if (status !== 'listening') return;
    if (timeLeft === 0) {
      stop();
      setStatus('timeout');
      setScore(s => ({ ...s, total: s.total + 1 }));
      return;
    }
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, status]); // eslint-disable-line react-hooks/exhaustive-deps

  // Process transcript once per listening session
  useEffect(() => {
    if (!transcript || status !== 'listening' || processedRef.current) return;
    processedRef.current = true;
    stop();
    const ok = checkSpoken(transcript, current);
    setHeard(transcript.split('|')[0]);
    setStatus(ok ? 'correct' : 'incorrect');
    setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
  }, [transcript]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle recognition errors (common on iOS Safari) — stop timer, allow retry
  useEffect(() => {
    if (!error || status !== 'listening') return;
    setStatus('idle');
  }, [error]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleMic() {
    if (isListening) { stop(); return; }
    processedRef.current = false;
    setTimeLeft(SPEAK_TIMER);
    setStatus('listening');
    setHeard('');
    start();
  }

  function next() {
    setStatus('idle');
    setHeard('');
    setTimeLeft(SPEAK_TIMER);
    setIdx(i => i + 1);
  }

  const isDone   = status === 'correct' || status === 'incorrect' || status === 'timeout';
  const isOk     = status === 'correct';

  if (!supported) {
    return (
      <div className="gn-unsupported">
        <div className="gn-unsupported-icon">🎙️</div>
        <p>
          {browser === 'firefox'
            ? (language === 'es'
              ? 'Firefox no soporta reconocimiento de voz. Prueba Chrome, Edge o Safari.'
              : 'Firefox does not support speech recognition. Try Chrome, Edge, or Safari.')
            : (language === 'es'
              ? 'Tu navegador no soporta reconocimiento de voz.'
              : 'Your browser does not support speech recognition.')}
        </p>
      </div>
    );
  }

  return (
    <div className="gn-mode">
      <div className="gn-stats">
        <span>{score.correct}/{score.total} {language === 'es' ? 'correctas' : 'correct'}</span>
        {score.total > 0 && <span>{Math.round((score.correct / score.total) * 100)}%</span>}
        <span>#{idx + 1}</span>
      </div>

      <div className={`gn-speak-card${isOk ? ' correct' : isDone ? ' wrong' : ''}`}>
        <div className="gn-speak-number">{current.digit}</div>
        {current.ipa && <div className="gn-speak-ipa">{current.ipa}</div>}

        {status === 'listening' && (
          <div className="gn-timer-wrap">
            <div className="gn-timer-label">{timeLeft}s</div>
            <div className="gn-timer-bar">
              <div
                className="gn-timer-fill"
                style={{
                  width: `${(timeLeft / SPEAK_TIMER) * 100}%`,
                  transition: timeLeft === SPEAK_TIMER ? 'none' : 'width 1s linear',
                }}
              />
            </div>
          </div>
        )}
      </div>

      {!isDone && (
        <div className="gn-mic-area">
          <button
            className={`gn-mic-btn${isListening ? ' listening' : ''}`}
            onClick={handleMic}
          >
            <span className="gn-mic-icon">{isListening ? '⏹' : '🎙️'}</span>
            {isListening && <span className="gn-mic-pulse" />}
          </button>
          <p className="gn-mic-label">
            {isListening
              ? (language === 'es' ? 'Escuchando...' : 'Listening...')
              : (language === 'es' ? 'Toca para hablar' : 'Tap to speak')}
          </p>
          {error && (
            <p className="gn-error">
              {error === 'not-allowed'
                ? (language === 'es'
                  ? 'Permiso de micrófono denegado. En iPhone: Ajustes → Safari → Micrófono.'
                  : 'Microphone permission denied. On iPhone: Settings → Safari → Microphone.')
                : error === 'no-speech'
                  ? (language === 'es' ? 'No se detectó voz. Intenta de nuevo.' : 'No speech detected. Try again.')
                  : (language === 'es' ? `Error: ${error}. Intenta de nuevo.` : `Error: ${error}. Try again.`)}
            </p>
          )}
        </div>
      )}

      {isDone && (
        <div className={`gn-result${isOk ? ' correct' : ' wrong'}`}>
          <div className="gn-result-icon">
            {isOk ? '✓' : status === 'timeout' ? '⏰' : '✗'}
          </div>
          <div className="gn-result-title">
            {isOk
              ? (language === 'es' ? '¡Correcto!' : 'Correct!')
              : status === 'timeout'
                ? (language === 'es' ? '¡Tiempo!' : "Time's up!")
                : (language === 'es' ? 'Incorrecto' : 'Incorrect')}
          </div>
          {heard && !isOk && (
            <div className="gn-result-heard">
              {language === 'es' ? 'Escuché:' : 'Heard:'} &ldquo;{heard}&rdquo;
            </div>
          )}
          {!isOk && (
            <div className="gn-result-answer">
              {current.digit} = <strong>{current.de}</strong>
              {current.ipa && <span className="gn-result-ipa"> {current.ipa}</span>}
            </div>
          )}
          <div className="gn-result-actions">
            {!isOk && (
              <button className="gn-btn-secondary" onClick={handleMic}>
                {language === 'es' ? '🎙️ Reintentar' : '🎙️ Try again'}
              </button>
            )}
            <button className="gn-btn-primary" onClick={next}>
              {language === 'es' ? 'Siguiente →' : 'Next →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Listen & Choose ──────────────────────────────────────────────────────────

const LISTEN_TIMER = 8;

const ListenChooseMode = ({ language }) => {
  const [pool]    = useState(() => shuffleArray(NUMBERS.filter(n => n.digit >= 1 && n.digit <= 100)));
  const [idx, setIdx]             = useState(0);
  const [options, setOptions]     = useState([]);
  const [status, setStatus]       = useState('playing'); // playing | answered | timeout
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(LISTEN_TIMER);
  const [score, setScore]         = useState({ correct: 0, total: 0 });

  const current = pool[idx % pool.length];

  // Build new question whenever idx changes
  useEffect(() => {
    setOptions(buildDistractors(current));
    setStatus('playing');
    setSelected(null);
    setTimeLeft(LISTEN_TIMER);
    const t = setTimeout(() => speak(current.de), 350);
    return () => clearTimeout(t);
  }, [idx]); // eslint-disable-line react-hooks/exhaustive-deps

  // Countdown while playing
  useEffect(() => {
    if (status !== 'playing') return;
    if (timeLeft === 0) {
      setStatus('timeout');
      setScore(s => ({ ...s, total: s.total + 1 }));
      return;
    }
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, status]);

  function handleSelect(num) {
    if (status !== 'playing') return;
    setSelected(num.digit);
    setStatus('answered');
    const ok = num.digit === current.digit;
    setScore(s => ({ correct: s.correct + (ok ? 1 : 0), total: s.total + 1 }));
  }

  const isAnswered = status !== 'playing';
  const wasCorrect = selected === current.digit;

  return (
    <div className="gn-mode">
      <div className="gn-stats">
        <span>{score.correct}/{score.total} {language === 'es' ? 'correctas' : 'correct'}</span>
        {score.total > 0 && <span>{Math.round((score.correct / score.total) * 100)}%</span>}
        <span>#{idx + 1}</span>
      </div>

      <div className="gn-listen-card">
        <div className="gn-listen-icon">🔊</div>
        <p className="gn-listen-prompt">
          {language === 'es' ? '¿Qué número escuchas?' : 'Which number do you hear?'}
        </p>
        <button className="gn-replay-btn" onClick={() => speak(current.de)}>
          {language === 'es' ? '↺ Escuchar de nuevo' : '↺ Play again'}
        </button>
        <div className="gn-timer-bar">
          <div
            className="gn-timer-fill"
            style={{
              width: `${(timeLeft / LISTEN_TIMER) * 100}%`,
              transition: timeLeft === LISTEN_TIMER ? 'none' : 'width 1s linear',
              background: timeLeft <= 3 ? 'rgba(255,90,90,0.85)' : undefined,
            }}
          />
        </div>
        <div className="gn-timer-label">{timeLeft}s</div>
      </div>

      <div className="gn-options-grid">
        {options.map(opt => {
          let cls = '';
          if (isAnswered) {
            if (opt.digit === current.digit) cls = ' correct';
            else if (opt.digit === selected) cls = ' wrong';
            else cls = ' dim';
          }
          return (
            <button
              key={opt.digit}
              className={`gn-option-btn${cls}`}
              onClick={() => handleSelect(opt)}
              disabled={isAnswered}
            >
              {opt.digit}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`gn-result${wasCorrect ? ' correct' : ' wrong'}`}>
          {status === 'timeout' ? (
            <div className="gn-result-timeout">
              ⏰ {language === 'es' ? '¡Tiempo! Era' : "Time! It was"}{' '}
              <strong>{current.digit} — {current.de}</strong>
            </div>
          ) : wasCorrect ? (
            <div className="gn-result-icon">✓ {language === 'es' ? '¡Correcto!' : 'Correct!'}</div>
          ) : (
            <div className="gn-result-answer">
              ✗ {language === 'es' ? 'Era' : 'It was'}: <strong>{current.digit} — {current.de}</strong>
              {current.ipa && <span className="gn-result-ipa"> {current.ipa}</span>}
            </div>
          )}
          <button className="gn-btn-primary" onClick={() => setIdx(i => i + 1)}>
            {language === 'es' ? 'Siguiente →' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
};

// ─── Main page ────────────────────────────────────────────────────────────────

const MODES = [
  { id: 'pairs',  en: '🃏 Pairs',    es: '🃏 Parejas'  },
  { id: 'speak',  en: '🎙️ Speak',    es: '🎙️ Hablar'  },
  { id: 'listen', en: '🔊 Listen',   es: '🔊 Escuchar' },
];

const GermanNumbersPage = ({ onHome }) => {
  const { language } = useI18n();
  const [mode, setMode] = useState('pairs');

  return (
    <div className="gn-container">
      <div className="gn-content">

        <header className="gn-header">
          <button className="gn-back-btn" onClick={onHome}>&#8592;</button>
          <div className="gn-header-text">
            <h1 className="gn-title">
              {language === 'es' ? 'Números en Alemán' : 'German Numbers'}
            </h1>
            <p className="gn-subtitle">
              {language === 'es' ? '0 – 100 · tres modos de práctica' : '0 – 100 · three practice modes'}
            </p>
          </div>
        </header>

        <div className="gn-mode-tabs">
          {MODES.map(m => (
            <button
              key={m.id}
              className={`gn-mode-tab${mode === m.id ? ' active' : ''}`}
              onClick={() => setMode(m.id)}
            >
              {language === 'es' ? m.es : m.en}
            </button>
          ))}
        </div>

        {mode === 'pairs'  && <MatchingPairsMode  language={language} />}
        {mode === 'speak'  && <PronunciationMode  language={language} />}
        {mode === 'listen' && <ListenChooseMode   language={language} />}

      </div>
    </div>
  );
};

export default GermanNumbersPage;
