// Common German nouns with gender (der/die/das) and plural forms.
// Used by GermanNounsPage (Cards, Gender Quiz, Plural Quiz).
//
// Fields:
//   noun    — singular noun without article (e.g. "Mann")
//   gender  — 'der' | 'die' | 'das'
//   plural  — plural noun without article (e.g. "Männer"); null if no plural
//   en / es — translations of the singular
//   emoji   — small visual mnemonic
//   cat     — category tag (informational; not currently filtered on)

export const GENDERS = ['der', 'die', 'das'];

export const GENDER_COLOR = {
  der: 'blue',   // masculine
  die: 'red',    // feminine (and plural forms)
  das: 'green',  // neuter
};

export const GERMAN_NOUNS = [
  // ── People ─────────────────────────────────────────────────────────────────
  { id: 1,  noun: 'Mann',      gender: 'der', plural: 'Männer',    en: 'man',        es: 'hombre',    emoji: '👨',  cat: 'people' },
  { id: 2,  noun: 'Frau',      gender: 'die', plural: 'Frauen',    en: 'woman',      es: 'mujer',     emoji: '👩',  cat: 'people' },
  { id: 3,  noun: 'Kind',      gender: 'das', plural: 'Kinder',    en: 'child',      es: 'niño/a',    emoji: '🧒',  cat: 'people' },
  { id: 4,  noun: 'Freund',    gender: 'der', plural: 'Freunde',   en: 'friend',     es: 'amigo',     emoji: '🤝',  cat: 'people' },
  { id: 5,  noun: 'Familie',   gender: 'die', plural: 'Familien',  en: 'family',     es: 'familia',   emoji: '👪',  cat: 'people' },
  { id: 6,  noun: 'Lehrer',    gender: 'der', plural: 'Lehrer',    en: 'teacher',    es: 'profesor',  emoji: '👨‍🏫', cat: 'people' },
  { id: 7,  noun: 'Schüler',   gender: 'der', plural: 'Schüler',   en: 'pupil',      es: 'alumno',    emoji: '🧑‍🎓', cat: 'people' },
  { id: 8,  noun: 'Mensch',    gender: 'der', plural: 'Menschen',  en: 'person',     es: 'persona',   emoji: '🧑',  cat: 'people' },

  // ── Home ───────────────────────────────────────────────────────────────────
  { id: 10, noun: 'Haus',      gender: 'das', plural: 'Häuser',    en: 'house',      es: 'casa',      emoji: '🏠',  cat: 'home' },
  { id: 11, noun: 'Wohnung',   gender: 'die', plural: 'Wohnungen', en: 'apartment',  es: 'apartamento', emoji: '🏢', cat: 'home' },
  { id: 12, noun: 'Zimmer',    gender: 'das', plural: 'Zimmer',    en: 'room',       es: 'habitación', emoji: '🚪',  cat: 'home' },
  { id: 13, noun: 'Küche',     gender: 'die', plural: 'Küchen',    en: 'kitchen',    es: 'cocina',    emoji: '🍳',  cat: 'home' },
  { id: 14, noun: 'Tür',       gender: 'die', plural: 'Türen',     en: 'door',       es: 'puerta',    emoji: '🚪',  cat: 'home' },
  { id: 15, noun: 'Fenster',   gender: 'das', plural: 'Fenster',   en: 'window',     es: 'ventana',   emoji: '🪟',  cat: 'home' },
  { id: 16, noun: 'Tisch',     gender: 'der', plural: 'Tische',    en: 'table',      es: 'mesa',      emoji: '🪑',  cat: 'home' },
  { id: 17, noun: 'Stuhl',     gender: 'der', plural: 'Stühle',    en: 'chair',      es: 'silla',     emoji: '🪑',  cat: 'home' },
  { id: 18, noun: 'Bett',      gender: 'das', plural: 'Betten',    en: 'bed',        es: 'cama',      emoji: '🛏️', cat: 'home' },
  { id: 19, noun: 'Garten',    gender: 'der', plural: 'Gärten',    en: 'garden',     es: 'jardín',    emoji: '🌱',  cat: 'home' },

  // ── Food & drink ───────────────────────────────────────────────────────────
  { id: 20, noun: 'Brot',      gender: 'das', plural: 'Brote',     en: 'bread',      es: 'pan',       emoji: '🍞',  cat: 'food' },
  { id: 21, noun: 'Apfel',     gender: 'der', plural: 'Äpfel',     en: 'apple',      es: 'manzana',   emoji: '🍎',  cat: 'food' },
  { id: 22, noun: 'Banane',    gender: 'die', plural: 'Bananen',   en: 'banana',     es: 'plátano',   emoji: '🍌',  cat: 'food' },
  { id: 23, noun: 'Ei',        gender: 'das', plural: 'Eier',      en: 'egg',        es: 'huevo',     emoji: '🥚',  cat: 'food' },
  { id: 24, noun: 'Käse',      gender: 'der', plural: 'Käse',      en: 'cheese',     es: 'queso',     emoji: '🧀',  cat: 'food' },
  { id: 25, noun: 'Wein',      gender: 'der', plural: 'Weine',     en: 'wine',       es: 'vino',      emoji: '🍷',  cat: 'food' },
  { id: 26, noun: 'Bier',      gender: 'das', plural: 'Biere',     en: 'beer',       es: 'cerveza',   emoji: '🍺',  cat: 'food' },
  { id: 27, noun: 'Kaffee',    gender: 'der', plural: 'Kaffees',   en: 'coffee',     es: 'café',      emoji: '☕',  cat: 'food' },
  { id: 28, noun: 'Wasser',    gender: 'das', plural: 'Wässer',    en: 'water',      es: 'agua',      emoji: '💧',  cat: 'food' },

  // ── Body ───────────────────────────────────────────────────────────────────
  { id: 30, noun: 'Hand',      gender: 'die', plural: 'Hände',     en: 'hand',       es: 'mano',      emoji: '✋',  cat: 'body' },
  { id: 31, noun: 'Fuß',       gender: 'der', plural: 'Füße',      en: 'foot',       es: 'pie',       emoji: '🦶',  cat: 'body' },
  { id: 32, noun: 'Kopf',      gender: 'der', plural: 'Köpfe',     en: 'head',       es: 'cabeza',    emoji: '🗣️', cat: 'body' },
  { id: 33, noun: 'Auge',      gender: 'das', plural: 'Augen',     en: 'eye',        es: 'ojo',       emoji: '👁️', cat: 'body' },
  { id: 34, noun: 'Ohr',       gender: 'das', plural: 'Ohren',     en: 'ear',        es: 'oreja',     emoji: '👂',  cat: 'body' },
  { id: 35, noun: 'Nase',      gender: 'die', plural: 'Nasen',     en: 'nose',       es: 'nariz',     emoji: '👃',  cat: 'body' },
  { id: 36, noun: 'Herz',      gender: 'das', plural: 'Herzen',    en: 'heart',      es: 'corazón',   emoji: '❤️', cat: 'body' },

  // ── Nature ─────────────────────────────────────────────────────────────────
  { id: 40, noun: 'Baum',      gender: 'der', plural: 'Bäume',     en: 'tree',       es: 'árbol',     emoji: '🌳',  cat: 'nature' },
  { id: 41, noun: 'Blume',     gender: 'die', plural: 'Blumen',    en: 'flower',     es: 'flor',      emoji: '🌸',  cat: 'nature' },
  { id: 42, noun: 'Sonne',     gender: 'die', plural: 'Sonnen',    en: 'sun',        es: 'sol',       emoji: '☀️', cat: 'nature' },
  { id: 43, noun: 'Mond',      gender: 'der', plural: 'Monde',     en: 'moon',       es: 'luna',      emoji: '🌙',  cat: 'nature' },
  { id: 44, noun: 'Stern',     gender: 'der', plural: 'Sterne',    en: 'star',       es: 'estrella',  emoji: '⭐',  cat: 'nature' },
  { id: 45, noun: 'Berg',      gender: 'der', plural: 'Berge',     en: 'mountain',   es: 'montaña',   emoji: '⛰️', cat: 'nature' },
  { id: 46, noun: 'Meer',      gender: 'das', plural: 'Meere',     en: 'sea',        es: 'mar',       emoji: '🌊',  cat: 'nature' },
  { id: 47, noun: 'Fluss',     gender: 'der', plural: 'Flüsse',    en: 'river',      es: 'río',       emoji: '🏞️', cat: 'nature' },
  { id: 48, noun: 'See',       gender: 'der', plural: 'Seen',      en: 'lake',       es: 'lago',      emoji: '🏖️', cat: 'nature' },

  // ── Animals ────────────────────────────────────────────────────────────────
  { id: 50, noun: 'Hund',      gender: 'der', plural: 'Hunde',     en: 'dog',        es: 'perro',     emoji: '🐕',  cat: 'animal' },
  { id: 51, noun: 'Katze',     gender: 'die', plural: 'Katzen',    en: 'cat',        es: 'gato',      emoji: '🐈',  cat: 'animal' },
  { id: 52, noun: 'Vogel',     gender: 'der', plural: 'Vögel',     en: 'bird',       es: 'pájaro',    emoji: '🐦',  cat: 'animal' },
  { id: 53, noun: 'Fisch',     gender: 'der', plural: 'Fische',    en: 'fish',       es: 'pez',       emoji: '🐟',  cat: 'animal' },
  { id: 54, noun: 'Pferd',     gender: 'das', plural: 'Pferde',    en: 'horse',      es: 'caballo',   emoji: '🐎',  cat: 'animal' },

  // ── Transport & city ───────────────────────────────────────────────────────
  { id: 60, noun: 'Auto',      gender: 'das', plural: 'Autos',     en: 'car',        es: 'auto',      emoji: '🚗',  cat: 'transport' },
  { id: 61, noun: 'Zug',       gender: 'der', plural: 'Züge',      en: 'train',      es: 'tren',      emoji: '🚆',  cat: 'transport' },
  { id: 62, noun: 'Fahrrad',   gender: 'das', plural: 'Fahrräder', en: 'bicycle',    es: 'bicicleta', emoji: '🚲',  cat: 'transport' },
  { id: 63, noun: 'Stadt',     gender: 'die', plural: 'Städte',    en: 'city',       es: 'ciudad',    emoji: '🏙️', cat: 'city' },
  { id: 64, noun: 'Land',      gender: 'das', plural: 'Länder',    en: 'country',    es: 'país',      emoji: '🗺️', cat: 'city' },
  { id: 65, noun: 'Straße',    gender: 'die', plural: 'Straßen',   en: 'street',     es: 'calle',     emoji: '🛣️', cat: 'city' },

  // ── School & work ──────────────────────────────────────────────────────────
  { id: 70, noun: 'Schule',    gender: 'die', plural: 'Schulen',   en: 'school',     es: 'escuela',   emoji: '🏫',  cat: 'school' },
  { id: 71, noun: 'Buch',      gender: 'das', plural: 'Bücher',    en: 'book',       es: 'libro',     emoji: '📖',  cat: 'school' },
  { id: 72, noun: 'Stift',     gender: 'der', plural: 'Stifte',    en: 'pen',        es: 'bolígrafo', emoji: '🖊️', cat: 'school' },
  { id: 73, noun: 'Zeitung',   gender: 'die', plural: 'Zeitungen', en: 'newspaper',  es: 'periódico', emoji: '📰',  cat: 'school' },
  { id: 74, noun: 'Arbeit',    gender: 'die', plural: 'Arbeiten',  en: 'work',       es: 'trabajo',   emoji: '💼',  cat: 'school' },

  // ── Time ───────────────────────────────────────────────────────────────────
  { id: 80, noun: 'Tag',       gender: 'der', plural: 'Tage',      en: 'day',        es: 'día',       emoji: '📅',  cat: 'time' },
  { id: 81, noun: 'Nacht',     gender: 'die', plural: 'Nächte',    en: 'night',      es: 'noche',     emoji: '🌃',  cat: 'time' },
  { id: 82, noun: 'Jahr',      gender: 'das', plural: 'Jahre',     en: 'year',       es: 'año',       emoji: '🗓️', cat: 'time' },
  { id: 83, noun: 'Woche',     gender: 'die', plural: 'Wochen',    en: 'week',       es: 'semana',    emoji: '📆',  cat: 'time' },
  { id: 84, noun: 'Monat',     gender: 'der', plural: 'Monate',    en: 'month',      es: 'mes',       emoji: '🗓️', cat: 'time' },
  { id: 85, noun: 'Stunde',    gender: 'die', plural: 'Stunden',   en: 'hour',       es: 'hora',      emoji: '⏰',  cat: 'time' },
];
