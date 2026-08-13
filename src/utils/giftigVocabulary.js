// Vocabulary and lyrics for "Giftig" — Rammstein, Zeit (2022)

export const GIFTIG_VOCAB = [
  // Nouns
  { id: 1,  word: 'Gift',            ipa: '[ɡɪft]',             en: 'poison / venom',              es: 'veneno',                        type: 'noun'      },
  { id: 2,  word: 'Blut',            ipa: '[bluːt]',            en: 'blood',                       es: 'sangre',                        type: 'noun'      },
  { id: 3,  word: 'Zahn',            ipa: '[tsaːn]',            en: 'tooth',                       es: 'diente',                        type: 'noun'      },
  { id: 4,  word: 'Gegenmittel',     ipa: '[ˈɡeːɡn̩ˌmɪtl̩]',    en: 'antidote',                    es: 'antídoto',                      type: 'noun'      },
  { id: 5,  word: 'Tarnung',         ipa: '[ˈtaʁnʊŋ]',         en: 'camouflage / disguise',       es: 'camuflaje / disfraz',           type: 'noun'      },
  { id: 6,  word: 'Warnung',         ipa: '[ˈvaʁnʊŋ]',         en: 'warning',                     es: 'advertencia / aviso',           type: 'noun'      },
  { id: 7,  word: 'Zeichen',         ipa: '[ˈtsaɪçn̩]',         en: 'sign / signal',               es: 'señal / signo',                 type: 'noun'      },
  { id: 8,  word: 'Zunge',           ipa: '[ˈtsʊŋə]',           en: 'tongue',                      es: 'lengua',                        type: 'noun'      },
  { id: 9,  word: 'Schlaf',          ipa: '[ʃlaːf]',            en: 'sleep',                       es: 'sueño',                         type: 'noun'      },
  // Verbs
  { id: 10, word: 'strömen',         ipa: '[ˈʃtʁøːmən]',        en: 'to flow / stream',            es: 'fluir / manar',                 type: 'verb'      },
  { id: 11, word: 'beißen',          ipa: '[ˈbaɪsn̩]',          en: 'to bite',                     es: 'morder',                        type: 'verb'      },
  { id: 12, word: 'schlafen',        ipa: '[ˈʃlaːfn̩]',         en: 'to sleep',                    es: 'dormir',                        type: 'verb'      },
  { id: 13, word: 'graben',          ipa: '[ˈɡʁaːbn̩]',         en: 'to dig',                      es: 'cavar',                         type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 14, word: 'giftig',          ipa: '[ˈɡɪftɪç]',          en: 'toxic / poisonous',           es: 'tóxico/a / venenoso/a',         type: 'adjective' },
  { id: 15, word: 'hinterlistig',    ipa: '[ˈhɪntɐˌlɪstɪç]',   en: 'treacherous / cunning',       es: 'traicionero/a / astuto/a',      type: 'adjective' },
  { id: 16, word: 'perfekt',         ipa: '[pɛʁˈfɛkt]',         en: 'perfect',                     es: 'perfecto/a',                    type: 'adjective' },
  { id: 17, word: 'langsam',         ipa: '[ˈlaŋzaːm]',         en: 'slow / slowly',               es: 'lento/a / despacio',            type: 'adjective' },
];

export const GIFTIG_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Du kamst zu mir in stiller Nacht', en: 'You came to me in the silent night' },
      { de: 'Hast mich so langsam klein gemacht', en: 'You made me so slowly small' },
      { de: 'Ein Kuss, und schon war ich verlor\'n', en: 'A kiss, and I was already lost' },
      { de: 'Als wär ich für dich auserkorn', en: 'As if I were chosen for you' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Kein Laut, kein Zeichen, keine Spur', en: 'No sound, no sign, no trace' },
      { de: 'Du schlichst durch meine Seele nur', en: 'You crept through my soul alone' },
      { de: 'So sanft, so still, und doch so tief', en: 'So gentle, so quiet, and yet so deep' },
      { de: 'Ich merkte nicht, dass ich schon schlief', en: 'I did not notice I was already asleep' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: "Und das Gift strömt langsam in mein Blut", en: 'And the poison flows slowly into my blood' },
      { de: "Ach, ich seh' schon weißes Licht", en: 'Ah, I can already see white light' },
      { de: 'Und irgendwie find ich es gut, ja', en: 'And somehow I find it good, yes' },
      { de: 'Ein Gegenmittel gibt es nicht', en: 'There is no antidote' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Du bist giftig', en: 'You are toxic' },
      { de: 'Ach so giftig', en: 'Oh so toxic' },
      { de: 'Gebissen, als ich schlief', en: 'Bitten while I slept' },
      { de: 'Und die Zähne graben tief', en: 'And the teeth dig deep' },
      { de: 'Du bist giftig', en: 'You are toxic' },
      { de: 'Ach so giftig', en: 'Oh so toxic' },
      { de: 'Kein Zeichen, keine Warnung', en: 'No sign, no warning' },
      { de: 'So perfekt war deine Tarnung', en: 'So perfect was your camouflage' },
      { de: 'Hinterlistig, als ich schlief', en: 'Treacherous, while I slept' },
      { de: 'Und die Zunge steckt so tief', en: 'And the tongue goes so deep' },
    ],
  },
];
