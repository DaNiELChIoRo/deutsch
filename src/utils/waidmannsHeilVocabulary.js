// Vocabulary and lyrics for "Waidmanns Heil" — Rammstein, Liebe ist für alle da (2009)

export const WAIDMANNS_HEIL_VOCAB = [
  // Nouns
  { id: 1,  word: 'Wald',          ipa: '[valt]',           en: 'forest / woods',                es: 'bosque',                       type: 'noun'      },
  { id: 2,  word: 'Tier',          ipa: '[tiːɐ̯]',           en: 'animal',                        es: 'animal',                       type: 'noun'      },
  { id: 3,  word: 'Jäger',         ipa: '[ˈjɛːɡɐ]',         en: 'hunter',                        es: 'cazador',                      type: 'noun'      },
  { id: 4,  word: 'Beute',         ipa: '[ˈbɔʏtə]',         en: 'prey / loot',                   es: 'presa / botín',                type: 'noun'      },
  { id: 5,  word: 'Jagd',          ipa: '[jaːkt]',          en: 'hunt / chase',                  es: 'caza',                         type: 'noun'      },
  { id: 6,  word: 'Bock',          ipa: '[bɔk]',            en: 'buck / male deer',              es: 'macho de ciervo / corzo',      type: 'noun'      },
  { id: 7,  word: 'Schuss',        ipa: '[ʃʊs]',            en: 'shot (from a gun)',             es: 'disparo',                      type: 'noun'      },
  { id: 8,  word: 'Blut',          ipa: '[bluːt]',          en: 'blood',                         es: 'sangre',                       type: 'noun'      },
  { id: 9,  word: 'Nacht',         ipa: '[naxt]',           en: 'night',                         es: 'noche',                        type: 'noun'      },
  { id: 10, word: 'Hund',          ipa: '[hʊnt]',           en: 'dog',                           es: 'perro',                        type: 'noun'      },
  // Verbs
  { id: 11, word: 'jagen',         ipa: '[ˈjaːɡən]',        en: 'to hunt / chase',               es: 'cazar / perseguir',            type: 'verb'      },
  { id: 12, word: 'schießen',      ipa: '[ˈʃiːsən]',        en: 'to shoot',                      es: 'disparar',                     type: 'verb'      },
  { id: 13, word: 'lauern',        ipa: '[ˈlaʊɐn]',         en: 'to lurk / lie in wait',         es: 'acechar / emboscar',           type: 'verb'      },
  { id: 14, word: 'schleichen',    ipa: '[ˈʃlaɪçən]',       en: 'to sneak / creep',              es: 'acechar / moverse sigiloso',   type: 'verb'      },
  { id: 15, word: 'treffen',       ipa: '[ˈtʁɛfən]',        en: 'to hit / meet',                 es: 'golpear / encontrar',          type: 'verb'      },
  { id: 16, word: 'fliehen',       ipa: '[ˈfliːən]',        en: 'to flee / escape',              es: 'huir / escapar',               type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 17, word: 'waidwund',      ipa: '[ˈvaɪtvʊnt]',      en: 'gut-shot (hunting term)',       es: 'herido mortalmente (caza)',    type: 'adjective' },
  { id: 18, word: 'wild',          ipa: '[vɪlt]',           en: 'wild',                          es: 'salvaje',                      type: 'adjective' },
  { id: 19, word: 'Waidmanns Heil', ipa: '[ˈvaɪtmans haɪl]', en: 'hunter\'s greeting (good hunting!)', es: 'saludo del cazador',    type: 'adjective' },
  { id: 20, word: 'laut',          ipa: '[laʊt]',           en: 'loud',                          es: 'ruidoso/a / fuerte',           type: 'adjective' },
  { id: 21, word: 'tief',          ipa: '[tiːf]',           en: 'deep',                          es: 'profundo/a',                   type: 'adjective' },
];

export const WAIDMANNS_HEIL_LYRICS = [
  {
    label: { en: 'Intro', es: 'Intro' },
    lines: [
      { de: 'Waidmanns Heil!',                        en: 'Hunter\'s greeting! (Good hunting!)' },
      { de: 'Waidmanns Heil!',                        en: 'Hunter\'s greeting!' },
    ],
  },
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Ein Licht im dunklen Wald',              en: 'A light in the dark forest' },
      { de: 'Was treibt dort im Gestrüpp?',           en: 'What moves there in the undergrowth?' },
      { de: 'Die Nacht riecht nach dem Jäger',        en: 'The night smells of the hunter' },
      { de: 'Das Tier macht einen Schritt',           en: 'The animal takes a step' },
      { de: 'Er wartet und er lauert',                en: 'He waits and he lurks' },
      { de: 'Ganz ruhig in dem Baum',                 en: 'Perfectly still in the tree' },
      { de: 'Er schleicht sich durch den Wald',       en: 'He sneaks through the forest' },
      { de: 'Wie durch einen Traum',                  en: 'As if through a dream' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Waidmanns Heil, Waidmanns Heil',         en: 'Good hunting, good hunting' },
      { de: 'Auf der Jagd, auf der Jagd',             en: 'On the hunt, on the hunt' },
      { de: 'Waidmanns Heil, Waidmanns Heil',         en: 'Good hunting, good hunting' },
      { de: 'Schuss und Treffer gemacht',             en: 'Shot and hit achieved' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Er hebt das alte Rohr',                  en: 'He raises the old barrel' },
      { de: 'Und zielt auf seine Brust',              en: 'And aims at its chest' },
      { de: 'Der Finger zittert leise',               en: 'The finger trembles quietly' },
      { de: 'Vor Kälte und vor Lust',                 en: 'From cold and from desire' },
      { de: 'Ein Schuss zerreißt die Stille',         en: 'A shot tears the silence' },
      { de: 'Das Tier bricht in die Knie',            en: 'The animal drops to its knees' },
      { de: 'Das Blut färbt rot den Schnee',          en: 'The blood dyes the snow red' },
      { de: 'In stiller Symphonie',                   en: 'In silent symphony' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Waidmanns Heil, Waidmanns Heil',         en: 'Good hunting, good hunting' },
      { de: 'Auf der Jagd, auf der Jagd',             en: 'On the hunt, on the hunt' },
      { de: 'Waidmanns Heil, Waidmanns Heil',         en: 'Good hunting, good hunting' },
      { de: 'Schuss und Treffer gemacht',             en: 'Shot and hit achieved' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Waidmanns Heil!',                        en: 'Good hunting!' },
      { de: 'Waidmanns Heil!',                        en: 'Good hunting!' },
    ],
  },
];
