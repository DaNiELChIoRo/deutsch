// Vocabulary and lyrics for "Frühling in Paris" — Rammstein, Liebe ist für alle da (2009)

export const FRUHLING_IN_PARIS_VOCAB = [
  // Nouns
  { id: 1,  word: 'Frühling',      ipa: '[ˈfʁyːlɪŋ]',      en: 'spring (season)',               es: 'primavera',                    type: 'noun'      },
  { id: 2,  word: 'Paris',         ipa: '[paˈʁiː]',         en: 'Paris',                         es: 'París',                        type: 'noun'      },
  { id: 3,  word: 'Regen',         ipa: '[ˈʁeːɡən]',        en: 'rain',                          es: 'lluvia',                       type: 'noun'      },
  { id: 4,  word: 'Blume',         ipa: '[ˈbluːmə]',        en: 'flower',                        es: 'flor',                         type: 'noun'      },
  { id: 5,  word: 'Straße',        ipa: '[ˈʃtʁaːsə]',       en: 'street / road',                 es: 'calle / carretera',            type: 'noun'      },
  { id: 6,  word: 'Liebe',         ipa: '[ˈliːbə]',         en: 'love',                          es: 'amor',                         type: 'noun'      },
  { id: 7,  word: 'Abend',         ipa: '[ˈaːbənt]',        en: 'evening',                       es: 'tarde / noche',                type: 'noun'      },
  { id: 8,  word: 'Licht',         ipa: '[lɪçt]',           en: 'light',                         es: 'luz',                          type: 'noun'      },
  { id: 9,  word: 'Herz',          ipa: '[hɛʁts]',          en: 'heart',                         es: 'corazón',                      type: 'noun'      },
  { id: 10, word: 'Reue',          ipa: '[ˈʁɔʏə]',          en: 'regret / remorse',              es: 'arrepentimiento / remordimiento', type: 'noun'   },
  // Verbs
  { id: 11, word: 'bereuen',       ipa: '[bəˈʁɔʏən]',       en: 'to regret',                     es: 'arrepentirse / lamentar',      type: 'verb'      },
  { id: 12, word: 'küssen',        ipa: '[ˈkʏsən]',         en: 'to kiss',                       es: 'besar',                        type: 'verb'      },
  { id: 13, word: 'warten',        ipa: '[ˈvaʁtən]',        en: 'to wait',                       es: 'esperar',                      type: 'verb'      },
  { id: 14, word: 'fallen',        ipa: '[ˈfalən]',         en: 'to fall',                       es: 'caer',                         type: 'verb'      },
  { id: 15, word: 'vergessen',     ipa: '[fɛʁˈɡɛsən]',      en: 'to forget',                     es: 'olvidar',                      type: 'verb'      },
  { id: 16, word: 'blühen',        ipa: '[ˈblyːən]',        en: 'to bloom / blossom',            es: 'florecer',                     type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 17, word: 'schön',         ipa: '[ʃøːn]',           en: 'beautiful / nice',              es: 'hermoso/a / bonito/a',         type: 'adjective' },
  { id: 18, word: 'warm',          ipa: '[vaʁm]',           en: 'warm',                          es: 'cálido/a',                     type: 'adjective' },
  { id: 19, word: 'weit',          ipa: '[vaɪt]',           en: 'far / wide',                    es: 'lejos / amplio/a',             type: 'adjective' },
  { id: 20, word: 'zärtlich',      ipa: '[ˈtsɛʁtlɪç]',      en: 'tender / affectionate',         es: 'tierno/a / cariñoso/a',        type: 'adjective' },
  { id: 21, word: 'allein',        ipa: '[aˈlaɪn]',         en: 'alone',                         es: 'solo/a',                       type: 'adjective' },
];

export const FRUHLING_IN_PARIS_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Es regnet in Paris',                      en: 'It rains in Paris' },
      { de: 'Die Blumen gehen ein',                    en: 'The flowers wither' },
      { de: 'Sie wartet auf den Frühling',             en: 'She waits for spring' },
      { de: 'Und wartet ganz allein',                  en: 'And waits all alone' },
      { de: 'Ich liege neben ihr',                     en: 'I lie beside her' },
      { de: 'Und schaue in das Licht',                 en: 'And look into the light' },
      { de: 'Die Abendglocken läuten',                 en: 'The evening bells ring' },
      { de: 'Sie hört sie aber nicht',                 en: 'But she doesn\'t hear them' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Ich bereue rien',                         en: 'I regret nothing (Fr: rien = nothing)' },
      { de: 'Ich bereue rien',                         en: 'I regret nothing' },
      { de: 'Ich hab\' sie geliebt',                   en: 'I loved her' },
      { de: 'In Paris im Frühling',                    en: 'In Paris in the spring' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Sie küsst mein Augenlid',                 en: 'She kisses my eyelid' },
      { de: 'Wie zärtlich ist sie doch',               en: 'How tender she is' },
      { de: 'Die Nacht ist voller Sterne',             en: 'The night is full of stars' },
      { de: 'Sie liebt mich, das weiß ich noch',       en: 'She loves me, I still know that' },
      { de: 'Doch bald wird es Herbst',                en: 'But soon it will be autumn' },
      { de: 'Die Blätter werden rot',                  en: 'The leaves will turn red' },
      { de: 'Und ich vergesse alles',                  en: 'And I forget everything' },
      { de: 'Nur diese Nacht nicht',                   en: 'Only not this night' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Ich bereue rien',                         en: 'I regret nothing' },
      { de: 'Ich bereue rien',                         en: 'I regret nothing' },
      { de: 'Ich hab\' sie geliebt',                   en: 'I loved her' },
      { de: 'In Paris im Frühling',                    en: 'In Paris in the spring' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Der Frühling kommt nach Paris',           en: 'Spring comes to Paris' },
      { de: 'Die Blumen blühen auf',                   en: 'The flowers bloom' },
      { de: 'Ich warte auf sie noch',                  en: 'I still wait for her' },
      { de: 'Sie kommt nicht mehr',                    en: 'She no longer comes' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Ich bereue rien',                         en: 'I regret nothing' },
      { de: 'Ich hab\' sie geliebt',                   en: 'I loved her' },
      { de: 'In Paris',                                en: 'In Paris' },
    ],
  },
];
