// Vocabulary and lyrics for "Seemann" — Rammstein, Herzeleid (1995)

export const SEEMANN_VOCAB = [
  // Nouns
  { id: 1,  word: "Boot",        ipa: "[boːt]",              en: "boat",                    es: "bote / barco",           type: "noun",      songContext: "Komm in mein Boot" },
  { id: 2,  word: "Sturm",       ipa: "[ʃtʊʁm]",            en: "storm",                   es: "tormenta",               type: "noun",      songContext: "ein Sturm kommt auf" },
  { id: 3,  word: "Nacht",       ipa: "[naxt]",              en: "night",                   es: "noche",                  type: "noun",      songContext: "und es wird Nacht" },
  { id: 4,  word: "Hand",        ipa: "[hant]",              en: "hand",                    es: "mano",                   type: "noun",      songContext: "Wer hält deine Hand" },
  { id: 5,  word: "See",         ipa: "[zeː]",               en: "sea / lake",              es: "mar / lago",             type: "noun",      songContext: "die kalte See" },
  { id: 6,  word: "Herbstwind",  ipa: "[ˈhɛʁpstˌvɪnt]",    en: "autumn wind",             es: "viento otoñal",          type: "noun",      songContext: "Der Herbstwind hält die Segel straff" },
  { id: 7,  word: "Segel",       ipa: "[ˈzeːɡəl]",          en: "sail",                    es: "vela (de barco)",        type: "noun",      songContext: "die Segel straff" },
  { id: 8,  word: "Laterne",     ipa: "[laˈtɛʁnə]",         en: "lantern / lamp post",     es: "farol / lámpara",        type: "noun",      songContext: "Jetzt stehst du da an der Laterne" },
  { id: 9,  word: "Tränen",      ipa: "[ˈtʁɛːnən]",         en: "tears",                   es: "lágrimas",               type: "noun",      songContext: "mit Tränen im Gesicht" },
  { id: 10, word: "Gesicht",     ipa: "[ɡəˈzɪçt]",          en: "face",                    es: "cara / rostro",          type: "noun",      songContext: "Tränen im Gesicht" },
  { id: 11, word: "Tageslicht",  ipa: "[ˈtaːɡəsˌlɪçt]",    en: "daylight",                es: "luz del día",            type: "noun",      songContext: "Das Tageslicht fällt auf die Seite" },
  { id: 12, word: "Schatten",    ipa: "[ˈʃatən]",           en: "shadow / shade",          es: "sombra",                 type: "noun",      songContext: "Das Abendlicht verjagt die Schatten" },
  { id: 13, word: "Zeit",        ipa: "[tsaɪt]",             en: "time",                    es: "tiempo",                 type: "noun",      songContext: "die Zeit steht still" },
  { id: 14, word: "Herbst",      ipa: "[hɛʁpst]",           en: "autumn / fall",           es: "otoño",                  type: "noun",      songContext: "es wird Herbst" },
  { id: 15, word: "Sehnsucht",   ipa: "[ˈzeːnˌzʊxt]",      en: "longing / yearning",      es: "anhelo / nostalgia",     type: "noun",      songContext: "Die Sehnsucht wird der Steuermann" },
  { id: 16, word: "Steuermann",  ipa: "[ˈʃtɔɪ̯əʁˌman]",    en: "helmsman / skipper",      es: "timonel / capitán",      type: "noun",      songContext: "Die Sehnsucht wird der Steuermann" },
  { id: 17, word: "Seemann",     ipa: "[ˈzeːˌman]",         en: "sailor / seaman",         es: "marinero",               type: "noun",      songContext: "Der beste Seemann war doch ich" },
  { id: 18, word: "Kerze",       ipa: "[ˈkɛʁtsə]",          en: "candle",                  es: "vela / candela",         type: "noun",      songContext: "Das Feuer nimmst du von der Kerze" },
  { id: 19, word: "Mutter",      ipa: "[ˈmʊtəʁ]",           en: "mother",                  es: "madre",                  type: "noun",      songContext: "Sie sprachen nur von deiner Mutter" },
  { id: 20, word: "Ende",        ipa: "[ˈɛndə]",             en: "end",                     es: "fin / final",            type: "noun",      songContext: "Am Ende bleib ich doch alleine" },
  // Verbs
  { id: 21, word: "treiben",     ipa: "[ˈtʁaɪ̯bən]",        en: "to drift / to drive",     es: "derivar / impulsar",     type: "verb",      songContext: "treibst du davon" },
  { id: 22, word: "halten",      ipa: "[ˈhaltən]",           en: "to hold / to keep",       es: "sostener / retener",     type: "verb",      songContext: "Wer hält deine Hand" },
  { id: 23, word: "ziehen",      ipa: "[ˈtsiːən]",           en: "to pull / to drag",       es: "jalar / arrastrar",      type: "verb",      songContext: "wenn es dich nach unten zieht" },
  { id: 24, word: "stehen",      ipa: "[ˈʃteːən]",           en: "to stand / to be still",  es: "estar de pie / detenerse", type: "verb",    songContext: "die Zeit steht still" },
  { id: 25, word: "verjagen",    ipa: "[fɛʁˈjaːɡən]",       en: "to chase away / to drive off", es: "ahuyentar / expulsar", type: "verb",  songContext: "Das Abendlicht verjagt die Schatten" },
  { id: 26, word: "bleiben",     ipa: "[ˈblaɪ̯bən]",         en: "to stay / to remain",     es: "quedarse / permanecer",  type: "verb",      songContext: "Am Ende bleib ich doch alleine" },
  // Adjectives / adverbs
  { id: 27, word: "uferlos",     ipa: "[ˈuːfɐˌloːs]",       en: "boundless / shoreless",   es: "sin orillas / ilimitado", type: "adjective", songContext: "So uferlos die kalte See" },
  { id: 28, word: "gnadenlos",   ipa: "[ˈɡnaːdənˌloːs]",   en: "merciless / ruthless",    es: "despiadado/a",           type: "adjective", songContext: "So gnadenlos ist nur die Nacht" },
  { id: 29, word: "straff",      ipa: "[ʃtʁaf]",             en: "taut / tight / tense",    es: "tenso/a / tirante",      type: "adjective", songContext: "die Segel straff" },
  { id: 30, word: "still",       ipa: "[ʃtɪl]",              en: "still / quiet / motionless", es: "quieto/a / inmóvil",  type: "adjective", songContext: "die Zeit steht still" },
];

// Lyrics — Rammstein, "Seemann", Herzeleid (1995)
export const SEEMANN_LYRICS = [
  {
    label: { en: "Intro", es: "Intro" },
    lines: [
      { de: "Komm in mein Boot",                  en: "Come into my boat" },
      { de: "ein Sturm kommt auf",                en: "a storm is rising" },
      { de: "und es wird Nacht",                  en: "and night is falling" },
      { de: "Wo willst du hin",                   en: "Where do you want to go" },
      { de: "So ganz allein",                     en: "So all alone" },
      { de: "treibst du davon",                   en: "you drift away" },
    ]
  },
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "Wer hält deine Hand",                en: "Who will hold your hand" },
      { de: "wenn es dich",                       en: "when it" },
      { de: "nach unten zieht",                   en: "pulls you under" },
      { de: "Wo willst du hin",                   en: "Where do you want to go" },
      { de: "So uferlos",                         en: "So boundless" },
      { de: "die kalte See",                      en: "the cold sea" },
      { de: "Komm in mein Boot",                  en: "Come into my boat" },
      { de: "Der Herbstwind hält",                en: "The autumn wind holds" },
      { de: "die Segel straff",                   en: "the sails taut" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Jetzt stehst du da an der Laterne",  en: "Now you stand there at the lamp post" },
      { de: "mit Tränen im Gesicht",              en: "with tears on your face" },
      { de: "Das Tageslicht fällt auf die Seite", en: "The daylight falls to the side" },
      { de: "der Herbstwind fegt die Straße leer",en: "the autumn wind sweeps the street empty" },
      { de: "Jetzt stehst du da an der Laterne",  en: "Now you stand there at the lamp post" },
      { de: "hast Tränen im Gesicht",             en: "you have tears on your face" },
      { de: "Das Abendlicht verjagt die Schatten",en: "The evening light chases away the shadows" },
      { de: "die Zeit steht still und es wird Herbst", en: "time stands still and it becomes autumn" },
    ]
  },
  {
    label: { en: "Bridge", es: "Puente" },
    lines: [
      { de: "Komm in mein Boot",                  en: "Come into my boat" },
      { de: "Die Sehnsucht wird",                 en: "Longing will be" },
      { de: "der Steuermann",                     en: "the helmsman" },
      { de: "Komm in mein Boot",                  en: "Come into my boat" },
      { de: "Der beste Seemann",                  en: "The best sailor" },
      { de: "war doch ich",                       en: "was me after all" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "Jetzt stehst du da an der Laterne",  en: "Now you stand there at the lamp post" },
      { de: "hast Tränen im Gesicht",             en: "you have tears on your face" },
      { de: "Das Feuer nimmst du von der Kerze",  en: "You take the fire from the candle" },
      { de: "die Zeit steht still und es wird Herbst", en: "time stands still and it becomes autumn" },
    ]
  },
  {
    label: { en: "Outro", es: "Outro" },
    lines: [
      { de: "Sie sprachen nur von deiner Mutter", en: "They only spoke of your mother" },
      { de: "So gnadenlos ist nur die Nacht",     en: "Only the night is this merciless" },
      { de: "Am Ende bleib ich doch alleine",     en: "In the end I remain alone after all" },
      { de: "Die Zeit steht still",               en: "Time stands still" },
      { de: "und mir ist kalt, kalt, kalt, kalt", en: "and I am cold, cold, cold, cold" },
    ]
  },
];
