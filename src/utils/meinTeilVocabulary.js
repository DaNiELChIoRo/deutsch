// Vocabulary and lyrics for "Mein Teil" — Rammstein, Reise, Reise (2004)

export const MEIN_TEIL_VOCAB = [
  // Nouns
  { id: 1,  word: 'Teil',         ipa: '[taɪl]',           en: 'part / piece / share',          es: 'parte / pieza / porción',       type: 'noun'      },
  { id: 2,  word: 'Messer',       ipa: '[ˈmɛsɐ]',          en: 'knife',                         es: 'cuchillo',                      type: 'noun'      },
  { id: 3,  word: 'Topf',         ipa: '[tɔpf]',           en: 'pot / cooking pot',             es: 'olla / cacerola',               type: 'noun'      },
  { id: 4,  word: 'Feuer',        ipa: '[ˈfɔʏɐ]',          en: 'fire',                          es: 'fuego',                         type: 'noun'      },
  { id: 5,  word: 'Fleisch',      ipa: '[flaɪʃ]',          en: 'meat / flesh',                  es: 'carne',                         type: 'noun'      },
  { id: 6,  word: 'Hunger',       ipa: '[ˈhʊŋɐ]',          en: 'hunger',                        es: 'hambre',                        type: 'noun'      },
  { id: 7,  word: 'Schwein',      ipa: '[ʃvaɪn]',          en: 'pig / swine',                   es: 'cerdo',                         type: 'noun'      },
  { id: 8,  word: 'Blut',         ipa: '[bluːt]',           en: 'blood',                         es: 'sangre',                        type: 'noun'      },
  { id: 9,  word: 'Gericht',      ipa: '[ɡəˈʁɪçt]',        en: 'dish / court / judgement',      es: 'plato / tribunal / juicio',     type: 'noun'      },
  { id: 10, word: 'Schrei',       ipa: '[ʃʁaɪ]',           en: 'scream / cry',                  es: 'grito',                         type: 'noun'      },
  // Verbs
  { id: 11, word: 'essen',        ipa: '[ˈɛsən]',           en: 'to eat',                        es: 'comer',                         type: 'verb'      },
  { id: 12, word: 'kochen',       ipa: '[ˈkɔxən]',          en: 'to cook',                       es: 'cocinar',                       type: 'verb'      },
  { id: 13, word: 'schneiden',    ipa: '[ˈʃnaɪdən]',        en: 'to cut',                        es: 'cortar',                        type: 'verb'      },
  { id: 14, word: 'brennen',      ipa: '[ˈbʁɛnən]',         en: 'to burn',                       es: 'arder / quemar',                type: 'verb'      },
  { id: 15, word: 'gehören',      ipa: '[ɡəˈhøːʁən]',       en: 'to belong to',                  es: 'pertenecer a',                  type: 'verb'      },
  { id: 16, word: 'schreien',     ipa: '[ˈʃʁaɪən]',         en: 'to scream / to shout',          es: 'gritar',                        type: 'verb'      },
  { id: 17, word: 'zubereiten',   ipa: '[ˈtsuːbəˌʁaɪtən]',  en: 'to prepare (food)',             es: 'preparar (comida)',             type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 18, word: 'mein',         ipa: '[maɪn]',            en: 'my / mine',                     es: 'mi / mío/a',                    type: 'adjective' },
  { id: 19, word: 'heiß',         ipa: '[haɪs]',            en: 'hot',                           es: 'caliente',                      type: 'adjective' },
  { id: 20, word: 'roh',          ipa: '[ʁoː]',             en: 'raw',                           es: 'crudo/a',                       type: 'adjective' },
  { id: 21, word: 'zart',         ipa: '[tsaʁt]',           en: 'tender / delicate',             es: 'tierno/a / delicado/a',         type: 'adjective' },
  { id: 22, word: 'dein',         ipa: '[daɪn]',            en: 'your / yours',                  es: 'tu / tuyo/a',                   type: 'adjective' },
  { id: 23, word: 'gut',          ipa: '[ɡuːt]',            en: 'good / well',                   es: 'bueno/a / bien',                type: 'adjective' },
];

export const MEIN_TEIL_LYRICS = [
  {
    label: { en: 'Intro', es: 'Intro' },
    lines: [
      { de: 'Ich bin dein', en: 'I am yours' },
      { de: 'Du bist mein', en: 'You are mine' },
    ],
  },
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Das Feuer brennt',                          en: 'The fire burns' },
      { de: 'Der Topf ist heiß',                         en: 'The pot is hot' },
      { de: 'Das Messer glänzt im Schein',               en: 'The knife gleams in the light' },
      { de: 'Was kochst du heute, Schatz?',              en: 'What are you cooking today, darling?' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Das ist mein Teil',                         en: 'That is my part' },
      { de: 'Mein Teil',                                 en: 'My part' },
      { de: 'Das da gehört mir',                         en: 'That there belongs to me' },
      { de: 'Mein Teil',                                 en: 'My part' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Du bist was du isst',                       en: 'You are what you eat' },
      { de: 'Und ihr wisst, was das ist',                en: 'And you all know what that is' },
      { de: 'Der Hunger wird gestillt',                  en: 'The hunger is satisfied' },
      { de: 'Mit Feuer, Blut und Gier',                  en: 'With fire, blood and greed' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Kein Schwein ruft mich an',                 en: 'No pig calls me up' },
      { de: 'Ich bin ganz allein',                       en: 'I am all alone' },
      { de: 'Das Gericht ist fertig',                    en: 'The dish is done' },
      { de: 'Das Gericht ist mein',                      en: 'The dish is mine' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Mein Teil',                                 en: 'My part' },
      { de: 'Mein Teil',                                 en: 'My part' },
    ],
  },
];
