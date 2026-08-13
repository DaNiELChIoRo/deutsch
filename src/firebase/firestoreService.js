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
