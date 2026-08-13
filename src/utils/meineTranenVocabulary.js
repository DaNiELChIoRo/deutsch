// Vocabulary and lyrics for "Meine Tränen" — Rammstein, Zeit (2022)

export const MEINE_TRANEN_VOCAB = [
  // Nouns
  { id: 1,  word: 'Träne',           ipa: '[ˈtʁeːnə]',          en: 'tear (from crying)',          es: 'lágrima',                       type: 'noun'      },
  { id: 2,  word: 'Mutter',          ipa: '[ˈmʊtɐ]',            en: 'mother',                      es: 'madre',                         type: 'noun'      },
  { id: 3,  word: 'Vater',           ipa: '[ˈfaːtɐ]',           en: 'father',                      es: 'padre',                         type: 'noun'      },
  { id: 4,  word: 'Mann',            ipa: '[man]',              en: 'man',                         es: 'hombre',                        type: 'noun'      },
  { id: 5,  word: 'Tod',             ipa: '[toːt]',             en: 'death',                       es: 'muerte',                        type: 'noun'      },
  { id: 6,  word: 'Herz',            ipa: '[hɛʁts]',            en: 'heart',                       es: 'corazón',                       type: 'noun'      },
  { id: 7,  word: 'Fleisch',         ipa: '[flaɪʃ]',            en: 'flesh / meat',                es: 'carne',                         type: 'noun'      },
  { id: 8,  word: 'Litanei',         ipa: '[lɪtaˈnaɪ]',         en: 'litany',                      es: 'letanía',                       type: 'noun'      },
  { id: 9,  word: 'Scham',           ipa: '[ʃaːm]',             en: 'shame',                       es: 'vergüenza',                     type: 'noun'      },
  // Verbs
  { id: 10, word: 'weinen',          ipa: '[ˈvaɪnən]',          en: 'to cry / weep',               es: 'llorar',                        type: 'verb'      },
  { id: 11, word: 'schlagen',        ipa: '[ˈʃlaːɡn̩]',          en: 'to hit / strike',             es: 'golpear',                       type: 'verb'      },
  { id: 12, word: 'lieben',          ipa: '[ˈliːbn̩]',           en: 'to love',                     es: 'amar',                          type: 'verb'      },
  { id: 13, word: 'sterben',         ipa: '[ˈʃtɛʁbn̩]',         en: 'to die',                      es: 'morir',                         type: 'verb'      },
  { id: 14, word: 'nachgeben',       ipa: '[ˈnaːxˌɡeːbn̩]',     en: 'to give in / yield',          es: 'ceder / rendirse',              type: 'verb'      },
  { id: 15, word: 'treiben',         ipa: '[ˈtʁaɪbn̩]',          en: 'to drive / push out',         es: 'empujar / expulsar',            type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 16, word: 'stumm',           ipa: '[ʃtʊm]',             en: 'mute / silent',               es: 'mudo/a / silencioso/a',         type: 'adjective' },
  { id: 17, word: 'schwach',         ipa: '[ʃvax]',             en: 'weak',                        es: 'débil',                         type: 'adjective' },
  { id: 18, word: 'lächelnd',        ipa: '[ˈlɛçl̩nt]',         en: 'smiling',                     es: 'sonriente',                     type: 'adjective' },
  { id: 19, word: 'der Klügere gibt nach', ipa: '[deːɐ̯ ˈklyːɡɐʁə ɡɪpt naːx]', en: 'the wiser one yields (proverb)', es: 'el más sabio cede', type: 'phrase' },
];

export const MEINE_TRANEN_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Als Kind hat er nie geweint', en: 'As a child he never cried' },
      { de: 'Nur wenn die Mutter ihn nicht meint', en: "Only when the mother doesn't mean him" },
      { de: 'Viel Liebe gab ihm Mutter nicht', en: 'The mother gave him little love' },
      { de: 'Doch schlug sie oft in sein Gesicht', en: 'But she often struck his face' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Ein Mann weint nur im stillen Kämmerlein', en: 'A man only cries in his private little room' },
      { de: 'Es darf doch niemals öffentlich sein', en: 'It must never be in public' },
      { de: 'Er presst die Zähne fest zusammen', en: 'He clenches his teeth firmly together' },
      { de: 'Lässt keine Tränen raus, nur Flammen', en: 'Lets no tears out, only flames' },
    ],
  },
  {
    label: { en: 'Verse 3', es: 'Estrofa 3' },
    lines: [
      { de: 'Auch den Vater konnte sie nicht lieben', en: 'She could not love the father either' },
      { de: 'Hat ihn aus der Welt getrieben', en: 'She drove him out of the world' },
      { de: 'Dann und wann ein stummer Schrei', en: 'Now and then a silent scream' },
      { de: 'Und eine kleine Litanei', en: 'And a small litany' },
    ],
  },
  {
    label: { en: 'Pre-Chorus', es: 'Pre-coro' },
    lines: [
      { de: 'Viel Liebe gab ihm Mutter nicht', en: 'The mother gave him little love' },
      { de: 'Doch schlug sie oft in sein Gesicht', en: 'But she often struck his face' },
      { de: 'Ab und zu hat er geweint', en: 'Now and then he cried' },
      { de: 'Da hat sie lächelnd nur gemeint', en: 'And she only said, smiling' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Ein Mann weint nur, wenn seine Mutter stirbt', en: 'A man only cries when his mother dies' },
      { de: 'Der Tod ist stark, das Herz ist schwach', en: 'Death is strong, the heart is weak' },
      { de: 'Wenn das eigen Fleisch im Blut verdirbt', en: "When one's own flesh rots in blood" },
      { de: 'Der Klügere gibt nach', en: 'The wiser one yields' },
    ],
  },
  {
    label: { en: 'Post-Chorus', es: 'Post-coro' },
    lines: [
      { de: 'Du solltest dich schämen', en: 'You should be ashamed' },
      { de: 'Zeig nie deine Tränen', en: 'Never show your tears' },
      { de: 'Du solltest dich schämen', en: 'You should be ashamed' },
      { de: 'Zeig nie deine Tränen', en: 'Never show your tears' },
      { de: 'Deine Tränen', en: 'Your tears' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Deine Tränen', en: 'Your tears' },
      { de: 'Deine Tränen', en: 'Your tears' },
    ],
  },
];
