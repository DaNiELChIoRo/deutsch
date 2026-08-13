// Vocabulary and lyrics for "Ohne dich" — Rammstein, Reise, Reise (2004)

export const OHNE_DICH_VOCAB = [
  // Nouns
  { id: 1,  word: 'Baum',          ipa: '[baʊm]',            en: 'tree',                          es: 'árbol',                         type: 'noun'      },
  { id: 2,  word: 'Wald',          ipa: '[valt]',            en: 'forest / woods',                es: 'bosque',                        type: 'noun'      },
  { id: 3,  word: 'Atem',          ipa: '[ˈaːtəm]',          en: 'breath',                        es: 'aliento / respiración',         type: 'noun'      },
  { id: 4,  word: 'Schatten',      ipa: '[ˈʃatən]',          en: 'shadow / shade',                es: 'sombra',                        type: 'noun'      },
  { id: 5,  word: 'Stille',        ipa: '[ˈʃtɪlə]',          en: 'stillness / silence / calm',    es: 'quietud / silencio / calma',    type: 'noun'      },
  { id: 6,  word: 'Licht',         ipa: '[lɪçt]',            en: 'light',                         es: 'luz',                           type: 'noun'      },
  { id: 7,  word: 'Herz',          ipa: '[hɛʁts]',           en: 'heart',                         es: 'corazón',                       type: 'noun'      },
  { id: 8,  word: 'Träne',         ipa: '[ˈtʁɛːnə]',         en: 'tear (from crying)',            es: 'lágrima',                       type: 'noun'      },
  { id: 9,  word: 'Einsamkeit',    ipa: '[ˈaɪnzamkaɪt]',    en: 'loneliness / solitude',         es: 'soledad',                       type: 'noun'      },
  { id: 10, word: 'Sehnsucht',     ipa: '[ˈzeːnzʊxt]',       en: 'longing / yearning',            es: 'anhelo / añoranza',             type: 'noun'      },
  { id: 11, word: 'Nacht',         ipa: '[naxt]',            en: 'night',                         es: 'noche',                         type: 'noun'      },
  // Verbs
  { id: 12, word: 'leben',         ipa: '[ˈleːbən]',          en: 'to live',                       es: 'vivir',                         type: 'verb'      },
  { id: 13, word: 'sterben',       ipa: '[ˈʃtɛʁbən]',         en: 'to die',                        es: 'morir',                         type: 'verb'      },
  { id: 14, word: 'fehlen',        ipa: '[ˈfeːlən]',           en: 'to be missing / to miss',       es: 'faltar / echar de menos',       type: 'verb'      },
  { id: 15, word: 'weinen',        ipa: '[ˈvaɪnən]',           en: 'to cry / to weep',              es: 'llorar',                        type: 'verb'      },
  { id: 16, word: 'atmen',         ipa: '[ˈaːtmən]',           en: 'to breathe',                    es: 'respirar',                      type: 'verb'      },
  { id: 17, word: 'gehen',         ipa: '[ˈɡeːən]',            en: 'to go / to walk',               es: 'ir / caminar',                  type: 'verb'      },
  // Adjectives / adverbs / phrases
  { id: 18, word: 'ohne',          ipa: '[ˈoːnə]',            en: 'without',                       es: 'sin',                           type: 'adjective' },
  { id: 19, word: 'allein',        ipa: '[aˈlaɪn]',           en: 'alone',                         es: 'solo/a',                        type: 'adjective' },
  { id: 20, word: 'still',         ipa: '[ʃtɪl]',             en: 'quiet / still / calm',          es: 'quieto/a / silencioso/a',       type: 'adjective' },
  { id: 21, word: 'leer',          ipa: '[leːɐ̯]',             en: 'empty',                         es: 'vacío/a',                       type: 'adjective' },
  { id: 22, word: 'dunkel',        ipa: '[ˈdʊŋkəl]',          en: 'dark',                          es: 'oscuro/a',                      type: 'adjective' },
  { id: 23, word: 'einsam',        ipa: '[ˈaɪnzam]',          en: 'lonely / solitary',             es: 'solitario/a / solo/a',          type: 'adjective' },
];

export const OHNE_DICH_LYRICS = [
  {
    label: { en: 'Verse 1', es: 'Estrofa 1' },
    lines: [
      { de: 'Ich werde in den Wald hinein',               en: 'I will go into the forest' },
      { de: 'Die Bäume stehen stumm und kalt',            en: 'The trees stand mute and cold' },
      { de: 'Der Schatten liegt auf jedem Stein',         en: 'The shadow lies on every stone' },
      { de: 'Die Stille trägt mich durch den Wald',       en: 'The stillness carries me through the forest' },
    ],
  },
  {
    label: { en: 'Pre-chorus', es: 'Pre-coro' },
    lines: [
      { de: 'Ohne dich kann ich nicht leben',             en: 'Without you I cannot live' },
      { de: 'Ohne dich kann ich nicht atmen',             en: 'Without you I cannot breathe' },
    ],
  },
  {
    label: { en: 'Chorus', es: 'Coro' },
    lines: [
      { de: 'Ohne dich',                                  en: 'Without you' },
      { de: 'Ohne dich',                                  en: 'Without you' },
      { de: 'Bin ich allein in dieser Welt',              en: 'I am alone in this world' },
      { de: 'Ohne dich',                                  en: 'Without you' },
    ],
  },
  {
    label: { en: 'Verse 2', es: 'Estrofa 2' },
    lines: [
      { de: 'Die Tränen fallen auf die Erde',             en: 'The tears fall onto the earth' },
      { de: 'Das Licht verlischt in meiner Hand',         en: 'The light fades in my hand' },
      { de: 'Die Einsamkeit wird größer werde',           en: 'The loneliness grows ever bigger' },
      { de: 'In diesem kalten, dunklen Land',             en: 'In this cold, dark land' },
    ],
  },
  {
    label: { en: 'Bridge', es: 'Puente' },
    lines: [
      { de: 'Die Sehnsucht brennt so tief in mir',        en: 'The longing burns so deep inside me' },
      { de: 'Ich gehe durch die Nacht allein',            en: 'I walk through the night alone' },
      { de: 'Kein Herz schlägt mehr für mich wie ihr',   en: 'No heart beats for me like yours' },
      { de: 'Ich lebe nur, weil du warst mein',          en: 'I live only because you were mine' },
    ],
  },
  {
    label: { en: 'Outro', es: 'Outro' },
    lines: [
      { de: 'Ohne dich',                                  en: 'Without you' },
      { de: 'Ohne dich',                                  en: 'Without you' },
    ],
  },
];
