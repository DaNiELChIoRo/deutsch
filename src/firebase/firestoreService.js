import { doc, getDoc, setDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './config';

const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function getCached(key) {
  try {
    const raw = localStorage.getItem(`firestore_${key}`);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function setCache(key, data) {
  try {
    localStorage.setItem(`firestore_${key}`, JSON.stringify({ data, timestamp: Date.now() }));
  } catch {
    // localStorage full or unavailable
  }
}

// --- Read functions ---

export async function getBooks() {
  const cached = getCached('books_old-testament');
  if (cached) return cached;

  try {
    const snap = await getDoc(doc(db, 'books', 'old-testament'));
    if (snap.exists()) {
      const data = snap.data().books;
      setCache('books_old-testament', data);
      return data;
    }
  } catch (err) {
    console.warn('Firestore getBooks failed, using fallback:', err.message);
  }
  return null; // caller will use hardcoded fallback
}

export async function getQuiz(quizId) {
  const cached = getCached(`quiz_${quizId}`);
  if (cached) return cached;

  try {
    const snap = await getDoc(doc(db, 'quizzes', quizId));
    if (snap.exists()) {
      const data = snap.data();
      setCache(`quiz_${quizId}`, data);
      return data;
    }
  } catch (err) {
    console.warn(`Firestore getQuiz(${quizId}) failed, using fallback:`, err.message);
  }
  return null;
}

export async function getAllQuizzes() {
  const cached = getCached('all_quizzes');
  if (cached) return cached;

  try {
    const snap = await getDocs(collection(db, 'quizzes'));
    const quizzes = [];
    snap.forEach(d => quizzes.push({ id: d.id, ...d.data() }));
    if (quizzes.length > 0) {
      setCache('all_quizzes', quizzes);
      return quizzes;
    }
  } catch (err) {
    console.warn('Firestore getAllQuizzes failed, using fallback:', err.message);
  }
  return null;
}

export async function getTranslations(lang) {
  const cached = getCached(`translations_${lang}`);
  if (cached) return cached;

  try {
    const snap = await getDoc(doc(db, 'translations', lang));
    if (snap.exists()) {
      const data = snap.data();
      setCache(`translations_${lang}`, data);
      return data;
    }
  } catch (err) {
    console.warn(`Firestore getTranslations(${lang}) failed, using fallback:`, err.message);
  }
  return null;
}

// --- Per-device custom vocabulary ---
//
// One document per device id, holding that device's user-added words. Deliberately
// not run through the 1-hour cache above: this data is written by the user and must
// read back immediately, so localStorage is the source of truth and Firestore is the
// cross-device copy (see hooks/useCustomVocabulary.js).

const CUSTOM_VOCAB_COLLECTION = 'userVocabulary';

/**
 * All of a device's custom decks: { [deckId]: [word, ...] }.
 * Returns null when Firestore is unreachable — distinct from {} (nothing saved yet).
 */
export async function getCustomVocabulary(deviceId) {
  try {
    const snap = await getDoc(doc(db, CUSTOM_VOCAB_COLLECTION, deviceId));
    if (!snap.exists()) return {};
    const data = snap.data();
    return data.decks || {};
  } catch (err) {
    console.warn('Firestore getCustomVocabulary failed:', err.message);
    return null;
  }
}

/**
 * Write one deck. merge:true so decks are independent — saving the FES list must
 * not clobber a list the learner built on another deck.
 */
export async function saveCustomVocabularyDeck(deviceId, deckId, words) {
  await setDoc(
    doc(db, CUSTOM_VOCAB_COLLECTION, deviceId),
    { deviceId, decks: { [deckId]: words }, updatedAt: Date.now() },
    { merge: true }
  );
}

// --- Write functions (Admin) ---

export async function saveBooks(books) {
  await setDoc(doc(db, 'books', 'old-testament'), { books });
  setCache('books_old-testament', books);
}

export async function saveQuiz(quizId, data) {
  await setDoc(doc(db, 'quizzes', quizId), data);
  setCache(`quiz_${quizId}`, data);
  // Invalidate all_quizzes cache
  localStorage.removeItem('firestore_all_quizzes');
}

export async function createQuiz(quizId, quizData) {
  await setDoc(doc(db, 'quizzes', quizId), quizData);
  localStorage.removeItem('firestore_all_quizzes');
}

export async function deleteQuiz(quizId) {
  await deleteDoc(doc(db, 'quizzes', quizId));
  localStorage.removeItem(`firestore_quiz_${quizId}`);
  localStorage.removeItem('firestore_all_quizzes');
}

export async function saveTranslations(lang, data) {
  await setDoc(doc(db, 'translations', lang), data);
  setCache(`translations_${lang}`, data);
}
