// Vocabulary and lyrics for "Wo bist du?" — Rammstein, Rosenrot (2005)
// Bilingual Spanish/German song — words taken directly from the song lyrics.

export const WO_BIST_DU_VOCAB = [
  // Core question words (song title)
  { id: 1,  word: "wo",          ipa: "[voː]",             en: "where",                 es: "dónde",                  type: "question",  songContext: "Wo bist du? Wo bist du?" },
  { id: 2,  word: "bist",        ipa: "[bɪst]",            en: "are (you are)",         es: "eres / estás",           type: "verb",      songContext: "Wo bist du?" },
  { id: 3,  word: "du",          ipa: "[duː]",             en: "you (informal)",        es: "tú",                     type: "pronoun",   songContext: "Wo bist du?" },
  { id: 4,  word: "ich",         ipa: "[ɪç]",              en: "I",                     es: "yo",                     type: "pronoun",   songContext: "Ich liebe dich" },
  // Key verbs from song
  { id: 5,  word: "lieben",      ipa: "[ˈliːbən]",         en: "to love",               es: "amar",                   type: "verb",      songContext: "Ich liebe dich nicht mehr" },
  { id: 6,  word: "suchen",      ipa: "[ˈzuːxən]",         en: "to search / look for",  es: "buscar",                 type: "verb",      songContext: "Such ich dich hinter dem Licht" },
  { id: 7,  word: "sein",        ipa: "[zaɪn]",            en: "to be",                 es: "ser / estar",            type: "verb",      songContext: "So allein will ich nicht sein" },
  { id: 8,  word: "bleiben",     ipa: "[ˈblaɪbən]",        en: "to stay / remain",      es: "quedarse / permanecer",  type: "verb",      songContext: "Alle Uhren bleiben steh'n" },
  { id: 9,  word: "stehen",      ipa: "[ˈʃteːən]",         en: "to stand / stop",       es: "pararse / detenerse",    type: "verb",      songContext: "Alle Uhren bleiben steh'n" },
  { id: 10, word: "einschlafen", ipa: "[ˈaɪnˌʃlaːfən]",   en: "to fall asleep",        es: "dormirse",               type: "verb",      songContext: "Ich schlaf mit einem Messer ein" },
  // Adjectives from song
  { id: 11, word: "schön",       ipa: "[ʃøːn]",            en: "beautiful / nice",      es: "hermoso/a",              type: "adjective", songContext: "Die schönen Mädchen sind nicht schön" },
  { id: 12, word: "warm",        ipa: "[vaʁm]",            en: "warm",                  es: "cálido/a",               type: "adjective", songContext: "Die warmen Hände sind so kalt" },
  { id: 13, word: "kalt",        ipa: "[kalt]",            en: "cold",                  es: "frío/a",                 type: "adjective", songContext: "Die warmen Hände sind so kalt" },
  { id: 14, word: "gesund",      ipa: "[ɡəˈzʊnt]",         en: "healthy",               es: "saludable / sano/a",     type: "adjective", songContext: "Lachen ist nicht mehr gesund" },
  { id: 15, word: "allein",      ipa: "[aˈlaɪn]",          en: "alone",                 es: "solo/a",                 type: "adjective", songContext: "So allein will ich nicht sein" },
  // Nouns from song
  { id: 16, word: "Mädchen",     ipa: "[ˈmɛːtçən]",        en: "girl",                  es: "chica / muchacha",       type: "noun",      songContext: "Die schönen Mädchen sind nicht schön" },
  { id: 17, word: "Hände",       ipa: "[ˈhɛndə]",          en: "hands",                 es: "manos",                  type: "noun",      songContext: "Die warmen Hände sind so kalt" },
  { id: 18, word: "Uhren",       ipa: "[ˈuːʁən]",          en: "clocks / watches",      es: "relojes",                type: "noun",      songContext: "Alle Uhren bleiben steh'n" },
  { id: 19, word: "Lachen",      ipa: "[ˈlaxən]",          en: "laughter / laughing",   es: "risa / reír",            type: "noun",      songContext: "Lachen ist nicht mehr gesund" },
  { id: 20, word: "Licht",       ipa: "[lɪçt]",            en: "light",                 es: "luz",                    type: "noun",      songContext: "Such ich dich hinter dem Licht" },
  { id: 21, word: "Stein",       ipa: "[ʃtaɪn]",           en: "stone",                 es: "piedra",                 type: "noun",      songContext: "Ich such dich unter jedem Stein" },
  { id: 22, word: "Messer",      ipa: "[ˈmɛsɐ]",           en: "knife",                 es: "cuchillo",               type: "noun",      songContext: "Ich schlaf mit einem Messer ein" },
  // Function words / adverbs from song
  { id: 23, word: "nicht",       ipa: "[nɪçt]",            en: "not",                   es: "no",                     type: "adverb",    songContext: "Ich liebe dich nicht mehr" },
  { id: 24, word: "mehr",        ipa: "[meːɐ̯]",            en: "more / anymore",        es: "más / ya no",            type: "adverb",    songContext: "Lachen ist nicht mehr gesund" },
  { id: 25, word: "noch",        ipa: "[nɔx]",             en: "still / yet",           es: "todavía / aún",          type: "adverb",    songContext: "Als du mich noch geliebt hast" },
  { id: 26, word: "bald",        ipa: "[balt]",            en: "soon",                  es: "pronto",                 type: "adverb",    songContext: "nicht mehr gesund und bald" },
  { id: 27, word: "hinter",      ipa: "[ˈhɪntɐ]",          en: "behind",                es: "detrás de",              type: "adverb",    songContext: "Such ich dich hinter dem Licht" },
  { id: 28, word: "oder",        ipa: "[ˈoːdɐ]",           en: "or",                    es: "o",                      type: "adverb",    songContext: "Oder weniger als du" },
  { id: 29, word: "weniger",     ipa: "[ˈveːnɪɡɐ]",        en: "less",                  es: "menos",                  type: "adverb",    songContext: "Oder weniger als du" },
  { id: 30, word: "als",         ipa: "[als]",             en: "as / than / when",      es: "como / que / cuando",    type: "adverb",    songContext: "Als du mich geliebt hast" },
];

// Type labels for display
export const VOCAB_TYPE_LABELS = {
  en: { question: "Question word", verb: "Verb", pronoun: "Pronoun", adjective: "Adjective", adverb: "Adverb", noun: "Noun", french: "French word" },
  es: { question: "Palabra interrogativa", verb: "Verbo", pronoun: "Pronombre", adjective: "Adjetivo", adverb: "Adverbio", noun: "Sustantivo", french: "Palabra francesa" }
};

// Song lyrics — Rammstein, "Wo bist du?", Rosenrot (2005)
// Bilingual: each line has es (Spanish original) + de (German original) + en (English translation)
export const WO_BIST_DU_LYRICS = [
  {
    label: { en: "Intro", es: "Intro" },
    lines: [
      { es: "Te amo",                        de: "Ich liebe dich",             en: "I love you" },
      { es: "ya no te quiero",               de: "Ich liebe dich nicht",       en: "I don't love you" },
      { es: "ya no te amo",                  de: "Ich liebe dich nicht mehr",  en: "I don't love you anymore" },
      { es: "ya no te amo",                  de: "Ich liebe dich nicht mehr",  en: "I don't love you anymore" },
    ]
  },
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { es: "ya no te amo",                  de: "Ich liebe dich nicht mehr",       en: "I don't love you anymore" },
      { es: "O menos que tú",                de: "Oder weniger als du",             en: "Or less than you" },
      { es: "cuando me amabas",              de: "Als du mich geliebt hast",        en: "When you loved me" },
      { es: "Cuando todavía me amabas",      de: "Als du mich noch geliebt hast",   en: "When you still loved me" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { es: "Las chicas hermosas no son hermosas",   de: "Die schönen Mädchen sind nicht schön",   en: "The beautiful girls are not beautiful" },
      { es: "Las manos cálidas son tan frías",       de: "Die warmen Hände sind so kalt",          en: "The warm hands are so cold" },
      { es: "Todos los relojes se detienen",         de: "Alle Uhren bleiben steh'n",              en: "All the clocks stand still" },
      { es: "La risa ya no es saludable y pronto",   de: "Lachen ist nicht mehr gesund und bald",  en: "Laughter is no longer healthy, and soon" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { es: "Te estoy buscando detrás de la luz",    de: "Such ich dich hinter dem Licht",    en: "I'm searching for you behind the light" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
      { es: "no quiero estar solo así",              de: "So allein will ich nicht sein",     en: "I don't want to be so alone" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
    ]
  },
  {
    label: { en: "Verse 2 (repeat)", es: "Estrofa 2 (rep.)" },
    lines: [
      { es: "Las chicas hermosas no son hermosas",   de: "Die schönen Mädchen sind nicht schön",   en: "The beautiful girls are not beautiful" },
      { es: "Las manos cálidas son tan frías",       de: "Die warmen Hände sind so kalt",          en: "The warm hands are so cold" },
      { es: "Todos los relojes se detienen",         de: "Alle Uhren bleiben steh'n",              en: "All the clocks stand still" },
      { es: "La risa ya no es saludable y pronto",   de: "Lachen ist nicht mehr gesund und bald",  en: "Laughter is no longer healthy, and soon" },
    ]
  },
  {
    label: { en: "Chorus 2", es: "Coro 2" },
    lines: [
      { es: "Te estoy buscando detrás de la luz",    de: "Ich suche dich hinter dem Licht",   en: "I'm searching for you behind the light" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
      { es: "no quiero estar solo así",              de: "So allein will ich nicht sein",     en: "I don't want to be so alone" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
    ]
  },
  {
    label: { en: "Bridge / Outro", es: "Puente / Outro" },
    lines: [
      { es: "Te busco debajo de cada piedra",        de: "Ich such dich unter jedem Stein",   en: "I search for you under every stone" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
      { es: "me quedo dormido con un cuchillo",      de: "Ich schlaf mit einem Messer ein",   en: "I fall asleep with a knife" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
    ]
  },
];
