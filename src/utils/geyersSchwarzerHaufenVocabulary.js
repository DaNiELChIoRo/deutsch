// Vocabulary and lyrics for "Wir sind des Geyers schwarzer Haufen"
// Traditional Volkslied (c. 1525, German Peasants' War) — rec. Botho Lucas Chor

export const GEYERS_SCHWARZER_HAUFEN_VOCAB = [
  // Nouns
  { id: 1,  word: 'Haufen',      ipa: '[ˈhaʊfn̩]',       en: 'band / troop / mob',              es: 'tropel / hueste / banda',         type: 'noun'      },
  { id: 2,  word: 'Spieß',       ipa: '[ʃpiːs]',         en: 'pike / spear',                    es: 'pica / lanza',                    type: 'noun'      },
  { id: 3,  word: 'Hahn',        ipa: '[haːn]',          en: 'rooster; "roten Hahn" = fire',    es: 'gallo; "gallo rojo" = incendio',  type: 'noun'      },
  { id: 4,  word: 'Kloster',     ipa: '[ˈkloːstɐ]',      en: 'monastery / convent',             es: 'monasterio / convento',           type: 'noun'      },
  { id: 5,  word: 'Adel',        ipa: '[ˈaːdl̩]',         en: 'nobility',                        es: 'nobleza',                         type: 'noun'      },
  { id: 6,  word: 'Pfaffe',      ipa: '[ˈpfafə]',        en: 'priest (derogatory)',             es: 'cura (despectivo)',                type: 'noun'      },
  { id: 7,  word: 'Schrift',     ipa: '[ʃʁɪft]',         en: 'scripture / writing',             es: 'escritura / escritura sagrada',   type: 'noun'      },
  { id: 8,  word: 'Schloss',     ipa: '[ʃlɔs]',          en: 'castle / manor',                  es: 'castillo / palacio',              type: 'noun'      },
  { id: 9,  word: 'Abtei',       ipa: '[apˈtaɪ]',        en: 'abbey',                           es: 'abadía',                          type: 'noun'      },
  { id: 10, word: 'Stift',       ipa: '[ʃtɪft]',         en: 'religious chapter / foundation',  es: 'colegiata / fundación religiosa', type: 'noun'      },
  { id: 11, word: 'Edelmann',    ipa: '[ˈeːdl̩ˌman]',     en: 'nobleman',                        es: 'noble / aristócrata',             type: 'noun'      },
  { id: 12, word: 'Knecht',      ipa: '[knɛçt]',         en: 'serf / servant',                  es: 'siervo / criado',                 type: 'noun'      },
  { id: 13, word: 'Recht',       ipa: '[ʁɛçt]',          en: 'right / law',                     es: 'derecho / ley',                   type: 'noun'      },
  { id: 14, word: 'Enkel',       ipa: '[ˈɛŋkl̩]',         en: 'grandchild(ren)',                 es: 'nieto(s)',                         type: 'noun'      },

  // Verbs
  { id: 15, word: 'raufen',      ipa: '[ˈʁaʊfn̩]',        en: 'to fight / brawl',                es: 'pelear / luchar',                 type: 'verb'      },
  { id: 16, word: 'setzen',      ipa: '[ˈzɛtsn̩]',        en: 'to set / place',                  es: 'colocar / poner',                 type: 'verb'      },
  { id: 17, word: 'fechten',     ipa: '[ˈfɛçtn̩]',        en: 'to fight / fence',                es: 'combatir / esgrimir',             type: 'verb'      },
  { id: 18, word: 'klagen',      ipa: '[ˈklaːɡn̩]',       en: 'to lament / complain',            es: 'lamentarse / quejarse',           type: 'verb'      },
  { id: 19, word: 'graben',      ipa: '[ˈɡʁaːbn̩]',       en: 'to dig',                          es: 'cavar',                           type: 'verb'      },
  { id: 20, word: 'spinnen',     ipa: '[ˈʃpɪnən]',       en: 'to spin (thread)',                es: 'hilar',                           type: 'verb'      },

  // Adjectives / adverbs / phrases
  { id: 21, word: 'leibeigen',   ipa: '[ˈlaɪbˌaɪɡn̩]',   en: 'in serfdom / bound',              es: 'en servidumbre / siervo',         type: 'adjective' },
  { id: 22, word: 'heilig',      ipa: '[ˈhaɪlɪç]',       en: 'holy / sacred',                   es: 'sagrado/a',                       type: 'adjective' },
  { id: 23, word: 'drauf und dran', ipa: '[ˈdʁaʊf ʊnt dʁan]', en: 'go at it! / full speed ahead', es: '¡a por ello! / ¡adelante!',    type: 'phrase'    },
  { id: 24, word: 'roten Hahn',  ipa: '[ˈʁoːtn̩ haːn]',  en: '"red rooster" = arson / fire',    es: '"gallo rojo" = incendio provocado', type: 'phrase' },
];

export const GEYERS_SCHWARZER_HAUFEN_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Wir sind des Geyers schwarzer Haufen, He ja, he ho!',        en: 'We are Geyer\'s black band, he ya, he ho!' },
      { de: 'Wir woll\'n mit Pfaff\' und Adel raufen, he ja, he ho ho!',  en: 'We want to fight priests and nobles, he ya, he ho ho!' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Jetzt geht es Schloß, Abtei und Stift, He ja, he ho!',       en: 'Now for the castle, abbey, and chapter, he ya, he ho!' },
      { de: 'Uns gilt nichts als die Heil\'ge Schrift, he ja, he ho ho!', en: 'Nothing counts for us but the Holy Scripture, he ya, he ho ho!' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
    ],
  },
  {
    label: { en: 'Verse 3', es: 'Estrofa 3' },
    lines: [
      { de: 'Als Adam grub und Eva spann, He ja, he ho!',                 en: 'When Adam dug and Eve spun, he ya, he ho!' },
      { de: 'Wo war denn der da Edelmann? he ja, he ho ho!',              en: 'Where was the nobleman then? he ya, he ho ho!' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
    ],
  },
  {
    label: { en: 'Verse 4', es: 'Estrofa 4' },
    lines: [
      { de: 'Wir wollen Gott im Himmel klagen, He ja, he ho!',            en: 'We want to complain to God in heaven, he ya, he ho!' },
      { de: 'Dass wir die Pfaffen nicht dürfen totschlagen, he ja, he ho ho!', en: 'That we are not allowed to slay the priests, he ya, he ho ho!' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
    ],
  },
  {
    label: { en: 'Verse 5', es: 'Estrofa 5' },
    lines: [
      { de: 'Wir woll\'n nicht länger sein ein Knecht, He ja, he ho!',    en: 'We don\'t want to be a serf any longer, he ya, he ho!' },
      { de: 'Leibeigen, fröhlich ohne Recht, he ja, he ho ho!',           en: 'Bound in serfdom, cheerful without rights, he ya, he ho ho!' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
    ],
  },
  {
    label: { en: 'Verse 6', es: 'Estrofa 6' },
    lines: [
      { de: 'Geschlagen gehen wir nach Haus, He ja, he ho!',              en: 'Beaten, we march home, he ya, he ho!' },
      { de: 'Unsere Enkel fechten\'s besser aus, he ja, he ho ho!',       en: 'Our grandchildren will fight it out better, he ya, he ho ho!' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
      { de: 'Spieß voran, drauf und dran,',                               en: 'Pike forward, go at it!' },
      { de: 'Setzt auf\'s Klosterdach den roten Hahn!',                   en: 'Set the red rooster on the monastery roof!' },
    ],
  },
];
