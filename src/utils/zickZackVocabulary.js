// Vocabulary and lyrics for "Zick Zack" — Rammstein, Zeit (2022)

export const ZICK_ZACK_VOCAB = [
  // Nouns
  { id: 1,  word: 'Skalpell',        ipa: '[ʃkalˈpɛl]',         en: 'scalpel',                     es: 'bisturí',                       type: 'noun'      },
  { id: 2,  word: 'Schmerz',         ipa: '[ʃmɛʁts]',           en: 'pain',                        es: 'dolor',                         type: 'noun'      },
  { id: 3,  word: 'Eitelkeit',       ipa: '[ˈaɪtl̩kaɪt]',       en: 'vanity',                      es: 'vanidad',                       type: 'noun'      },
  { id: 4,  word: 'Falte',           ipa: '[ˈfaltə]',           en: 'wrinkle',                     es: 'arruga',                        type: 'noun'      },
  { id: 5,  word: 'Wange',           ipa: '[ˈvaŋə]',            en: 'cheek',                       es: 'mejilla',                       type: 'noun'      },
  { id: 6,  word: 'Jochbein',        ipa: '[ˈjoːxbaɪn]',        en: 'cheekbone',                   es: 'pómulo',                        type: 'noun'      },
  { id: 7,  word: 'Nadel',           ipa: '[ˈnaːdl̩]',           en: 'needle',                      es: 'aguja',                         type: 'noun'      },
  { id: 8,  word: 'Faden',           ipa: '[ˈfaːdn̩]',           en: 'thread / suture',             es: 'hilo / sutura',                 type: 'noun'      },
  { id: 9,  word: 'Schere',          ipa: '[ˈʃeːʁə]',           en: 'scissors',                    es: 'tijeras',                       type: 'noun'      },
  { id: 10, word: 'Lippe',           ipa: '[ˈlɪpə]',            en: 'lip',                         es: 'labio',                         type: 'noun'      },
  { id: 11, word: 'Sondermüll',      ipa: '[ˈzɔndɐˌmʏl]',       en: 'hazardous waste / implants',  es: 'residuos peligrosos / rellenos', type: 'noun'     },
  // Verbs
  { id: 12, word: 'schneiden',       ipa: '[ˈʃnaɪdn̩]',          en: 'to cut',                      es: 'cortar',                        type: 'verb'      },
  { id: 13, word: 'leiden',          ipa: '[ˈlaɪdn̩]',           en: 'to suffer',                   es: 'sufrir',                        type: 'verb'      },
  { id: 14, word: 'straffen',        ipa: '[ˈʃtʁafn̩]',          en: 'to tighten / lift (face)',    es: 'tensar / levantar',             type: 'verb'      },
  { id: 15, word: 'spritzen',        ipa: '[ˈʃpʁɪtsn̩]',         en: 'to inject',                   es: 'inyectar',                      type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 16, word: 'alt',             ipa: '[alt]',              en: 'old',                         es: 'viejo/a / anciano/a',           type: 'adjective' },
  { id: 17, word: 'schön',           ipa: '[ʃøːn]',             en: 'beautiful',                   es: 'hermoso/a / bello/a',           type: 'adjective' },
  { id: 18, word: 'aktuell',         ipa: '[aktuˈɛl]',          en: 'current / up-to-date',        es: 'actual / moderno/a',            type: 'adjective' },
  { id: 19, word: 'wer schön sein will, muss leiden', ipa: '[veːɐ̯ ʃøːn zaɪn vɪl mʊs ˈlaɪdn̩]', en: 'beauty requires pain (proverb)', es: 'quien quiere ser hermoso debe sufrir', type: 'phrase' },
];

export const ZICK_ZACK_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Du hast so viel Geld und weißt nicht wohin', en: "You have so much money and don't know where to put it" },
      { de: 'Kauf dir dein Gesicht, das du nicht mehr bin', en: "Buy yourself the face you no longer are" },
      { de: 'Die Schönheit kommt mit Messer und Nadel', en: 'Beauty comes with knife and needle' },
      { de: 'Ein neues Ich für deine Façade', en: 'A new self for your facade' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Du willst jung sein, doch bist du alt', en: 'You want to be young, but you are old' },
      { de: 'Ein wenig Botox, das Gesicht wird glatt', en: 'A little Botox, the face becomes smooth' },
      { de: 'Die Falten weg, der Bauch muss fort', en: 'The wrinkles gone, the belly must go' },
      { de: 'Das Messer spricht, ein Wort nach dem and\'ren Wort', en: 'The knife speaks, one word after the other' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Zick-zack, zick-zack, schneid das ab', en: 'Zigzag, zigzag, cut that off' },
      { de: 'Tick-tack, tick-tack, du wirst alt', en: 'Tick-tock, tick-tock, you are getting old' },
      { de: 'Deine Zeit läuft langsam ab', en: 'Your time is slowly running out' },
    ],
  },
  {
    label: { en: 'Post-Chorus', es: 'Post-coro' },
    lines: [
      { de: 'Wer schön sein will, der muss auch leiden', en: 'Whoever wants to be beautiful must also suffer' },
      { de: 'Aus- und weg- und abschneiden', en: 'Cut out and off and away' },
      { de: 'Nadel, Faden, Schere, Licht', en: 'Needle, thread, scissors, light' },
      { de: 'Doch ohne Schmerzen geht es nicht', en: 'But without pain it does not work' },
    ],
  },
  {
    label: { en: 'Verse 3', es: 'Estrofa 3' },
    lines: [
      { de: 'Wangen straffen, Jochbein schnitzen', en: 'Tighten cheeks, carve cheekbones' },
      { de: 'Sondermüll in Lippen spritzen', en: 'Inject hazardous waste into lips' },
      { de: 'Falten rascheln am Skalpell', en: 'Wrinkles rustle at the scalpel' },
      { de: 'Vorhaut weg, sehr aktuell', en: 'Foreskin off, very current' },
      { de: 'Ist die Frau im Mann nicht froh', en: 'If the woman in the man is not happy' },
      { de: 'Alles ganz weg, sowieso', en: 'Everything all gone, anyway' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Zick-zack, zick-zack, schneid das ab', en: 'Zigzag, zigzag, cut that off' },
      { de: 'Tick-tack, tick-tack, du bist alt', en: 'Tick-tock, tick-tock, you are old' },
      { de: 'Deine Zeit läuft langsam ab', en: 'Your time is slowly running out' },
    ],
  },
  {
    label: { en: 'Post-Chorus', es: 'Post-coro' },
    lines: [
      { de: 'Wer schön sein will, der muss auch leiden', en: 'Whoever wants to be beautiful must also suffer' },
      { de: 'Eitelkeit ist nie bescheiden', en: 'Vanity is never modest' },
      { de: 'Nadel, Faden, Schere, Licht', en: 'Needle, thread, scissors, light' },
      { de: 'Doch ohne Schmerzen geht es—', en: 'But without pain it does not—' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Schöner, größer, härter', en: 'More beautiful, bigger, harder' },
      { de: 'Straffer, glatter, stärker', en: 'Tighter, smoother, stronger' },
    ],
  },
];
