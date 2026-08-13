// Vocabulary and lyrics for "Puppe" — Rammstein, Rammstein (2019)

export const PUPPE_VOCAB = [
  // Nouns
  { id: 1,  word: "Schwesterlein", ipa: "[ˈʃvɛstɐlaɪn]",  en: "little sister",              es: "hermanita",                 type: "noun",      songContext: "Wenn Schwesterlein zur Arbeit muss" },
  { id: 2,  word: "Zimmer",        ipa: "[ˈtsɪmɐ]",         en: "room",                       es: "habitación",                type: "noun",      songContext: "schließt mich im Zimmer ein" },
  { id: 3,  word: "Puppe",         ipa: "[ˈpʊpə]",          en: "doll",                       es: "muñeca",                    type: "noun",      songContext: "Hat eine Puppe mir geschenkt" },
  { id: 4,  word: "Himmel",        ipa: "[ˈhɪməl]",         en: "sky / heaven",               es: "cielo",                     type: "noun",      songContext: "Am Himmel dunkle Wolken zieh'n" },
  { id: 5,  word: "Wolken",        ipa: "[ˈvɔlkən]",        en: "clouds",                     es: "nubes",                     type: "noun",      songContext: "Am Himmel dunkle Wolken zieh'n" },
  { id: 6,  word: "Medizin",       ipa: "[mediˈtsiːn]",     en: "medicine",                   es: "medicina",                  type: "noun",      songContext: "ich nehme artig meine Medizin" },
  { id: 7,  word: "Treppe",        ipa: "[ˈtʁɛpə]",         en: "staircase / stairs",         es: "escalera",                  type: "noun",      songContext: "Ich höre Schritte auf der Treppe" },
  { id: 8,  word: "Schritte",      ipa: "[ˈʃʁɪtə]",         en: "steps / footsteps",          es: "pasos",                     type: "noun",      songContext: "Ich höre Schritte auf der Treppe" },
  { id: 9,  word: "Kopf",          ipa: "[kɔpf]",           en: "head",                       es: "cabeza",                    type: "noun",      songContext: "reiß ich der Puppe den Kopf ab" },
  { id: 10, word: "Fenster",       ipa: "[ˈfɛnstɐ]",        en: "window",                     es: "ventana",                   type: "noun",      songContext: "das Licht im Fenster rot" },
  { id: 11, word: "Licht",         ipa: "[lɪçt]",           en: "light",                      es: "luz",                       type: "noun",      songContext: "das Licht im Fenster rot" },
  { id: 12, word: "Not",           ipa: "[noːt]",           en: "distress / need",            es: "angustia / necesidad",      type: "noun",      songContext: "ich warte in der Not" },
  // Verbs
  { id: 13, word: "einschließen",  ipa: "[ˈaɪnʃliːsən]",   en: "to lock in / to shut in",   es: "encerrar",                  type: "verb",      songContext: "schließt mich im Zimmer ein" },
  { id: 14, word: "schenken",      ipa: "[ˈʃɛŋkən]",        en: "to give as a gift",          es: "regalar",                   type: "verb",      songContext: "Hat eine Puppe mir geschenkt" },
  { id: 15, word: "warten",        ipa: "[ˈvaʁtən]",        en: "to wait",                    es: "esperar",                   type: "verb",      songContext: "ich warte auf die Zeit" },
  { id: 16, word: "reißen",        ipa: "[ˈʁaɪsən]",        en: "to tear / to rip",           es: "arrancar / desgarrar",      type: "verb",      songContext: "reiß ich der Puppe den Kopf ab" },
  { id: 17, word: "stecken",       ipa: "[ˈʃtɛkən]",        en: "to put / to place / to stick",es: "meter / colocar",          type: "verb",      songContext: "steck ich der Puppe den Kopf wieder an" },
  { id: 18, word: "weinen",        ipa: "[ˈvaɪnən]",        en: "to cry",                     es: "llorar",                    type: "verb",      songContext: "Die Puppe weint" },
  { id: 19, word: "frönen",        ipa: "[ˈfʁøːnən]",       en: "to indulge in / to be devoted to", es: "entregarse a / dedicarse a", type: "verb", songContext: "Wenn Schwesterlein der Arbeit frönt" },
  { id: 20, word: "hören",         ipa: "[ˈhøːʁən]",        en: "to hear / to listen",        es: "oír / escuchar",            type: "verb",      songContext: "Ich höre Schritte auf der Treppe" },
  // Adjectives / adverbs
  { id: 21, word: "artig",         ipa: "[ˈaʁtɪç]",         en: "well-behaved / obedient",    es: "obediente / bueno/a",       type: "adjective", songContext: "ich nehme artig meine Medizin" },
  { id: 22, word: "dunkel",        ipa: "[ˈdʊŋkəl]",        en: "dark",                       es: "oscuro/a",                  type: "adjective", songContext: "Am Himmel dunkle Wolken zieh'n" },
  { id: 23, word: "rot",           ipa: "[ʁoːt]",           en: "red",                        es: "rojo/a",                    type: "adjective", songContext: "das Licht im Fenster rot" },
  { id: 24, word: "allein",        ipa: "[aˈlaɪn]",         en: "alone",                      es: "solo/a",                    type: "adjective", songContext: "dann bin ich nicht allein" },
  { id: 25, word: "wieder",        ipa: "[ˈviːdɐ]",         en: "again",                      es: "de nuevo / otra vez",       type: "adverb",    songContext: "steck ich der Puppe den Kopf wieder an" },
];

export const PUPPE_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "Wenn Schwesterlein zur Arbeit muss",      en: "When little sister must go to work" },
      { de: "schließt mich im Zimmer ein",             en: "she locks me in the room" },
      { de: "Hat eine Puppe mir geschenkt",            en: "She gave me a doll as a gift" },
      { de: "dann bin ich nicht allein",               en: "so I won't be alone" },
    ],
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "Am Himmel dunkle Wolken zieh'n",          en: "Dark clouds move across the sky" },
      { de: "ich nehme artig meine Medizin",           en: "I obediently take my medicine" },
      { de: "Ich höre Schritte auf der Treppe",        en: "I hear footsteps on the staircase" },
      { de: "und manchmal geht die Tür auch auf",      en: "and sometimes the door opens too" },
    ],
  },
  {
    label: { en: "Verse 3", es: "Estrofa 3" },
    lines: [
      { de: "Sie kommen und sie gehen",                en: "They come and they go" },
      { de: "und manchmal auch zu zweit",              en: "and sometimes in pairs" },
      { de: "Ich warte bis es dunkel ist",             en: "I wait until it is dark" },
      { de: "ich warte auf die Zeit",                  en: "I wait for the time" },
    ],
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Und dann reiß ich der Puppe den Kopf ab", en: "And then I tear the doll's head off" },
      { de: "dann reiß ich der Puppe den Kopf ab",     en: "then I tear the doll's head off" },
      { de: "dann reiß ich der Puppe den Kopf ab",     en: "then I tear the doll's head off" },
      { de: "reiß ich der Puppe den Kopf ab",          en: "I tear the doll's head off" },
    ],
  },
  {
    label: { en: "Verse 4", es: "Estrofa 4" },
    lines: [
      { de: "Wenn Schwesterlein der Arbeit frönt",     en: "When little sister is devoted to her work" },
      { de: "das Licht im Fenster rot",                en: "the light in the window is red" },
      { de: "Ich warte bis sie wieder kommt",          en: "I wait until she comes back" },
      { de: "ich warte in der Not",                    en: "I wait in distress" },
    ],
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Und dann reiß ich der Puppe den Kopf ab", en: "And then I tear the doll's head off" },
      { de: "dann reiß ich der Puppe den Kopf ab",     en: "then I tear the doll's head off" },
      { de: "dann reiß ich der Puppe den Kopf ab",     en: "then I tear the doll's head off" },
      { de: "reiß ich der Puppe den Kopf ab",          en: "I tear the doll's head off" },
    ],
  },
  {
    label: { en: "Bridge", es: "Puente" },
    lines: [
      { de: "Dam dam da dam dam dam da dam",           en: "Dam dam da dam dam dam da dam" },
      { de: "Dam dam da dam dam dam da dam",           en: "Dam dam da dam dam dam da dam" },
      { de: "Dam dam da dam dam dam da dam",           en: "Dam dam da dam dam dam da dam" },
      { de: "Dam dam da dam dam dam da dam",           en: "Dam dam da dam dam dam da dam" },
    ],
  },
  {
    label: { en: "Chorus (final)", es: "Coro (final)" },
    lines: [
      { de: "Und dann reiß ich der Puppe den Kopf ab", en: "And then I tear the doll's head off" },
      { de: "dann reiß ich der Puppe den Kopf ab",     en: "then I tear the doll's head off" },
      { de: "dann steck ich der Puppe den Kopf wieder an", en: "then I put the doll's head back on" },
      { de: "Die Puppe tut mir leid",                  en: "I feel sorry for the doll" },
      { de: "Die Puppe weint",                         en: "The doll cries" },
    ],
  },
];
