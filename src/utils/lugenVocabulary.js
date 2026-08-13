// Vocabulary and lyrics for "Lügen" — Rammstein, Zeit (2022)

export const LUGEN_VOCAB = [
  // Nouns
  { id: 1,  word: 'Lüge',            ipa: '[ˈlyːɡə]',           en: 'lie',                         es: 'mentira',                       type: 'noun'      },
  { id: 2,  word: 'Wahrheit',        ipa: '[ˈvaːɐ̯haɪt]',        en: 'truth',                       es: 'verdad',                        type: 'noun'      },
  { id: 3,  word: 'Geduld',          ipa: '[ɡəˈdʊlt]',          en: 'patience',                    es: 'paciencia',                     type: 'noun'      },
  { id: 4,  word: 'Versprechen',     ipa: '[fɛɐ̯ˈʃpʁɛçn̩]',      en: 'promise',                     es: 'promesa',                       type: 'noun'      },
  { id: 5,  word: 'Licht',           ipa: '[lɪçt]',             en: 'light',                       es: 'luz',                           type: 'noun'      },
  // Verbs
  { id: 6,  word: 'lügen',           ipa: '[ˈlyːɡn̩]',           en: 'to lie',                      es: 'mentir',                        type: 'verb'      },
  { id: 7,  word: 'betrügen',        ipa: '[bəˈtʁyːɡn̩]',        en: 'to deceive / cheat',          es: 'engañar / hacer trampa',        type: 'verb'      },
  { id: 8,  word: 'belügen',         ipa: '[bəˈlyːɡn̩]',         en: 'to lie to (someone)',         es: 'mentirle a alguien',            type: 'verb'      },
  { id: 9,  word: 'versprechen',     ipa: '[fɛɐ̯ˈʃpʁɛçn̩]',      en: 'to promise',                  es: 'prometer',                      type: 'verb'      },
  { id: 10, word: 'täuschen',        ipa: '[ˈtɔɪʃn̩]',           en: 'to deceive / fool',           es: 'engañar / embaucar',            type: 'verb'      },
  { id: 11, word: 'glauben',         ipa: '[ˈɡlaʊbn̩]',          en: 'to believe',                  es: 'creer',                         type: 'verb'      },
  { id: 12, word: 'eilen',           ipa: '[ˈaɪlən]',           en: 'to hurry',                    es: 'apresurarse',                   type: 'verb'      },
  { id: 13, word: 'heilen',          ipa: '[ˈhaɪlən]',          en: 'to heal / cure',              es: 'sanar / curar',                 type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 14, word: 'notorisch',       ipa: '[noˈtoːʁɪʃ]',        en: 'notorious',                   es: 'notorio/a',                     type: 'adjective' },
  { id: 15, word: 'schuld',          ipa: '[ʃʊlt]',             en: 'at fault / guilty',           es: 'culpable',                      type: 'adjective' },
  { id: 16, word: 'wer\'s glaubt, ist selber schuld', ipa: '[veːɐ̯s ˈɡlaʊpt ɪst ˈzɛlbɐ ʃʊlt]', en: "whoever believes it is their own fault", es: 'quien lo cree es su propia culpa', type: 'phrase' },
];

export const LUGEN_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Ich hab es wieder getan', en: 'I did it again' },
      { de: 'Die Wahrheit kommt nie über meine Lippen ran', en: 'The truth never gets past my lips' },
      { de: 'Ich sage was du hören willst', en: 'I say what you want to hear' },
      { de: 'Bis jemand mich bei der Lüge erwischt', en: 'Until someone catches me in the lie' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Ich log dich an, ich log mich an', en: 'I lied to you, I lied to myself' },
      { de: 'So fing das große Lügen an', en: 'That is how the great lying began' },
      { de: 'Jetzt liegt die Wahrheit unterm Tisch', en: 'Now the truth lies under the table' },
      { de: 'Ein Lügner, der sich selbst vergisst', en: 'A liar who forgets himself' },
    ],
  },
  {
    label: { en: 'Verse 3', es: 'Estrofa 3' },
    lines: [
      { de: 'Ich bin notorisch nicht zu heilen', en: 'I am notoriously incurable' },
      { de: 'Ich verspreche nur, ich spreche nichts', en: 'I only promise, I say nothing' },
      { de: 'Doch ich muss mich wirklich eilen', en: 'But I really must hurry' },
      { de: 'Die Wahrheit kommt doch eh ans Licht', en: 'The truth will come to light anyway' },
      { de: "Ich täusche gut, hab' viel Geduld", en: 'I deceive well, I have a lot of patience' },
      { de: "Und wer's glaubt, ist selber schuld", en: "And whoever believes it is their own fault" },
      { de: 'Alle lügen, doch ich viel mehr', en: 'Everyone lies, but I much more' },
      { de: 'Ich glaube mir schon selbst nicht mehr', en: 'I no longer believe myself' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Lügen', en: 'Lies' },
      { de: 'Alles Lügen', en: 'All lies' },
      { de: 'Ich lüge', en: 'I lie' },
      { de: 'Und betrüge, ja', en: 'And I deceive, yes' },
      { de: 'Ich belüge sogar mich', en: 'I even lie to myself' },
      { de: 'Keiner glaubt mir', en: 'No one believes me' },
      { de: 'Niemand traut mir', en: 'Nobody trusts me' },
      { de: 'Nicht mal ich', en: 'Not even I' },
      { de: 'Nicht mal ich', en: 'Not even I' },
    ],
  },
];
