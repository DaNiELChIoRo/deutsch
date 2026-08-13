// Interesting German compound words — each broken into its root parts
// with a full bilingual explanation and an example sentence.

export const COMPOUND_WORDS = [
  {
    id: 1,
    word: "Kummerspeck",
    ipa: "[ˈkʊmɐˌʃpɛk]",
    emoji: "🥓",
    parts: [
      { de: "Kummer", en: "grief / sorrow" },
      { de: "Speck",  en: "bacon / body fat" }
    ],
    literal: { en: "grief bacon", es: "tocino del dolor" },
    en: "The weight you gain from emotional eating — the extra pounds that come from eating comfort food during heartbreak, stress, or sadness.",
    es: "El peso que se gana al comer por tristeza — los kilos de más del comfort food durante una ruptura, estrés o pena.",
    example: { de: "Nach der Trennung hatte sie drei Kilo Kummerspeck.", en: "After the breakup she had three kilos of grief bacon." }
  },
  {
    id: 2,
    word: "Schadenfreude",
    ipa: "[ˈʃaːdənˌfʁɔɪdə]",
    emoji: "😏",
    parts: [
      { de: "Schaden", en: "damage / harm" },
      { de: "Freude",  en: "joy / delight" }
    ],
    literal: { en: "damage-joy", es: "alegría del daño" },
    en: "The pleasure or satisfaction felt at someone else's misfortune. So universal that English borrowed the word wholesale.",
    es: "El placer o satisfacción que se siente ante la desgracia ajena. Tan universal que el inglés adoptó la palabra directamente.",
    example: { de: "Er versuchte seine Schadenfreude zu verbergen.", en: "He tried to hide his schadenfreude." }
  },
  {
    id: 3,
    word: "Fernweh",
    ipa: "[ˈfɛʁnˌveː]",
    emoji: "✈️",
    parts: [
      { de: "Fern", en: "far / distant" },
      { de: "Weh",  en: "ache / pain" }
    ],
    literal: { en: "far-ache", es: "dolor de lejanía" },
    en: "A deep longing to travel and explore distant places — the opposite of Heimweh (homesickness). A wanderlust that aches in the chest.",
    es: "Un profundo anhelo de viajar y explorar lugares lejanos — lo contrario de Heimweh (morriña). Un wanderlust que duele en el pecho.",
    example: { de: "Das Fernweh trieb ihn immer wieder ins Ausland.", en: "Fernweh kept driving him abroad again and again." }
  },
  {
    id: 4,
    word: "Heimweh",
    ipa: "[ˈhaɪmˌveː]",
    emoji: "🏡",
    parts: [
      { de: "Heim", en: "home" },
      { de: "Weh",  en: "ache / pain" }
    ],
    literal: { en: "home-ache", es: "dolor del hogar" },
    en: "Homesickness — the bittersweet longing for home, family, and familiar places when you are far away. The twin opposite of Fernweh.",
    es: "Morriña — el añoranza agridulce del hogar, la familia y los lugares conocidos cuando estás lejos. El opuesto gemelo del Fernweh.",
    example: { de: "Im ersten Monat im Ausland litt er stark unter Heimweh.", en: "In his first month abroad he suffered greatly from homesickness." }
  },
  {
    id: 5,
    word: "Waldeinsamkeit",
    ipa: "[ˈvaldˌaɪnzamˌkaɪt]",
    emoji: "🌲",
    parts: [
      { de: "Wald",      en: "forest / woods" },
      { de: "Einsamkeit", en: "solitude / loneliness" }
    ],
    literal: { en: "forest-solitude", es: "soledad del bosque" },
    en: "The peaceful, magical feeling of solitude and connection with nature experienced deep in the woods — tranquility far from civilization.",
    es: "La sensación tranquila y mágica de soledad y conexión con la naturaleza en lo profundo del bosque — paz lejos de la civilización.",
    example: { de: "Die Waldeinsamkeit gab ihr den Frieden, den sie suchte.", en: "The forest solitude gave her the peace she was looking for." }
  },
  {
    id: 6,
    word: "Torschlusspanik",
    ipa: "[ˈtoːɐ̯ʃlʊsˌpaniːk]",
    emoji: "⏳",
    parts: [
      { de: "Tor",     en: "gate" },
      { de: "Schluss", en: "closing" },
      { de: "Panik",   en: "panic" }
    ],
    literal: { en: "gate-closing panic", es: "pánico del portón cerrándose" },
    en: "The fear that time is running out for life's opportunities — panic about a closing window for marriage, children, career, or dreams.",
    es: "El miedo a quedarse sin tiempo para las oportunidades de la vida — pánico por una ventana que se cierra: matrimonio, hijos, carrera, sueños.",
    example: { de: "Mit 35 packte sie die Torschlusspanik.", en: "At 35 the gate-closing panic seized her." }
  },
  {
    id: 7,
    word: "Weltschmerz",
    ipa: "[ˈvɛltˌʃmɛʁts]",
    emoji: "🌍",
    parts: [
      { de: "Welt",    en: "world" },
      { de: "Schmerz", en: "pain / ache" }
    ],
    literal: { en: "world-pain", es: "dolor del mundo" },
    en: "Deep sadness and anguish about the state of the world — when reality falls so far short of what it could be that it physically hurts.",
    es: "Tristeza profunda y angustia por el estado del mundo — cuando la realidad dista tanto de lo que podría ser que duele físicamente.",
    example: { de: "Nach den Nachrichten befiel ihn ein schwerer Weltschmerz.", en: "After the news a heavy world-pain came over him." }
  },
  {
    id: 8,
    word: "Drachenfutter",
    ipa: "[ˈdʁaxənˌfʊtɐ]",
    emoji: "🐉",
    parts: [
      { de: "Drachen", en: "dragon" },
      { de: "Futter",  en: "fodder / food" }
    ],
    literal: { en: "dragon fodder", es: "comida del dragón" },
    en: "A guilt gift — flowers, chocolate, or dinner you bring your partner after you've done something wrong. Feeding the dragon so it doesn't breathe fire.",
    es: "Un regalo de culpa — flores, chocolates o una cena que le llevas a tu pareja después de haber hecho algo mal. Alimentar al dragón para que no escupa fuego.",
    example: { de: "Er kam spät nach Hause und brachte Drachenfutter mit.", en: "He came home late and brought dragon fodder." }
  },
  {
    id: 9,
    word: "Fingerspitzengefühl",
    ipa: "[ˈfɪŋɐˌʃpɪtsənɡəˌfyːl]",
    emoji: "🤝",
    parts: [
      { de: "Fingerspitzen", en: "fingertips" },
      { de: "Gefühl",        en: "feeling / sense" }
    ],
    literal: { en: "fingertip feeling", es: "sensación de las yemas" },
    en: "Exceptional sensitivity and empathy — the delicate intuition to handle difficult situations with tact, care, and emotional intelligence.",
    es: "Sensibilidad y empatía excepcionales — la intuición delicada para manejar situaciones difíciles con tacto, cuidado e inteligencia emocional.",
    example: { de: "Die Verhandlung erforderte viel Fingerspitzengefühl.", en: "The negotiation required a great deal of fingertip feeling." }
  },
  {
    id: 10,
    word: "Kopfkino",
    ipa: "[ˈkɔpfˌkiːnoː]",
    emoji: "🎬",
    parts: [
      { de: "Kopf", en: "head" },
      { de: "Kino", en: "cinema / movie theater" }
    ],
    literal: { en: "head cinema", es: "cine en la cabeza" },
    en: "The vivid mental movie your brain plays — daydreaming, obsessive imagining of scenarios, or replaying an embarrassing moment on an endless loop.",
    es: "La película mental vívida que tu cerebro proyecta — ensoñaciones, imaginar obsesivamente escenarios, o reproducir un momento vergonzoso en bucle infinito.",
    example: { de: "Bevor sie einschlief, lief das Kopfkino auf Hochtouren.", en: "Before she fell asleep, the head cinema was running at full speed." }
  },
  {
    id: 11,
    word: "Ohrwurm",
    ipa: "[ˈoːɐ̯ˌvʊʁm]",
    emoji: "🎵",
    parts: [
      { de: "Ohr",  en: "ear" },
      { de: "Wurm", en: "worm" }
    ],
    literal: { en: "ear worm", es: "gusano del oído" },
    en: "A catchy song or melody that burrows into your brain and plays on an unstoppable loop — English borrowed this word directly.",
    es: "Una canción o melodía pegadiza que se mete en tu cabeza y suena en bucle imparable — el inglés adoptó esta palabra directamente.",
    example: { de: "Dieser Jingle ist ein echter Ohrwurm.", en: "That jingle is a real earworm." }
  },
  {
    id: 12,
    word: "Treppenwitz",
    ipa: "[ˈtʁɛpənˌvɪts]",
    emoji: "💬",
    parts: [
      { de: "Treppe", en: "staircase / stairs" },
      { de: "Witz",   en: "joke / wit" }
    ],
    literal: { en: "staircase joke", es: "chiste de la escalera" },
    en: "The perfect comeback or clever reply that only occurs to you on the way out the door — when it's too late to say it. The French call it 'l'esprit de l'escalier'.",
    es: "La respuesta perfecta o la réplica ingeniosa que solo se te ocurre cuando ya estás saliendo — cuando ya es demasiado tarde. Los franceses lo llaman 'l'esprit de l'escalier'.",
    example: { de: "Der beste Treppenwitz fiel ihm erst zu Hause ein.", en: "The best comeback only occurred to him once he was home." }
  },
  {
    id: 13,
    word: "Schweinehund",
    ipa: "[ˈʃvaɪnəˌhʊnt]",
    emoji: "🐷",
    parts: [
      { de: "Schwein", en: "pig / swine" },
      { de: "Hund",    en: "dog" }
    ],
    literal: { en: "pig-dog", es: "perro-cerdo" },
    en: "The lazy inner demon that talks you out of going to the gym, doing your homework, or getting out of bed. 'Den inneren Schweinehund überwinden' — overcoming your inner pig-dog — is a very common phrase.",
    es: "El demonio perezoso interior que te convence de no ir al gimnasio, no hacer los deberes o no levantarte de la cama. 'Den inneren Schweinehund überwinden' — superar al cerdo-perro interior — es una frase muy común.",
    example: { de: "Heute habe ich meinen inneren Schweinehund überwunden und bin joggen gegangen.", en: "Today I overcame my inner pig-dog and went jogging." }
  },
  {
    id: 14,
    word: "Lebensmüde",
    ipa: "[ˈleːbənsmyːdə]",
    emoji: "😮",
    parts: [
      { de: "Leben", en: "life" },
      { de: "müde",  en: "tired / weary" }
    ],
    literal: { en: "life-weary", es: "cansado de la vida" },
    en: "Literally 'tired of life', but Germans also use it humorously for someone doing something dangerously reckless — like crossing the street without looking.",
    es: "Literalmente 'cansado de la vida', pero los alemanes también lo usan con humor para alguien que hace algo peligrosamente temerario — como cruzar la calle sin mirar.",
    example: { de: "Bist du lebensmüde?! Du hast gerade bei Rot die Straße überquert!", en: "Are you tired of life?! You just crossed the street on red!" }
  },
  {
    id: 15,
    word: "Gemütlichkeit",
    ipa: "[ɡəˈmyːtlɪçˌkaɪt]",
    emoji: "☕",
    parts: [
      { de: "gemütlich", en: "cozy / comfortable / pleasant" },
      { de: "-keit",     en: "(noun suffix)" }
    ],
    literal: { en: "coziness / warmth", es: "acogimiento / calidez" },
    en: "A state of warmth, coziness, friendliness, and good cheer — that feeling in a candle-lit room with good food, good company, and nowhere to be. Central to German culture.",
    es: "Un estado de calidez, acogimiento, amabilidad y buen humor — esa sensación en una habitación con velas, buena comida, buena compañía y ningún lugar al que ir. Central en la cultura alemana.",
    example: { de: "Das kleine Café hatte eine wunderschöne Gemütlichkeit.", en: "The little café had a wonderful coziness." }
  },
  {
    id: 16,
    word: "Sturmfrei",
    ipa: "[ˈʃtʊʁmˌfʁaɪ]",
    emoji: "🏠",
    parts: [
      { de: "Sturm", en: "storm" },
      { de: "frei",  en: "free / clear" }
    ],
    literal: { en: "storm-free", es: "libre de tormenta" },
    en: "When your parents or roommates are away and you have the place entirely to yourself — free from the storm of authority. Time to have friends over.",
    es: "Cuando tus padres o compañeros de piso no están y tienes el lugar completamente para ti — libre de la tormenta de la autoridad. Hora de invitar a los amigos.",
    example: { de: "Die Eltern sind weg — sturmfrei bis Sonntag!", en: "The parents are gone — the place is ours till Sunday!" }
  },
  {
    id: 17,
    word: "Doppelgänger",
    ipa: "[ˈdɔpəlˌɡɛŋɐ]",
    emoji: "👥",
    parts: [
      { de: "Doppel", en: "double" },
      { de: "Gänger", en: "walker / goer" }
    ],
    literal: { en: "double walker", es: "doble caminante" },
    en: "Someone who looks exactly like another person — a lookalike. In folklore, seeing your own Doppelgänger was an omen of death. English uses the word unchanged.",
    es: "Alguien que se parece exactamente a otra persona — un sosias. En el folclore, ver a tu propio Doppelgänger era un presagio de muerte. El inglés usa la palabra tal cual.",
    example: { de: "Ich habe deinen Doppelgänger in der U-Bahn gesehen.", en: "I saw your double on the subway." }
  },
  {
    id: 18,
    word: "Liebeskummer",
    ipa: "[ˈliːbəsˌkʊmɐ]",
    emoji: "💔",
    parts: [
      { de: "Liebe",  en: "love" },
      { de: "Kummer", en: "grief / sorrow" }
    ],
    literal: { en: "love grief", es: "pena de amor" },
    en: "The specific sadness, heartache, and pining that comes from unrequited love or a breakup. More poignant than plain heartbreak because it names the grief.",
    es: "La tristeza específica, el dolor de corazón y el anhelo que vienen del amor no correspondido o de una ruptura. Más poignante que el simple desamor porque le da nombre a la pena.",
    example: { de: "Sie lag drei Tage mit Liebeskummer im Bett.", en: "She spent three days in bed with love grief." }
  },
  {
    id: 19,
    word: "Flugscham",
    ipa: "[ˈfluːkˌʃam]",
    emoji: "✈️",
    parts: [
      { de: "Flug",  en: "flight / flying" },
      { de: "Scham", en: "shame" }
    ],
    literal: { en: "flight shame", es: "vergüenza de volar" },
    en: "The guilt of flying knowing its carbon footprint — a modern word born from the climate movement, popularized in Sweden as 'flygskam'.",
    es: "La culpa de volar sabiendo su huella de carbono — una palabra moderna nacida del movimiento climático, popularizada en Suecia como 'flygskam'.",
    example: { de: "Wegen der Flugscham nahm er lieber den Zug nach Paris.", en: "Because of flight shame he preferred to take the train to Paris." }
  },
  {
    id: 20,
    word: "Sitzfleisch",
    ipa: "[ˈzɪtsˌflaɪʃ]",
    emoji: "💺",
    parts: [
      { de: "Sitz",   en: "seat / sitting" },
      { de: "Fleisch", en: "flesh / meat" }
    ],
    literal: { en: "sitting flesh", es: "carne de asiento" },
    en: "The ability to sit through long, tedious tasks without giving up — sheer perseverance and staying power. Essential for long meetings, exams, or research.",
    es: "La capacidad de aguantar tareas largas y tediosas sin rendirse — pura perseverancia y resistencia. Esencial para reuniones largas, exámenes o investigación.",
    example: { de: "Diese Dissertation schreibt man nur mit echtem Sitzfleisch.", en: "You only write this dissertation with real sitting flesh." }
  },
  {
    id: 21,
    word: "Verschlimmbessern",
    ipa: "[fɛɐ̯ˈʃlɪmbɛsɐn]",
    emoji: "🔧",
    parts: [
      { de: "verschlimmern", en: "to worsen" },
      { de: "verbessern",    en: "to improve" }
    ],
    literal: { en: "to worsen-improve", es: "empeorar-mejorar" },
    en: "To make something worse while trying to fix or improve it — overcooking the pasta, over-editing the photo, or 'helping' until the problem is irreparable.",
    es: "Empeorar algo intentando arreglarlo o mejorarlo — cocer demasiado la pasta, editar en exceso la foto, o 'ayudar' hasta que el problema sea irreparable.",
    example: { de: "Er hat die Webseite so lange verschlimmbessert, bis sie kaputt war.", en: "He kept worsen-improving the website until it was broken." }
  },
  {
    id: 22,
    word: "Zeitgeist",
    ipa: "[ˈtsaɪtˌɡaɪst]",
    emoji: "⌛",
    parts: [
      { de: "Zeit",  en: "time / era" },
      { de: "Geist", en: "spirit / ghost" }
    ],
    literal: { en: "time spirit", es: "espíritu del tiempo" },
    en: "The defining spirit, mood, and cultural climate of a particular era — what a generation collectively feels, fears, and believes. English borrowed this word unchanged.",
    es: "El espíritu, estado de ánimo y clima cultural que define una época — lo que una generación siente, teme y cree colectivamente. El inglés adoptó la palabra sin cambios.",
    example: { de: "Der Roman spiegelt den Zeitgeist der 1920er Jahre perfekt wider.", en: "The novel perfectly reflects the spirit of the 1920s." }
  },
  {
    id: 23,
    word: "Handschuhe",
    ipa: "[ˈhantˌʃuːə]",
    emoji: "🧤",
    parts: [
      { de: "Hand",  en: "hand" },
      { de: "Schuhe", en: "shoes" }
    ],
    literal: { en: "hand shoes", es: "zapatos de la mano" },
    en: "Gloves — literally 'hand shoes'. A perfect example of German's genius for building new words from existing ones. Your feet get shoes; why not your hands?",
    es: "Guantes — literalmente 'zapatos de la mano'. Un ejemplo perfecto del genio alemán de construir palabras nuevas a partir de las existentes. Los pies tienen zapatos; ¿por qué no las manos?",
    example: { de: "Vergiss nicht deine Handschuhe, draußen ist es eisig.", en: "Don't forget your hand shoes, it's icy outside." }
  },
  {
    id: 24,
    word: "Frühjahrsmüdigkeit",
    ipa: "[ˈfʁyːjaːɐ̯smyːdɪçˌkaɪt]",
    emoji: "🌸",
    parts: [
      { de: "Frühjahr", en: "spring (early year)" },
      { de: "Müdigkeit", en: "tiredness / fatigue" }
    ],
    literal: { en: "spring tiredness", es: "cansancio de primavera" },
    en: "The inexplicable fatigue and lethargy that strikes in early spring despite longer days — caused by the body adjusting to changing light and temperature after winter.",
    es: "El cansancio e inercia inexplicable que aparece a principios de primavera pese a los días más largos — causado por el cuerpo ajustándose a los cambios de luz y temperatura tras el invierno.",
    example: { de: "Die Frühjahrsmüdigkeit macht es schwer, morgens aufzustehen.", en: "Spring tiredness makes it hard to get up in the morning." }
  },
  {
    id: 25,
    word: "Muttersöhnchen",
    ipa: "[ˈmʊtɐˌzøːnçən]",
    emoji: "👩‍👦",
    parts: [
      { de: "Mutter",   en: "mother" },
      { de: "Söhnchen", en: "little son (diminutive)" }
    ],
    literal: { en: "mama's little son", es: "hijito de mamá" },
    en: "A momma's boy — a man who is overly dependent on or attached to his mother, unable to make decisions without her approval.",
    es: "Un niño de mamá — un hombre excesivamente dependiente o apegado a su madre, incapaz de tomar decisiones sin su aprobación.",
    example: { de: "Er ist ein echtes Muttersöhnchen, er ruft sie täglich an.", en: "He's a real momma's boy, he calls her every day." }
  },
];
