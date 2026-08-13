// W-Fragen — German question words

export const W_FRAGEN_VOCAB = [
  // ── Person ──────────────────────────────────────────────────────────────────
  { id: 1,  word: "Wer",       ipa: "[veːɐ̯]",      en: "Who (subject)",           es: "Quién (sujeto)",          type: "person",    songContext: "Wer ist das?" },
  { id: 2,  word: "Wen",       ipa: "[veːn]",       en: "Whom (accusative)",       es: "A quién (acus.)",         type: "person",    songContext: "Wen siehst du?" },
  { id: 3,  word: "Wem",       ipa: "[veːm]",       en: "To whom (dative)",        es: "A quién (dat.)",          type: "person",    songContext: "Wem gibst du das?" },
  { id: 4,  word: "Wessen",    ipa: "[ˈvɛsən]",     en: "Whose (genitive)",        es: "De quién (gen.)",         type: "person",    songContext: "Wessen Buch ist das?" },
  // ── Thing ───────────────────────────────────────────────────────────────────
  { id: 5,  word: "Was",       ipa: "[vas]",         en: "What",                    es: "Qué",                     type: "thing",     songContext: "Was machst du?" },
  // ── Place ───────────────────────────────────────────────────────────────────
  { id: 6,  word: "Wo",        ipa: "[voː]",         en: "Where (static location)", es: "Dónde (ubicación)",       type: "place",     songContext: "Wo wohnst du?" },
  { id: 7,  word: "Wohin",     ipa: "[voˈhɪn]",      en: "Where to (destination)",  es: "Adónde (destino)",        type: "place",     songContext: "Wohin fährst du?" },
  { id: 8,  word: "Woher",     ipa: "[voˈheːɐ̯]",     en: "Where from (origin)",     es: "De dónde (origen)",       type: "place",     songContext: "Woher kommst du?" },
  // ── Time ────────────────────────────────────────────────────────────────────
  { id: 9,  word: "Wann",      ipa: "[van]",         en: "When",                    es: "Cuándo",                  type: "time",      songContext: "Wann beginnt der Film?" },
  // ── Reason ──────────────────────────────────────────────────────────────────
  { id: 10, word: "Warum",     ipa: "[vaˈʁʊm]",      en: "Why",                     es: "Por qué",                 type: "reason",    songContext: "Warum lernst du Deutsch?" },
  // ── Manner ──────────────────────────────────────────────────────────────────
  { id: 11, word: "Wie",       ipa: "[viː]",         en: "How",                     es: "Cómo",                    type: "manner",    songContext: "Wie geht es dir?" },
  // ── Quantity ────────────────────────────────────────────────────────────────
  { id: 12, word: "Wie viel",  ipa: "[viː fiːl]",    en: "How much (uncountable)",  es: "Cuánto/a",                type: "quantity",  songContext: "Wie viel kostet das?" },
  { id: 13, word: "Wie viele", ipa: "[viː ˈfiːlə]",  en: "How many (countable)",    es: "Cuántos/as",              type: "quantity",  songContext: "Wie viele Leute kommen?" },
  // ── Selection ───────────────────────────────────────────────────────────────
  { id: 14, word: "Welcher",   ipa: "[ˈvɛlçɐ]",      en: "Which (masc. nom.)",      es: "Cuál (masc. nom.)",       type: "selection", songContext: "Welcher Zug fährt nach Berlin?" },
  { id: 15, word: "Welche",    ipa: "[ˈvɛlçə]",      en: "Which (fem. / plural)",   es: "Cuál (fem. / plural)",    type: "selection", songContext: "Welche Sprache sprichst du?" },
  { id: 16, word: "Welches",   ipa: "[ˈvɛlçəs]",     en: "Which (neut. nom./acc.)", es: "Cuál (neut. nom./ac.)",   type: "selection", songContext: "Welches Restaurant magst du?" },
];

export const W_FRAGEN_TYPE_LABELS = {
  en: {
    person:    "Person (Wer/Wen/Wem)",
    thing:     "Thing (Was)",
    place:     "Place (Wo/Wohin/Woher)",
    time:      "Time (Wann)",
    reason:    "Reason (Warum)",
    manner:    "Manner (Wie)",
    quantity:  "Quantity (Wie viel/viele)",
    selection: "Selection (Welch-)",
  },
  es: {
    person:    "Persona (Wer/Wen/Wem)",
    thing:     "Cosa (Was)",
    place:     "Lugar (Wo/Wohin/Woher)",
    time:      "Tiempo (Wann)",
    reason:    "Razón (Warum)",
    manner:    "Modo (Wie)",
    quantity:  "Cantidad (Wie viel/viele)",
    selection: "Selección (Welch-)",
  },
};

// Example sentences used in the "Examples" tab — grouped by category
export const W_FRAGEN_EXAMPLES = [
  {
    label: { en: "Person — Wer / Wen / Wem / Wessen", es: "Persona — Wer / Wen / Wem / Wessen" },
    lines: [
      { de: "Wer ist das?",                    en: "Who is that?",                       pron: "Who = Nominative (subject)" },
      { de: "Wer kommt heute?",                en: "Who is coming today?" },
      { de: "Wen siehst du?",                  en: "Whom do you see?",                   pron: "Wen = Accusative (direct object)" },
      { de: "Wem gibst du das Buch?",          en: "To whom are you giving the book?",   pron: "Wem = Dative (indirect object)" },
      { de: "Wessen Tasche ist das?",          en: "Whose bag is that?",                 pron: "Wessen = Genitive (possession)" },
    ]
  },
  {
    label: { en: "Thing — Was", es: "Cosa — Was" },
    lines: [
      { de: "Was machst du?",                  en: "What are you doing?" },
      { de: "Was ist das?",                    en: "What is that?" },
      { de: "Was möchtest du essen?",          en: "What would you like to eat?" },
      { de: "Was bedeutet dieses Wort?",       en: "What does this word mean?" },
    ]
  },
  {
    label: { en: "Place — Wo / Wohin / Woher", es: "Lugar — Wo / Wohin / Woher" },
    lines: [
      { de: "Wo wohnst du?",                   en: "Where do you live?",                 pron: "Wo = static location (sein, liegen…)" },
      { de: "Wo ist die Bibliothek?",          en: "Where is the library?" },
      { de: "Wohin fährst du?",                en: "Where are you going?",               pron: "Wohin = movement toward (fahren, gehen…)" },
      { de: "Woher kommst du?",                en: "Where are you from?",                pron: "Woher = origin (kommen, stammen…)" },
      { de: "Woher weißt du das?",             en: "How do you know that? (lit. Where from do you know that?)" },
    ]
  },
  {
    label: { en: "Time — Wann", es: "Tiempo — Wann" },
    lines: [
      { de: "Wann beginnt der Film?",          en: "When does the film start?" },
      { de: "Wann hast du Geburtstag?",        en: "When is your birthday?" },
      { de: "Wann schläfst du normalerweise?", en: "When do you usually sleep?" },
    ]
  },
  {
    label: { en: "Reason — Warum", es: "Razón — Warum" },
    lines: [
      { de: "Warum lernst du Deutsch?",        en: "Why are you learning German?" },
      { de: "Warum bist du traurig?",          en: "Why are you sad?" },
      { de: "Warum ist der Himmel blau?",      en: "Why is the sky blue?" },
    ]
  },
  {
    label: { en: "Manner — Wie", es: "Modo — Wie" },
    lines: [
      { de: "Wie geht es dir?",                en: "How are you?" },
      { de: "Wie heißt du?",                   en: "What is your name? (lit. How are you called?)" },
      { de: "Wie komme ich zum Bahnhof?",      en: "How do I get to the train station?" },
      { de: "Wie alt bist du?",                en: "How old are you?" },
    ]
  },
  {
    label: { en: "Quantity — Wie viel / Wie viele", es: "Cantidad — Wie viel / Wie viele" },
    lines: [
      { de: "Wie viel kostet das?",            en: "How much does it cost?",             pron: "Wie viel = uncountable / mass noun" },
      { de: "Wie viel Zeit hast du?",          en: "How much time do you have?" },
      { de: "Wie viele Leute kommen?",         en: "How many people are coming?",        pron: "Wie viele = countable (plural noun)" },
      { de: "Wie viele Sprachen sprichst du?", en: "How many languages do you speak?" },
    ]
  },
  {
    label: { en: "Selection — Welcher / Welche / Welches", es: "Selección — Welcher / Welche / Welches" },
    lines: [
      { de: "Welcher Zug fährt nach Berlin?",  en: "Which train goes to Berlin?",        pron: "Welcher = masc. nominative (der Zug)" },
      { de: "Welche Sprache sprichst du?",     en: "Which language do you speak?",       pron: "Welche = fem. nom. / plural (die Sprache)" },
      { de: "Welches Restaurant magst du?",    en: "Which restaurant do you like?",      pron: "Welches = neut. nom./acc. (das Restaurant)" },
      { de: "Welchen Film möchtest du sehen?", en: "Which film would you like to see?",  pron: "Welchen = masc. accusative" },
    ]
  },
];
