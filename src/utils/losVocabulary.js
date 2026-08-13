// Vocabulary and lyrics for "Los" — Rammstein, Reise, Reise (2004)

export const LOS_VOCAB = [
  // Nouns
  { id: 1,  word: 'Wort',         ipa: '[vɔʁt]',            en: 'word',                          es: 'palabra',                       type: 'noun'      },
  { id: 2,  word: 'Stimme',       ipa: '[ˈʃtɪmə]',          en: 'voice',                         es: 'voz',                           type: 'noun'      },
  { id: 3,  word: 'Schweigen',    ipa: '[ˈʃvaɪɡən]',        en: 'silence',                       es: 'silencio',                      type: 'noun'      },
  { id: 4,  word: 'Mund',         ipa: '[mʊnt]',             en: 'mouth',                         es: 'boca',                          type: 'noun'      },
  { id: 5,  word: 'Atem',         ipa: '[ˈaːtəm]',           en: 'breath',                        es: 'aliento / respiración',         type: 'noun'      },
  { id: 6,  word: 'Schrei',       ipa: '[ʃʁaɪ]',             en: 'scream / cry',                  es: 'grito',                         type: 'noun'      },
  { id: 7,  word: 'Licht',        ipa: '[lɪçt]',             en: 'light',                         es: 'luz',                           type: 'noun'      },
  { id: 8,  word: 'Nacht',        ipa: '[naxt]',             en: 'night',                         es: 'noche',                         type: 'noun'      },
  { id: 9,  word: 'Herz',         ipa: '[hɛʁts]',            en: 'heart',                         es: 'corazón',                       type: 'noun'      },
  { id: 10, word: 'Traum',        ipa: '[tʁaʊm]',            en: 'dream',                         es: 'sueño',                         type: 'noun'      },
  // Verbs
  { id: 11, word: 'loslassen',    ipa: '[ˈloːsˌlasən]',      en: 'to let go / to release',        es: 'soltar / liberar',              type: 'verb'      },
  { id: 12, word: 'sprechen',     ipa: '[ˈʃpʁɛçən]',         en: 'to speak',                      es: 'hablar',                        type: 'verb'      },
  { id: 13, word: 'schweigen',    ipa: '[ˈʃvaɪɡən]',         en: 'to be silent / to keep quiet',  es: 'callar / guardar silencio',     type: 'verb'      },
  { id: 14, word: 'schreien',     ipa: '[ˈʃʁaɪən]',          en: 'to scream / to shout',          es: 'gritar',                        type: 'verb'      },
  { id: 15, word: 'atmen',        ipa: '[ˈaːtmən]',           en: 'to breathe',                    es: 'respirar',                      type: 'verb'      },
  { id: 16, word: 'fühlen',       ipa: '[ˈfyːlən]',           en: 'to feel',                       es: 'sentir',                        type: 'verb'      },
  { id: 17, word: 'brechen',      ipa: '[ˈbʁɛçən]',           en: 'to break',                      es: 'romper',                        type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 18, word: 'los',          ipa: '[loːs]',              en: 'loose / away / let go!',        es: 'suelto / ¡suelta! / ¡vamos!',   type: 'adjective' },
  { id: 19, word: 'stumm',        ipa: '[ʃtʊm]',              en: 'mute / silent',                 es: 'mudo/a / silencioso/a',         type: 'adjective' },
  { id: 20, word: 'laut',         ipa: '[laʊt]',              en: 'loud',                          es: 'ruidoso/a / en voz alta',       type: 'adjective' },
  { id: 21, word: 'frei',         ipa: '[fʁaɪ]',              en: 'free',                          es: 'libre',                         type: 'adjective' },
  { id: 22, word: 'endlich',      ipa: '[ˈɛntlɪç]',           en: 'finally / at last',             es: 'finalmente / por fin',          type: 'adjective' },
  { id: 23, word: 'leise',        ipa: '[ˈlaɪzə]',            en: 'quiet / soft / gentle',         es: 'suave / bajo / tranquilo/a',    type: 'adjective' },
];

export const LOS_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Kein Wort kommt über meine Lippen',         en: 'No word comes over my lips' },
      { de: 'Mein Mund ist stumm und kalt',              en: 'My mouth is mute and cold' },
      { de: 'Ich hab\' so lang geschwiegen',             en: 'I have been silent for so long' },
      { de: 'Bis nichts mehr von mir hallt',             en: 'Until nothing echoes from me anymore' },
    ],
  },
  {
    label: { en: 'Pre-chorus', es: 'Pre-coro' },
    lines: [
      { de: 'Der Atem stockt mir',                       en: 'My breath catches' },
      { de: 'Das Herz bleibt stehn',                     en: 'The heart stands still' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Los, los, lass es los',                     en: 'Go, go, let it go' },
      { de: 'Los, endlich los',                          en: 'Go, finally go' },
      { de: 'Los, los, lass mich los',                   en: 'Go, go, let me go' },
      { de: 'Ich bin frei',                              en: 'I am free' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Das Schweigen drückt auf meiner Brust',     en: 'The silence presses on my chest' },
      { de: 'Es nimmt mir den Atem weg',                 en: 'It takes my breath away' },
      { de: 'Ich will endlich wieder sprechen',          en: 'I finally want to speak again' },
      { de: 'Bevor ich ganz vergeh\'',                   en: 'Before I disappear completely' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Ein Schrei bricht durch die Nacht',         en: 'A scream breaks through the night' },
      { de: 'Das Licht erscheint im Dunkel',             en: 'The light appears in the dark' },
      { de: 'Der Traum ist nicht gemacht',               en: 'The dream is not made' },
      { de: 'Für diese Welt, so stumm',                  en: 'For this world, so mute' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Los, los',                                  en: 'Go, go' },
      { de: 'Endlich frei',                              en: 'Finally free' },
    ],
  },
];
