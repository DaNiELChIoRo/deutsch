import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { GERMAN_NOUNS, GENDERS, GENDER_COLOR } from '../utils/germanNouns';
import '../styles/GermanNounsPage.css';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QSTATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

// ─── Cards Mode (browse) ─────────────────────────────────────────────────────

const CardsMode = ({ language }) => {
  const [flipped, setFlipped] = useState({});
  const { supported, speakingId, speak } = useTextToSpeech();

  const toggle = (id) => setFlipped(prev => ({ ...prev, [id]: !prev[id] }));

  const handleSpeak = (e, item) => {
    e.stopPropagation();
    speak(`${item.gender} ${item.noun}, die ${item.plural}`, `noun-${item.id}`, 'de-DE');
  };

  return (
    <>
      <p className="gn-subtitle">
        {language === 'es'
          ? 'Toca una tarjeta para ver el género y el plural'
          : 'Tap a card to reveal gender and plural'}
      </p>
      <div className="gn-grid">
        {GERMAN_NOUNS.map(item => (
          <div
            key={item.id}
            className={`gn-card-wrapper ${flipped[item.id] ? 'flipped' : ''}`}
            onClick={() => toggle(item.id)}
            role="button"
            aria-pressed={!!flipped[item.id]}
          >
            <div className="gn-card-inner">
              <div className="gn-card-front">
                <span className="gn-card-emoji">{item.emoji}</span>
                <span className="gn-card-word">{item.noun}</span>
                <span className="gn-card-sub">
                  {language === 'es' ? item.es : item.en}
                </span>
              </div>
              <div className={`gn-card-back gn-back-${GENDER_COLOR[item.gender]}`}>
                <span className="gn-card-article">{item.gender}</span>
                <span className="gn-card-target">{item.noun}</span>
                <span className="gn-card-plural">
                  <span className="gn-plural-label">
                    {language === 'es' ? 'plural: ' : 'plural: '}
                  </span>
                  die {item.plural}
                </span>
                {supported && (
                  <button
                    className="gn-tts-btn"
                    onClick={(e) => handleSpeak(e, item)}
                    aria-label={`Pronounce ${item.gender} ${item.noun}`}
                  >
                    {speakingId === `noun-${item.id}` ? '🔊' : '🔈'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// ─── Gender Quiz Mode ────────────────────────────────────────────────────────

const GenderQuizMode = ({ language }) => {
  const es = language === 'es';
  const { supported, speakingId, speak } = useTextToSpeech();

  const [items]                = useState(() => shuffleArray(GERMAN_NOUNS));
  const [index, setIndex]      = useState(0);
  const [status, setStatus]    = useState(QSTATUS.IDLE);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect]  = useState(0);

  const item = items[index];
  const total = items.length;
  const correctIdx = GENDERS.indexOf(item.gender);

  const handleSelect = useCallback((i) => {
    if (status !== QSTATUS.IDLE) return;
    setSelected(i);
    setStatus(QSTATUS.ANSWERED);
    if (i === correctIdx) setCorrect(c => c + 1);
  }, [status, correctIdx]);

  const handleNext = useCallback(() => {
    if (index + 1 >= total) {
      setStatus(QSTATUS.DONE);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setStatus(QSTATUS.IDLE);
    }
  }, [index, total]);

  useEffect(() => {
    if (status === QSTATUS.ANSWERED && selected === correctIdx) {
      const t = setTimeout(handleNext, 900);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIdx, handleNext]);

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setStatus(QSTATUS.IDLE);
    setCorrect(0);
  };

  if (status === QSTATUS.DONE) {
    const pct = Math.round((correct / total) * 100);
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="gn-done">
        <div className="gn-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="gn-done-title">
          {es ? '¡Quiz de género terminado!' : 'Gender quiz complete!'}
        </h2>
        <p className="gn-done-score">{correct} / {total} — {pct}%</p>
        <button className="gn-done-btn" onClick={restart}>
          {es ? '🔀 Empezar de nuevo' : '🔀 Start over'}
        </button>
      </div>
    );
  }

  return (
    <div className="gn-quiz">
      <div className="gn-progress-row">
        <span className="gn-counter">{index + 1} / {total}</span>
        <div className="gn-progress-bar">
          <div className="gn-progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
        <span className="gn-score">✓ {correct}</span>
      </div>

      <div className="gn-quiz-card">
        <div className="gn-quiz-emoji">{item.emoji}</div>
        <p className="gn-quiz-prompt">
          {es ? '¿Cuál es el artículo correcto?' : "What's the correct article?"}
        </p>
        <div className="gn-quiz-word">
          <span className="gn-blank">___</span> {item.noun}
        </div>
        <div className="gn-quiz-translation">
          {es ? item.es : item.en}
        </div>
      </div>

      <div className="gn-gender-options">
        {GENDERS.map((g, i) => {
          let cls = `gn-gender-opt gn-gender-${GENDER_COLOR[g]}`;
          if (status === QSTATUS.ANSWERED) {
            if (i === correctIdx) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button
              key={g}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={status === QSTATUS.ANSWERED}
            >
              {g}
            </button>
          );
        })}
      </div>

      {status === QSTATUS.ANSWERED && (
        <div className="gn-feedback-row">
          {supported && (
            <button
              className="gn-tts-btn"
              onClick={() => speak(`${item.gender} ${item.noun}`, `gq-${item.id}`, 'de-DE')}
              aria-label={`Pronounce ${item.gender} ${item.noun}`}
            >
              {speakingId === `gq-${item.id}` ? '🔊' : '🔈'}
            </button>
          )}
          {selected !== correctIdx && (
            <button className="gn-next-btn" onClick={handleNext}>
              {index + 1 >= total
                ? (es ? 'Ver resultados →' : 'See results →')
                : (es ? 'Siguiente →' : 'Next →')}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Plural Quiz Mode ────────────────────────────────────────────────────────

function buildPluralOptions(item, allItems) {
  const correct = item.plural;
  const pool = shuffleArray(
    allItems.filter(x => x.id !== item.id && x.plural && x.plural !== correct)
      .map(x => x.plural)
  ).slice(0, 3);
  const opts = shuffleArray([correct, ...pool]);
  return { options: opts, correctIdx: opts.indexOf(correct) };
}

const PluralQuizMode = ({ language }) => {
  const es = language === 'es';
  const { supported, speakingId, speak } = useTextToSpeech();

  const [items]                = useState(() => shuffleArray(GERMAN_NOUNS.filter(n => n.plural)));
  const [index, setIndex]      = useState(0);
  const [status, setStatus]    = useState(QSTATUS.IDLE);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect]  = useState(0);

  const item = items[index];
  const total = items.length;

  const { options, correctIdx } = useMemo(
    () => item ? buildPluralOptions(item, GERMAN_NOUNS) : { options: [], correctIdx: 0 },
    [item]
  );

  const handleSelect = useCallback((i) => {
    if (status !== QSTATUS.IDLE) return;
    setSelected(i);
    setStatus(QSTATUS.ANSWERED);
    if (i === correctIdx) setCorrect(c => c + 1);
  }, [status, correctIdx]);

  const handleNext = useCallback(() => {
    if (index + 1 >= total) {
      setStatus(QSTATUS.DONE);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setStatus(QSTATUS.IDLE);
    }
  }, [index, total]);

  useEffect(() => {
    if (status === QSTATUS.ANSWERED && selected === correctIdx) {
      const t = setTimeout(handleNext, 1100);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIdx, handleNext]);

  const restart = () => {
    setIndex(0);
    setSelected(null);
    setStatus(QSTATUS.IDLE);
    setCorrect(0);
  };

  if (status === QSTATUS.DONE) {
    const pct = Math.round((correct / total) * 100);
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="gn-done">
        <div className="gn-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="gn-done-title">
          {es ? '¡Quiz de plurales terminado!' : 'Plural quiz complete!'}
        </h2>
        <p className="gn-done-score">{correct} / {total} — {pct}%</p>
        <button className="gn-done-btn" onClick={restart}>
          {es ? '🔀 Empezar de nuevo' : '🔀 Start over'}
        </button>
      </div>
    );
  }

  return (
    <div className="gn-quiz">
      <div className="gn-progress-row">
        <span className="gn-counter">{index + 1} / {total}</span>
        <div className="gn-progress-bar">
          <div className="gn-progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
        <span className="gn-score">✓ {correct}</span>
      </div>

      <div className="gn-quiz-card">
        <div className="gn-quiz-emoji">{item.emoji}</div>
        <p className="gn-quiz-prompt">
          {es ? '¿Cuál es el plural?' : "What's the plural?"}
        </p>
        <div className="gn-quiz-word">
          <span className={`gn-article gn-article-${GENDER_COLOR[item.gender]}`}>{item.gender}</span> {item.noun}
        </div>
        <div className="gn-quiz-translation">
          {es ? item.es : item.en}
        </div>
        <div className="gn-plural-hint">die&nbsp;___</div>
      </div>

      <div className="gn-plural-options">
        {options.map((opt, i) => {
          let cls = 'gn-plural-opt';
          if (status === QSTATUS.ANSWERED) {
            if (i === correctIdx) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={status === QSTATUS.ANSWERED}
            >
              die {opt}
            </button>
          );
        })}
      </div>

      {status === QSTATUS.ANSWERED && (
        <div className="gn-feedback-row">
          {supported && (
            <button
              className="gn-tts-btn"
              onClick={() => speak(`die ${item.plural}`, `pq-${item.id}`, 'de-DE')}
              aria-label={`Pronounce die ${item.plural}`}
            >
              {speakingId === `pq-${item.id}` ? '🔊' : '🔈'}
            </button>
          )}
          {selected !== correctIdx && (
            <button className="gn-next-btn" onClick={handleNext}>
              {index + 1 >= total
                ? (es ? 'Ver resultados →' : 'See results →')
                : (es ? 'Siguiente →' : 'Next →')}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Root Page ───────────────────────────────────────────────────────────────

const GermanNounsPage = ({ onHome }) => {
  const { language } = useI18n();
  const [mode, setMode] = useState('cards');
  const es = language === 'es';

  return (
    <div className="gn-container">
      <div className="gn-content">

        <div className="gn-header">
          <button className="gn-back-btn" onClick={onHome} aria-label="Back">&#8592;</button>
          <div className="gn-header-text">
            <h1 className="gn-title">Nomen</h1>
            <div className="gn-subtitle-header">
              {es ? 'Sustantivos: género y plural' : 'Nouns: gender and plural'}
            </div>
          </div>
        </div>

        <div className="gn-tabs">
          <button
            className={`gn-tab ${mode === 'cards' ? 'active' : ''}`}
            onClick={() => setMode('cards')}
          >
            🃏 {es ? 'Tarjetas' : 'Cards'}
          </button>
          <button
            className={`gn-tab ${mode === 'gender' ? 'active' : ''}`}
            onClick={() => setMode('gender')}
          >
            🚻 {es ? 'Género' : 'Gender'}
          </button>
          <button
            className={`gn-tab ${mode === 'plural' ? 'active' : ''}`}
            onClick={() => setMode('plural')}
          >
            🔢 {es ? 'Plural' : 'Plural'}
          </button>
        </div>

        {mode === 'cards'  ? <CardsMode language={language} />
          : mode === 'gender' ? <GenderQuizMode key={mode} language={language} />
          : <PluralQuizMode key={mode} language={language} />}

      </div>
    </div>
  );
};

export default GermanNounsPage;
