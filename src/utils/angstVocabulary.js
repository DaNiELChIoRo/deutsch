// Vocabulary and lyrics for "Angst" — Rammstein, Zeit (2022)

export const ANGST_VOCAB = [
  // Nouns
  { id: 1,  word: 'Angst',           ipa: '[aŋst]',             en: 'fear / anxiety',              es: 'miedo / angustia',              type: 'noun'      },
  { id: 2,  word: 'Nacht',           ipa: '[naxt]',             en: 'night',                       es: 'noche',                         type: 'noun'      },
  { id: 3,  word: 'Fremder',         ipa: '[ˈfʁɛmdɐ]',          en: 'stranger',                    es: 'extraño / desconocido',         type: 'noun'      },
  { id: 4,  word: 'Albtraum',        ipa: '[ˈalpˌtʁaʊm]',       en: 'nightmare',                   es: 'pesadilla',                     type: 'noun'      },
  { id: 5,  word: 'Wahn',            ipa: '[vaːn]',             en: 'delusion / mania',            es: 'delirio / manía',               type: 'noun'      },
  { id: 6,  word: 'Meute',           ipa: '[ˈmɔɪtə]',           en: 'mob / pack / horde',          es: 'turba / horda',                 type: 'noun'      },
  { id: 7,  word: 'Gasse',           ipa: '[ˈɡasə]',            en: 'alley / lane',                es: 'callejón',                      type: 'noun'      },
  { id: 8,  word: 'Rücken',          ipa: '[ˈʁʏkn̩]',           en: 'back (body)',                 es: 'espalda',                       type: 'noun'      },
  { id: 9,  word: 'Dunkelheit',      ipa: '[ˈdʊŋkl̩haɪt]',      en: 'darkness',                    es: 'oscuridad',                     type: 'noun'      },
  // Verbs
  { id: 10, word: 'schleichen',      ipa: '[ˈʃlaɪçn̩]',         en: 'to creep / sneak',            es: 'arrastrarse / acechar',         type: 'verb'      },
  { id: 11, word: 'anfassen',        ipa: '[ˈanˌfasn̩]',         en: 'to touch / grab',             es: 'tocar / agarrar',               type: 'verb'      },
  { id: 12, word: 'glauben',         ipa: '[ˈɡlaʊbn̩]',         en: 'to believe',                  es: 'creer',                         type: 'verb'      },
  { id: 13, word: 'schreien',        ipa: '[ˈʃʁaɪən]',          en: 'to scream / shout',           es: 'gritar',                        type: 'verb'      },
  { id: 14, word: 'wachsen',         ipa: '[ˈvaksn̩]',           en: 'to grow',                     es: 'crecer',                        type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 15, word: 'nass',            ipa: '[nas]',              en: 'wet',                         es: 'mojado/a',                      type: 'adjective' },
  { id: 16, word: 'klamm',           ipa: '[klam]',             en: 'clammy / damp',               es: 'húmedo/a / pegajoso/a',         type: 'adjective' },
  { id: 17, word: 'schwer bewaffnet', ipa: '[ʃveːɐ̯ bəˈvafnət]', en: 'heavily armed',              es: 'fuertemente armado/a',          type: 'adjective' },
  { id: 18, word: 'brav',            ipa: '[bʁaːf]',            en: 'well-behaved / obedient',     es: 'obediente / portado/a bien',    type: 'adjective' },
  { id: 19, word: 'Schwarzer Mann',  ipa: '[ˈʃvaʁtsɐ man]',     en: '"the black man" (German boogeyman)', es: '"el hombre negro" (coco alemán)', type: 'phrase' },
];

export const ANGST_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Wenn du allein bist in der Nacht', en: 'When you are alone in the night' },
      { de: 'Und niemand auf dich Acht gibt, niemand wacht', en: 'And no one keeps watch over you, no one watches' },
      { de: 'Dann kommst du zu mir, kleines Kind', en: 'Then you come to me, little child' },
      { de: 'Und weißt, dass ich schon immer bei dir bin', en: 'And know that I have always been there for you' },
    ],
  },
  {
    label: { en: 'Post-Chorus (intro)', es: 'Post-coro (intro)' },
    lines: [
      { de: '(Du)', en: '(You)' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'In Dunkelheit schleicht er heran', en: 'He creeps up in the darkness' },
      { de: 'Bist du nicht brav, fasst er dich an', en: "If you're not well-behaved, he grabs you" },
      { de: 'Traue keinem Fremden dann', en: 'Trust no stranger then' },
      { de: 'So viel Albtraum, so viel Wahn', en: 'So much nightmare, so much delusion' },
    ],
  },
  {
    label: { en: 'Pre-Chorus', es: 'Pre-coro' },
    lines: [
      { de: 'Und so glauben wir bis heute', en: 'And so we believe to this day' },
      { de: 'Schwer bewaffnet ist die Meute', en: 'The mob is heavily armed' },
      { de: 'Ach, sie können es nicht lassen', en: 'Ah, they cannot help it' },
      { de: 'Schreien Feuer in die Gassen', en: 'Shouting fire into the alleys' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Und die Furcht wächst in die Nacht', en: 'And fear grows into the night' },
      { de: 'Gar kein Auge zu gemacht', en: 'Not an eye was closed' },
      { de: 'Der Rücken nass, die Hände klamm', en: 'The back wet, the hands clammy' },
      { de: 'Alle haben Angst vorm schwarzen Mann', en: 'Everyone fears the black man' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Wer hat Angst vorm schwarzen Mann?', en: 'Who fears the black man?' },
      { de: 'Wer hat Angst vorm schwarzen Mann?', en: 'Who fears the black man?' },
      { de: 'Wer hat Angst vorm schwarzen Mann?', en: 'Who fears the black man?' },
      { de: 'Wer hat Angst?', en: 'Who is afraid?' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Und die Furcht wächst in die Nacht', en: 'And fear grows into the night' },
      { de: 'Gar kein Auge zugemacht', en: 'Not an eye was closed' },
      { de: 'Die Rücken nass, die Hände klamm', en: 'The backs wet, the hands clammy' },
      { de: 'Alle haben Angst', en: 'Everyone is afraid' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: '(Du)', en: '(You)' },
      { de: '(Du) Schwarzer Mann', en: '(You) Black man' },
      { de: '(Du)', en: '(You)' },
      { de: '(Du) Schwarzer Mann', en: '(You) Black man' },
    ],
  },
];
