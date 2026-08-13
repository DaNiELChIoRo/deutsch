// Vocabulary and lyrics for "Reise, Reise" — Rammstein, Reise, Reise (2004)

export const REISE_REISE_VOCAB = [
  // Nouns
  { id: 1,  word: 'Reise',        ipa: '[ˈʁaɪzə]',        en: 'journey / trip',               es: 'viaje',                        type: 'noun'      },
  { id: 2,  word: 'Meer',         ipa: '[meːɐ̯]',           en: 'sea / ocean',                  es: 'mar',                          type: 'noun'      },
  { id: 3,  word: 'Welle',        ipa: '[ˈvɛlə]',          en: 'wave',                         es: 'ola',                          type: 'noun'      },
  { id: 4,  word: 'Sturm',        ipa: '[ʃtʊʁm]',          en: 'storm',                        es: 'tormenta',                     type: 'noun'      },
  { id: 5,  word: 'Anker',        ipa: '[ˈaŋkɐ]',          en: 'anchor',                       es: 'ancla',                        type: 'noun'      },
  { id: 6,  word: 'Mast',         ipa: '[mast]',            en: 'mast',                         es: 'mástil',                       type: 'noun'      },
  { id: 7,  word: 'Tiefe',        ipa: '[ˈtiːfə]',          en: 'depth / the deep',             es: 'profundidad',                  type: 'noun'      },
  { id: 8,  word: 'Seemann',      ipa: '[ˈzeːman]',         en: 'sailor / seaman',              es: 'marinero',                     type: 'noun'      },
  { id: 9,  word: 'Scheitel',     ipa: '[ˈʃaɪtəl]',        en: 'crest / crown / peak',         es: 'cresta / cima',                type: 'noun'      },
  { id: 10, word: 'Hoffnung',     ipa: '[ˈhɔfnʊŋ]',        en: 'hope',                         es: 'esperanza',                    type: 'noun'      },
  { id: 11, word: 'Schlaf',       ipa: '[ʃlaːf]',           en: 'sleep',                        es: 'sueño',                        type: 'noun'      },
  // Verbs
  { id: 12, word: 'reisen',       ipa: '[ˈʁaɪzən]',         en: 'to travel / to journey',       es: 'viajar',                       type: 'verb'      },
  { id: 13, word: 'steigen',      ipa: '[ˈʃtaɪɡən]',        en: 'to climb / to rise',           es: 'subir / ascender',             type: 'verb'      },
  { id: 14, word: 'sinken',       ipa: '[ˈzɪŋkən]',         en: 'to sink',                      es: 'hundirse',                     type: 'verb'      },
  { id: 15, word: 'wecken',       ipa: '[ˈvɛkən]',          en: 'to wake / to rouse',           es: 'despertar',                    type: 'verb'      },
  { id: 16, word: 'aufwachen',    ipa: '[ˈaʊfˌvaxən]',      en: 'to wake up',                   es: 'despertarse',                  type: 'verb'      },
  { id: 17, word: 'fahren',       ipa: '[ˈfaːʁən]',          en: 'to drive / to travel by vehicle', es: 'conducir / ir en vehículo', type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 18, word: 'tief',         ipa: '[tiːf]',             en: 'deep',                         es: 'profundo/a',                   type: 'adjective' },
  { id: 19, word: 'hoch',         ipa: '[hoːx]',             en: 'high / tall',                  es: 'alto/a',                       type: 'adjective' },
  { id: 20, word: 'weit',         ipa: '[vaɪt]',             en: 'far / wide',                   es: 'lejos / amplio/a',             type: 'adjective' },
  { id: 21, word: 'hinab',        ipa: '[hɪˈnaːp]',          en: 'downward / down there',        es: 'hacia abajo',                  type: 'adjective' },
  { id: 22, word: 'hinauf',       ipa: '[hɪˈnaʊf]',          en: 'upward / up there',            es: 'hacia arriba',                 type: 'adjective' },
];

export const REISE_REISE_LYRICS = [
  {
    label: { en: 'Intro', es: 'Intro' },
    lines: [
      { de: 'Reise, Reise', en: 'Journey, journey' },
    ],
  },
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Reise, Reise, Seemann, Reise',   en: 'Journey, journey, sailor, journey' },
      { de: 'Jeder Welle ihren Scheitel',     en: 'To every wave its crest' },
      { de: 'Jeder Hoffnung ihren Scheitel',  en: 'To every hope its crest' },
      { de: 'Jeder Liebe ihren Scheitel',     en: 'To every love its crest' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Wach auf, wach auf',             en: 'Wake up, wake up' },
      { de: 'Reise, Reise',                   en: 'Journey, journey' },
      { de: 'Steig hinab, steig hinauf',      en: 'Descend, ascend' },
      { de: 'Wach auf',                       en: 'Wake up' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Reise, Reise, Seemann, Reise',   en: 'Journey, journey, sailor, journey' },
      { de: 'Jeder Welle ihren Gipfel',       en: 'To every wave its peak' },
      { de: 'Jeder Hoffnung ihren Abgrund',   en: 'To every hope its abyss' },
      { de: 'Jeder Welle ihren Tiefpunkt',    en: 'To every wave its low point' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'In die Tiefe, tief im Meer',     en: 'Into the deep, deep in the sea' },
      { de: 'Sinkt der Anker schwer',         en: 'The anchor sinks heavy' },
      { de: 'Über Wellen, weit und leer',     en: 'Over waves, far and empty' },
      { de: 'Weht der Wind uns her',          en: 'The wind blows us here' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Reise, Reise',                   en: 'Journey, journey' },
      { de: 'Wach auf',                       en: 'Wake up' },
    ],
  },
];
