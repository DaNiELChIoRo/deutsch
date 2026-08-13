// Vocabulary and lyrics for "Adieu" — Rammstein, Zeit (2022)

export const ADIEU_VOCAB = [
  // Nouns
  { id: 1,  word: 'Abschied',        ipa: '[ˈapʃiːt]',          en: 'farewell / departure',        es: 'despedida / partida',           type: 'noun'      },
  { id: 2,  word: 'Lied',            ipa: '[liːt]',             en: 'song',                        es: 'canción',                       type: 'noun'      },
  { id: 3,  word: 'Kuss',            ipa: '[kʊs]',              en: 'kiss',                        es: 'beso',                          type: 'noun'      },
  { id: 4,  word: 'Wunder',          ipa: '[ˈvʊndɐ]',           en: 'miracle / wonder',            es: 'milagro / maravilla',           type: 'noun'      },
  { id: 5,  word: 'Weg',             ipa: '[veːk]',             en: 'way / path',                  es: 'camino / sendero',              type: 'noun'      },
  { id: 6,  word: 'Ende',            ipa: '[ˈɛndə]',            en: 'end',                         es: 'final / fin',                   type: 'noun'      },
  // Verbs
  { id: 7,  word: 'sterben',         ipa: '[ˈʃtɛʁbn̩]',         en: 'to die',                      es: 'morir',                         type: 'verb'      },
  { id: 8,  word: 'gehen',           ipa: '[ˈɡeːən]',           en: 'to go',                       es: 'ir / irse',                     type: 'verb'      },
  { id: 9,  word: 'bleiben',         ipa: '[ˈblaɪbn̩]',          en: 'to stay / remain',            es: 'quedarse / permanecer',         type: 'verb'      },
  { id: 10, word: 'geschehen',       ipa: '[ɡəˈʃeːən]',         en: 'to happen / occur',           es: 'ocurrir / suceder',             type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 11, word: 'allein',          ipa: '[aˈlaɪn]',           en: 'alone',                       es: 'solo/a',                        type: 'adjective' },
  { id: 12, word: 'letzt-',          ipa: '[lɛtst]',            en: 'last / final',                es: 'último/a',                      type: 'adjective' },
  { id: 13, word: 'schön',           ipa: '[ʃøːn]',             en: 'beautiful',                   es: 'hermoso/a / bello/a',           type: 'adjective' },
  { id: 14, word: 'adieu',           ipa: '[aˈdjøː]',           en: 'adieu / farewell (formal)',   es: 'adiós / despedida formal',      type: 'phrase'    },
  { id: 15, word: 'auf Wiedersehen', ipa: '[aʊf ˈviːdɐˌzeːən]', en: 'goodbye / until we meet again', es: 'hasta la vista / hasta luego', type: 'phrase'  },
  { id: 16, word: 'jeder stirbt für sich allein', ipa: '[ˈjeːdɐ ʃtɪʁpt fyːɐ̯ zɪç aˈlaɪn]', en: 'everyone dies alone', es: 'cada uno muere solo', type: 'phrase' },
];

export const ADIEU_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Die Zeit mit dir war schön', en: 'The time with you was beautiful' },
      { de: 'Wir haben viel erlebt', en: 'We experienced a lot' },
      { de: 'Jetzt musst du geh\'n', en: 'Now you must go' },
      { de: 'Und ich bleib hier, allein', en: 'And I stay here, alone' },
    ],
  },
  {
    label: { en: 'Pre-Chorus', es: 'Pre-coro' },
    lines: [
      { de: 'Am Ende bist du ganz allein', en: 'In the end you are completely alone' },
      { de: 'Doch wir werden bei dir sein', en: 'But we will be with you' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: "Adieu, goodbye, auf Wiederseh'n", en: 'Adieu, goodbye, until we meet again' },
      { de: 'Den letzten Weg musst du alleine geh\'n', en: 'You must walk the last path alone' },
      { de: 'Ein letztes Lied, ein letzter Kuss', en: 'A last song, a last kiss' },
      { de: "Kein Wunder wird gescheh'n", en: 'No miracle will happen' },
      { de: "Adieu, goodbye, auf Wiederseh'n", en: 'Adieu, goodbye, until we meet again' },
      { de: 'Die Zeit mit dir war schön', en: 'The time with you was beautiful' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Jeder stirbt für sich allein (Ganz allein)', en: 'Everyone dies alone (Completely alone)' },
      { de: 'Doch du wirst immer bei uns sein', en: 'But you will always be with us' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: "Adieu, goodbye, auf Wiederseh'n", en: 'Adieu, goodbye, until we meet again' },
      { de: 'Den letzten Weg musst du alleine geh\'n', en: 'You must walk the last path alone' },
      { de: 'Ein letztes Lied, ein letzter Kuss', en: 'A last song, a last kiss' },
      { de: "Kein Wunder wird gescheh'n", en: 'No miracle will happen' },
      { de: "Adieu, goodbye, auf Wiederseh'n", en: 'Adieu, goodbye, until we meet again' },
      { de: 'Die Zeit mit dir war schön', en: 'The time with you was beautiful' },
    ],
  },
];
