// Vocabulary and lyrics for "Stirb nicht vor mir (Don't Die Before I Do)"
// Rammstein feat. Sharleen Spiteri — Rosenrot (2005)
// Bilingual duet: Till Lindemann (DE) + Sharleen Spiteri (EN)
// English lines stored in line.es and displayed with 🇬🇧 flag via altFlag prop.

export const STIRB_NICHT_VOCAB = [
  // Nouns
  { id: 1,  word: "Nacht",        ipa: "[naxt]",            en: "night",                      es: "noche",                     type: "noun",      songContext: "Die Nacht öffnet ihren Schoß" },
  { id: 2,  word: "Schoß",        ipa: "[ʃoːs]",            en: "lap / bosom / womb",         es: "regazo / seno",             type: "noun",      songContext: "Die Nacht öffnet ihren Schoß" },
  { id: 3,  word: "Kind",         ipa: "[kɪnt]",            en: "child",                      es: "niño/a",                    type: "noun",      songContext: "Das Kind heißt Einsamkeit" },
  { id: 4,  word: "Einsamkeit",   ipa: "[ˈaɪnzamkaɪt]",    en: "loneliness / solitude",      es: "soledad",                   type: "noun",      songContext: "Das Kind heißt Einsamkeit" },
  { id: 5,  word: "Zeit",         ipa: "[tsaɪt]",           en: "time",                       es: "tiempo",                    type: "noun",      songContext: "Ich weine leise in die Zeit" },
  { id: 6,  word: "Häuser",       ipa: "[ˈhɔɪzɐ]",          en: "houses",                     es: "casas",                     type: "noun",      songContext: "Alle Häuser sind verschneit" },
  { id: 7,  word: "Fenster",      ipa: "[ˈfɛnstɐ]",         en: "window",                     es: "ventana",                   type: "noun",      songContext: "Und in den Fenstern Kerzenlicht" },
  { id: 8,  word: "Kerzenlicht",  ipa: "[ˈkɛʁtsənlɪçt]",   en: "candlelight",                es: "luz de velas",              type: "noun",      songContext: "Und in den Fenstern Kerzenlicht" },
  // Verbs
  { id: 9,  word: "sterben",      ipa: "[ˈʃtɛʁbən]",        en: "to die",                     es: "morir",                     type: "verb",      songContext: "Stirb nicht vor mir" },
  { id: 10, word: "warten",       ipa: "[ˈvaʁtən]",         en: "to wait",                    es: "esperar",                   type: "verb",      songContext: "Ich warte hier" },
  { id: 11, word: "weinen",       ipa: "[ˈvaɪnən]",         en: "to cry",                     es: "llorar",                    type: "verb",      songContext: "Ich weine leise in die Zeit" },
  { id: 12, word: "wissen",       ipa: "[ˈvɪsən]",          en: "to know",                    es: "saber",                     type: "verb",      songContext: "Ich weiß nicht, wie du heißt" },
  { id: 13, word: "heißen",       ipa: "[ˈhaɪsən]",         en: "to be called / to be named", es: "llamarse",                  type: "verb",      songContext: "Das Kind heißt Einsamkeit" },
  { id: 14, word: "lieben",       ipa: "[ˈliːbən]",         en: "to love",                    es: "amar",                      type: "verb",      songContext: "Irgendwer mich liebt" },
  { id: 15, word: "liegen",       ipa: "[ˈliːɡən]",         en: "to lie / to rest",           es: "estar acostado / yacer",    type: "verb",      songContext: "Dort liegen sie zu zweit" },
  { id: 16, word: "öffnen",       ipa: "[ˈœfnən]",          en: "to open",                    es: "abrir",                     type: "verb",      songContext: "Die Nacht öffnet ihren Schoß" },
  // Adjectives / adverbs / phrases
  { id: 17, word: "kalt",         ipa: "[kalt]",            en: "cold",                       es: "frío/a",                    type: "adjective", songContext: "Es ist kalt und regungslos" },
  { id: 18, word: "regungslos",   ipa: "[ˈʁeːɡʊŋsloːs]",   en: "motionless / still",         es: "inmóvil / quieto",          type: "adjective", songContext: "Es ist kalt und regungslos" },
  { id: 19, word: "verschneit",   ipa: "[fɛɐ̯ˈʃnaɪt]",      en: "covered in snow / snowy",    es: "nevado/a / cubierto de nieve", type: "adjective", songContext: "Alle Häuser sind verschneit" },
  { id: 20, word: "leise",        ipa: "[ˈlaɪzə]",          en: "quietly / softly",           es: "en silencio / suavemente",  type: "adverb",    songContext: "Ich weine leise in die Zeit" },
  { id: 21, word: "irgendwann",   ipa: "[ˈɪʁɡəntvann]",    en: "sometime / eventually",      es: "algún día / en algún momento", type: "adverb", songContext: "Ich weiß, dass irgendwann" },
  { id: 22, word: "zu zweit",     ipa: "[tsuː tsvaɪt]",     en: "together (as two) / as a couple", es: "en pareja / de dos",   type: "phrase",    songContext: "Dort liegen sie zu zweit" },
  { id: 23, word: "nicht",        ipa: "[nɪçt]",            en: "not",                        es: "no",                        type: "adverb",    songContext: "Stirb nicht vor mir" },
  { id: 24, word: "vor",          ipa: "[foːɐ̯]",            en: "before / in front of",       es: "antes de / delante de",     type: "adverb",    songContext: "Stirb nicht vor mir" },
];

// Refrain lines (reused across sections)
// Till lines: { de, en } — Sharleen lines: { es } (🇬🇧 flag rendered by altFlag prop)
const REFRAIN = [
  { de: "Ich warte hier",                          en: "I wait here" },
  { es: "Don't die before I do" },
  { de: "Ich warte hier",                          en: "I wait here" },
  { de: "Stirb nicht vor mir",                     en: "Don't die before me" },
  { es: "I don't know who you are" },
  { es: "I know that you exist" },
  { de: "Stirb nicht",                             en: "Don't die" },
  { es: "Sometimes love seems so far" },
  { de: "Ich warte hier",                          en: "I wait here" },
  { es: "Your love I can't dismiss" },
];

export const STIRB_NICHT_LYRICS = [
  {
    label: { en: "Verse 1 — Till", es: "Estrofa 1 — Till" },
    lines: [
      { de: "Die Nacht öffnet ihren Schoß",          en: "The night opens her womb" },
      { de: "Das Kind heißt Einsamkeit",              en: "The child's name is loneliness" },
      { de: "Es ist kalt und regungslos",             en: "It is cold and motionless" },
      { de: "Ich weine leise in die Zeit",            en: "I cry softly into time" },
      { de: "Ich weiß nicht, wie du heißt",          en: "I don't know your name" },
      { de: "Doch ich weiß, dass es dich gibt",      en: "But I know that you exist" },
      { de: "Ich weiß, dass irgendwann",             en: "I know that someday" },
      { de: "Irgendwer mich liebt",                  en: "Someone will love me" },
    ],
  },
  {
    label: { en: "Verse 2 — Sharleen", es: "Estrofa 2 — Sharleen" },
    lines: [
      { es: "He comes to me every night" },
      { es: "No words are left to say" },
      { es: "With his hands around my neck" },
      { es: "I close my eyes and pass away" },
      { es: "I don't know who he is" },
      { es: "In my dreams he does exist" },
      { es: "His passion is a kiss" },
      { es: "And I can not resist" },
    ],
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: REFRAIN,
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: REFRAIN,
  },
  {
    label: { en: "Post-chorus — Till", es: "Post-coro — Till" },
    lines: [
      { de: "Ich warte hier",                        en: "I wait here" },
    ],
  },
  {
    label: { en: "Verse 3 — Till", es: "Estrofa 3 — Till" },
    lines: [
      { de: "Alle Häuser sind verschneit",           en: "All the houses are covered in snow" },
      { de: "Und in den Fenstern Kerzenlicht",       en: "And candlelight in the windows" },
      { de: "Dort liegen sie zu zweit",              en: "There they lie together as two" },
      { de: "Und ich, ich warte nur auf dich",       en: "And I, I only wait for you" },
    ],
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: REFRAIN,
  },
  {
    label: { en: "Outro — Till", es: "Outro — Till" },
    lines: [
      { de: "Stirb nicht vor mir",                   en: "Don't die before me" },
    ],
  },
];
