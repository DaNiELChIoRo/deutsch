// Vocabulary and lyrics for "Amour" — Rammstein, Reise, Reise (2004)
// German song — vocabulary taken directly from the real lyrics.

export const AMOUR_VOCAB = [
  // The title word (French loanword used in the chorus)
  { id: 1,  word: "amour",        ipa: "[aˈmuːʁ]",         en: "love (French loanword)",    es: "amor (préstamo francés)",    type: "french" },
  // Nouns from the lyrics
  { id: 2,  word: "Liebe",        ipa: "[ˈliːbə]",          en: "love",                      es: "amor",                       type: "noun" },
  { id: 3,  word: "Tier",         ipa: "[tiːɐ̯]",            en: "animal / beast",            es: "animal / bestia",            type: "noun" },
  { id: 4,  word: "Herz",         ipa: "[hɛʁts]",           en: "heart",                     es: "corazón",                    type: "noun" },
  { id: 5,  word: "Jagd",         ipa: "[jaːkt]",           en: "hunt / chase",              es: "caza / cacería",             type: "noun" },
  { id: 6,  word: "Kuss",         ipa: "[kʊs]",             en: "kiss",                      es: "beso",                       type: "noun" },
  { id: 7,  word: "Kerzen",       ipa: "[ˈkɛʁtsən]",        en: "candles",                   es: "velas",                      type: "noun" },
  { id: 8,  word: "Lippen",       ipa: "[ˈlɪpən]",          en: "lips",                      es: "labios",                     type: "noun" },
  { id: 9,  word: "Rippen",       ipa: "[ˈʁɪpən]",          en: "ribs",                      es: "costillas",                  type: "noun" },
  { id: 10, word: "Schnee",       ipa: "[ʃneː]",            en: "snow",                      es: "nieve",                      type: "noun" },
  { id: 11, word: "Ende",         ipa: "[ˈɛndə]",           en: "end",                       es: "fin / final",                type: "noun" },
  { id: 12, word: "Zähne",        ipa: "[ˈtsɛːnə]",         en: "teeth",                     es: "dientes",                    type: "noun" },
  { id: 13, word: "Arme",         ipa: "[ˈaʁmə]",           en: "arms",                      es: "brazos",                     type: "noun" },
  { id: 14, word: "Liebesnest",   ipa: "[ˈliːbəsˌnɛst]",   en: "love nest",                 es: "nido de amor",               type: "noun" },
  { id: 15, word: "Haut",         ipa: "[haʊt]",            en: "skin",                      es: "piel",                       type: "noun" },
  { id: 16, word: "Haare",        ipa: "[ˈhaːʁə]",          en: "hair",                      es: "cabellos / pelo",            type: "noun" },
  { id: 17, word: "Falle",        ipa: "[ˈfalə]",           en: "trap",                      es: "trampa",                     type: "noun" },
  { id: 18, word: "Augen",        ipa: "[ˈaʊɡən]",          en: "eyes",                      es: "ojos",                       type: "noun" },
  { id: 19, word: "Blick",        ipa: "[blɪk]",            en: "gaze / glance",             es: "mirada / vistazo",           type: "noun" },
  { id: 20, word: "Gift",         ipa: "[ɡɪft]",            en: "poison",                    es: "veneno",                     type: "noun" },
  // Verbs from the lyrics
  { id: 21, word: "atmen",        ipa: "[ˈaːtmən]",         en: "to breathe",                es: "respirar",                   type: "verb" },
  { id: 22, word: "suchen",       ipa: "[ˈzuːxən]",         en: "to search / look for",      es: "buscar",                     type: "verb" },
  { id: 23, word: "fallen",       ipa: "[ˈfalən]",           en: "to fall",                   es: "caer",                       type: "verb" },
  { id: 24, word: "beißen",       ipa: "[ˈbaɪsən]",         en: "to bite",                   es: "morder",                     type: "verb" },
  { id: 25, word: "kratzen",      ipa: "[ˈkʁatsən]",        en: "to scratch",                es: "arañar / rasguñar",          type: "verb" },
  { id: 26, word: "zähmen",       ipa: "[ˈtsɛːmən]",        en: "to tame",                   es: "domar / domesticar",         type: "verb" },
  { id: 27, word: "starren",      ipa: "[ˈʃtaʁən]",         en: "to stare",                  es: "mirar fijamente",            type: "verb" },
  { id: 28, word: "verzaubern",   ipa: "[fɛɐ̯ˈtsaʊbɐn]",    en: "to enchant / bewitch",      es: "encantar / hechizar",        type: "verb" },
  // Adjectives / adverbs
  { id: 29, word: "wild",         ipa: "[vɪlt]",            en: "wild / fierce",             es: "salvaje / feroz",            type: "adjective" },
  { id: 30, word: "gefangen",     ipa: "[ɡəˈfaŋən]",        en: "trapped / captive",         es: "atrapado / cautivo",         type: "adjective" },
];

// Song lyrics — Rammstein, "Amour", Reise, Reise (2004)
// German originals with English translations.
export const AMOUR_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "Die Liebe ist ein wildes Tier",                    en: "Love is a wild beast" },
      { de: "Sie atmet dich, sie sucht nach dir",               en: "It breathes you, it searches for you" },
      { de: "Nistet auf gebrochenem Herz",                      en: "Nests on a broken heart" },
      { de: "Und geht auf Jagd bei Kuss und Kerzen",            en: "And goes hunting by kiss and candlelight" },
      { de: "Saugt sich fest an deinen Lippen",                 en: "Clings fast to your lips" },
      { de: "Gräbt sich Dinge durch die Rippen",                en: "Digs things through the ribs" },
      { de: "Lässt sich fallen, weiß wie Schnee",               en: "Lets itself fall, white as snow" },
      { de: "Erst wird es heiß, dann kalt, am Ende tut es weh", en: "First it gets hot, then cold, in the end it hurts" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Alle wollen nur",                   en: "Everyone only wants" },
      { de: "Dich zähmen",                       en: "To tame you" },
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Am Ende",                           en: "In the end" },
      { de: "Gefangen zwischen deinen Zähnen",   en: "Trapped between your teeth" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "Die Liebe ist ein wildes Tier",                    en: "Love is a wild beast" },
      { de: "Sie beißt und kratzt und tritt nach mir",          en: "It bites and scratches and kicks at me" },
      { de: "Hält mich mit tausend Armen fest",                 en: "Holds me tight with a thousand arms" },
      { de: "Zerrt mich in ihr Liebesnest",                     en: "Drags me into its love nest" },
    ]
  },
  {
    label: { en: "Verse 2 (cont.)", es: "Estrofa 2 (cont.)" },
    lines: [
      { de: "Frisst mich auf mit Haut und Haaren",              en: "Devours me, skin and hair" },
      { de: "Und wirbt mich wieder aus nach Tag und Jahr",      en: "And sheds me again after days and years" },
      { de: "Lässt sich fallen, weich wie Schnee",              en: "Lets itself fall, soft as snow" },
      { de: "Erst wird es heiß, dann kalt, am Ende tut es weh", en: "First it gets hot, then cold, in the end it hurts" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Alle wollen nur",                   en: "Everyone only wants" },
      { de: "Dich zähmen",                       en: "To tame you" },
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Am Ende",                           en: "In the end" },
      { de: "Gefangen zwischen deinen Zähnen",   en: "Trapped between your teeth" },
    ]
  },
  {
    label: { en: "Chorus (repeat)", es: "Coro (rep.)" },
    lines: [
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Alle wollen nur",                   en: "Everyone only wants" },
      { de: "Dich zähmen",                       en: "To tame you" },
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Am Ende",                           en: "In the end" },
      { de: "Gefangen zwischen deinen Zähnen",   en: "Trapped between your teeth" },
    ]
  },
  {
    label: { en: "Verse 3", es: "Estrofa 3" },
    lines: [
      { de: "Die Liebe ist ein wildes Tier",                    en: "Love is a wild beast" },
      { de: "Sie atmet dich, sie sucht nach dir",               en: "It breathes you, it searches for you" },
      { de: "Nistet auf gebrochenem Herz",                      en: "Nests on a broken heart" },
      { de: "Und geht auf Jagd bei Kuss und Kerzen",            en: "And goes hunting by kiss and candlelight" },
      { de: "Frisst mich auf mit Haut und Haaren",              en: "Devours me, skin and hair" },
      { de: "Und wirbt mich wieder aus nach Tag und Jahr",      en: "And sheds me again after days and years" },
      { de: "Lässt sich fallen, weiß wie Schnee",               en: "Lets itself fall, white as snow" },
      { de: "Erst wird es heiß, dann kalt, am Ende tut es weh", en: "First it gets hot, then cold, in the end it hurts" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Alle wollen nur",                   en: "Everyone only wants" },
      { de: "Dich zähmen",                       en: "To tame you" },
      { de: "Amour, amour",                      en: "Amour, amour" },
      { de: "Am Ende",                           en: "In the end" },
      { de: "Gefangen zwischen deinen Zähnen",   en: "Trapped between your teeth" },
    ]
  },
  {
    label: { en: "Bridge", es: "Puente" },
    lines: [
      { de: "Die Liebe ist ein wildes Tier",          en: "Love is a wild beast" },
      { de: "In die Falle gehst du ihr",              en: "Into the trap you go for it" },
      { de: "In die Augen starrt sie dir",            en: "It stares into your eyes" },
      { de: "Verzaubert wenn ihr Blick dich trifft",  en: "Enchanted when its gaze meets you" },
    ]
  },
  {
    label: { en: "Bridge (repeat)", es: "Puente (rep.)" },
    lines: [
      { de: "Die Liebe",                              en: "Love" },
      { de: "Die Liebe ist ein wildes Tier",          en: "Love is a wild beast" },
      { de: "In die Falle gehst du ihr",              en: "Into the trap you go for it" },
      { de: "In die Augen starrt sie dir",            en: "It stares into your eyes" },
      { de: "Verzaubert wenn ihr Blick dich trifft",  en: "Enchanted when its gaze meets you" },
    ]
  },
  {
    label: { en: "Outro", es: "Outro" },
    lines: [
      { de: "Bitte, bitte, gib' mir Gift",  en: "Please, please, give me poison" },
      { de: "Bitte, bitte, gib' mir Gift",  en: "Please, please, give me poison" },
      { de: "Bitte, bitte, gib' mir Gift",  en: "Please, please, give me poison" },
      { de: "Bitte, bitte, gib' mir Gift",  en: "Please, please, give me poison" },
    ]
  },
];
