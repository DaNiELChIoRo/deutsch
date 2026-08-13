import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useData } from '../contexts/DataContext';
import { useI18n } from '../i18n/I18nContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import '../styles/FlashCards.css';

const CARDS_PER_PAGE = 6;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function parseScriptWord(questionText) {
  const scriptMatch = questionText.match(/\(([^)]*[Ͱ-Ͽἀ-῿ְ-ת][^)]*)\)/);
  const translitMatch = questionText.match(/'([a-zA-Z]+)'/);
  return {
    script: scriptMatch ? scriptMatch[1] : '',
    transliteration: translitMatch ? translitMatch[1] : ''
  };
}

// Build shuffled options for a card, pulling distractors from other cards when needed
function buildQuizOptions(card, allCards) {
  const correct = card.options?.[card.correctIndex] ?? '';

  let pool;
  if (card.options && card.options.length >= 4) {
    pool = [...card.options];
  } else {
    const distractors = allCards
      .filter(c => c.id !== card.id)
      .map(c => c.options?.[c.correctIndex])
      .filter(Boolean);
    pool = [correct, ...shuffleArray(distractors).slice(0, 3)];
  }

  const shuffled = shuffleArray(pool);
  return { options: shuffled, correctIndex: shuffled.indexOf(correct) };
}

// ─── Quiz Mode ────────────────────────────────────────────────────────────────

const QUIZ_STATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

const QuizMode = ({ allCards, knownIds, setKnownIds, language, quizId, t, onStudyMode }) => {
  const { supported: ttsSupported, speakingId, speak } = useTextToSpeech();

  const [quizCards, setQuizCards]     = useState(() => shuffleArray(allCards));
  const [index, setIndex]             = useState(0);
  const [status, setStatus]           = useState(QUIZ_STATUS.IDLE);
  const [selected, setSelected]       = useState(null);   // chosen option index
  const [sessionCorrect, setCorrect]  = useState(0);
  const [wrongIds, setWrongIds]       = useState([]);      // ids answered wrong this session
  const [onlyWrong, setOnlyWrong]     = useState(false);

  const card = quizCards[index];

  const { options, correctIndex } = useMemo(
    () => card ? buildQuizOptions(card, allCards) : { options: [], correctIndex: 0 },
    [card, allCards]
  );

  const { script, transliteration } = useMemo(
    () => card ? parseScriptWord(card.question || '') : { script: '', transliteration: '' },
    [card]
  );

  const displayWord = card?.word || script;
  const displaySub  = card?.ipa  || transliteration;
  const speakId     = `quiz-${quizId}-${card?.id}`;
  const isSpeaking  = speakingId === speakId;

  const handleSelect = useCallback((i) => {
    if (status !== QUIZ_STATUS.IDLE) return;
    setSelected(i);
    setStatus(QUIZ_STATUS.ANSWERED);

    if (i === correctIndex) {
      setCorrect(prev => prev + 1);
      setKnownIds(prev => prev.includes(card.id) ? prev : [...prev, card.id]);
    } else {
      setWrongIds(prev => prev.includes(card.id) ? prev : [...prev, card.id]);
    }
  }, [status, correctIndex, card, setKnownIds]);

  const handleNext = useCallback(() => {
    if (index + 1 >= quizCards.length) {
      setStatus(QUIZ_STATUS.DONE);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setStatus(QUIZ_STATUS.IDLE);
    }
  }, [index, quizCards.length]);

  // Auto-advance after correct answer
  useEffect(() => {
    if (status === QUIZ_STATUS.ANSWERED && selected === correctIndex) {
      const timer = setTimeout(handleNext, 900);
      return () => clearTimeout(timer);
    }
  }, [status, selected, correctIndex, handleNext]);

  const restartWrong = useCallback(() => {
    const wrong = allCards.filter(c => wrongIds.includes(c.id));
    setQuizCards(shuffleArray(wrong.length ? wrong : allCards));
    setIndex(0);
    setSelected(null);
    setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0);
    setWrongIds([]);
    setOnlyWrong(wrong.length > 0);
  }, [allCards, wrongIds]);

  const restartAll = useCallback(() => {
    setQuizCards(shuffleArray(allCards));
    setIndex(0);
    setSelected(null);
    setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0);
    setWrongIds([]);
    setOnlyWrong(false);
  }, [allCards]);

  const total   = quizCards.length;
  const pct     = Math.round((sessionCorrect / total) * 100);
  const isLast  = index + 1 >= total;

  // ── Done screen ──
  if (status === QUIZ_STATUS.DONE) {
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="fc-quiz-done">
        <div className="fc-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="fc-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>
        <p className="fc-quiz-done-score">
          {sessionCorrect} / {total} — {pct}%
        </p>
        <p className="fc-quiz-done-known">
          {language === 'es'
            ? `${knownIds.length} palabras marcadas como aprendidas`
            : `${knownIds.length} words marked as learned`}
        </p>
        <div className="fc-quiz-done-actions">
          {wrongIds.length > 0 && (
            <button className="fc-quiz-done-btn primary" onClick={restartWrong}>
              {language === 'es'
                ? `🔁 Repetir errores (${wrongIds.length})`
                : `🔁 Retry wrong (${wrongIds.length})`}
            </button>
          )}
          <button className="fc-quiz-done-btn" onClick={restartAll}>
            {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
          </button>
          <button className="fc-quiz-done-btn" onClick={onStudyMode}>
            {language === 'es' ? '📚 Volver a tarjetas' : '📚 Back to cards'}
          </button>
        </div>
      </div>
    );
  }

  // ── Question screen ──
  return (
    <div className="fc-quiz">
      {/* Progress */}
      <div className="fc-quiz-progress">
        <span className="fc-quiz-progress-text">
          {index + 1} / {total}
          {onlyWrong && (
            <span className="fc-quiz-wrong-badge">
              {language === 'es' ? ' · solo errores' : ' · wrong only'}
            </span>
          )}
        </span>
        <span className="fc-quiz-score-text">
          ✓ {sessionCorrect}
        </span>
      </div>
      <div className="fc-quiz-progress-track">
        <div className="fc-quiz-progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      {/* Word card */}
      <div className="fc-quiz-card">
        <div className="fc-quiz-word">{displayWord}</div>
        {displaySub && <div className="fc-quiz-sub">{displaySub}</div>}
        {card?.word && ttsSupported && (
          <button
            className={`fc-quiz-speak-btn ${isSpeaking ? 'speaking' : ''}`}
            onClick={() => speak(card.word, speakId)}
            aria-label={`Pronounce ${card.word}`}
          >
            {isSpeaking ? '🔊' : '🔈'}
          </button>
        )}
        <p className="fc-quiz-prompt">
          {language === 'es' ? '¿Cuál es el significado?' : 'What does this mean?'}
        </p>
      </div>

      {/* Options */}
      <div className="fc-quiz-options">
        {options.map((opt, i) => {
          let cls = 'fc-quiz-option';
          if (status === QUIZ_STATUS.ANSWERED) {
            if (i === correctIndex)       cls += ' correct';
            else if (i === selected)      cls += ' wrong';
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

      {/* Next button — only shown after wrong answer */}
      {status === QUIZ_STATUS.ANSWERED && selected !== correctIndex && (
        <button className="fc-quiz-next-btn" onClick={handleNext}>
          {isLast
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Study Mode (original flip cards) ────────────────────────────────────────

const StudyMode = ({ cards, allCards, knownIds, setKnownIds, filter, onFilterChange,
                     page, onPageChange, shuffleKey, onShuffle, quizId, language, t }) => {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const { supported: ttsSupported, speakingId, speak } = useTextToSpeech();

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);
  const pageCards  = cards.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const goToPage = useCallback((newPage) => {
    onPageChange(newPage);
    setFlippedCards(new Set());
  }, [onPageChange]);

  const toggleCard = useCallback((index) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  }, []);

  const allFlipped = pageCards.length > 0 && flippedCards.size === pageCards.length;

  const toggleAll = useCallback(() => {
    setFlippedCards(allFlipped ? new Set() : new Set(pageCards.map((_, i) => i)));
  }, [allFlipped, pageCards]);

  const markKnown = useCallback((cardId, e) => {
    e.stopPropagation();
    setKnownIds(prev => prev.includes(cardId) ? prev : [...prev, cardId]);
  }, [setKnownIds]);

  // Reset flipped state on page/shuffle changes
  useEffect(() => { setFlippedCards(new Set()); }, [page, shuffleKey]);

  if (cards.length === 0) {
    return (
      <p style={{ color: 'white', textAlign: 'center', padding: '2rem 0' }}>
        {t('flashcards.all')} {t('flashcards.learned')}!
      </p>
    );
  }

  return (
    <>
      <div className="flashcards-filter">
        <button
          className={`flashcards-filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >{t('flashcards.all')}</button>
        <button
          className={`flashcards-filter-btn ${filter === 'notLearned' ? 'active' : ''}`}
          onClick={() => onFilterChange('notLearned')}
        >{t('flashcards.notLearned')}</button>
      </div>

      <div className="flashcards-grid">
        {pageCards.map((card, i) => {
          const { script, transliteration } = parseScriptWord(card.question || '');
          const meaning    = card.options?.[card.correctIndex] ?? '';
          const isFlipped  = flippedCards.has(i);
          const isKnown    = knownIds.includes(card.id);
          const displayWord = card.word || script;
          const displaySub  = card.ipa  || transliteration;
          const cardSpeakId = `${quizId}-${card.id}`;
          const isSpeaking  = speakingId === cardSpeakId;

          return (
            <div key={`${page}-${i}`} className="flashcard-scene" onClick={() => toggleCard(i)}>
              <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="flashcard-face flashcard-front">
                  {isKnown && <span className="flashcard-known-badge">&#10003;</span>}
                  <div className="flashcard-greek">{displayWord}</div>
                  <div className="flashcard-transliteration">{displaySub}</div>
                  {card.word && ttsSupported && (
                    <button
                      className={`flashcard-speaker-btn ${isSpeaking ? 'speaking' : ''}`}
                      onClick={e => { e.stopPropagation(); speak(card.word, cardSpeakId); }}
                      aria-label={`Pronounce ${card.word}`}
                    >
                      {isSpeaking ? '🔊' : '🔈'}
                    </button>
                  )}
                </div>
                <div className="flashcard-face flashcard-back">
                  <div className="flashcard-meaning">{meaning}</div>
                  <div className="flashcard-reference">{card.word ? '' : card.reference}</div>
                  {!isKnown && (
                    <button className="flashcard-know-btn" onClick={e => markKnown(card.id, e)}>
                      {t('flashcards.knowIt')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flashcards-nav">
        <button className="flashcard-nav-btn" onClick={() => goToPage(page - 1)}
          disabled={page === 0} aria-label={t('flashcards.previous')}>&#8592;</button>
        <span className="flashcard-nav-indicator">{page + 1} / {totalPages}</span>
        <button className="flashcard-nav-btn" onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages - 1} aria-label={t('flashcards.next')}>&#8594;</button>
      </div>

      <div className="flashcards-actions">
        <button className="flashcard-action-btn" onClick={toggleAll}>
          {allFlipped ? t('flashcards.hideAll') : t('flashcards.showAll')}
        </button>
        <button className="flashcard-action-btn" onClick={onShuffle}>
          {t('flashcards.shuffle')}
        </button>
        {knownIds.length > 0 && (
          <button className="flashcard-action-btn" onClick={() => setKnownIds([])}>
            {t('flashcards.resetProgress')}
          </button>
        )}
      </div>
    </>
  );
};

// ─── Root FlashCards shell ────────────────────────────────────────────────────

const FlashCards = ({ quizId = 'greek-vocabulary', onHome }) => {
  const { quizzes } = useData();
  const { t, language } = useI18n();

  const [mode, setMode]           = useState('study');  // 'study' | 'quiz'
  const [page, setPage]           = useState(0);
  const [shuffleKey, setShuffleKey] = useState(0);
  const [knownIds, setKnownIds]   = useLocalStorage(`itiapp-flashcard-progress-${quizId}`, []);
  const [filter, setFilter]       = useState('all');

  const quiz = useMemo(() => quizzes.find(q => q.id === quizId), [quizzes, quizId]);
  const quizTitle = useMemo(
    () => quiz?.title?.[language] || quiz?.title?.en || t('flashcards.title'),
    [quiz, language, t]
  );

  const allCards = useMemo(() => {
    if (!quiz) return [];
    const langData = quiz[language] || quiz.en || [];
    return shuffleArray(langData);
  }, [quiz, language, shuffleKey]);

  const filteredCards = useMemo(() => {
    if (filter === 'notLearned') return allCards.filter(c => !knownIds.includes(c.id));
    return allCards;
  }, [allCards, filter, knownIds]);

  const handleFilterChange = useCallback((f) => {
    setFilter(f);
    setPage(0);
  }, []);

  const handleShuffle = useCallback(() => {
    setShuffleKey(k => k + 1);
    setPage(0);
  }, []);

  const handleModeSwitch = useCallback((m) => {
    setMode(m);
    setPage(0);
  }, []);

  if (!allCards.length) {
    return (
      <div className="flashcards-container">
        <div className="flashcards-content">
          <div className="flashcards-header">
            <button className="flashcard-back-btn" onClick={onHome} aria-label={t('flashcards.backToHome')}>
              &#8592;
            </button>
            <h1 className="flashcards-title">{quizTitle}</h1>
          </div>
          <p style={{ color: 'white', textAlign: 'center' }}>No cards available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcards-container">
      <div className="flashcards-content">

        {/* Header */}
        <div className="flashcards-header">
          <button className="flashcard-back-btn" onClick={onHome} aria-label={t('flashcards.backToHome')}>
            &#8592;
          </button>
          <h1 className="flashcards-title">{quizTitle}</h1>
        </div>

        {/* Progress bar (always visible) */}
        <div className="flashcards-progress-bar">
          <div className="flashcards-progress-text">
            {knownIds.length} / {allCards.length} {t('flashcards.learned')}
          </div>
          <div className="flashcards-progress-track">
            <div
              className="flashcards-progress-fill"
              style={{ width: `${(knownIds.length / allCards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Mode tabs */}
        <div className="fc-mode-tabs">
          <button
            className={`fc-mode-tab ${mode === 'study' ? 'active' : ''}`}
            onClick={() => handleModeSwitch('study')}
          >
            📚 {language === 'es' ? 'Tarjetas' : 'Study'}
          </button>
          <button
            className={`fc-mode-tab ${mode === 'quiz' ? 'active' : ''}`}
            onClick={() => handleModeSwitch('quiz')}
          >
            🧠 {language === 'es' ? 'Quiz' : 'Quiz'}
          </button>
        </div>

        {/* Modes */}
        {mode === 'study' ? (
          <StudyMode
            cards={filteredCards}
            allCards={allCards}
            knownIds={knownIds}
            setKnownIds={setKnownIds}
            filter={filter}
            onFilterChange={handleFilterChange}
            page={page}
            onPageChange={setPage}
            shuffleKey={shuffleKey}
            onShuffle={handleShuffle}
            quizId={quizId}
            language={language}
            t={t}
          />
        ) : (
          <QuizMode
            key={shuffleKey}
            allCards={allCards}
            knownIds={knownIds}
            setKnownIds={setKnownIds}
            language={language}
            quizId={quizId}
            t={t}
            onStudyMode={() => handleModeSwitch('study')}
          />
        )}

        {/* Back to home always at bottom */}
        <div className="flashcards-actions" style={{ marginTop: 'var(--spacing-md)' }}>
          <button className="flashcard-action-btn" onClick={onHome}>
            {t('flashcards.backToHome')}
          </button>
        </div>

      </div>
    </div>
  );
};

export default FlashCards;
