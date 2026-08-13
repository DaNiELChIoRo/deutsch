import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import {
  PERSONAL_CASES, PERSONAL_PERSONS,
  POSSESSIVE_CASES, POSSESSIVE_GENDERS, POSSESSIVE_PERSONS,
  REFLEXIVE_CASES, REFLEXIVE_PERSONS,
  buildPronounQuiz,
} from '../utils/germanPronounsData';
import '../styles/GermanPronounsPage.css';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CASE_COLOR   = { Nominativ: 'blue', Akkusativ: 'orange', Dativ: 'purple', Genitiv: 'green' };
const GENDER_COLOR = { M: 'blue', F: 'amber', N: 'green', Pl: 'purple' };

// ─── Lecture Mode ─────────────────────────────────────────────────────────────

const LectureMode = ({ language }) => {
  const es = language === 'es';

  return (
    <div className="gp-lec">
      <div className="gp-lec-intro">
        <p className="gp-lec-intro-text">
          {es
            ? 'Los pronombres alemanes cambian de forma según su función gramatical en la oración. Hay tres tipos principales, cada uno con sus propias reglas de declinación.'
            : 'German pronouns change form depending on their grammatical role in the sentence. There are three main types, each with its own declension rules.'}
        </p>
      </div>

      <div className="gp-lec-cards">
        {/* ── Personal ── */}
        <div className="gp-lec-card gp-lec-card--personal">
          <div className="gp-lec-card-header">
            <span className="gp-lec-card-badge">1</span>
            <div>
              <div className="gp-lec-card-title">{es ? 'Personales (Personalpronomen)' : 'Personal (Personalpronomen)'}</div>
              <div className="gp-lec-card-subtitle">{es ? 'Nom / Akk / Dat — sujeto y objeto' : 'Nom / Akk / Dat — subject and object'}</div>
            </div>
          </div>
          <div className="gp-lec-rule">
            <span>⚡</span>
            <span>
              {es
                ? 'El pronombre cambia según su rol: Nominativ = sujeto, Akkusativ = objeto directo, Dativ = objeto indirecto o tras preposiciones dativas.'
                : 'The pronoun changes by role: Nominativ = subject, Akkusativ = direct object, Dativ = indirect object or after dative prepositions.'}
            </span>
          </div>
          <div className="gp-lec-examples">
            <div className="gp-lec-example">
              <span className="gp-lec-ex-de"><strong>Ich</strong> lerne Deutsch.</span>
              <span className="gp-lec-ex-sep">→</span>
              <span className="gp-lec-ex-en">{es ? 'Nom: sujeto' : 'Nom: subject'}</span>
            </div>
            <div className="gp-lec-example">
              <span className="gp-lec-ex-de">Er liebt <strong>mich</strong>.</span>
              <span className="gp-lec-ex-sep">→</span>
              <span className="gp-lec-ex-en">{es ? 'Akk: objeto directo' : 'Akk: direct object'}</span>
            </div>
            <div className="gp-lec-example">
              <span className="gp-lec-ex-de">Sie gibt <strong>mir</strong> ein Buch.</span>
              <span className="gp-lec-ex-sep">→</span>
              <span className="gp-lec-ex-en">{es ? 'Dat: objeto indirecto' : 'Dat: indirect object'}</span>
            </div>
            <div className="gp-lec-example">
              <span className="gp-lec-ex-de">Er / <strong>ihn</strong> / <strong>ihm</strong></span>
              <span className="gp-lec-ex-sep">→</span>
              <span className="gp-lec-ex-en">{es ? 'Nom / Akk / Dat de "er"' : 'Nom / Akk / Dat of "er"'}</span>
            </div>
          </div>
          <div className="gp-lec-trick">
            💡 {es
              ? '"Wer? → Nom · Wen? → Akk · Wem? → Dat"'
              : '"Who? → Nom · Whom? (obj.) → Akk · To whom? → Dat"'}
          </div>
        </div>

        {/* ── Possessive ── */}
        <div className="gp-lec-card gp-lec-card--possessive">
          <div className="gp-lec-card-header">
            <span className="gp-lec-card-badge">2</span>
            <div>
              <div className="gp-lec-card-title">{es ? 'Posesivos (Possessivpronomen)' : 'Possessive (Possessivpronomen)'}</div>
              <div className="gp-lec-card-subtitle">{es ? 'Declinan como ein/kein — 4 casos × 4 géneros' : 'Decline like ein/kein — 4 cases × 4 genders'}</div>
            </div>
          </div>
          <div className="gp-lec-rule">
            <span>⚡</span>
            <span>
              {es
                ? 'El posesivo = raíz (mein-, dein-, sein-, ihr-, unser-, euer-, ihr-) + terminación de declinación mixta. La raíz no cambia, solo la terminación.'
                : 'Possessive = stem (mein-, dein-, sein-, ihr-, unser-, euer-, ihr-) + mixed declension ending. The stem stays fixed; only the ending changes.'}
            </span>
          </div>
          <div className="gp-lec-ending-grid">
            <div className="gp-lec-eg-header">
              <span></span>
              {['M', 'F', 'N', 'Pl'].map(g => <span key={g} className={`gp-lec-eg-cell gp-color-${GENDER_COLOR[g]}`}>{g}</span>)}
            </div>
            {POSSESSIVE_CASES.map(c => (
              <div key={c} className="gp-lec-eg-row">
                <span className={`gp-lec-eg-case gp-color-${CASE_COLOR[c]}`}>{c.slice(0, 3)}</span>
                {POSSESSIVE_GENDERS.map(g => {
                  const ending = POSSESSIVE_PERSONS[0].forms[c][g].replace('mein', '');
                  return (
                    <span key={g} className="gp-lec-eg-cell">
                      <span className="gp-lec-eg-stem">mein</span>
                      <strong className="gp-lec-eg-end">{ending || '—'}</strong>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="gp-lec-trick">
            💡 {es
              ? '"mein/dein/sein funciona igual que kein — mismas terminaciones"'
              : '"mein/dein/sein work exactly like kein — same endings"'}
          </div>
        </div>

        {/* ── Reflexive ── */}
        <div className="gp-lec-card gp-lec-card--reflexive">
          <div className="gp-lec-card-header">
            <span className="gp-lec-card-badge">3</span>
            <div>
              <div className="gp-lec-card-title">{es ? 'Reflexivos (Reflexivpronomen)' : 'Reflexive (Reflexivpronomen)'}</div>
              <div className="gp-lec-card-subtitle">{es ? 'Con verbos reflexivos — Akk / Dat' : 'With reflexive verbs — Akk / Dat'}</div>
            </div>
          </div>
          <div className="gp-lec-rule">
            <span>⚡</span>
            <span>
              {es
                ? 'Akkusativ = acción recae en uno mismo. Dativ = con partes del cuerpo o cuando ya hay otro objeto acusativo. 3.ª persona y formal Sie siempre usan "sich".'
                : 'Akkusativ = action falls on oneself. Dativ = with body parts or when there is already an accusative object. 3rd person and formal Sie always use "sich".'}
            </span>
          </div>
          <div className="gp-lec-examples">
            <div className="gp-lec-example">
              <span className="gp-lec-ex-de">Ich wasche <strong>mich</strong>.</span>
              <span className="gp-lec-ex-sep">→</span>
              <span className="gp-lec-ex-en">{es ? 'Akk: me lavo (a mí mismo)' : 'Akk: I wash myself'}</span>
            </div>
            <div className="gp-lec-example">
              <span className="gp-lec-ex-de">Ich wasche <strong>mir</strong> die Hände.</span>
              <span className="gp-lec-ex-sep">→</span>
              <span className="gp-lec-ex-en">{es ? 'Dat: me lavo las manos' : 'Dat: I wash my hands'}</span>
            </div>
            <div className="gp-lec-example">
              <span className="gp-lec-ex-de">Er freut <strong>sich</strong>.</span>
              <span className="gp-lec-ex-sep">→</span>
              <span className="gp-lec-ex-en">{es ? '3.ª persona → siempre "sich"' : '3rd person → always "sich"'}</span>
            </div>
          </div>
          <div className="gp-lec-trick">
            💡 {es
              ? '"ich/du cambian (mich/mir, dich/dir); todo lo demás → sich"'
              : '"ich/du change (mich/mir, dich/dir); everything else → sich"'}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Tables Mode ─────────────────────────────────────────────────────────────

const PersonalTable = ({ language }) => (
  <div className="gp-table-scroll">
    <table className="gp-ref-table">
      <thead>
        <tr>
          <th className="gp-th-person">{language === 'es' ? 'Persona' : 'Person'}</th>
          {PERSONAL_CASES.map(c => (
            <th key={c} className={`gp-th-case gp-color-${CASE_COLOR[c]}`}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {PERSONAL_PERSONS.map(p => (
          <tr key={p.key}>
            <td className="gp-td-label">{p.label.de}</td>
            {p.forms.map((form, i) => (
              <td key={i} className={`gp-ref-cell gp-color-${CASE_COLOR[PERSONAL_CASES[i]]}`}>
                {form}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PossessiveTable = ({ language }) => {
  const [personIdx, setPersonIdx] = useState(0);
  const p = POSSESSIVE_PERSONS[personIdx];

  return (
    <>
      <div className="gp-person-tabs">
        {POSSESSIVE_PERSONS.map((person, i) => (
          <button
            key={person.key}
            className={`gp-person-tab ${i === personIdx ? 'active' : ''}`}
            onClick={() => setPersonIdx(i)}
          >
            {person.label.de}
          </button>
        ))}
      </div>
      <div className="gp-table-scroll">
        <table className="gp-ref-table">
          <thead>
            <tr>
              <th className="gp-th-person">{language === 'es' ? 'Caso' : 'Case'}</th>
              {POSSESSIVE_GENDERS.map(g => (
                <th key={g} className={`gp-th-case gp-color-${GENDER_COLOR[g]}`}>{g}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {POSSESSIVE_CASES.map(c => (
              <tr key={c}>
                <td className="gp-td-label">{c.slice(0, 3)}.</td>
                {POSSESSIVE_GENDERS.map(g => (
                  <td key={g} className={`gp-ref-cell gp-color-${GENDER_COLOR[g]}`}>
                    {p.forms[c][g]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const ReflexiveTable = ({ language }) => (
  <div className="gp-table-scroll">
    <table className="gp-ref-table">
      <thead>
        <tr>
          <th className="gp-th-person">{language === 'es' ? 'Persona' : 'Person'}</th>
          {REFLEXIVE_CASES.map(c => (
            <th key={c} className={`gp-th-case gp-color-${CASE_COLOR[c]}`}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {REFLEXIVE_PERSONS.map(p => (
          <tr key={p.key}>
            <td className="gp-td-label">{p.label}</td>
            {p.forms.map((form, i) => (
              <td key={i} className={`gp-ref-cell gp-color-${CASE_COLOR[REFLEXIVE_CASES[i]]}`}>
                {form}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TABLE_SUBTABS = [
  { key: 'personal',   en: 'Personal',   es: 'Personales' },
  { key: 'possessive', en: 'Possessive', es: 'Posesivos'  },
  { key: 'reflexive',  en: 'Reflexive',  es: 'Reflexivos' },
];

const TABLE_NOTES = {
  personal:   { en: 'Nominative · Accusative · Dative',             es: 'Nominativ · Akkusativ · Dativ'            },
  possessive: { en: 'All 4 cases × M / F / N / Plural',             es: '4 casos × M / F / N / Plural'             },
  reflexive:  { en: 'Accusative · Dative',                          es: 'Akkusativ · Dativ'                        },
};

const TablesMode = ({ language }) => {
  const [sub, setSub] = useState('personal');
  const lang = language === 'es' ? 'es' : 'en';
  return (
    <>
      <div className="gp-subtabs">
        {TABLE_SUBTABS.map(t => (
          <button
            key={t.key}
            className={`gp-subtab ${sub === t.key ? 'active' : ''}`}
            onClick={() => setSub(t.key)}
          >
            {language === 'es' ? t.es : t.en}
          </button>
        ))}
      </div>
      <div className="gp-table-note">{TABLE_NOTES[sub][lang]}</div>
      {sub === 'personal'   && <PersonalTable   language={language} />}
      {sub === 'possessive' && <PossessiveTable language={language} />}
      {sub === 'reflexive'  && <ReflexiveTable  language={language} />}
    </>
  );
};

// ─── Quiz Mode ────────────────────────────────────────────────────────────────

const QSTATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

const QuizMode = ({ language }) => {
  const [questions]             = useState(() => buildPronounQuiz());
  const [index, setIndex]       = useState(0);
  const [status, setStatus]     = useState(QSTATUS.IDLE);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect]   = useState(0);

  const q     = questions[index];
  const total = questions.length;

  const { options, correctIdx } = useMemo(() => {
    if (!q) return { options: [], correctIdx: 0 };
    const opts = shuffleArray([q.answer, ...shuffleArray(q.distractors).slice(0, 3)]);
    return { options: opts, correctIdx: opts.indexOf(q.answer) };
  }, [q]);

  const handleSelect = useCallback((i) => {
    if (status !== QSTATUS.IDLE) return;
    setSelected(i);
    setStatus(QSTATUS.ANSWERED);
    if (i === correctIdx) setCorrect(c => c + 1);
  }, [status, correctIdx]);

  const handleNext = useCallback(() => {
    if (index + 1 >= total) setStatus(QSTATUS.DONE);
    else { setIndex(i => i + 1); setSelected(null); setStatus(QSTATUS.IDLE); }
  }, [index, total]);

  useEffect(() => {
    if (status === QSTATUS.ANSWERED && selected === correctIdx) {
      const t = setTimeout(handleNext, 900);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIdx, handleNext]);

  const restart = useCallback(() => {
    setIndex(0); setSelected(null); setStatus(QSTATUS.IDLE); setCorrect(0);
  }, []);

  if (status === QSTATUS.DONE) {
    const pct   = Math.round((correct / total) * 100);
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="gp-quiz-done">
        <div className="gp-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="gp-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>
        <p className="gp-quiz-done-score">{correct} / {total} — {pct}%</p>
        <button className="gp-quiz-done-btn" onClick={restart}>
          {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
        </button>
      </div>
    );
  }

  const catLabel = q.category === 'reflexive'
    ? (language === 'es' ? 'Reflexivo' : 'Reflexive')
    : q.category === 'possessive'
      ? (language === 'es' ? 'Posesivo' : 'Possessive')
      : (language === 'es' ? 'Personal' : 'Personal');

  return (
    <div className="gp-quiz">
      <div className="gp-quiz-progress-row">
        <span className="gp-quiz-counter">{index + 1} / {total}</span>
        <span className="gp-quiz-score-text">✓ {correct}</span>
      </div>
      <div className="gp-quiz-track">
        <div className="gp-quiz-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="gp-quiz-card">
        <div className="gp-quiz-meta">
          <span className="gp-quiz-cat-tag">{catLabel}</span>
          <span className="gp-quiz-case-tag">{q.caseLabel}</span>
          {q.genderLabel && <span className="gp-quiz-gender-tag">{q.genderLabel}</span>}
        </div>
        <div className="gp-quiz-person">{q.personLabel}</div>
        <p className="gp-quiz-prompt">
          {language === 'es' ? '¿Cuál es la forma correcta?' : 'Which form is correct?'}
        </p>
      </div>

      <div className="gp-quiz-options">
        {options.map((opt, i) => {
          let cls = 'gp-quiz-opt';
          if (status === QSTATUS.ANSWERED) {
            if (i === correctIdx) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={status === QSTATUS.ANSWERED}>
              {opt}
            </button>
          );
        })}
      </div>

      {status === QSTATUS.ANSWERED && selected !== correctIdx && (
        <button className="gp-quiz-next-btn" onClick={handleNext}>
          {index + 1 >= total
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Root Page ────────────────────────────────────────────────────────────────

const GermanPronounsPage = ({ onHome }) => {
  const { language } = useI18n();
  const [tab, setTab] = useState('lesson');

  return (
    <div className="gp-container">
      <div className="gp-content">

        <div className="gp-header">
          <button className="gp-back-btn" onClick={onHome} aria-label="Back">&#8592;</button>
          <div className="gp-header-text">
            <h1 className="gp-title">Pronomen</h1>
            <div className="gp-subtitle">
              {language === 'es' ? 'Pronombres alemanes' : 'German Pronouns'}
            </div>
          </div>
        </div>

        <div className="gp-tabs">
          <button className={`gp-tab ${tab === 'lesson' ? 'active' : ''}`} onClick={() => setTab('lesson')}>
            📖 {language === 'es' ? 'Lección' : 'Lesson'}
          </button>
          <button className={`gp-tab ${tab === 'tables' ? 'active' : ''}`} onClick={() => setTab('tables')}>
            📋 {language === 'es' ? 'Tablas' : 'Tables'}
          </button>
          <button className={`gp-tab ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')}>
            🧠 Quiz
          </button>
        </div>

        {tab === 'lesson'
          ? <LectureMode language={language} />
          : tab === 'tables'
            ? <TablesMode language={language} />
            : <QuizMode key={tab} language={language} />}

      </div>
    </div>
  );
};

export default GermanPronounsPage;
