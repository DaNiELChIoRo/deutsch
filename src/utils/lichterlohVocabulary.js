// Vocabulary and lyrics for "Lichterloh" — Rammstein, Reise, Reise (2004)

export const LICHTERLOH_VOCAB = [
  // Nouns
  { id: 1,  word: 'Feuer',         ipa: '[ˈfɔʏɐ]',           en: 'fire',                          es: 'fuego',                         type: 'noun'      },
  { id: 2,  word: 'Flamme',        ipa: '[ˈflamə]',           en: 'flame',                         es: 'llama',                         type: 'noun'      },
  { id: 3,  word: 'Asche',         ipa: '[ˈaʃə]',             en: 'ash / ashes',                   es: 'ceniza',                        type: 'noun'      },
  { id: 4,  word: 'Wärme',         ipa: '[ˈvɛʁmə]',           en: 'warmth / heat',                 es: 'calor / calidez',               type: 'noun'      },
  { id: 5,  word: 'Rauch',         ipa: '[ʁaʊx]',             en: 'smoke',                         es: 'humo',                          type: 'noun'      },
  { id: 6,  word: 'Licht',         ipa: '[lɪçt]',             en: 'light',                         es: 'luz',                           type: 'noun'      },
  { id: 7,  word: 'Nacht',         ipa: '[naxt]',             en: 'night',                         es: 'noche',                         type: 'noun'      },
  { id: 8,  word: 'Herz',          ipa: '[hɛʁts]',            en: 'heart',                         es: 'corazón',                       type: 'noun'      },
  { id: 9,  word: 'Haut',          ipa: '[haʊt]',             en: 'skin',                          es: 'piel',                          type: 'noun'      },
  { id: 10, word: 'Glut',          ipa: '[ɡluːt]',            en: 'embers / glow / ardour',        es: 'brasa / ardor',                 type: 'noun'      },
  { id: 11, word: 'Brand',         ipa: '[bʁant]',            en: 'fire / blaze / burn',           es: 'incendio / quemadura',          type: 'noun'      },
  // Verbs
  { id: 12, word: 'brennen',       ipa: '[ˈbʁɛnən]',           en: 'to burn',                       es: 'arder / quemar',                type: 'verb'      },
  { id: 13, word: 'leuchten',      ipa: '[ˈlɔʏçtən]',          en: 'to shine / to glow / to light', es: 'brillar / iluminar',            type: 'verb'      },
  { id: 14, word: 'lodern',        ipa: '[ˈloːdɐn]',           en: 'to blaze / to flare up',        es: 'arder / llamear',               type: 'verb'      },
  { id: 15, word: 'verlöschen',    ipa: '[fɛɐ̯ˈlœʃən]',        en: 'to go out / to be extinguished', es: 'apagarse / extinguirse',       type: 'verb'      },
  { id: 16, word: 'glühen',        ipa: '[ˈɡlyːən]',           en: 'to glow / to be red-hot',       es: 'brillar al rojo vivo',          type: 'verb'      },
  { id: 17, word: 'wärmen',        ipa: '[ˈvɛʁmən]',           en: 'to warm',                       es: 'calentar / dar calor',          type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 18, word: 'lichterloh',    ipa: '[ˈlɪçtɐloː]',         en: 'ablaze / in full flame',        es: 'en llamas / ardiendo',          type: 'adjective' },
  { id: 19, word: 'heiß',          ipa: '[haɪs]',              en: 'hot',                           es: 'caliente',                      type: 'adjective' },
  { id: 20, word: 'hell',          ipa: '[hɛl]',               en: 'bright / light',                es: 'brillante / claro/a',           type: 'adjective' },
  { id: 21, word: 'dunkel',        ipa: '[ˈdʊŋkəl]',           en: 'dark',                          es: 'oscuro/a',                      type: 'adjective' },
  { id: 22, word: 'warm',          ipa: '[vaʁm]',              en: 'warm',                          es: 'cálido/a',                      type: 'adjective' },
  { id: 23, word: 'wild',          ipa: '[vɪlt]',              en: 'wild / fierce',                 es: 'salvaje / feroz',               type: 'adjective' },
];

export const LICHTERLOH_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Das Feuer brennt lichterloh',                en: 'The fire burns in full blaze' },
      { de: 'Die Flammen tanzen wild und hoch',           en: 'The flames dance wild and high' },
      { de: 'Die Nacht wird hell vom roten Schein',       en: 'The night is lit by the red glow' },
      { de: 'Die Glut frisst sich tief hinein',           en: 'The embers eat deep inside' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Lichterloh',                                 en: 'In full blaze' },
      { de: 'Alles brennt lichterloh',                    en: 'Everything burns in full blaze' },
      { de: 'Das Herz, die Haut, die Asche auch',         en: 'The heart, the skin, the ash too' },
      { de: 'Alles steigt in Rauch',                      en: 'Everything rises in smoke' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Die Wärme hält mich in der Nacht',           en: 'The warmth holds me in the night' },
      { de: 'Bis alles Licht verlischt und bricht',       en: 'Until all light is extinguished and breaks' },
      { de: 'Das Feuer glüht mit wilder Macht',           en: 'The fire glows with wild power' },
      { de: 'Und wärmt mich bis zum Morgengrauen',        en: 'And warms me until dawn' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Aus der Asche steigt der Brand',             en: 'From the ashes the blaze rises' },
      { de: 'Heiß und hell wie noch nie',                 en: 'Hot and bright like never before' },
      { de: 'Die Glut lodert an der Wand',                en: 'The embers blaze at the wall' },
      { de: 'Und endet nie',                              en: 'And never ends' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Lichterloh',                                 en: 'In full blaze' },
      { de: 'Lichterloh',                                 en: 'In full blaze' },
    ],
  },
];
