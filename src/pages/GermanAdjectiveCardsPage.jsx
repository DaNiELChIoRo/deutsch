import React, { useState, useCallback, useMemo } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { GERMAN_ADJECTIVE_CARDS } from '../utils/germanAdjectiveCards';
import '../styles/AdjectiveCardsPage.css';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildOptions(card, allCards) {
  const correct = card.de;
  const pool = shuffleArray(
    allCards.filter(c => c.id !== card.id).map(c => c.de)
  ).slice(0, 3);
  const options = shuffleArray([correct, ...pool]);
  return { options, correctIndex: options.indexOf(correct) };
}

// ── Browse Mode ──────────────────────────────────────────────────────────────

const BrowseMode = ({ language, onHome }) => {
  const [flipped, setFlipped] = useState({});
  const { supported, speakingId, speak } = useTextToSpeech();

  const toggle = (id) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  const handleSpeak = (e, card) => {
    e.stopPropagation();
    speak(card.de, 'de-DE', `de-adj-${card.id}`);
  };

  return (
    <>
      <p className="acp-subtitle">
        {language === 'es'
          ? 'Haz clic en una tarjeta para ver la traducción en alemán'
          : 'Click a card to reveal the German translation'}
      </p>
      <div className="acp-grid">
        {GERMAN_ADJECTIVE_CARDS.map(card => (
          <div
            key={card.id}
            className={`acp-card-wrapper ${flipped[card.id] ? 'flipped' : ''}`}
            onClick={() => toggle(card.id)}
            role="button"
            aria-pressed={!!flipped[card.id]}
          >
            <div className="acp-card-inner">
              <div className="acp-card-front">
                <span className="acp-card-emoji">{card.emoji}</span>
                <span className="acp-card-word">{card.en}</span>
                <span className="acp-card-sub">{card.es}</span>
              </div>
              <div className="acp-card-back">
                <span className="acp-card-target">{card.de}</span>
                {supported && (
                  <button
                    className="acp-tts-btn"
                    onClick={(e) => handleSpeak(e, card)}
                    aria-label={`Pronounce ${card.de}`}
                  >
                    {speakingId === `de-adj-${card.id}` ? '🔊' : '🔈'}
                  </button>
                )}
                <span className="acp-card-hint">
                  {language === 'es' ? 'Toca para girar' : 'Tap to flip'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="acp-back-btn" onClick={onHome}>
        &#8592; {language === 'es' ? 'Volver' : 'Back'}
      </button>
    </>
  );
};

// ── Quiz Mode ────────────────────────────────────────────────────────────────

const QuizMode = ({ language, onHome }) => {
  const { supported, speakingId, speak } = useTextToSpeech();

  const [cards] = useState(() => shuffleArray(GERMAN_ADJECTIVE_CARDS));
  const [index, setIndex]       = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore]       = useState(0);
  const [done, setDone]         = useState(false);

  const card = cards[index];
  const { options, correctIndex } = useMemo(
    () => buildOptions(card, GERMAN_ADJECTIVE_CARDS),
    [card]
  );

  const handleSelect = useCallback((i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === correctIndex) setScore(s => s + 1);
  }, [selected, correctIndex]);

  const handleNext = () => {
    if (index + 1 >= cards.length) {
      setDone(true);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="acp-results">
        <div className="acp-results-score">{score}/{cards.length}</div>
        <p className="acp-results-label">
          {language === 'es' ? '¡Ejercicio completado!' : 'Exercise complete!'}
        </p>
        <button className="acp-results-restart" onClick={handleRestart}>
          {language === 'es' ? 'Volver a intentar' : 'Try again'}
        </button>
        <button className="acp-back-btn" onClick={onHome}>
          &#8592; {language === 'es' ? 'Volver' : 'Back'}
        </button>
      </div>
    );
  }

  const feedbackText = selected !== null
    ? selected === correctIndex
      ? (language === 'es' ? '¡Correcto! 🎉' : 'Correct! 🎉')
      : `${language === 'es' ? 'Incorrecto — la respuesta es' : 'Incorrect — the answer is'} ${card.de}`
    : '';

  return (
    <>
      <div className="acp-progress-row">
        <span>{index + 1}/{cards.length}</span>
        <div className="acp-progress-bar">
          <div className="acp-progress-fill" style={{ width: `${((index + 1) / cards.length) * 100}%` }} />
        </div>
        <span>{score} ✓</span>
      </div>

      <div className="acp-quiz-card">
        <div className="acp-quiz-emoji">{card.emoji}</div>
        <p className="acp-quiz-prompt">
          {language === 'es' ? '¿Cómo se dice en alemán?' : 'How do you say in German?'}
        </p>
        <div className="acp-quiz-word">{card.en}</div>
        <div className="acp-quiz-es">{card.es}</div>
      </div>

      <div className="acp-quiz-options">
        {options.map((opt, i) => {
          let cls = 'acp-quiz-option';
          if (selected !== null) {
            if (i === correctIndex) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={selected !== null}>
              {opt}
            </button>
          );
        })}
      </div>

      <p className={`acp-quiz-feedback ${selected !== null ? (selected === correctIndex ? 'correct' : 'wrong') : ''}`}>
        {feedbackText}
      </p>

      {selected !== null && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', alignItems: 'center' }}>
          {supported && (
            <button
              className="acp-tts-btn"
              onClick={() => speak(card.de, 'de-DE', `de-quiz-${card.id}`)}
              aria-label={`Pronounce ${card.de}`}
            >
              {speakingId === `de-quiz-${card.id}` ? '🔊' : '🔈'}
            </button>
          )}
          <button className="acp-quiz-next-btn" onClick={handleNext}>
            {index + 1 >= cards.length
              ? (language === 'es' ? 'Ver resultados' : 'See results')
              : (language === 'es' ? 'Siguiente' : 'Next')}
          </button>
        </div>
      )}

      <button className="acp-back-btn" onClick={onHome}>
        &#8592; {language === 'es' ? 'Volver' : 'Back'}
      </button>
    </>
  );
};

// ── Main Page ────────────────────────────────────────────────────────────────

const GermanAdjectiveCardsPage = ({ onHome }) => {
  const { language } = useI18n();
  const [mode, setMode] = useState('browse');

  return (
    <div className="acp-container">
      <div className="acp-content">
        <header className="acp-header">
          <h1 className="acp-title">
            {language === 'es' ? '🏷️ Adjetivos Comunes' : '🏷️ Common Adjectives'}
          </h1>
        </header>

        <div className="acp-tabs">
          <button
            className={`acp-tab ${mode === 'browse' ? 'active' : ''}`}
            onClick={() => setMode('browse')}
          >
            {language === 'es' ? 'Tarjetas' : 'Cards'}
          </button>
          <button
            className={`acp-tab ${mode === 'quiz' ? 'active' : ''}`}
            onClick={() => setMode('quiz')}
          >
            {language === 'es' ? 'Prueba' : 'Quiz'}
          </button>
        </div>

        {mode === 'browse'
          ? <BrowseMode language={language} onHome={onHome} />
          : <QuizMode key={mode} language={language} onHome={onHome} />}
      </div>
    </div>
  );
};

export default GermanAdjectiveCardsPage;
