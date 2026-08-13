// Vocabulary and lyrics for "Zeit" — Rammstein, Zeit (2022)

export const ZEIT_VOCAB = [
  // Nouns
  { id: 1,  word: 'Zeit',            ipa: '[tsaɪt]',            en: 'time',                        es: 'tiempo',                        type: 'noun'      },
  { id: 2,  word: 'Augenblick',      ipa: '[ˈaʊɡn̩blɪk]',       en: 'moment / instant',            es: 'instante / momento',            type: 'noun'      },
  { id: 3,  word: 'Moment',          ipa: '[moˈmɛnt]',          en: 'moment',                      es: 'momento',                       type: 'noun'      },
  { id: 4,  word: 'Uhr',             ipa: '[uːɐ̯]',              en: 'clock / watch',               es: 'reloj',                         type: 'noun'      },
  { id: 5,  word: 'Wunder',          ipa: '[ˈvʊndɐ]',           en: 'wonder / miracle',            es: 'maravilla / milagro',           type: 'noun'      },
  { id: 6,  word: 'Schönheit',       ipa: '[ˈʃøːnhaɪt]',        en: 'beauty',                      es: 'belleza',                       type: 'noun'      },
  { id: 7,  word: 'Kind',            ipa: '[kɪnt]',             en: 'child',                       es: 'niño/a',                        type: 'noun'      },
  { id: 8,  word: 'Ewigkeit',        ipa: '[ˈeːvɪçkaɪt]',       en: 'eternity',                    es: 'eternidad',                     type: 'noun'      },
  // Verbs
  { id: 9,  word: 'bleiben',         ipa: '[ˈblaɪbn̩]',          en: 'to stay / remain',            es: 'quedarse / permanecer',         type: 'verb'      },
  { id: 10, word: 'stehenbleiben',   ipa: '[ˈʃteːənˌblaɪbn̩]',  en: 'to stop / stand still',       es: 'detenerse / pararse',           type: 'verb'      },
  { id: 11, word: 'weitergehen',     ipa: '[ˈvaɪtɐˌɡeːən]',     en: 'to go on / continue',         es: 'continuar / seguir',            type: 'verb'      },
  { id: 12, word: 'laufen',          ipa: '[ˈlaʊfn̩]',           en: 'to run / pass (time)',        es: 'correr / pasar (tiempo)',        type: 'verb'      },
  { id: 13, word: 'weilen',          ipa: '[ˈvaɪlən]',          en: 'to linger / tarry',           es: 'demorarse / quedarse',          type: 'verb'      },
  { id: 14, word: 'kennen',          ipa: '[ˈkɛnən]',           en: 'to know (someone/something)', es: 'conocer',                       type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 15, word: 'perfekt',         ipa: '[pɛʁˈfɛkt]',         en: 'perfect',                     es: 'perfecto/a',                    type: 'adjective' },
  { id: 16, word: 'schön',           ipa: '[ʃøːn]',             en: 'beautiful',                   es: 'hermoso/a / bello/a',           type: 'adjective' },
  { id: 17, word: 'bereit',          ipa: '[bəˈʁaɪt]',          en: 'ready',                       es: 'listo/a / preparado/a',         type: 'adjective' },
  { id: 18, word: 'Augenblick, verweile doch', ipa: '[ˈaʊɡn̩blɪk fɛɐ̯ˈvaɪlə dɔx]', en: '"Moment, linger yet!" (Goethe quote)', es: '"¡Instante, detente!" (cita de Goethe)', type: 'phrase' },
];

export const ZEIT_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Ein Kind schläft in den Armen', en: 'A child sleeps in the arms' },
      { de: 'Noch ganz bei der Mutter nah', en: 'Still so close to the mother' },
      { de: 'Der Vater steht daneben', en: 'The father stands beside them' },
      { de: 'Und hält die Zeit für wahr', en: "And holds this moment to be true" },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Und dann vergeht die Zeit', en: 'And then time passes' },
      { de: 'So schnell, so unaufhörlich', en: 'So fast, so relentlessly' },
      { de: 'Was einmal war und schön', en: 'What once was and was beautiful' },
      { de: 'Ist weg, und das ist herrlich', en: 'Is gone, and that is wonderful' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Zeit', en: 'Time' },
      { de: "Bitte bleib steh'n, bleib steh'n", en: 'Please stop, stop' },
      { de: 'Zeit', en: 'Time' },
      { de: 'Das soll immer so weitergeh\'n', en: 'This should always go on like this' },
      { de: 'Zeit', en: 'Time' },
      { de: 'Es ist so schön, so schön', en: 'It is so beautiful, so beautiful' },
      { de: 'Ein jeder kennt', en: 'Everyone knows' },
      { de: 'Den perfekten Moment', en: 'The perfect moment' },
    ],
  },
  {
    label: { en: 'Instrumental', es: 'Instrumental' },
    lines: [
      { de: '(Instrumental)', en: '(Instrumental)' },
    ],
  },
  {
    label: { en: 'Verse 3', es: 'Estrofa 3' },
    lines: [
      { de: "Wenn unsre Zeit gekommen ist, dann ist es Zeit zu geh'n", en: 'When our time has come, then it is time to go' },
      { de: "Aufhör'n, wenn's am schönsten ist, die Uhren bleiben steh'n", en: "Stop when it's most beautiful, the clocks stand still" },
      { de: 'So perfekt ist der Moment, doch weiter läuft die Zeit', en: 'The moment is so perfect, yet time keeps running' },
      { de: 'Augenblick, verweile doch, ich bin noch nicht bereit', en: 'Moment, linger yet — I am not ready yet' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Zeit', en: 'Time' },
      { de: "Bitte bleib steh'n, bleib steh'n", en: 'Please stop, stop' },
      { de: 'Zeit', en: 'Time' },
      { de: "Das soll immer so weitergeh'n", en: 'This should always go on like this' },
      { de: 'Zeit', en: 'Time' },
      { de: 'Es ist so schön, so schön', en: 'It is so beautiful, so beautiful' },
      { de: 'Ein jeder kennt', en: 'Everyone knows' },
      { de: 'Den perfekten Moment', en: 'The perfect moment' },
    ],
  },
];
