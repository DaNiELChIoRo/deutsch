// Vocabulary and lyrics for "Ein Lied" — Rammstein, Rosenrot (2005)

export const EIN_LIED_VOCAB = [
  // Nouns
  { id: 1,  word: 'Lied',          ipa: '[liːt]',           en: 'song',                          es: 'canción',                       type: 'noun'      },
  { id: 2,  word: 'Musik',         ipa: '[muˈziːk]',        en: 'music',                         es: 'música',                        type: 'noun'      },
  { id: 3,  word: 'Diener',        ipa: '[ˈdiːnɐ]',         en: 'servant',                       es: 'sirviente',                     type: 'noun'      },
  { id: 4,  word: 'Ohr',           ipa: '[oːɐ]',            en: 'ear',                           es: 'oído / oreja',                  type: 'noun'      },
  { id: 5,  word: 'Liederbuch',    ipa: '[ˈliːdɐbʊx]',      en: 'songbook',                      es: 'cancionero',                    type: 'noun'      },
  { id: 6,  word: 'Sünde',         ipa: '[ˈzʏndə]',         en: 'sin',                           es: 'pecado',                        type: 'noun'      },
  { id: 7,  word: 'Himmel',        ipa: '[ˈhɪməl]',         en: 'sky / heaven',                  es: 'cielo',                         type: 'noun'      },
  { id: 8,  word: 'Himmelslicht',  ipa: '[ˈhɪməlslɪçt]',    en: 'heavenly light',                es: 'luz celestial',                 type: 'noun'      },
  { id: 9,  word: 'Besuch',        ipa: '[bəˈzuːx]',        en: 'visit / visitor',               es: 'visita',                        type: 'noun'      },
  { id: 10, word: 'Weg',           ipa: '[veːk]',           en: 'way / path',                    es: 'camino / vía',                  type: 'noun'      },
  { id: 11, word: 'Händchen',      ipa: '[ˈhɛntçən]',       en: 'little hand (affectionate)',    es: 'manita',                        type: 'noun'      },
  { id: 12, word: 'Sonne',         ipa: '[ˈzɔnə]',          en: 'sun',                           es: 'sol',                           type: 'noun'      },

  // Verbs
  { id: 13, word: 'vergeben',      ipa: '[fɛɐˈɡeːbən]',     en: 'to forgive',                    es: 'perdonar',                      type: 'verb'      },
  { id: 14, word: 'spielen',       ipa: '[ˈʃpiːlən]',       en: 'to play (music)',               es: 'tocar / jugar',                 type: 'verb'      },
  { id: 15, word: 'schlafen',      ipa: '[ˈʃlaːfən]',       en: 'to sleep',                      es: 'dormir',                        type: 'verb'      },
  { id: 16, word: 'brechen',       ipa: '[ˈbʁɛçən]',        en: 'to break',                      es: 'romper',                        type: 'verb'      },
  { id: 17, word: 'fallen',        ipa: '[ˈfalən]',         en: 'to fall',                       es: 'caer',                          type: 'verb'      },
  { id: 18, word: 'vergönnen',     ipa: '[fɛɐˈɡœnən]',      en: 'to grant / bestow',             es: 'conceder / otorgar',            type: 'verb'      },
  { id: 19, word: 'schielen',      ipa: '[ˈʃiːlən]',        en: 'to squint / to covet',          es: 'bizquear / codiciar',           type: 'verb'      },
  { id: 20, word: 'leben',         ipa: '[ˈleːbən]',        en: 'to live',                       es: 'vivir',                         type: 'verb'      },

  // Adjectives / adverbs
  { id: 21, word: 'traurig',       ipa: '[ˈtʁaʊʁɪç]',       en: 'sad',                           es: 'triste',                        type: 'adjective' },
  { id: 22, word: 'brav',          ipa: '[bʁaːf]',          en: 'well-behaved / obedient',       es: 'obediente / bueno/a',           type: 'adjective' },
  { id: 23, word: 'weich',         ipa: '[vaɪç]',           en: 'soft / gentle',                 es: 'suave / tierno/a',              type: 'adjective' },
  { id: 24, word: 'gut',           ipa: '[ɡuːt]',           en: 'good',                          es: 'bueno/a',                       type: 'adjective' },

  // Phrases
  { id: 25, word: 'für euch',      ipa: '[fyːɐ ɔɪç]',       en: 'for you (plural)',              es: 'para vosotros / para ustedes',  type: 'phrase'    },
  { id: 26, word: 'Händchen geben',ipa: '[ˈhɛntçən ˈɡeːbən]',en: 'to hold hands',               es: 'darse la mano',                 type: 'phrase'    },
];

export const EIN_LIED_LYRICS = [
  {
    label: { en: 'Intro', es: 'Intro' },
    lines: [
      { de: '(Instrumental)', en: '(Instrumental)' },
    ],
  },
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Wer Gutes tut dem wird vergeben', en: 'Whoever does good will be forgiven' },
      { de: 'So seid recht gut auf allen Wegen', en: 'So be truly good on every path' },
      { de: 'Dann bekommt ihr bald Besuch', en: 'Then you will soon have visitors' },
      { de: 'Wir kommen mit dem Liederbuch', en: 'We come with the songbook' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Wir sind für die Musik geboren', en: 'We were born for music' },
      { de: 'Wir sind die Diener eurer Ohren', en: 'We are the servants of your ears' },
      { de: 'Immer wenn ihr traurig seid', en: 'Whenever you are sad' },
      { de: 'Spielen wir für euch', en: 'We play for you' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Wenn ihr ohne Sünde lebt', en: 'If you live without sin' },
      { de: 'Einander brav das Händchen gebt', en: 'Obediently give each other your hands' },
      { de: 'Wenn ihr nicht zur Sonne schielt', en: 'If you do not covet the sun' },
      { de: 'Wird für euch ein Lied gespielt', en: 'A song will be played for you' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Wir sind die Diener eurer Ohren', en: 'We are the servants of your ears' },
      { de: 'Wir sind für die Musik geboren', en: 'We were born for music' },
      { de: 'Immer wenn ihr traurig seid', en: 'Whenever you are sad' },
      { de: 'Spielen wir für euch', en: 'We play for you' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Wenn ihr nicht schlafen könnt', en: 'If you cannot sleep' },
      { de: 'Sei euch ein Lied vergönnt', en: 'May a song be granted to you' },
      { de: 'Und der Himmel bricht', en: 'And the sky breaks open' },
      { de: 'Ein Lied fällt weich vom Himmelslicht', en: 'A song falls softly from the heavenly light' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Wir sind für die Musik geboren', en: 'We were born for music' },
      { de: 'Wir sind die Diener eurer Ohren', en: 'We are the servants of your ears' },
      { de: 'Immer wenn ihr traurig seid', en: 'Whenever you are sad' },
      { de: 'Spielen wir für euch', en: 'We play for you' },
    ],
  },
];
