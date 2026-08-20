import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getAllQuizzes, getTranslations as fetchTranslations } from '../firebase/firestoreService';
import { GERMAN_VOCABULARY_QUIZ } from '../utils/germanVocabulary';
import { A1_EXAM_PRACTICE_QUIZ } from '../utils/a1ExamPractice';
import { FES_IZTACALA_LEVEL_2_QUIZ } from '../utils/fesIztacalaLevel2';
import { translations as hardcodedTranslations } from '../i18n/translations';

const DataContext = createContext(null);

// Hardcoded fallback — the app is fully usable with no Firebase config at all.
const FALLBACK_QUIZZES = [
  {
    id: 'german-vocabulary',
    title: { en: 'German Vocabulary', es: 'Vocabulario Alemán' },
    description: {
      en: 'Learn essential German words with pronunciation guides',
      es: 'Aprende palabras esenciales en alemán con guías de pronunciación'
    },
    icon: 'Aa',
    category: 'knowledge',
    en: GERMAN_VOCABULARY_QUIZ.en,
    es: GERMAN_VOCABULARY_QUIZ.es
  },
  {
    id: 'fes-iztacala-level-2',
    title: { en: 'Vocabulary level 2 FES Iztacala', es: 'Vocabulario nivel 2 FES Iztacala' },
    description: {
      en: 'Course word list — add your own words as the class goes on',
      es: 'Lista del curso — agrega tus propias palabras conforme avanza la clase'
    },
    icon: '🎓',
    category: 'knowledge',
    en: FES_IZTACALA_LEVEL_2_QUIZ.en,
    es: FES_IZTACALA_LEVEL_2_QUIZ.es
  },
  {
    id: 'a1-exam-practice',
    title: { en: 'A1 exam practice', es: 'Práctica de examen A1' },
    description: {
      en: 'Grammar drill across the full A1 syllabus — cases, verbs, prepositions, Perfekt',
      es: 'Ejercicios de gramática de todo el temario A1: casos, verbos, preposiciones, Perfekt'
    },
    icon: '📝',
    category: 'grammar',
    en: A1_EXAM_PRACTICE_QUIZ.en,
    es: A1_EXAM_PRACTICE_QUIZ.es
  }
];

export const DataProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(FALLBACK_QUIZZES);
  const [translations, setTranslations] = useState(hardcodedTranslations);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [firestoreQuizzes, firestoreEn, firestoreEs] = await Promise.all([
        getAllQuizzes(),
        fetchTranslations('en'),
        fetchTranslations('es')
      ]);

      if (firestoreQuizzes && firestoreQuizzes.length > 0) setQuizzes(firestoreQuizzes);
      if (firestoreEn || firestoreEs) {
        setTranslations(prev => ({
          ...prev,
          ...(firestoreEn ? { en: firestoreEn } : {}),
          ...(firestoreEs ? { es: firestoreEs } : {})
        }));
      }
    } catch (err) {
      console.warn('Failed to load Firestore data, using fallbacks:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refreshData = useCallback(() => {
    // Clear caches and reload
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('firestore_')) localStorage.removeItem(key);
    });
    return loadData();
  }, [loadData]);

  const value = {
    quizzes,
    translations,
    loading,
    error,
    refreshData,
    setQuizzes,
    setTranslations
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
