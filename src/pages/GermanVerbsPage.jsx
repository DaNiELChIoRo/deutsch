import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { GERMAN_VERBS, PRONOUNS } from '../utils/germanVerbsData';
import { IRREGULAR_VERBS } from '../utils/germanIrregularVerbs';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import '../styles/GermanVerbsPage.css';

const UMLAUT_KEYS = ['ä', 'ö', 'ü', 'ß'];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_STATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

// ─── Tables Mode ─────────────────────────────────────────────────────────────

const VerbCard = ({ verb, language }) => {
  const typeLabel = verb.type === 'regular'
    ? (language === 'es' ? 'Regular' : 'Regular')
    : (language === 'es' ? 'Irregular' : 'Irregular');

  return (
    <div className="gv-card">
      <div className="gv-card-header">
        <div className="gv-card-verb-group">
          <div className="gv-card-infinitive">{verb.infinitive}</div>
          <div className="gv-card-meaning">{verb.en}</div>
          <div className="gv-card-meaning-es">{verb.es}</div>
          {verb.stemChange && (
            <span className="gv-stem-change">{verb.stemChange}</span>
          )}
        </div>
        <span className={`gv-type-badge ${verb.type}`}>{typeLabel}</span>
      </div>

      <div>
        {PRONOUNS.map(pronoun => {
          const { form, highlight } = verb.forms[pronoun];
          return (
            <div key={pronoun} className="gv-table-row">
              <span className="gv-pronoun">{pronoun}</span>
              <span className={`gv-form ${highlight ? 'highlight' : ''}`}>{form}</span>
            </div>
          );
        })}
      </div>

      {verb.note && (
        <div className="gv-note">
          ℹ️ {verb.note[language] ?? verb.note.en}
        </div>
      )}
    </div>
  );
};

const TablesMode = ({ language }) => {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'regular')   return GERMAN_VERBS.filter(v => v.type === 'regular');
    if (filter === 'irregular') return GERMAN_VERBS.filter(v => v.type === 'irregular');
    return GERMAN_VERBS;
  }, [filter]);

  const labels = {
    all:       { en: 'All',       es: 'Todos' },
    regular:   { en: 'Regular',   es: 'Regulares' },
    irregular: { en: 'Irregular', es: 'Irregulares' },
  };

  return (
    <>
      <div className="gv-filters">
        {['all', 'regular', 'irregular'].map(f => (
          <button
            key={f}
            className={`gv-filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {labels[f][language] ?? labels[f].en}
          </button>
        ))}
      </div>
      <div className="gv-grid">
        {filtered.map(verb => (
          <VerbCard key={verb.id} verb={verb} language={language} />
        ))}
      </div>
    </>
  );
};

// ─── Quiz Mode ────────────────────────────────────────────────────────────────

function buildQuestions() {
  // One question per verb × pronoun combination
  return shuffleArray(
    GERMAN_VERBS.flatMap(verb =>
      PRONOUNS.map(pronoun => ({ verb, pronoun, answer: verb.forms[pronoun].form }))
    )
  );
}

function buildOptions(question, allQuestions) {
  const correct = question.answer;

  // Priority 1: other forms of the SAME verb (different pronoun) — same stem, hard to guess
  const sameVerbPool = shuffleArray([...new Set(
    allQuestions
      .filter(q => q.verb.id === question.verb.id && q.answer !== correct)
      .map(q => q.answer)
  )]);

  // Priority 2: same pronoun from OTHER verbs — fallback to fill remaining slots
  const fallbackPool = shuffleArray([...new Set(
    allQuestions
      .filter(q => q.pronoun === question.pronoun && q.verb.id !== question.verb.id && q.answer !== correct)
      .map(q => q.answer)
      .filter(f => !sameVerbPool.includes(f))
  )]);

  const distractors = [...sameVerbPool, ...fallbackPool].slice(0, 3);
  const options = shuffleArray([correct, ...distractors]);
  return { options, correctIndex: options.indexOf(correct) };
}

const QuizMode = ({ language }) => {
  const [questions] = useState(buildQuestions);
  const [index, setIndex]     = useState(0);
  const [status, setStatus]   = useState(QUIZ_STATUS.IDLE);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [wrongIds, setWrongIds] = useState([]);

  const q = questions[index];
  const total = questions.length;

  const { options, correctIndex } = useMemo(
    () => q ? buildOptions(q, questions) : { options: [], correctIndex: 0 },
    [q, questions]
  );

  const handleSelect = useCallback((i) => {
    if (status !== QUIZ_STATUS.IDLE) return;
    setSelected(i);
    setStatus(QUIZ_STATUS.ANSWERED);
    if (i === correctIndex) {
      setCorrect(c => c + 1);
    } else {
      setWrongIds(prev => [...prev, index]);
    }
  }, [status, correctIndex, index]);

  const handleNext = useCallback(() => {
    if (index + 1 >= total) {
      setStatus(QUIZ_STATUS.DONE);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setStatus(QUIZ_STATUS.IDLE);
    }
  }, [index, total]);

  // Auto-advance on correct
  useEffect(() => {
    if (status === QUIZ_STATUS.ANSWERED && selected === correctIndex) {
      const t = setTimeout(handleNext, 900);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIndex, handleNext]);

  const restartAll = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0);
    setWrongIds([]);
  }, []);

  const pct   = Math.round((correct / total) * 100);
  const isLast = index + 1 >= total;

  if (status === QUIZ_STATUS.DONE) {
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="gv-quiz-done">
        <div className="gv-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="gv-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>
        <p className="gv-quiz-done-score">{correct} / {total} — {pct}%</p>
        <p className="gv-quiz-done-sub">
          {language === 'es'
            ? `${wrongIds.length} respuestas incorrectas`
            : `${wrongIds.length} incorrect answers`}
        </p>
        <div className="gv-quiz-done-actions">
          <button className="gv-quiz-done-btn primary" onClick={restartAll}>
            {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="gv-quiz">
      <div className="gv-quiz-progress-row">
        <span className="gv-quiz-progress-text">{index + 1} / {total}</span>
        <span className="gv-quiz-score-text">✓ {correct}</span>
      </div>
      <div className="gv-quiz-progress-track">
        <div className="gv-quiz-progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="gv-quiz-card">
        <div className="gv-quiz-pronoun">{q.pronoun}</div>
        <div className="gv-quiz-infinitive">{q.verb.infinitive}</div>
        <div className="gv-quiz-hint">
          {q.verb.en}
          {q.verb.stemChange && (
            <span className="gv-quiz-stem-badge" style={{ marginLeft: 8 }}>
              {q.verb.stemChange}
            </span>
          )}
        </div>
        <p className="gv-quiz-prompt">
          {language === 'es' ? '¿Cuál es la forma correcta?' : 'Which form is correct?'}
        </p>
      </div>

      <div className="gv-quiz-options">
        {options.map((opt, i) => {
          let cls = 'gv-quiz-option';
          if (status === QUIZ_STATUS.ANSWERED) {
            if (i === correctIndex) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={status === QUIZ_STATUS.ANSWERED}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {status === QUIZ_STATUS.ANSWERED && selected !== correctIndex && (
        <button className="gv-quiz-next-btn" onClick={handleNext}>
          {isLast
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Drill Mode ───────────────────────────────────────────────────────────────

const DrillMode = ({ language }) => {
  const total = IRREGULAR_VERBS.length;
  const [verbIdx, setVerbIdx] = useState(0);
  const [typed, setTyped]   = useState(Array(6).fill(''));
  const [done, setDone]     = useState(Array(6).fill(false));
  const [focusedRow, setFocusedRow] = useState(null);
  const [celebrated, setCelebrated] = useState(false);
  const inputRefs = useRef([]);
  const { speak } = useTextToSpeech();

  const verb = IRREGULAR_VERBS[verbIdx];
  const correctCount = done.filter(Boolean).length;

  // Spell the verb aloud when all conjugations are completed
  useEffect(() => {
    if (!celebrated) return;
    const timeout = setTimeout(() => speak(verb.infinitive, `drill-${verb.id}`, 'de-DE'), 300);
    return () => clearTimeout(timeout);
  }, [celebrated, verb, speak]);

  const changeVerb = (newIdx) => {
    setVerbIdx(newIdx);
    setTyped(Array(6).fill(''));
    setDone(Array(6).fill(false));
    setCelebrated(false);
    setFocusedRow(null);
    setTimeout(() => inputRefs.current[0]?.focus(), 60);
  };

  const handleChange = (rowIdx, val) => {
    if (done[rowIdx]) return;
    const conj = verb.conjugations[rowIdx];
    if (val.length > conj.target.length) return;
    const newTyped = [...typed];
    const newDone  = [...done];
    newTyped[rowIdx] = val;
    if (val === conj.target) {
      newDone[rowIdx] = true;
      const nextRow = newDone.findIndex((d, i) => i > rowIdx && !d);
      if (nextRow !== -1) {
        setTimeout(() => { inputRefs.current[nextRow]?.focus(); setFocusedRow(nextRow); }, 90);
      } else if (newDone.every(Boolean)) {
        setCelebrated(true);
      }
    }
    setTyped(newTyped);
    setDone(newDone);
  };

  const handleKeyDown = (rowIdx, e) => {
    if (done[rowIdx]) return;
    const conj = verb.conjugations[rowIdx];
    const cur  = typed[rowIdx];
    const hasGhost = conj.target.startsWith(cur) && cur.length < conj.target.length;
    if ((e.key === 'Tab' || e.key === 'ArrowRight' || e.key === 'Enter') && hasGhost) {
      e.preventDefault();
      handleChange(rowIdx, conj.target);
    }
  };

  const insertUmlaut = (char) => {
    if (focusedRow === null || done[focusedRow]) return;
    const cur = typed[focusedRow];
    handleChange(focusedRow, cur + char);
    setTimeout(() => inputRefs.current[focusedRow]?.focus(), 0);
  };

  const reset = () => {
    setTyped(Array(6).fill(''));
    setDone(Array(6).fill(false));
    setCelebrated(false);
    setTimeout(() => inputRefs.current[0]?.focus(), 60);
  };

  const prev = () => changeVerb((verbIdx - 1 + total) % total);
  const next = () => changeVerb((verbIdx + 1) % total);

  return (
    <div className="gv-drill">
      {/* Verb counter strip */}
      <div className="gv-drill-strip">
        <button className="gv-drill-strip-btn" onClick={prev}>&#8592;</button>
        <span className="gv-drill-counter">{verbIdx + 1} / {total}</span>
        <button className="gv-drill-strip-btn" onClick={next}>&#8594;</button>
      </div>

      {/* Verb info */}
      <div className="gv-drill-verb-card">
        <div className="gv-drill-verb-top">
          <span className="gv-drill-infinitive">{verb.infinitive}</span>
          <span className="gv-drill-badge">{language === 'es' ? verb.pattern.es : verb.pattern.en}</span>
        </div>
        <div className="gv-drill-meaning">{language === 'es' ? verb.es : verb.en}</div>
        <div className="gv-drill-note">{language === 'es' ? verb.note.es : verb.note.en}</div>
      </div>

      {/* Conjugation table */}
      <div className="gv-drill-table">
        {verb.conjugations.map((conj, rowIdx) => {
          const cur    = typed[rowIdx];
          const isDone = done[rowIdx];
          const isOk   = conj.target.startsWith(cur);
          const ghost  = !isDone && isOk && cur.length < conj.target.length
            ? conj.target.slice(cur.length) : '';
          const isWrong = cur.length > 0 && !isOk;

          return (
            <div
              key={conj.pronoun}
              className={`gv-drill-row${isDone ? ' done' : ''}${conj.irregular ? ' irregular' : ''}`}
            >
              <span className="gv-drill-pronoun">{conj.pronoun}</span>

              <span className="gv-drill-field">
                {conj.prefix && <span className="gv-drill-static">{conj.prefix}</span>}

                <span
                  className={`gv-drill-zone${isWrong ? ' wrong' : ''}${isDone ? ' correct' : ''}`}
                  style={{ minWidth: `${conj.target.length}ch` }}
                >
                  <input
                    ref={el => { inputRefs.current[rowIdx] = el; }}
                    value={cur}
                    onChange={e => handleChange(rowIdx, e.target.value)}
                    onKeyDown={e => handleKeyDown(rowIdx, e)}
                    onFocus={() => setFocusedRow(rowIdx)}
                    onBlur={() => setFocusedRow(f => f === rowIdx ? null : f)}
                    disabled={isDone}
                    className="gv-drill-input"
                    style={{ width: cur.length > 0 ? `${cur.length}ch` : '2px' }}
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="none"
                  />
                  {!isDone && ghost && (
                    <span className="gv-drill-ghost" aria-hidden="true">{ghost}</span>
                  )}
                </span>

                {conj.suffix && <span className="gv-drill-static">{conj.suffix}</span>}
              </span>

              <span className="gv-drill-row-end">
                {isDone && <span className="gv-drill-check">✓</span>}
                {conj.irregular && !isDone && <span className="gv-drill-dot" />}
              </span>
            </div>
          );
        })}
      </div>

      {/* Umlaut helper */}
      <div className="gv-drill-umlauts">
        <span className="gv-drill-umlaut-label">
          {language === 'es' ? 'Insertar:' : 'Insert:'}
        </span>
        {UMLAUT_KEYS.map(k => (
          <button
            key={k}
            className="gv-drill-umlaut-btn"
            onMouseDown={e => e.preventDefault()}
            onClick={() => insertUmlaut(k)}
          >{k}</button>
        ))}
      </div>

      {/* Progress */}
      <div className="gv-drill-progress-wrap">
        <div className="gv-drill-progress-track">
          <div className="gv-drill-progress-fill" style={{ width: `${(correctCount / 6) * 100}%` }} />
        </div>
        <span className="gv-drill-progress-label">{correctCount} / 6</span>
      </div>

      {celebrated && (
        <div className="gv-drill-celebrate">
          🎉 {language === 'es' ? '¡Perfecto!' : 'Perfect!'} 🔊 <em>{verb.infinitive}</em>
        </div>
      )}

      {/* Nav */}
      <div className="gv-drill-nav">
        <button className="gv-drill-nav-btn" onClick={prev}>
          &#8592; {language === 'es' ? 'Anterior' : 'Prev'}
        </button>
        <button className="gv-drill-reset-btn" onClick={reset}>
          {language === 'es' ? 'Reiniciar' : 'Reset'}
        </button>
        <button className="gv-drill-nav-btn" onClick={next}>
          {language === 'es' ? 'Siguiente' : 'Next'} &#8594;
        </button>
      </div>
    </div>
  );
};

// ─── Root Page ────────────────────────────────────────────────────────────────

const GermanVerbsPage = ({ onHome }) => {
  const { language } = useI18n();
  const [tab, setTab] = useState('tables');

  return (
    <div className="gv-container">
      <div className="gv-content">

        <div className="gv-header">
          <button className="gv-back-btn" onClick={onHome} aria-label="Back">&#8592;</button>
          <div className="gv-header-text">
            <h1 className="gv-title">Verben &amp; Konjugation</h1>
            <div className="gv-subtitle">
              {language === 'es' ? 'Presente de indicativo' : 'Present tense conjugation'}
            </div>
          </div>
        </div>

        <div className="gv-tabs">
          <button
            className={`gv-tab ${tab === 'tables' ? 'active' : ''}`}
            onClick={() => setTab('tables')}
          >
            📋 {language === 'es' ? 'Tablas' : 'Tables'}
          </button>
          <button
            className={`gv-tab ${tab === 'quiz' ? 'active' : ''}`}
            onClick={() => setTab('quiz')}
          >
            🧠 Quiz
          </button>
          <button
            className={`gv-tab ${tab === 'drill' ? 'active' : ''}`}
            onClick={() => setTab('drill')}
          >
            ✏️ {language === 'es' ? 'Conjugar' : 'Drill'}
          </button>
        </div>

        {tab === 'tables' ? <TablesMode language={language} />
          : tab === 'quiz' ? <QuizMode key={tab} language={language} />
          : <DrillMode key={tab} language={language} />
        }

      </div>
    </div>
  );
};

export default GermanVerbsPage;
