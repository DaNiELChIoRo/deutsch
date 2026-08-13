import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getAllQuizzes, getTranslations as fetchTranslations } from '../firebase/firestoreService';
import { GERMAN_VOCABULARY_QUIZ } from '../utils/germanVocabulary';
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
