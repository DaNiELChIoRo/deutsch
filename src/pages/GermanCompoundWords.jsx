import React, { useState } from 'react';
import { COMPOUND_WORDS } from '../utils/germanCompoundWords';
import { useI18n } from '../i18n/I18nContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import '../styles/GermanCompoundWords.css';

const GermanCompoundWords = ({ onHome }) => {
  const { language } = useI18n();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { supported, speakingId, speak, stop } = useTextToSpeech();

  const card = COMPOUND_WORDS[index];
  const total = COMPOUND_WORDS.length;

  const go = (dir) => {
    stop();
    setFlipped(false);
    setTimeout(() => setIndex(i => (i + dir + total) % total), 150);
  };

  const handleSpeak = (e) => {
    e.stopPropagation();
    if (speakingId === card.id) {
      stop();
    } else {
      speak(card.word, card.id, 'de-DE');
    }
  };

  return (
    <div className="gcw-container">
      <div className="gcw-content">

        <header className="gcw-header">
          <button className="gcw-back-btn" onClick={onHome}>&#8592;</button>
          <div className="gcw-header-text">
            <h1 className="gcw-title">
              {language === 'es' ? 'Palabras Compuestas' : 'Compound Words'}
            </h1>
            <p className="gcw-subtitle">
              {language === 'es' ? 'Alemán — lo curioso del idioma' : 'German — the curious side of the language'}
            </p>
          </div>
        </header>

        <div className="gcw-progress">
          {index + 1} / {total}
        </div>

        <div
          className={`gcw-card-scene`}
          onClick={() => setFlipped(f => !f)}
        >
          <div className={`gcw-card ${flipped ? 'gcw-card--flipped' : ''}`}>

            {/* FRONT */}
            <div className="gcw-card-face gcw-card-front">
              <div className="gcw-emoji">{card.emoji}</div>
              <div className="gcw-word">{card.word}</div>
              <div className="gcw-ipa">{card.ipa}</div>
              {supported && (
                <button
                  className={`gcw-speak-btn ${speakingId === card.id ? 'gcw-speak-btn--active' : ''}`}
                  onClick={handleSpeak}
                  aria-label="Pronounce"
                >
                  {speakingId === card.id ? '⏹' : '🔊'}
                </button>
              )}
              <div className="gcw-parts">
                {card.parts.map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <span className="gcw-plus">+</span>}
                    <div className="gcw-part">
                      <span className="gcw-part-de">{part.de}</span>
                      <span className="gcw-part-en">{part.en}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className="gcw-tap-hint">
                {language === 'es' ? 'Toca para ver la explicación' : 'Tap to see the explanation'}
              </div>
            </div>

            {/* BACK */}
            <div className="gcw-card-face gcw-card-back">
              <div className="gcw-literal">
                <span className="gcw-literal-label">
                  {language === 'es' ? 'Lit.:' : 'Lit.:'}
                </span>{' '}
                {language === 'es' ? card.literal.es : card.literal.en}
              </div>
              <p className="gcw-explanation">
                {language === 'es' ? card.es : card.en}
              </p>
              <div className="gcw-example">
                <div className="gcw-example-de">{card.example.de}</div>
                <div className="gcw-example-en">{card.example.en}</div>
              </div>
            </div>

          </div>
        </div>

        <div className="gcw-nav">
          <button className="gcw-nav-btn" onClick={() => go(-1)}>&#8592; Prev</button>
          <button className="gcw-nav-btn" onClick={() => go(1)}>Next &#8594;</button>
        </div>

        <div className="gcw-dots">
          {COMPOUND_WORDS.map((_, i) => (
            <button
              key={i}
              className={`gcw-dot ${i === index ? 'gcw-dot--active' : ''}`}
              onClick={() => { setFlipped(false); setTimeout(() => setIndex(i), 150); }}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default GermanCompoundWords;
