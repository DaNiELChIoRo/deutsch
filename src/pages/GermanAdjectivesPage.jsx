import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import {
  CASES, GENDERS,
  DECLENSION_TYPES, DECLINED_ARTICLES,
  SAMPLE_NOUNS, DRILL_ADJECTIVES,
  SENTENCE_EXERCISES,
} from '../utils/germanAdjectivesData';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import '../styles/GermanAdjectivesPage.css';

const UMLAUT_KEYS = ['ä', 'ö', 'ü', 'ß'];
const ALL_ENDINGS  = ['e', 'en', 'em', 'er', 'es'];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ending → color class
const ENDING_COLOR = { e: 'green', en: 'blue', em: 'purple', er: 'orange', es: 'amber' };

// ─── Lecture Mode ────────────────────────────────────────────────────────────

const LectureMode = ({ language }) => {
  const es = language === 'es';

  const weakTriggers  = ['der/die/das', 'dieser', 'welcher', 'jeder', 'solcher', 'aller', 'mancher'];
  const mixedTriggers = ['ein/eine', 'kein/keine', 'mein', 'dein', 'sein', 'ihr', 'unser', 'euer'];
  const strongTriggers = es
    ? ['sin artículo', 'después de viel/wenig', 'listas y poesía']
    : ['no article', 'after viel/wenig', 'lists & poetry'];

  return (
    <div className="ga-lec">
      <div className="ga-lec-intro">
        <p className="ga-lec-intro-text">
          {es
            ? 'Los adjetivos alemanes cambian su terminación según el género (M/F/N/Pl), el caso (Nom/Acc/Dat/Gen) y el artículo que los precede. Existen tres tipos de declinación:'
            : 'German adjectives change their ending based on the gender (M/F/N/Pl), the case (Nom/Acc/Dat/Gen), and the article that precedes them. There are three declension types:'}
        </p>
      </div>

      <div className="ga-lec-cards">
        {/* ── Weak ── */}
        <div className="ga-lec-card ga-lec-card--weak">
          <div className="ga-lec-card-header">
            <span className="ga-lec-card-badge">1</span>
            <div>
              <div className="ga-lec-card-title">{es ? 'Débil (Schwach)' : 'Weak (Schwach)'}</div>
              <div className="ga-lec-card-subtitle">{es ? 'Después de artículo definido' : 'After a definite article'}</div>
            </div>
          </div>
          <div className="ga-lec-triggers">
            <span className="ga-lec-trigger-label">{es ? 'Palabras clave:' : 'Trigger words:'}</span>
            <div className="ga-lec-trigger-chips">
              {weakTriggers.map(w => <span key={w} className="ga-lec-chip ga-lec-chip--blue">{w}</span>)}
            </div>
          </div>
          <div className="ga-lec-rule">
            <span className="ga-lec-rule-label">⚡</span>
            <span>{es ? 'Nominativo → -e (todos los géneros + plural). Todo lo demás → -en.' : 'Nominative → -e (all genders + plural). Everything else → -en.'}</span>
          </div>
          <div className="ga-lec-examples">
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">der alt<strong>e</strong> Mann</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'el hombre viejo (M.Nom)' : 'the old man (M.Nom)'}</span>
            </div>
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">des alt<strong>en</strong> Mannes</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'del hombre viejo (M.Gen)' : 'of the old man (M.Gen)'}</span>
            </div>
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">mit der alt<strong>en</strong> Frau</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'con la mujer vieja (F.Dat)' : 'with the old woman (F.Dat)'}</span>
            </div>
          </div>
          <div className="ga-lec-trick">
            💡 {es ? '"e primero, -en en todo lo demás"' : '"e first, -en for everything else"'}
          </div>
        </div>

        {/* ── Mixed ── */}
        <div className="ga-lec-card ga-lec-card--mixed">
          <div className="ga-lec-card-header">
            <span className="ga-lec-card-badge">2</span>
            <div>
              <div className="ga-lec-card-title">{es ? 'Mixta (Gemischt)' : 'Mixed (Gemischt)'}</div>
              <div className="ga-lec-card-subtitle">{es ? 'Después de artículo indefinido o posesivo' : 'After an indefinite article or possessive'}</div>
            </div>
          </div>
          <div className="ga-lec-triggers">
            <span className="ga-lec-trigger-label">{es ? 'Palabras clave:' : 'Trigger words:'}</span>
            <div className="ga-lec-trigger-chips">
              {mixedTriggers.map(w => <span key={w} className="ga-lec-chip ga-lec-chip--orange">{w}</span>)}
            </div>
          </div>
          <div className="ga-lec-rule">
            <span className="ga-lec-rule-label">⚡</span>
            <span>
              {es
                ? 'Donde ein- no tiene desinencia (M.Nom, N.Nom, N.Ac) → terminación fuerte. El resto → como débil (-e / -en).'
                : 'Where ein- has no ending (M.Nom, N.Nom, N.Acc) → strong ending. Elsewhere → like weak (-e / -en).'}
            </span>
          </div>
          <div className="ga-lec-examples">
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">ein alt<strong>er</strong> Mann</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'un hombre viejo (M.Nom — fuerte)' : 'an old man (M.Nom — strong)'}</span>
            </div>
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">ein alt<strong>es</strong> Kind</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'un niño viejo (N.Nom/Ac — fuerte)' : 'an old child (N.Nom/Acc — strong)'}</span>
            </div>
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">eines alt<strong>en</strong> Mannes</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'de un hombre viejo (M.Gen — débil)' : 'of an old man (M.Gen — weak)'}</span>
            </div>
          </div>
          <div className="ga-lec-trick">
            💡 {es ? '"Donde ein- está vacío, el adjetivo llena el hueco"' : '"Where ein- is empty, the adjective fills the gap"'}
          </div>
        </div>

        {/* ── Strong ── */}
        <div className="ga-lec-card ga-lec-card--strong">
          <div className="ga-lec-card-header">
            <span className="ga-lec-card-badge">3</span>
            <div>
              <div className="ga-lec-card-title">{es ? 'Fuerte (Stark)' : 'Strong (Stark)'}</div>
              <div className="ga-lec-card-subtitle">{es ? 'Sin artículo delante del adjetivo' : 'No article before the adjective'}</div>
            </div>
          </div>
          <div className="ga-lec-triggers">
            <span className="ga-lec-trigger-label">{es ? 'Contextos:' : 'Contexts:'}</span>
            <div className="ga-lec-trigger-chips">
              {strongTriggers.map(w => <span key={w} className="ga-lec-chip ga-lec-chip--green">{w}</span>)}
            </div>
          </div>
          <div className="ga-lec-rule">
            <span className="ga-lec-rule-label">⚡</span>
            <span>
              {es
                ? 'El adjetivo lleva toda la señal de caso/género (como der/die/das), excepto Gen M/N: usa -en en lugar de -es.'
                : 'Adjective carries the full case/gender signal (like der/die/das), except Gen M/N: uses -en instead of -es.'}
            </span>
          </div>
          <div className="ga-lec-examples">
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">alt<strong>er</strong> Wein</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'vino viejo (M.Nom)' : 'old wine (M.Nom)'}</span>
            </div>
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">alt<strong>es</strong> Bier</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'cerveza vieja (N.Nom)' : 'old beer (N.Nom)'}</span>
            </div>
            <div className="ga-lec-example">
              <span className="ga-lec-ex-de">alt<strong>e</strong> Musik</span>
              <span className="ga-lec-ex-sep">→</span>
              <span className="ga-lec-ex-en">{es ? 'música vieja (F.Nom)' : 'old music (F.Nom)'}</span>
            </div>
          </div>
          <div className="ga-lec-trick">
            💡 {es ? '"El adjetivo se convierte en el artículo — actúa como der/die/das"' : '"The adjective becomes the article — it acts like der/die/das"'}
          </div>
        </div>
      </div>

      {/* Key insight */}
      <div className="ga-lec-insight">
        <div className="ga-lec-insight-title">🔑 {es ? 'La idea clave' : 'The key insight'}</div>
        <p className="ga-lec-insight-text">
          {es
            ? 'En cada frase nominal, alguien debe mostrar la señal de caso y género. Si el artículo la muestra (débil), el adjetivo puede relajarse con -e / -en. Si no hay artículo (fuerte), el adjetivo carga con todo el peso. La declinación mixta alterna según si ein- ya lleva desinencia o no.'
            : 'In each noun phrase, someone must show the case and gender signal. If the article shows it (weak), the adjective relaxes with -e / -en. If there\'s no article (strong), the adjective carries the full load. Mixed alternates depending on whether ein- already has an ending.'}
        </p>
        <div className="ga-lec-signal-row">
          <div className="ga-lec-signal-item ga-lec-signal--blue">
            <span className="ga-lec-signal-type">{es ? 'Débil' : 'Weak'}</span>
            <span className="ga-lec-signal-desc">{es ? 'Artículo lleva la señal → adj. relajado (-e / -en)' : 'Article carries signal → adj. relaxes (-e / -en)'}</span>
          </div>
          <div className="ga-lec-signal-item ga-lec-signal--orange">
            <span className="ga-lec-signal-type">{es ? 'Mixta' : 'Mixed'}</span>
            <span className="ga-lec-signal-desc">{es ? 'A veces sí, a veces no — depende de ein-' : 'Sometimes yes, sometimes no — depends on ein-'}</span>
          </div>
          <div className="ga-lec-signal-item ga-lec-signal--green">
            <span className="ga-lec-signal-type">{es ? 'Fuerte' : 'Strong'}</span>
            <span className="ga-lec-signal-desc">{es ? 'Sin artículo → adj. lleva toda la señal' : 'No article → adj. carries the full signal'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Tables Mode ─────────────────────────────────────────────────────────────

const TablesMode = ({ language }) => {
  const [typeIdx, setTypeIdx] = useState(0);
  const type = DECLENSION_TYPES[typeIdx];

  return (
    <>
      <div className="ga-type-tabs">
        {DECLENSION_TYPES.map((t, i) => (
          <button
            key={t.id}
            className={`ga-type-tab ${typeIdx === i ? 'active' : ''}`}
            onClick={() => setTypeIdx(i)}
          >
            {language === 'es' ? t.label.es : t.label.en}
          </button>
        ))}
      </div>

      <div className="ga-sublabel">
        {language === 'es' ? type.sublabel.es : type.sublabel.en}
      </div>

      <div className="ga-table-scroll">
        <table className="ga-ref-table">
          <thead>
            <tr>
              <th className="ga-th-empty"></th>
              <th className="ga-th-gender">M</th>
              <th className="ga-th-gender">F</th>
              <th className="ga-th-gender">N</th>
              <th className="ga-th-gender">Pl</th>
            </tr>
          </thead>
          <tbody>
            {CASES.map(caseKey => (
              <tr key={caseKey}>
                <td className="ga-td-case">{caseKey}</td>
                {GENDERS.map(g => {
                  const ending  = type.endings[caseKey][g];
                  const article = DECLINED_ARTICLES[type.id][caseKey][g];
                  return (
                    <td key={g} className={`ga-ref-cell ga-color-${ENDING_COLOR[ending]}`}>
                      {article && <span className="ga-ref-article">{article} </span>}
                      <span className="ga-ref-stem">gut</span>
                      <strong className="ga-ref-ending">-{ending}</strong>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ga-legend">
        {Object.entries(ENDING_COLOR).map(([ending, color]) => (
          <span key={ending} className={`ga-legend-chip ga-color-${color}`}>-{ending}</span>
        ))}
      </div>
    </>
  );
};

// ─── Quiz Mode ────────────────────────────────────────────────────────────────

function buildQuizQuestions() {
  const questions = [];
  DECLENSION_TYPES.forEach(type => {
    CASES.forEach((caseKey, ci) => {
      GENDERS.forEach((g, gi) => {
        const answer  = type.endings[caseKey][g];
        const article = DECLINED_ARTICLES[type.id][caseKey][g];
        const noun    = SAMPLE_NOUNS[g][ci % SAMPLE_NOUNS[g].length];
        questions.push({ type, caseKey, gender: g, answer, article, noun });
      });
    });
  });
  return shuffleArray(questions);
}

const QSTATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

const QuizMode = ({ language }) => {
  const [questions]               = useState(buildQuizQuestions);
  const [index, setIndex]         = useState(0);
  const [status, setStatus]       = useState(QSTATUS.IDLE);
  const [selected, setSelected]   = useState(null);
  const [correct, setCorrect]     = useState(0);

  const q     = questions[index];
  const total = questions.length;

  const { options, correctIdx } = useMemo(() => {
    if (!q) return { options: [], correctIdx: 0 };
    const distractors = shuffleArray(ALL_ENDINGS.filter(e => e !== q.answer)).slice(0, 3);
    const opts = shuffleArray([q.answer, ...distractors]);
    return { options: opts, correctIdx: opts.indexOf(q.answer) };
  }, [q]);

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

  const restart = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setStatus(QSTATUS.IDLE);
    setCorrect(0);
  }, []);

  if (status === QSTATUS.DONE) {
    const pct   = Math.round((correct / total) * 100);
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="ga-quiz-done">
        <div className="ga-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="ga-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>
        <p className="ga-quiz-done-score">{correct} / {total} — {pct}%</p>
        <button className="ga-quiz-done-btn" onClick={restart}>
          {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
        </button>
      </div>
    );
  }

  return (
    <div className="ga-quiz">
      <div className="ga-quiz-progress-row">
        <span className="ga-quiz-counter">{index + 1} / {total}</span>
        <span className="ga-quiz-score-text">✓ {correct}</span>
      </div>
      <div className="ga-quiz-track">
        <div className="ga-quiz-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="ga-quiz-card">
        <div className="ga-quiz-meta">
          <span className="ga-quiz-type-tag">
            {language === 'es' ? q.type.label.es : q.type.label.en}
          </span>
          <span className="ga-quiz-case-tag">{q.caseKey}</span>
          <span className="ga-quiz-gender-tag">
            {q.gender === 'pl' ? 'Plural' : q.gender === 'm' ? 'Maskulinum' : q.gender === 'f' ? 'Femininum' : 'Neutrum'}
          </span>
        </div>

        <div className="ga-quiz-sentence">
          {q.article && <span className="ga-quiz-article">{q.article}</span>}
          <span className="ga-quiz-stem"> gut</span>
          <span className="ga-quiz-blank">___</span>
          <span className="ga-quiz-noun"> {q.noun}</span>
        </div>

        <p className="ga-quiz-prompt">
          {language === 'es' ? '¿Cuál es la terminación?' : 'Which ending is correct?'}
        </p>
      </div>

      <div className="ga-quiz-options">
        {options.map((opt, i) => {
          let cls = 'ga-quiz-opt';
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
              -{opt}
            </button>
          );
        })}
      </div>

      {status === QSTATUS.ANSWERED && selected !== correctIdx && (
        <button className="ga-quiz-next-btn" onClick={handleNext}>
          {index + 1 >= total
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Drill Mode ───────────────────────────────────────────────────────────────

const ROWS = 4;
const COLS = 4;
const flatIdx = (ri, gi) => ri * COLS + gi;

const DrillMode = ({ language }) => {
  const [typeIdx, setTypeIdx]   = useState(0);
  const [adjIdx,  setAdjIdx]    = useState(0);
  const [cells,   setCells]     = useState(() => Array(ROWS).fill(null).map(() => Array(COLS).fill('')));
  const [done,    setDone]      = useState(() => Array(ROWS).fill(null).map(() => Array(COLS).fill(false)));
  const [celebrated, setCelebrated] = useState(false);
  const [focusedCell, setFocusedCell] = useState(null);
  const inputRefs = useRef([]);
  const { speak } = useTextToSpeech();

  const type = DECLENSION_TYPES[typeIdx];
  const adj  = DRILL_ADJECTIVES[adjIdx];
  const doneCount = done.flat().filter(Boolean).length;

  useEffect(() => {
    if (!celebrated) return;
    const t = setTimeout(() => speak(adj.stem, `adj-${adjIdx}`, 'de-DE'), 300);
    return () => clearTimeout(t);
  }, [celebrated, adj, adjIdx, speak]);

  const reset = useCallback(() => {
    setCells(Array(ROWS).fill(null).map(() => Array(COLS).fill('')));
    setDone(Array(ROWS).fill(null).map(() => Array(COLS).fill(false)));
    setCelebrated(false);
    setFocusedCell(null);
    setTimeout(() => inputRefs.current[0]?.focus(), 60);
  }, []);

  const changeType = (i) => { setTypeIdx(i); reset(); };
  const changeAdj  = (dir) => {
    setAdjIdx(prev => (prev + dir + DRILL_ADJECTIVES.length) % DRILL_ADJECTIVES.length);
    reset();
  };

  const handleChange = (ri, gi, val) => {
    if (done[ri][gi]) return;
    const target = type.endings[CASES[ri]][GENDERS[gi]];
    if (val.length > target.length) return;

    const newCells = cells.map(r => [...r]);
    newCells[ri][gi] = val;
    setCells(newCells);

    if (val === target) {
      const newDone = done.map(r => [...r]);
      newDone[ri][gi] = true;
      setDone(newDone);

      if (newDone.flat().every(Boolean)) {
        setCelebrated(true);
        return;
      }

      const flat     = newDone.flat();
      const curFlat  = flatIdx(ri, gi);
      const nextFlat = flat.findIndex((d, i) => i > curFlat && !d);
      const next     = nextFlat !== -1 ? nextFlat : flat.findIndex(d => !d);
      if (next !== -1) {
        setTimeout(() => {
          inputRefs.current[next]?.focus();
          setFocusedCell([Math.floor(next / COLS), next % COLS]);
        }, 90);
      }
    }
  };

  const handleKeyDown = (ri, gi, e) => {
    if (done[ri][gi]) return;
    const target = type.endings[CASES[ri]][GENDERS[gi]];
    const cur    = cells[ri][gi];
    const hasGhost = target.startsWith(cur) && cur.length < target.length;
    if ((e.key === 'Tab' || e.key === 'ArrowRight' || e.key === 'Enter') && hasGhost) {
      e.preventDefault();
      handleChange(ri, gi, target);
    }
  };

  const insertUmlaut = (char) => {
    if (!focusedCell) return;
    const [ri, gi] = focusedCell;
    if (done[ri][gi]) return;
    handleChange(ri, gi, cells[ri][gi] + char);
    setTimeout(() => inputRefs.current[flatIdx(ri, gi)]?.focus(), 0);
  };

  return (
    <div className="ga-drill">
      {/* Adjective selector */}
      <div className="ga-drill-strip">
        <button className="ga-drill-strip-btn" onClick={() => changeAdj(-1)}>&#8592;</button>
        <div className="ga-drill-adj-info">
          <span className="ga-drill-adj-stem">{adj.stem}</span>
          <span className="ga-drill-adj-meaning">
            {language === 'es' ? adj.es : adj.en}
          </span>
        </div>
        <button className="ga-drill-strip-btn" onClick={() => changeAdj(1)}>&#8594;</button>
      </div>

      {/* Declension type selector */}
      <div className="ga-drill-type-tabs">
        {DECLENSION_TYPES.map((t, i) => (
          <button
            key={t.id}
            className={`ga-drill-type-tab ${typeIdx === i ? 'active' : ''}`}
            onClick={() => changeType(i)}
          >
            {language === 'es' ? t.label.es : t.label.en}
          </button>
        ))}
      </div>

      {/* Conjugation table */}
      <div className="ga-drill-table-scroll">
        <table className="ga-drill-table">
          <thead>
            <tr>
              <th className="ga-drill-th-empty"></th>
              <th className="ga-drill-th">M</th>
              <th className="ga-drill-th">F</th>
              <th className="ga-drill-th">N</th>
              <th className="ga-drill-th">Pl</th>
            </tr>
          </thead>
          <tbody>
            {CASES.map((caseKey, ri) => (
              <tr key={caseKey}>
                <td className="ga-drill-case-label">{caseKey.slice(0, 3)}</td>
                {GENDERS.map((g, gi) => {
                  const target  = type.endings[caseKey][g];
                  const article = DECLINED_ARTICLES[type.id][caseKey][g];
                  const val     = cells[ri][gi];
                  const isDone  = done[ri][gi];
                  const isOk    = target.startsWith(val);
                  const ghost   = !isDone && isOk && val.length < target.length
                    ? target.slice(val.length) : '';
                  const isWrong = val.length > 0 && !isOk;

                  return (
                    <td
                      key={g}
                      className={`ga-drill-cell${isDone ? ' done' : ''}${isWrong ? ' wrong-row' : ''}`}
                    >
                      <div className="ga-drill-cell-inner">
                        {article && <span className="ga-drill-cell-article">{article} </span>}
                        <span className="ga-drill-cell-stem">{adj.stem}</span>
                        <span className={`ga-drill-zone${isDone ? ' correct' : ''}${isWrong ? ' err' : ''}`}>
                          <input
                            ref={el => { inputRefs.current[flatIdx(ri, gi)] = el; }}
                            value={val}
                            onChange={e => handleChange(ri, gi, e.target.value)}
                            onKeyDown={e => handleKeyDown(ri, gi, e)}
                            onFocus={() => setFocusedCell([ri, gi])}
                            onBlur={() => setFocusedCell(fc =>
                              fc?.[0] === ri && fc?.[1] === gi ? null : fc
                            )}
                            disabled={isDone}
                            className="ga-drill-input"
                            style={{ width: val.length > 0 ? `${val.length}ch` : '2px' }}
                            spellCheck={false}
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="none"
                          />
                          {!isDone && ghost && (
                            <span className="ga-drill-ghost" aria-hidden="true">{ghost}</span>
                          )}
                        </span>
                        {isDone && <span className="ga-drill-check">✓</span>}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Umlaut helper */}
      <div className="ga-drill-umlauts">
        <span className="ga-drill-umlaut-label">
          {language === 'es' ? 'Insertar:' : 'Insert:'}
        </span>
        {UMLAUT_KEYS.map(k => (
          <button
            key={k}
            className="ga-drill-umlaut-btn"
            onMouseDown={e => e.preventDefault()}
            onClick={() => insertUmlaut(k)}
          >{k}</button>
        ))}
      </div>

      {/* Progress */}
      <div className="ga-drill-progress-wrap">
        <div className="ga-drill-progress-track">
          <div className="ga-drill-progress-fill" style={{ width: `${(doneCount / 16) * 100}%` }} />
        </div>
        <span className="ga-drill-progress-label">{doneCount} / 16</span>
      </div>

      {celebrated && (
        <div className="ga-drill-celebrate">
          🎉 {language === 'es' ? '¡Perfecto!' : 'Perfect!'} 🔊 <em>{adj.stem}</em>
        </div>
      )}

      <button className="ga-drill-reset-btn" onClick={reset}>
        {language === 'es' ? 'Reiniciar' : 'Reset'}
      </button>
    </div>
  );
};

// ─── Sentences Mode ──────────────────────────────────────────────────────────

const typeLabel = (id) => DECLENSION_TYPES.find(t => t.id === id) || DECLENSION_TYPES[0];
const genderLabel = (g) =>
  g === 'pl' ? 'Plural' : g === 'm' ? 'Maskulinum' : g === 'f' ? 'Femininum' : 'Neutrum';

const SentencesMode = ({ language }) => {
  const es = language === 'es';
  const [items]                  = useState(() => shuffleArray(SENTENCE_EXERCISES));
  const [index, setIndex]        = useState(0);
  const [status, setStatus]      = useState(QSTATUS.IDLE);
  const [selected, setSelected]  = useState(null);
  const [correct, setCorrect]    = useState(0);
  const [showHint, setShowHint]  = useState(false);

  const q     = items[index];
  const total = items.length;

  const { options, correctIdx } = useMemo(() => {
    if (!q) return { options: [], correctIdx: 0 };
    const distractors = shuffleArray(ALL_ENDINGS.filter(e => e !== q.answer)).slice(0, 3);
    const opts = shuffleArray([q.answer, ...distractors]);
    return { options: opts, correctIdx: opts.indexOf(q.answer) };
  }, [q]);

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
      setShowHint(false);
    }
  }, [index, total]);

  useEffect(() => {
    if (status === QSTATUS.ANSWERED && selected === correctIdx) {
      const t = setTimeout(handleNext, 1100);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIdx, handleNext]);

  const restart = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setStatus(QSTATUS.IDLE);
    setCorrect(0);
    setShowHint(false);
  }, []);

  if (status === QSTATUS.DONE) {
    const pct   = Math.round((correct / total) * 100);
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="ga-quiz-done">
        <div className="ga-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="ga-quiz-done-title">
          {es ? '¡Frases terminadas!' : 'Sentences complete!'}
        </h2>
        <p className="ga-quiz-done-score">{correct} / {total} — {pct}%</p>
        <button className="ga-quiz-done-btn" onClick={restart}>
          {es ? '🔀 Empezar de nuevo' : '🔀 Start over'}
        </button>
      </div>
    );
  }

  const typeInfo = typeLabel(q.type);

  return (
    <div className="ga-quiz ga-sent">
      <div className="ga-quiz-progress-row">
        <span className="ga-quiz-counter">{index + 1} / {total}</span>
        <span className="ga-quiz-score-text">✓ {correct}</span>
      </div>
      <div className="ga-quiz-track">
        <div className="ga-quiz-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="ga-quiz-card ga-sent-card">
        <div className="ga-quiz-meta">
          <span className="ga-quiz-type-tag">
            {es ? typeInfo.label.es : typeInfo.label.en}
          </span>
          <span className="ga-quiz-case-tag">{q.caseKey}</span>
          <span className="ga-quiz-gender-tag">{genderLabel(q.gender)}</span>
        </div>

        <p className="ga-sent-sentence">
          <span className="ga-sent-before">{q.before}</span>
          <span className="ga-sent-blank">
            {status === QSTATUS.ANSWERED ? (
              <span className="ga-sent-reveal">{q.answer}</span>
            ) : '___'}
          </span>
          <span className="ga-sent-after">{q.after}</span>
        </p>

        <button
          className="ga-sent-hint-btn"
          onClick={() => setShowHint(s => !s)}
          type="button"
        >
          {showHint
            ? (es ? '🙈 Ocultar traducción' : '🙈 Hide translation')
            : (es ? '💡 Mostrar traducción' : '💡 Show translation')}
        </button>

        {showHint && (
          <p className="ga-sent-translation">
            {es ? q.es : q.en}
          </p>
        )}
      </div>

      <div className="ga-quiz-options">
        {options.map((opt, i) => {
          let cls = 'ga-quiz-opt';
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
              -{opt}
            </button>
          );
        })}
      </div>

      {status === QSTATUS.ANSWERED && selected !== correctIdx && (
        <button className="ga-quiz-next-btn" onClick={handleNext}>
          {index + 1 >= total
            ? (es ? 'Ver resultados →' : 'See results →')
            : (es ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Root Page ────────────────────────────────────────────────────────────────

const GermanAdjectivesPage = ({ onHome }) => {
  const { language } = useI18n();
  const [tab, setTab] = useState('lesson');

  return (
    <div className="ga-container">
      <div className="ga-content">

        <div className="ga-header">
          <button className="ga-back-btn" onClick={onHome} aria-label="Back">&#8592;</button>
          <div className="ga-header-text">
            <h1 className="ga-title">Adjektivdeklination</h1>
            <div className="ga-subtitle">
              {language === 'es' ? 'Declinación de adjetivos' : 'Adjective declension'}
            </div>
          </div>
        </div>

        <div className="ga-tabs">
          <button
            className={`ga-tab ${tab === 'lesson' ? 'active' : ''}`}
            onClick={() => setTab('lesson')}
          >
            📖 {language === 'es' ? 'Lección' : 'Lesson'}
          </button>
          <button
            className={`ga-tab ${tab === 'tables' ? 'active' : ''}`}
            onClick={() => setTab('tables')}
          >
            📋 {language === 'es' ? 'Tablas' : 'Tables'}
          </button>
          <button
            className={`ga-tab ${tab === 'quiz' ? 'active' : ''}`}
            onClick={() => setTab('quiz')}
          >
            🧠 Quiz
          </button>
          <button
            className={`ga-tab ${tab === 'sentences' ? 'active' : ''}`}
            onClick={() => setTab('sentences')}
          >
            📝 {language === 'es' ? 'Frases' : 'Sentences'}
          </button>
          <button
            className={`ga-tab ${tab === 'drill' ? 'active' : ''}`}
            onClick={() => setTab('drill')}
          >
            ✏️ {language === 'es' ? 'Escribir' : 'Drill'}
          </button>
        </div>

        {tab === 'lesson' ? <LectureMode language={language} />
          : tab === 'tables' ? <TablesMode language={language} />
          : tab === 'quiz' ? <QuizMode key={tab} language={language} />
          : tab === 'sentences' ? <SentencesMode key={tab} language={language} />
          : <DrillMode key={tab} language={language} />}

      </div>
    </div>
  );
};

export default GermanAdjectivesPage;
