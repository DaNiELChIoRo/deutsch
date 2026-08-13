function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Personal Pronouns (Nom / Akk / Dat) ──────────────────────────────────────
export const PERSONAL_CASES = ['Nominativ', 'Akkusativ', 'Dativ'];

export const PERSONAL_PERSONS = [
  { key: 'ich',    label: { de: 'ich',       en: '1st Sg.',            es: '1.ª Sg.'          }, forms: ['ich',       'mich',       'mir'          ] },
  { key: 'du',     label: { de: 'du',        en: '2nd Sg.',            es: '2.ª Sg.'          }, forms: ['du',        'dich',       'dir'          ] },
  { key: 'er',     label: { de: 'er',        en: '3rd Sg. M',          es: '3.ª Sg. M'        }, forms: ['er',        'ihn',        'ihm'          ] },
  { key: 'sie_f',  label: { de: 'sie (F)',   en: '3rd Sg. F',          es: '3.ª Sg. F'        }, forms: ['sie',       'sie',        'ihr'          ] },
  { key: 'es',     label: { de: 'es',        en: '3rd Sg. N',          es: '3.ª Sg. N'        }, forms: ['es',        'es',         'ihm'          ] },
  { key: 'wir',    label: { de: 'wir',       en: '1st Pl.',            es: '1.ª Pl.'          }, forms: ['wir',       'uns',        'uns'          ] },
  { key: 'ihr',    label: { de: 'ihr',       en: '2nd Pl.',            es: '2.ª Pl.'          }, forms: ['ihr',       'euch',       'euch'         ] },
  { key: 'sie_pl', label: { de: 'sie / Sie', en: '3rd Pl. / Formal',   es: '3.ª Pl. / formal' }, forms: ['sie / Sie', 'sie / Sie',  'ihnen / Ihnen'] },
];

// ── Possessive Pronouns — full declension (Nom / Akk / Dat / Gen) ─────────────
export const POSSESSIVE_CASES   = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
export const POSSESSIVE_GENDERS = ['M', 'F', 'N', 'Pl'];

export const POSSESSIVE_PERSONS = [
  {
    key: 'ich', label: { de: 'ich', en: 'ich (my)', es: 'ich (mi)' },
    stems: { M: 'mein', F: 'meine', N: 'mein', Pl: 'meine' },
    forms: {
      Nominativ: { M: 'mein',   F: 'meine',  N: 'mein',   Pl: 'meine'  },
      Akkusativ: { M: 'meinen', F: 'meine',  N: 'mein',   Pl: 'meine'  },
      Dativ:     { M: 'meinem', F: 'meiner', N: 'meinem', Pl: 'meinen' },
      Genitiv:   { M: 'meines', F: 'meiner', N: 'meines', Pl: 'meiner' },
    },
  },
  {
    key: 'du', label: { de: 'du', en: 'du (your)', es: 'du (tu)' },
    stems: { M: 'dein', F: 'deine', N: 'dein', Pl: 'deine' },
    forms: {
      Nominativ: { M: 'dein',   F: 'deine',  N: 'dein',   Pl: 'deine'  },
      Akkusativ: { M: 'deinen', F: 'deine',  N: 'dein',   Pl: 'deine'  },
      Dativ:     { M: 'deinem', F: 'deiner', N: 'deinem', Pl: 'deinen' },
      Genitiv:   { M: 'deines', F: 'deiner', N: 'deines', Pl: 'deiner' },
    },
  },
  {
    key: 'er_es', label: { de: 'er / es', en: 'er/es (his/its)', es: 'er/es (su, M/N)' },
    stems: { M: 'sein', F: 'seine', N: 'sein', Pl: 'seine' },
    forms: {
      Nominativ: { M: 'sein',   F: 'seine',  N: 'sein',   Pl: 'seine'  },
      Akkusativ: { M: 'seinen', F: 'seine',  N: 'sein',   Pl: 'seine'  },
      Dativ:     { M: 'seinem', F: 'seiner', N: 'seinem', Pl: 'seinen' },
      Genitiv:   { M: 'seines', F: 'seiner', N: 'seines', Pl: 'seiner' },
    },
  },
  {
    key: 'sie_f', label: { de: 'sie (F)', en: 'sie (her)', es: 'sie (su, F)' },
    stems: { M: 'ihr', F: 'ihre', N: 'ihr', Pl: 'ihre' },
    forms: {
      Nominativ: { M: 'ihr',   F: 'ihre',  N: 'ihr',   Pl: 'ihre'  },
      Akkusativ: { M: 'ihren', F: 'ihre',  N: 'ihr',   Pl: 'ihre'  },
      Dativ:     { M: 'ihrem', F: 'ihrer', N: 'ihrem', Pl: 'ihren' },
      Genitiv:   { M: 'ihres', F: 'ihrer', N: 'ihres', Pl: 'ihrer' },
    },
  },
  {
    key: 'wir', label: { de: 'wir', en: 'wir (our)', es: 'wir (nuestro)' },
    stems: { M: 'unser', F: 'unsere', N: 'unser', Pl: 'unsere' },
    forms: {
      Nominativ: { M: 'unser',   F: 'unsere',  N: 'unser',   Pl: 'unsere'  },
      Akkusativ: { M: 'unseren', F: 'unsere',  N: 'unser',   Pl: 'unsere'  },
      Dativ:     { M: 'unserem', F: 'unserer', N: 'unserem', Pl: 'unseren' },
      Genitiv:   { M: 'unseres', F: 'unserer', N: 'unseres', Pl: 'unserer' },
    },
  },
  {
    key: 'ihr', label: { de: 'ihr', en: 'ihr (your pl.)', es: 'ihr (vuestro)' },
    stems: { M: 'euer', F: 'eure', N: 'euer', Pl: 'eure' },
    forms: {
      Nominativ: { M: 'euer',  F: 'eure',  N: 'euer',  Pl: 'eure'  },
      Akkusativ: { M: 'euren', F: 'eure',  N: 'euer',  Pl: 'eure'  },
      Dativ:     { M: 'eurem', F: 'eurer', N: 'eurem', Pl: 'euren' },
      Genitiv:   { M: 'eures', F: 'eurer', N: 'eures', Pl: 'eurer' },
    },
  },
  {
    key: 'sie_pl', label: { de: 'sie / Sie', en: 'sie/Sie (their/Your)', es: 'sie/Sie (su/Su)' },
    stems: { M: 'ihr / Ihr', F: 'ihre / Ihre', N: 'ihr / Ihr', Pl: 'ihre / Ihre' },
    forms: {
      Nominativ: { M: 'ihr / Ihr',     F: 'ihre / Ihre',   N: 'ihr / Ihr',     Pl: 'ihre / Ihre'   },
      Akkusativ: { M: 'ihren / Ihren', F: 'ihre / Ihre',   N: 'ihr / Ihr',     Pl: 'ihre / Ihre'   },
      Dativ:     { M: 'ihrem / Ihrem', F: 'ihrer / Ihrer', N: 'ihrem / Ihrem', Pl: 'ihren / Ihren' },
      Genitiv:   { M: 'ihres / Ihres', F: 'ihrer / Ihrer', N: 'ihres / Ihres', Pl: 'ihrer / Ihrer' },
    },
  },
];

// ── Reflexive Pronouns (Akk / Dat) ───────────────────────────────────────────
export const REFLEXIVE_CASES = ['Akkusativ', 'Dativ'];

export const REFLEXIVE_PERSONS = [
  { key: 'ich',    label: 'ich',           forms: ['mich', 'mir'  ] },
  { key: 'du',     label: 'du',            forms: ['dich', 'dir'  ] },
  { key: 'er',     label: 'er / sie / es', forms: ['sich', 'sich' ] },
  { key: 'wir',    label: 'wir',           forms: ['uns',  'uns'  ] },
  { key: 'ihr',    label: 'ihr',           forms: ['euch', 'euch' ] },
  { key: 'sie_pl', label: 'sie / Sie',     forms: ['sich', 'sich' ] },
];

// ── Quiz builder ──────────────────────────────────────────────────────────────
export function buildPronounQuiz() {
  const qs = [];

  // Personal
  PERSONAL_PERSONS.forEach(person => {
    PERSONAL_CASES.forEach((caseLabel, ci) => {
      const answer = person.forms[ci];
      const pool = [...new Set(PERSONAL_PERSONS.map(p => p.forms[ci]).filter(f => f !== answer))];
      qs.push({ category: 'personal', personLabel: person.label.de, caseLabel, answer, distractors: pool });
    });
  });

  // Possessive (skip sie/Sie — identical to sie F, confusing as quiz target)
  const quizPossPersons = POSSESSIVE_PERSONS.filter(p => p.key !== 'sie_pl');
  quizPossPersons.forEach(person => {
    POSSESSIVE_CASES.forEach(caseKey => {
      POSSESSIVE_GENDERS.forEach(g => {
        const answer = person.forms[caseKey][g];
        const pool = [...new Set(
          quizPossPersons.flatMap(p => POSSESSIVE_GENDERS.map(gg => p.forms[caseKey][gg]))
            .filter(f => f !== answer)
        )];
        qs.push({
          category: 'possessive',
          personLabel: person.label.de,
          caseLabel: caseKey,
          genderLabel: g,
          answer,
          distractors: pool,
        });
      });
    });
  });

  // Reflexive
  REFLEXIVE_PERSONS.forEach(person => {
    REFLEXIVE_CASES.forEach((caseLabel, ci) => {
      const answer = person.forms[ci];
      const pool = [...new Set(REFLEXIVE_PERSONS.map(p => p.forms[ci]).filter(f => f !== answer))];
      qs.push({ category: 'reflexive', personLabel: person.label, caseLabel, answer, distractors: pool });
    });
  });

  return shuffleArray(qs);
}
