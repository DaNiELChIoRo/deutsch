// German adjective declension — present tense
// Three types: weak (definite article), mixed (indefinite), strong (no article)

export const CASES   = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
export const GENDERS = ['m', 'f', 'n', 'pl'];

// Adjective endings per type × case × gender
export const DECLENSION_TYPES = [
  {
    id: 'weak',
    label:    { en: 'Weak',  es: 'Débil'  },
    sublabel: { en: 'with definite article (der/die/das)', es: 'con artículo definido (der/die/das)' },
    endings: {
      Nominativ: { m: 'e',  f: 'e',  n: 'e',  pl: 'en' },
      Akkusativ: { m: 'en', f: 'e',  n: 'e',  pl: 'en' },
      Dativ:     { m: 'en', f: 'en', n: 'en', pl: 'en' },
      Genitiv:   { m: 'en', f: 'en', n: 'en', pl: 'en' },
    },
  },
  {
    id: 'mixed',
    label:    { en: 'Mixed', es: 'Mixta'  },
    sublabel: { en: 'with indefinite article (ein/eine)', es: 'con artículo indefinido (ein/eine)' },
    endings: {
      Nominativ: { m: 'er', f: 'e',  n: 'es', pl: 'en' },
      Akkusativ: { m: 'en', f: 'e',  n: 'es', pl: 'en' },
      Dativ:     { m: 'en', f: 'en', n: 'en', pl: 'en' },
      Genitiv:   { m: 'en', f: 'en', n: 'en', pl: 'en' },
    },
  },
  {
    id: 'strong',
    label:    { en: 'Strong', es: 'Fuerte' },
    sublabel: { en: 'no article', es: 'sin artículo' },
    endings: {
      Nominativ: { m: 'er', f: 'e',  n: 'es', pl: 'e'  },
      Akkusativ: { m: 'en', f: 'e',  n: 'es', pl: 'e'  },
      Dativ:     { m: 'em', f: 'er', n: 'em', pl: 'en' },
      Genitiv:   { m: 'en', f: 'er', n: 'en', pl: 'er' },
    },
  },
];

// Case-declined articles for each type (used in Drill table cells)
export const DECLINED_ARTICLES = {
  weak: {
    Nominativ: { m: 'der',  f: 'die',   n: 'das',   pl: 'die'   },
    Akkusativ: { m: 'den',  f: 'die',   n: 'das',   pl: 'die'   },
    Dativ:     { m: 'dem',  f: 'der',   n: 'dem',   pl: 'den'   },
    Genitiv:   { m: 'des',  f: 'der',   n: 'des',   pl: 'der'   },
  },
  mixed: {
    Nominativ: { m: 'ein',   f: 'eine',  n: 'ein',   pl: 'keine'  },
    Akkusativ: { m: 'einen', f: 'eine',  n: 'ein',   pl: 'keine'  },
    Dativ:     { m: 'einem', f: 'einer', n: 'einem', pl: 'keinen' },
    Genitiv:   { m: 'eines', f: 'einer', n: 'eines', pl: 'keiner' },
  },
  strong: {
    Nominativ: { m: '',  f: '',  n: '',  pl: '' },
    Akkusativ: { m: '',  f: '',  n: '',  pl: '' },
    Dativ:     { m: '',  f: '',  n: '',  pl: '' },
    Genitiv:   { m: '',  f: '',  n: '',  pl: '' },
  },
};

// Representative nouns per gender for quiz context
export const SAMPLE_NOUNS = {
  m:  ['Mann', 'Hund', 'Lehrer', 'Tag'],
  f:  ['Frau', 'Katze', 'Stadt', 'Schule'],
  n:  ['Kind', 'Buch', 'Auto', 'Haus'],
  pl: ['Kinder', 'Bücher', 'Männer', 'Autos'],
};

// Adjectives used in drill exercises
export const DRILL_ADJECTIVES = [
  { stem: 'gut',    en: 'good',   es: 'bueno/a'   },
  { stem: 'alt',    en: 'old',    es: 'viejo/a'   },
  { stem: 'neu',    en: 'new',    es: 'nuevo/a'   },
  { stem: 'groß',   en: 'big',    es: 'grande'    },
  { stem: 'klein',  en: 'small',  es: 'pequeño/a' },
  { stem: 'jung',   en: 'young',  es: 'joven'     },
  { stem: 'warm',   en: 'warm',   es: 'cálido/a'  },
  { stem: 'kalt',   en: 'cold',   es: 'frío/a'    },
  { stem: 'schön',  en: 'pretty', es: 'bonito/a'  },
  { stem: 'stark',  en: 'strong', es: 'fuerte'    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Full-sentence exercises. Each item is a complete German sentence split into
// `before` + stem + `answer` (ending) + `after`. Used by the Sentences mode.
// ─────────────────────────────────────────────────────────────────────────────
export const SENTENCE_EXERCISES = [
  // ── Weak (definite article) ────────────────────────────────────────────────
  {
    id: 'w-mnom-1', type: 'weak', caseKey: 'Nominativ', gender: 'm',
    before: 'Der alt', answer: 'e', after: ' Mann liest die Zeitung am Fenster.',
    stem: 'alt',
    en: 'The old man is reading the newspaper by the window.',
    es: 'El hombre viejo lee el periódico junto a la ventana.',
  },
  {
    id: 'w-fnom-1', type: 'weak', caseKey: 'Nominativ', gender: 'f',
    before: 'Die jung', answer: 'e', after: ' Frau singt ein schönes Lied.',
    stem: 'jung',
    en: 'The young woman is singing a beautiful song.',
    es: 'La mujer joven canta una hermosa canción.',
  },
  {
    id: 'w-nnom-1', type: 'weak', caseKey: 'Nominativ', gender: 'n',
    before: 'Das klein', answer: 'e', after: ' Kind schläft schon tief und fest.',
    stem: 'klein',
    en: 'The little child is already sleeping deeply.',
    es: 'El niño pequeño ya duerme profundamente.',
  },
  {
    id: 'w-plnom-1', type: 'weak', caseKey: 'Nominativ', gender: 'pl',
    before: 'Die gut', answer: 'en', after: ' Schüler lernen jeden Tag fleißig.',
    stem: 'gut',
    en: 'The good students study diligently every day.',
    es: 'Los buenos alumnos estudian aplicadamente cada día.',
  },
  {
    id: 'w-makk-1', type: 'weak', caseKey: 'Akkusativ', gender: 'm',
    before: 'Ich kenne den neu', answer: 'en', after: ' Lehrer schon seit gestern.',
    stem: 'neu',
    en: 'I have known the new teacher since yesterday.',
    es: 'Conozco al nuevo profesor desde ayer.',
  },
  {
    id: 'w-fakk-1', type: 'weak', caseKey: 'Akkusativ', gender: 'f',
    before: 'Maria liebt die rot', answer: 'e', after: ' Rose in ihrem Garten.',
    stem: 'rot',
    en: 'Maria loves the red rose in her garden.',
    es: 'María ama la rosa roja en su jardín.',
  },
  {
    id: 'w-nakk-1', type: 'weak', caseKey: 'Akkusativ', gender: 'n',
    before: 'Wir trinken das kalt', answer: 'e', after: ' Bier auf der Terrasse.',
    stem: 'kalt',
    en: 'We drink the cold beer on the terrace.',
    es: 'Bebemos la cerveza fría en la terraza.',
  },
  {
    id: 'w-plakk-1', type: 'weak', caseKey: 'Akkusativ', gender: 'pl',
    before: 'Er füttert die hungrig', answer: 'en', after: ' Katzen jeden Morgen.',
    stem: 'hungrig',
    en: 'He feeds the hungry cats every morning.',
    es: 'Él alimenta a los gatos hambrientos cada mañana.',
  },
  {
    id: 'w-mdat-1', type: 'weak', caseKey: 'Dativ', gender: 'm',
    before: 'Sie spricht mit dem alt', answer: 'en', after: ' Mann auf der Bank.',
    stem: 'alt',
    en: 'She is talking with the old man on the bench.',
    es: 'Ella habla con el hombre viejo en el banco.',
  },
  {
    id: 'w-fdat-1', type: 'weak', caseKey: 'Dativ', gender: 'f',
    before: 'Ich schlafe in der neu', answer: 'en', after: ' Wohnung sehr gut.',
    stem: 'neu',
    en: 'I sleep very well in the new apartment.',
    es: 'Duermo muy bien en el nuevo apartamento.',
  },
  {
    id: 'w-ndat-1', type: 'weak', caseKey: 'Dativ', gender: 'n',
    before: 'Wir wohnen in dem klein', answer: 'en', after: ' Haus am See.',
    stem: 'klein',
    en: 'We live in the small house by the lake.',
    es: 'Vivimos en la pequeña casa junto al lago.',
  },
  {
    id: 'w-pldat-1', type: 'weak', caseKey: 'Dativ', gender: 'pl',
    before: 'Er hilft den klein', answer: 'en', after: ' Kindern bei den Hausaufgaben.',
    stem: 'klein',
    en: 'He helps the little children with their homework.',
    es: 'Él ayuda a los niños pequeños con la tarea.',
  },
  {
    id: 'w-mgen-1', type: 'weak', caseKey: 'Genitiv', gender: 'm',
    before: 'Das ist das Auto des reich', answer: 'en', after: ' Mannes aus dem Norden.',
    stem: 'reich',
    en: "That's the rich man's car from the north.",
    es: 'Ese es el auto del hombre rico del norte.',
  },
  {
    id: 'w-fgen-1', type: 'weak', caseKey: 'Genitiv', gender: 'f',
    before: 'Die Farbe der rot', answer: 'en', after: ' Rose gefällt mir sehr.',
    stem: 'rot',
    en: 'I really like the color of the red rose.',
    es: 'Me gusta mucho el color de la rosa roja.',
  },

  // ── Mixed (ein / kein / possessive) ────────────────────────────────────────
  {
    id: 'm-mnom-1', type: 'mixed', caseKey: 'Nominativ', gender: 'm',
    before: 'Ein alt', answer: 'er', after: ' Mann sitzt am Fenster und liest in Ruhe.',
    stem: 'alt',
    en: 'An old man sits by the window and reads in peace.',
    es: 'Un hombre viejo está sentado junto a la ventana y lee con calma.',
  },
  {
    id: 'm-fnom-1', type: 'mixed', caseKey: 'Nominativ', gender: 'f',
    before: 'Eine schön', answer: 'e', after: ' Blume steht heute auf dem Küchentisch.',
    stem: 'schön',
    en: 'A beautiful flower is on the kitchen table today.',
    es: 'Una hermosa flor está hoy sobre la mesa de la cocina.',
  },
  {
    id: 'm-nnom-1', type: 'mixed', caseKey: 'Nominativ', gender: 'n',
    before: 'Ein klein', answer: 'es', after: ' Kind weint laut im Park.',
    stem: 'klein',
    en: 'A little child is crying loudly in the park.',
    es: 'Un niño pequeño llora fuerte en el parque.',
  },
  {
    id: 'm-plnom-1', type: 'mixed', caseKey: 'Nominativ', gender: 'pl',
    before: 'Meine best', answer: 'en', after: ' Freunde kommen heute Abend zu Besuch.',
    stem: 'best',
    en: 'My best friends are coming to visit tonight.',
    es: 'Mis mejores amigos vienen de visita esta noche.',
  },
  {
    id: 'm-makk-1', type: 'mixed', caseKey: 'Akkusativ', gender: 'm',
    before: 'Ich habe einen neu', answer: 'en', after: ' Computer für meine Arbeit gekauft.',
    stem: 'neu',
    en: 'I bought a new computer for my work.',
    es: 'Compré una computadora nueva para mi trabajo.',
  },
  {
    id: 'm-fakk-1', type: 'mixed', caseKey: 'Akkusativ', gender: 'f',
    before: 'Sie sucht eine günstig', answer: 'e', after: ' Wohnung im Zentrum von Berlin.',
    stem: 'günstig',
    en: 'She is looking for an affordable apartment in central Berlin.',
    es: 'Ella busca un apartamento económico en el centro de Berlín.',
  },
  {
    id: 'm-nakk-1', type: 'mixed', caseKey: 'Akkusativ', gender: 'n',
    before: 'Wir mieten ein groß', answer: 'es', after: ' Haus am Meer für den Sommer.',
    stem: 'groß',
    en: 'We are renting a big house by the sea for the summer.',
    es: 'Alquilamos una casa grande junto al mar para el verano.',
  },
  {
    id: 'm-plakk-1', type: 'mixed', caseKey: 'Akkusativ', gender: 'pl',
    before: 'Ich sehe meine alt', answer: 'en', after: ' Freunde nur sehr selten.',
    stem: 'alt',
    en: 'I see my old friends only very rarely.',
    es: 'Veo a mis viejos amigos muy raras veces.',
  },
  {
    id: 'm-mdat-1', type: 'mixed', caseKey: 'Dativ', gender: 'm',
    before: 'Sie spricht mit einem nett', answer: 'en', after: ' Kollegen über das neue Projekt.',
    stem: 'nett',
    en: 'She is talking with a nice colleague about the new project.',
    es: 'Ella habla con un colega amable sobre el nuevo proyecto.',
  },
  {
    id: 'm-fdat-1', type: 'mixed', caseKey: 'Dativ', gender: 'f',
    before: 'Er wohnt in einer klein', answer: 'en', after: ' Wohnung mitten in der Stadt.',
    stem: 'klein',
    en: 'He lives in a small apartment right in the city center.',
    es: 'Él vive en un pequeño apartamento en el centro de la ciudad.',
  },
  {
    id: 'm-ndat-1', type: 'mixed', caseKey: 'Dativ', gender: 'n',
    before: 'Ich helfe meinem klein', answer: 'en', after: ' Bruder bei den Hausaufgaben.',
    stem: 'klein',
    en: 'I help my little brother with his homework.',
    es: 'Ayudo a mi hermanito con la tarea.',
  },
  {
    id: 'm-pldat-1', type: 'mixed', caseKey: 'Dativ', gender: 'pl',
    before: 'Sie spielt gern mit ihren neu', answer: 'en', after: ' Freundinnen im Garten.',
    stem: 'neu',
    en: 'She likes to play with her new friends in the garden.',
    es: 'A ella le gusta jugar con sus nuevas amigas en el jardín.',
  },
  {
    id: 'm-mgen-1', type: 'mixed', caseKey: 'Genitiv', gender: 'm',
    before: 'Das ist das Werk eines berühmt', answer: 'en', after: ' Autors aus dem 19. Jahrhundert.',
    stem: 'berühmt',
    en: "That's the work of a famous 19th-century author.",
    es: 'Esa es la obra de un famoso autor del siglo XIX.',
  },

  // ── Strong (no article) ────────────────────────────────────────────────────
  {
    id: 's-mnom-1', type: 'strong', caseKey: 'Nominativ', gender: 'm',
    before: 'Heiß', answer: 'er', after: ' Kaffee schmeckt am Morgen einfach wunderbar.',
    stem: 'heiß',
    en: 'Hot coffee tastes simply wonderful in the morning.',
    es: 'El café caliente sabe simplemente maravilloso por la mañana.',
  },
  {
    id: 's-fnom-1', type: 'strong', caseKey: 'Nominativ', gender: 'f',
    before: 'Frisch', answer: 'e', after: ' Milch ist gut für die Knochen der Kinder.',
    stem: 'frisch',
    en: "Fresh milk is good for children's bones.",
    es: 'La leche fresca es buena para los huesos de los niños.',
  },
  {
    id: 's-nnom-1', type: 'strong', caseKey: 'Nominativ', gender: 'n',
    before: 'Kalt', answer: 'es', after: ' Wasser löscht den Durst am besten.',
    stem: 'kalt',
    en: 'Cold water quenches thirst best.',
    es: 'El agua fría calma mejor la sed.',
  },
  {
    id: 's-plnom-1', type: 'strong', caseKey: 'Nominativ', gender: 'pl',
    before: 'Klein', answer: 'e', after: ' Kinder brauchen viel Schlaf und viel Liebe.',
    stem: 'klein',
    en: 'Small children need lots of sleep and lots of love.',
    es: 'Los niños pequeños necesitan mucho sueño y mucho amor.',
  },
  {
    id: 's-makk-1', type: 'strong', caseKey: 'Akkusativ', gender: 'm',
    before: 'Er trinkt gut', answer: 'en', after: ' Wein zu jedem Abendessen mit seinen Gästen.',
    stem: 'gut',
    en: 'He drinks good wine with every dinner with his guests.',
    es: 'Él bebe buen vino en cada cena con sus invitados.',
  },
  {
    id: 's-fakk-1', type: 'strong', caseKey: 'Akkusativ', gender: 'f',
    before: 'Ich esse gern frisch', answer: 'e', after: ' Pizza mit viel Käse und Basilikum.',
    stem: 'frisch',
    en: 'I love eating fresh pizza with lots of cheese and basil.',
    es: 'Me encanta comer pizza fresca con mucho queso y albahaca.',
  },
  {
    id: 's-nakk-1', type: 'strong', caseKey: 'Akkusativ', gender: 'n',
    before: 'Wir kaufen frisch', answer: 'es', after: ' Brot beim Bäcker um die Ecke.',
    stem: 'frisch',
    en: 'We buy fresh bread at the bakery around the corner.',
    es: 'Compramos pan fresco en la panadería de la esquina.',
  },
  {
    id: 's-plakk-1', type: 'strong', caseKey: 'Akkusativ', gender: 'pl',
    before: 'Sie pflanzt rot', answer: 'e', after: ' Tulpen entlang des Gartenweges.',
    stem: 'rot',
    en: 'She is planting red tulips along the garden path.',
    es: 'Ella planta tulipanes rojos a lo largo del camino del jardín.',
  },
  {
    id: 's-mdat-1', type: 'strong', caseKey: 'Dativ', gender: 'm',
    before: 'Mit gut', answer: 'em', after: ' Willen kann man fast alles im Leben erreichen.',
    stem: 'gut',
    en: 'With good will you can achieve almost anything in life.',
    es: 'Con buena voluntad se puede lograr casi todo en la vida.',
  },
  {
    id: 's-fdat-1', type: 'strong', caseKey: 'Dativ', gender: 'f',
    before: 'Bei frisch', answer: 'er', after: ' Luft schläft man einfach viel besser.',
    stem: 'frisch',
    en: 'One simply sleeps much better with fresh air.',
    es: 'Con aire fresco simplemente se duerme mucho mejor.',
  },
  {
    id: 's-ndat-1', type: 'strong', caseKey: 'Dativ', gender: 'n',
    before: 'Aus alt', answer: 'em', after: ' Holz baut er ein gemütliches kleines Haus.',
    stem: 'alt',
    en: 'He is building a cozy little house out of old wood.',
    es: 'Con madera vieja construye una casita acogedora.',
  },
  {
    id: 's-pldat-1', type: 'strong', caseKey: 'Dativ', gender: 'pl',
    before: 'Mit nett', answer: 'en', after: ' Menschen verbringt man am liebsten seine Zeit.',
    stem: 'nett',
    en: 'One prefers to spend time with nice people.',
    es: 'A uno le gusta más pasar el tiempo con gente amable.',
  },
];
