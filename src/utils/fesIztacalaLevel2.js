// Vocabulary level 2 — FES Iztacala
//
// A course word list, separate from the general GERMAN_VOCABULARY_QUIZ so it can
// grow independently. This deck accepts user-added words: see
// CUSTOM_WORDS_ENABLED_FOR in pages/FlashCards.jsx and hooks/useCustomVocabulary.js.
// Anything a learner adds is stored per-device and mirrored to Firestore, so the
// seed list below is a starting point rather than the full deck.

export const FES_IZTACALA_LEVEL_2_QUIZ = {
  en: [
    { id: 1, word: "Bedeutung", ipa: "[bəˈdɔʏtʊŋ]", question: "What does 'Bedeutung' mean?", options: ["Meaning / Significance", "Beginning", "Decision", "Condition"], correctIndex: 0, reference: "Noun · die" },
    { id: 2, word: "Einladung", ipa: "[ˈaɪnˌlaːdʊŋ]", question: "What does 'Einladung' mean?", options: ["Invitation", "Delivery", "Departure", "Agreement"], correctIndex: 0, reference: "Noun · die" },
    { id: 3, word: "bestellen", ipa: "[bəˈʃtɛlən]", question: "What does 'bestellen' mean?", options: ["To order", "To pay", "To serve", "To choose"], correctIndex: 0, reference: "Verb" },
    { id: 4, word: "nehmen", ipa: "[ˈneːmən]", question: "What does 'nehmen' mean?", options: ["To take", "To give", "To bring", "To hold"], correctIndex: 0, reference: "Verb · irregular" }
  ],
  es: [
    { id: 1, word: "Bedeutung", ipa: "[bəˈdɔʏtʊŋ]", question: "¿Qué significa 'Bedeutung'?", options: ["Significado", "Comienzo", "Decisión", "Condición"], correctIndex: 0, reference: "Sustantivo · die" },
    { id: 2, word: "Einladung", ipa: "[ˈaɪnˌlaːdʊŋ]", question: "¿Qué significa 'Einladung'?", options: ["Invitación", "Entrega", "Salida", "Acuerdo"], correctIndex: 0, reference: "Sustantivo · die" },
    { id: 3, word: "bestellen", ipa: "[bəˈʃtɛlən]", question: "¿Qué significa 'bestellen'?", options: ["Pedir / Ordenar", "Pagar", "Servir", "Elegir"], correctIndex: 0, reference: "Verbo" },
    { id: 4, word: "nehmen", ipa: "[ˈneːmən]", question: "¿Qué significa 'nehmen'?", options: ["Tomar / Coger", "Dar", "Traer", "Sostener"], correctIndex: 0, reference: "Verbo · irregular" }
  ]
};
