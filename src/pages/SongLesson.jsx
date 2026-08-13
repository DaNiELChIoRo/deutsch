import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { VOCAB_TYPE_LABELS } from '../utils/woBistDuVocabulary';
import '../styles/WoBistDuLesson.css';

const CARDS_PER_PAGE = 6;
const QUIZ_STATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TYPE_COLORS = {
  question:  '#ffb74d',
  verb:      '#ef9a9a',
  pronoun:   '#80cbc4',
  adjective: '#a5d6a7',
  adverb:    '#90caf9',
  noun:      '#ce93d8',
  french:    '#f48fb1',
};

function highlightWrongWords(text, wrongWords) {
  if (!text || !wrongWords.length) return text;
  const escaped = wrongWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(regex);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    wrongWords.some(w => w.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="wbd-wrong-word">{part}</span>
      : part
  );
}

function buildSongQuizOptions(card, allVocab) {
  const correct = card.en;
  const distractors = shuffleArray(
    allVocab.filter(c => c.id !== card.id).map(c => c.en)
  ).slice(0, 3);
  const pool = shuffleArray([correct, ...distractors]);
  return { options: pool, correctIndex: pool.indexOf(correct) };
}

// ─── Song Quiz Mode ───────────────────────────────────────────────────────────

const SongQuizMode = ({ vocab, knownIds, setKnownIds, language, storageKey, onWrongUpdate, onGoToLyrics }) => {
  const { supported: ttsSupported, speakingId, speak } = useTextToSpeech();

  const [quizCards, setQuizCards]   = useState(() => shuffleArray(vocab));
  const [index, setIndex]           = useState(0);
  const [status, setStatus]         = useState(QUIZ_STATUS.IDLE);
  const [selected, setSelected]     = useState(null);
  const [sessionCorrect, setCorrect] = useState(0);
  const [wrongIds, setWrongIds]     = useState([]);
  const [onlyWrong, setOnlyWrong]   = useState(false);

  const card = quizCards[index];

  const { options, correctIndex } = useMemo(
    () => card ? buildSongQuizOptions(card, vocab) : { options: [], correctIndex: 0 },
    [card, vocab]
  );

  const speakId    = `song-quiz-${storageKey}-${card?.id}`;
  const isSpeaking = speakingId === speakId;

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

  useEffect(() => {
    if (status === QUIZ_STATUS.ANSWERED && selected === correctIndex) {
      const t = setTimeout(handleNext, 900);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIndex, handleNext]);

  // Report wrong IDs to parent when quiz finishes
  useEffect(() => {
    if (status === QUIZ_STATUS.DONE) onWrongUpdate?.(wrongIds);
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

  const restartWrong = useCallback(() => {
    const wrong = vocab.filter(c => wrongIds.includes(c.id));
    setQuizCards(shuffleArray(wrong.length ? wrong : vocab));
    setIndex(0); setSelected(null); setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0); setWrongIds([]); setOnlyWrong(wrong.length > 0);
    onWrongUpdate?.([]);
  }, [vocab, wrongIds, onWrongUpdate]);

  const restartAll = useCallback(() => {
    setQuizCards(shuffleArray(vocab));
    setIndex(0); setSelected(null); setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0); setWrongIds([]); setOnlyWrong(false);
    onWrongUpdate?.([]);
  }, [vocab, onWrongUpdate]);

  const total = quizCards.length;
  const pct   = Math.round((sessionCorrect / total) * 100);
  const isLast = index + 1 >= total;

  if (status === QUIZ_STATUS.DONE) {
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    const wrongCards = vocab.filter(c => wrongIds.includes(c.id));
    return (
      <div className="wbd-quiz-done">
        <div className="wbd-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="wbd-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>

        <div className="wbd-quiz-done-scorebox">
          <div className="wbd-quiz-done-scorebox-nums">
            <span className="wbd-quiz-done-score-correct">✓ {sessionCorrect}</span>
            <span className="wbd-quiz-done-score-sep">/</span>
            <span className="wbd-quiz-done-score-total">{total}</span>
            <span className="wbd-quiz-done-score-pct">{pct}%</span>
          </div>
          <div className="wbd-quiz-done-bar-track">
            <div className="wbd-quiz-done-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        {wrongCards.length > 0 ? (
          <div className="wbd-quiz-done-wrong-section">
            <p className="wbd-quiz-done-wrong-label">
              {language === 'es'
                ? `❌ Incorrectas (${wrongCards.length})`
                : `❌ Wrong answers (${wrongCards.length})`}
            </p>
            <ul className="wbd-quiz-done-wrong-list">
              {wrongCards.map(c => (
                <li key={c.id} className="wbd-quiz-done-wrong-item">
                  <span className="wbd-quiz-done-wrong-word">{c.word}</span>
                  {c.ipa && <span className="wbd-quiz-done-wrong-ipa">{c.ipa}</span>}
                  <span className="wbd-quiz-done-wrong-meaning">{c.en}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="wbd-quiz-done-perfect">
            {language === 'es' ? '🎉 ¡Sin errores!' : '🎉 No mistakes!'}
          </p>
        )}

        <div className="wbd-quiz-done-actions">
          {wrongIds.length > 0 && (
            <button className="wbd-quiz-done-btn primary" onClick={restartWrong}>
              {language === 'es' ? `🔁 Repetir errores (${wrongIds.length})` : `🔁 Retry wrong (${wrongIds.length})`}
            </button>
          )}
          {wrongIds.length > 0 && onGoToLyrics && (
            <button className="wbd-quiz-done-btn lyrics-btn" onClick={onGoToLyrics}>
              {language === 'es' ? '🎵 Ver errores en la letra' : '🎵 See wrong words in Lyrics'}
            </button>
          )}
          <button className="wbd-quiz-done-btn" onClick={restartAll}>
            {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wbd-quiz">
      <div className="wbd-quiz-progress">
        <span className="wbd-quiz-progress-text">
          {index + 1} / {total}
          {onlyWrong && <span className="wbd-quiz-wrong-badge">
            {language === 'es' ? ' · solo errores' : ' · wrong only'}
          </span>}
        </span>
        <span className="wbd-quiz-score-text">✓ {sessionCorrect}</span>
      </div>
      <div className="wbd-quiz-progress-track">
        <div className="wbd-quiz-progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="wbd-quiz-card">
        <div className="wbd-quiz-word">{card?.word}</div>
        {card?.ipa && <div className="wbd-quiz-ipa">{card.ipa}</div>}
        {ttsSupported && (
          <button
            className={`wbd-quiz-speak-btn ${isSpeaking ? 'speaking' : ''}`}
            onClick={() => speak(card.word, speakId)}
            aria-label={`Pronounce ${card?.word}`}
          >
            {isSpeaking ? '🔊' : '🔈'}
          </button>
        )}
        <p className="wbd-quiz-prompt">
          {language === 'es' ? '¿Cuál es el significado?' : 'What does this mean?'}
        </p>
      </div>

      <div className="wbd-quiz-options">
        {options.map((opt, i) => {
          let cls = 'wbd-quiz-option';
          if (status === QUIZ_STATUS.ANSWERED) {
            if (i === correctIndex) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)}
              disabled={status === QUIZ_STATUS.ANSWERED}>
              {opt}
            </button>
          );
        })}
      </div>

      {status === QUIZ_STATUS.ANSWERED && selected !== correctIndex && (
        <button className="wbd-quiz-next-btn" onClick={handleNext}>
          {isLast
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Matching Pairs Mode ─────────────────────────────────────────────────────

const MATCH_BATCH = 6;

const MatchMode = ({ vocab, knownIds, setKnownIds, language }) => {
  const { supported: ttsSupported, speakingId, speak } = useTextToSpeech();
  const [matchType,  setMatchType]  = useState('meaning'); // 'meaning' | 'pronunciation'
  const [allWords]   = useState(() => shuffleArray(vocab));
  const [batchStart, setBatchStart] = useState(0);
  const [selected,   setSelected]   = useState(null);
  const [matched,    setMatched]    = useState(new Set());
  const [wrongFlash, setWrongFlash] = useState(null);
  const [mistakes,   setMistakes]   = useState(0);
  const [roundDone,  setRoundDone]  = useState(false);
  const [allDone,    setAllDone]    = useState(false);

  const totalBatches = Math.ceil(allWords.length / MATCH_BATCH);
  const currentBatch = Math.floor(batchStart / MATCH_BATCH);
  const batchWords   = useMemo(() => allWords.slice(batchStart, batchStart + MATCH_BATCH), [allWords, batchStart]);
  const rightWords   = useMemo(() => shuffleArray(batchWords), [batchWords]);

  const resetState = useCallback(() => {
    setBatchStart(0);
    setSelected(null);
    setMatched(new Set());
    setWrongFlash(null);
    setRoundDone(false);
    setAllDone(false);
    setMistakes(0);
  }, []);

  const switchType = useCallback((type) => {
    setMatchType(type);
    resetState();
  }, [resetState]);

  useEffect(() => {
    if (!roundDone && matched.size > 0 && matched.size === batchWords.length) {
      const t = setTimeout(() => setRoundDone(true), 300);
      return () => clearTimeout(t);
    }
  }, [matched.size, batchWords.length, roundDone]);

  const handleClick = useCallback((id, side) => {
    if (matched.has(id) || wrongFlash) return;
    if (!selected) { setSelected({ id, side }); return; }
    if (selected.side === side) { setSelected({ id, side }); return; }

    const leftId  = side === 'right' ? selected.id : id;
    const rightId = side === 'right' ? id : selected.id;

    if (leftId === rightId) {
      setMatched(prev => { const n = new Set(prev); n.add(leftId); return n; });
      setKnownIds(prev => prev.includes(leftId) ? prev : [...prev, leftId]);
      setSelected(null);
    } else {
      setMistakes(prev => prev + 1);
      setWrongFlash({ leftId, rightId });
      setSelected(null);
      setTimeout(() => setWrongFlash(null), 650);
    }
  }, [selected, matched, wrongFlash, setKnownIds]);

  const nextRound = () => {
    const next = batchStart + MATCH_BATCH;
    if (next >= allWords.length) {
      setAllDone(true);
    } else {
      setBatchStart(next);
      setSelected(null);
      setMatched(new Set());
      setWrongFlash(null);
      setRoundDone(false);
    }
  };

  const rightValue = (w) => matchType === 'pronunciation' ? w.ipa : w.en;
  const rightLabel = matchType === 'pronunciation' ? '🔊 IPA' : '🇬🇧 EN';

  if (allDone) {
    const stars = mistakes === 0 ? 3 : mistakes <= 4 ? 2 : 1;
    return (
      <div className="wbd-match-done">
        <div className="wbd-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="wbd-quiz-done-title">
          {language === 'es' ? '¡Todo emparejado!' : 'All matched!'}
        </h2>
        <p className="wbd-quiz-done-score">
          {language === 'es' ? `${mistakes} errores` : `${mistakes} mistake${mistakes !== 1 ? 's' : ''}`}
        </p>
        <p className="wbd-quiz-done-known">
          {language === 'es'
            ? `${knownIds.length} palabras marcadas como aprendidas`
            : `${knownIds.length} words marked as learned`}
        </p>
        <div className="wbd-quiz-done-actions">
          <button className="wbd-quiz-done-btn primary" onClick={resetState}>
            {language === 'es' ? '🔀 Jugar de nuevo' : '🔀 Play again'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wbd-match">

      {/* Mode toggle */}
      <div className="wbd-match-type-toggle">
        <button
          className={`wbd-match-type-btn ${matchType === 'meaning' ? 'active' : ''}`}
          onClick={() => switchType('meaning')}
        >
          🇬🇧 {language === 'es' ? 'Significado' : 'Meaning'}
        </button>
        <button
          className={`wbd-match-type-btn ${matchType === 'pronunciation' ? 'active' : ''}`}
          onClick={() => switchType('pronunciation')}
        >
          🔊 {language === 'es' ? 'Pronunciación' : 'Pronunciation'}
        </button>
      </div>

      <div className="wbd-match-header">
        <span className="wbd-match-round-info">
          {language === 'es'
            ? `Ronda ${currentBatch + 1} / ${totalBatches}`
            : `Round ${currentBatch + 1} / ${totalBatches}`}
        </span>
        <span className="wbd-match-mistakes">
          {language === 'es' ? `${mistakes} errores` : `${mistakes} mistake${mistakes !== 1 ? 's' : ''}`}
        </span>
      </div>

      <div className="wbd-match-progress-track">
        <div className="wbd-match-progress-fill" style={{ width: `${(matched.size / batchWords.length) * 100}%` }} />
      </div>

      <div className="wbd-match-grid">
        {/* Left column — German words (with optional audio in pronunciation mode) */}
        <div className="wbd-match-col">
          <div className="wbd-match-col-label">🇩🇪 DE</div>
          {batchWords.map(w => {
            const isMatched  = matched.has(w.id);
            const isSelected = selected?.id === w.id && selected?.side === 'left';
            const isWrong    = wrongFlash?.leftId === w.id;
            const speakId    = `match-pronun-${w.id}`;
            const isSpeaking = speakingId === speakId;
            return (
              <button
                key={w.id}
                className={`wbd-match-item${isSelected ? ' selected' : ''}${isMatched ? ' matched' : ''}${isWrong ? ' wrong' : ''}`}
                onClick={() => !isMatched && handleClick(w.id, 'left')}
                disabled={isMatched}
              >
                <span className="wbd-match-word-text">{w.word}</span>
                {matchType === 'pronunciation' && ttsSupported && (
                  <span
                    className={`wbd-match-speak ${isSpeaking ? 'speaking' : ''}`}
                    role="button"
                    aria-label={`Pronounce ${w.word}`}
                    onClick={e => { e.stopPropagation(); speak(w.word, speakId); }}
                  >
                    {isSpeaking ? '🔊' : '🔈'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right column — meaning or IPA, shuffled */}
        <div className="wbd-match-col">
          <div className="wbd-match-col-label">{rightLabel}</div>
          {rightWords.map(w => {
            const isMatched  = matched.has(w.id);
            const isSelected = selected?.id === w.id && selected?.side === 'right';
            const isWrong    = wrongFlash?.rightId === w.id;
            return (
              <button
                key={w.id}
                className={`wbd-match-item${isSelected ? ' selected' : ''}${isMatched ? ' matched' : ''}${isWrong ? ' wrong' : ''}${matchType === 'pronunciation' ? ' ipa' : ''}`}
                onClick={() => !isMatched && handleClick(w.id, 'right')}
                disabled={isMatched}
              >
                {rightValue(w)}
              </button>
            );
          })}
        </div>
      </div>

      {roundDone && (
        <div className="wbd-match-round-done">
          <span className="wbd-match-round-done-text">
            {language === 'es' ? '✓ ¡Ronda completada!' : '✓ Round complete!'}
          </span>
          <button className="wbd-quiz-done-btn primary" onClick={nextRound}>
            {language === 'es' ? 'Siguiente →' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
};

/**
 * Generic reusable song-lesson page.
 *
 * Props:
 *   title       – displayed song title (string)
 *   meta        – artist / album line (string)
 *   vocab       – array of { id, word, ipa, en, es, type }
 *   lyrics      – array of { label:{en,es}, lines:[{de,en}] }
 *   storageKey  – localStorage key for "known" progress
 *   onHome      – back-button callback
 */
const SongLesson = ({ title, meta, vocab, lyrics, storageKey, onHome, altFlag = '🇪🇸', appleMusic, typeLabels: customTypeLabels, lyricsTabLabel, pronLabel }) => {
  const { language } = useI18n();
  const [tab, setTab]               = useState('vocab');
  const [filter, setFilter]         = useState('all');
  const [shuffleKey, setShuffleKey] = useState(0);
  const [page, setPage]             = useState(0);
  const [flipped, setFlipped]       = useState(new Set());
  const [knownIds, setKnownIds]     = useLocalStorage(storageKey, []);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showPron, setShowPron]               = useState(false);
  const [wrongVocabIds, setWrongVocabIds] = useState([]);
  const [hintId, setHintId]               = useState(null);
  const longPressTimer  = useRef(null);
  const longPressActive = useRef(false);

  const hasPron = useMemo(() => lyrics.some(s => s.lines.some(l => l.pron)), [lyrics]);

  const wrongWords = useMemo(
    () => vocab.filter(v => wrongVocabIds.includes(v.id)).map(v => v.word),
    [wrongVocabIds, vocab]
  );

  const { supported: ttsSupported, speakingId, speak } = useTextToSpeech();

  const allCards = useMemo(() => shuffleArray(vocab), [shuffleKey, vocab]);

  const filtered = useMemo(() => {
    if (filter === 'notLearned') return allCards.filter(c => !knownIds.includes(c.id));
    if (filter !== 'all') return allCards.filter(c => c.type === filter);
    return allCards;
  }, [allCards, filter, knownIds]);

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const pageCards  = filtered.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const goToPage = useCallback((n) => { setPage(n); setFlipped(new Set()); }, []);

  const toggleCard = useCallback((i) => {
    setFlipped(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }, []);

  const allFlipped = pageCards.length > 0 && flipped.size === pageCards.length;

  const toggleAll = useCallback(() => {
    setFlipped(allFlipped ? new Set() : new Set(pageCards.map((_, i) => i)));
  }, [allFlipped, pageCards]);

  const markKnown = useCallback((id, e) => {
    e.stopPropagation();
    setKnownIds(prev => prev.includes(id) ? prev : [...prev, id]);
  }, [setKnownIds]);

  const handleFilterChange = useCallback((f) => {
    setFilter(f);
    setPage(0);
    setFlipped(new Set());
  }, []);

  const handleShuffle = useCallback(() => {
    setShuffleKey(k => k + 1);
    setPage(0);
    setFlipped(new Set());
  }, []);

  const startHint = useCallback((cardId) => {
    longPressActive.current = false;
    clearTimeout(longPressTimer.current);
    longPressTimer.current = setTimeout(() => {
      longPressActive.current = true;
      setHintId(cardId);
    }, 500);
  }, []);

  const cancelHint = useCallback(() => {
    clearTimeout(longPressTimer.current);
  }, []);

  const typeLabels   = (customTypeLabels?.[language] ?? customTypeLabels?.en) ?? VOCAB_TYPE_LABELS[language] ?? VOCAB_TYPE_LABELS.en;
  const uniqueTypes  = [...new Set(vocab.map(c => c.type))];

  return (
    <div className="wbd-container">
      <div className="wbd-content">

        {/* Header */}
        <div className="wbd-header">
          <button className="wbd-back-btn" onClick={onHome}>&#8592;</button>
          <div className="wbd-header-text">
            <h1 className="wbd-song-title">{title}</h1>
            <div className="wbd-song-meta">{meta}</div>
            {appleMusic && (
              <a
                href={appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className={`wbd-apple-music-link${appleMusic.includes('youtube') ? ' youtube' : ''}`}
              >
                {appleMusic.includes('youtube') ? '▶ YouTube Music' : '♫ Apple Music'}
              </a>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="wbd-tabs">
          <button
            className={`wbd-tab ${tab === 'vocab' ? 'active' : ''}`}
            onClick={() => setTab('vocab')}
          >
            🃏 {language === 'es' ? 'Vocab' : 'Vocab'}
          </button>
          <button
            className={`wbd-tab ${tab === 'match' ? 'active' : ''}`}
            onClick={() => setTab('match')}
          >
            🔗 {language === 'es' ? 'Pares' : 'Match'}
          </button>
          <button
            className={`wbd-tab ${tab === 'quiz' ? 'active' : ''}`}
            onClick={() => setTab('quiz')}
          >
            🧠 Quiz
          </button>
          <button
            className={`wbd-tab ${tab === 'lyrics' ? 'active' : ''}`}
            onClick={() => setTab('lyrics')}
          >
            🎸 {lyricsTabLabel?.[language] ?? (language === 'es' ? 'Letra' : 'Lyrics')}
          </button>
        </div>

        {/* ── VOCABULARY TAB ── */}
        {tab === 'vocab' && (
          <>
            <div className="wbd-progress">
              <div className="wbd-progress-text">
                {knownIds.length} / {vocab.length}{' '}
                {language === 'es' ? 'aprendidas' : 'learned'}
              </div>
              <div className="wbd-progress-track">
                <div
                  className="wbd-progress-fill"
                  style={{ width: `${(knownIds.length / vocab.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="wbd-filters">
              <button
                className={`wbd-filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                {language === 'es' ? 'Todas' : 'All'}
              </button>
              <button
                className={`wbd-filter-btn ${filter === 'notLearned' ? 'active' : ''}`}
                onClick={() => handleFilterChange('notLearned')}
              >
                {language === 'es' ? 'No aprendidas' : 'Not learned'}
              </button>
              {uniqueTypes.map(type => (
                <button
                  key={type}
                  className={`wbd-filter-btn ${filter === type ? 'active' : ''}`}
                  onClick={() => handleFilterChange(type)}
                >
                  {typeLabels[type] || type}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p style={{ color: 'white', textAlign: 'center', padding: '2rem 0' }}>
                {language === 'es' ? '¡Todas aprendidas!' : 'All learned!'}
              </p>
            ) : (
              <>
                <div className="wbd-grid">
                  {pageCards.map((card, i) => {
                    const isFlipped  = flipped.has(i);
                    const isKnown    = knownIds.includes(card.id);
                    const speakId    = `${storageKey}-${card.id}`;
                    const isSpeaking = speakingId === speakId;
                    const typeColor  = TYPE_COLORS[card.type] || 'white';

                    const showHint = hintId === card.id && !isFlipped;

                    return (
                      <div
                        key={`${page}-${i}`}
                        className="wbd-card-scene"
                        onPointerDown={() => card.songContext && startHint(card.id)}
                        onPointerUp={cancelHint}
                        onPointerCancel={cancelHint}
                        onMouseEnter={() => card.songContext && !isFlipped && setHintId(card.id)}
                        onMouseLeave={() => setHintId(null)}
                        onClick={() => {
                          if (longPressActive.current) { longPressActive.current = false; return; }
                          setHintId(null);
                          toggleCard(i);
                        }}
                      >
                        <div className={`wbd-card ${isFlipped ? 'is-flipped' : ''}`}>
                          <div className="wbd-card-face wbd-card-front">
                            {isKnown && <span className="wbd-known-badge">✓</span>}
                            {card.songContext && <span className="wbd-hint-dot" title="Hover / long-press to see song phrase">♪</span>}
                            <div className="wbd-word">{card.word}</div>
                            <div className="wbd-ipa">{card.ipa}</div>
                            {ttsSupported && (
                              <button
                                style={{
                                  position: 'absolute', bottom: 28,
                                  background: 'none', border: 'none',
                                  cursor: 'pointer', fontSize: '1.1rem'
                                }}
                                onClick={e => { e.stopPropagation(); speak(card.word, speakId); }}
                                aria-label={`Pronounce ${card.word}`}
                              >
                                {isSpeaking ? '🔊' : '🔈'}
                              </button>
                            )}
                            <div className="wbd-type-badge" style={{ color: typeColor }}>
                              {typeLabels[card.type] || card.type}
                            </div>
                            {showHint && (
                              <div className="wbd-song-hint">♪ „{card.songContext}"</div>
                            )}
                          </div>

                          <div className="wbd-card-face wbd-card-back">
                            <div className="wbd-meaning">{card.en}</div>
                            <div className="wbd-meaning-es">{card.es}</div>
                            {!isKnown && (
                              <button className="wbd-know-btn" onClick={e => markKnown(card.id, e)}>
                                {language === 'es' ? 'La sé ✓' : 'Got it ✓'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {totalPages > 1 && (
                  <div className="wbd-nav">
                    <button className="wbd-nav-btn" onClick={() => goToPage(page - 1)} disabled={page === 0}>
                      &#8592; {language === 'es' ? 'Ant.' : 'Prev'}
                    </button>
                    <span className="wbd-nav-indicator">{page + 1} / {totalPages}</span>
                    <button className="wbd-nav-btn" onClick={() => goToPage(page + 1)} disabled={page >= totalPages - 1}>
                      {language === 'es' ? 'Sig.' : 'Next'} &#8594;
                    </button>
                  </div>
                )}
              </>
            )}

            <div className="wbd-actions">
              <button className="wbd-action-btn" onClick={toggleAll}>
                {allFlipped
                  ? (language === 'es' ? 'Ocultar todo' : 'Hide all')
                  : (language === 'es' ? 'Mostrar todo' : 'Show all')}
              </button>
              <button className="wbd-action-btn" onClick={handleShuffle}>
                {language === 'es' ? 'Mezclar' : 'Shuffle'}
              </button>
              {knownIds.length > 0 && (
                <button className="wbd-action-btn" onClick={() => setKnownIds([])}>
                  {language === 'es' ? 'Reiniciar progreso' : 'Reset progress'}
                </button>
              )}
            </div>
          </>
        )}

        {/* ── MATCH TAB ── */}
        {tab === 'match' && (
          <MatchMode
            vocab={vocab}
            knownIds={knownIds}
            setKnownIds={setKnownIds}
            language={language}
          />
        )}

        {/* ── QUIZ TAB ── */}
        {tab === 'quiz' && (
          <SongQuizMode
            vocab={vocab}
            knownIds={knownIds}
            setKnownIds={setKnownIds}
            language={language}
            storageKey={storageKey}
            onWrongUpdate={setWrongVocabIds}
            onGoToLyrics={() => setTab('lyrics')}
          />
        )}

        {/* ── LYRICS TAB ── */}
        {tab === 'lyrics' && (
          <div className="wbd-lyrics-wrapper">
            <div className="wbd-lyrics-controls">
              <span className="wbd-lyrics-info">{meta}</span>
              {hasPron && (
                <button
                  className={`wbd-transl-toggle ${showPron ? 'on' : ''}`}
                  onClick={() => setShowPron(v => !v)}
                >
                  {showPron
                    ? (pronLabel?.[language] ? `Ocultar ${pronLabel[language]}` : (language === 'es' ? 'Ocultar pronunciación' : 'Hide romanization'))
                    : (pronLabel?.[language] ? `Mostrar ${pronLabel[language]}` : (language === 'es' ? 'Mostrar pronunciación' : 'Show romanization'))}
                </button>
              )}
              <button
                className={`wbd-transl-toggle ${showTranslation ? 'on' : ''}`}
                onClick={() => setShowTranslation(v => !v)}
              >
                {showTranslation
                  ? (language === 'es' ? 'Ocultar inglés' : 'Hide English')
                  : (language === 'es' ? 'Mostrar inglés' : 'Show English')}
              </button>
            </div>

            {wrongWords.length > 0 && (
              <div className="wbd-lyrics-legend">
                <span className="wbd-wrong-word">■</span>
                {language === 'es' ? ' Palabras falladas en el quiz' : ' Words missed in quiz'}
              </div>
            )}

            {lyrics.map((stanza, si) => (
              <div key={si} className="wbd-stanza">
                <div className="wbd-stanza-label">
                  {stanza.label[language] || stanza.label.en}
                </div>
                <div className="wbd-lines">
                  {stanza.lines.map((line, li) => (
                    <div key={li} className="wbd-line">
                      {line.es && (
                        <div className="wbd-line-es">
                          <span className="wbd-line-flag">{altFlag}</span> {line.es}
                        </div>
                      )}
                      {line.de && (
                        <div className="wbd-line-de">
                          {line.es && <span className="wbd-line-flag">🇩🇪</span>}{' '}
                          {highlightWrongWords(line.de, wrongWords)}
                        </div>
                      )}
                      {showPron && line.pron && (
                        <div className="wbd-line-pron">{line.pron}</div>
                      )}
                      {showTranslation && line.en && (
                        <div className="wbd-line-en">{line.en}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default SongLesson;
