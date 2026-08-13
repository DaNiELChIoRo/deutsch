// ─── Base entries (0-20 and tens have full IPA) ───────────────────────────────

const BASE = [
  { digit: 0,   de: 'null',         ipa: '/nʊl/'           },
  { digit: 1,   de: 'eins',         ipa: '/aɪns/'          },
  { digit: 2,   de: 'zwei',         ipa: '/tsvaɪ/'         },
  { digit: 3,   de: 'drei',         ipa: '/dʁaɪ/'          },
  { digit: 4,   de: 'vier',         ipa: '/fiːɐ̯/'          },
  { digit: 5,   de: 'fünf',         ipa: '/fʏnf/'          },
  { digit: 6,   de: 'sechs',        ipa: '/zɛks/'          },
  { digit: 7,   de: 'sieben',       ipa: '/ˈziːbn̩/'        },
  { digit: 8,   de: 'acht',         ipa: '/axt/'           },
  { digit: 9,   de: 'neun',         ipa: '/nɔɪn/'          },
  { digit: 10,  de: 'zehn',         ipa: '/tseːn/'         },
  { digit: 11,  de: 'elf',          ipa: '/ɛlf/'           },
  { digit: 12,  de: 'zwölf',        ipa: '/tsvœlf/'        },
  { digit: 13,  de: 'dreizehn',     ipa: '/ˈdʁaɪtseːn/'    },
  { digit: 14,  de: 'vierzehn',     ipa: '/ˈfiːɐ̯tseːn/'    },
  { digit: 15,  de: 'fünfzehn',     ipa: '/ˈfʏnftseːn/'    },
  { digit: 16,  de: 'sechzehn',     ipa: '/ˈzɛçtseːn/'     },
  { digit: 17,  de: 'siebzehn',     ipa: '/ˈziːptseːn/'    },
  { digit: 18,  de: 'achtzehn',     ipa: '/ˈaxttseːn/'     },
  { digit: 19,  de: 'neunzehn',     ipa: '/ˈnɔɪntseːn/'    },
  { digit: 20,  de: 'zwanzig',      ipa: '/ˈtsvantsɪç/'    },
  { digit: 30,  de: 'dreißig',      ipa: '/ˈdʁaɪsɪç/'      },
  { digit: 40,  de: 'vierzig',      ipa: '/ˈfiːɐ̯tsɪç/'     },
  { digit: 50,  de: 'fünfzig',      ipa: '/ˈfʏnftsɪç/'     },
  { digit: 60,  de: 'sechzig',      ipa: '/ˈzɛçtsɪç/'      },
  { digit: 70,  de: 'siebzig',      ipa: '/ˈziːptsɪç/'     },
  { digit: 80,  de: 'achtzig',      ipa: '/ˈaxtsɪç/'       },
  { digit: 90,  de: 'neunzig',      ipa: '/ˈnɔɪntsɪç/'     },
  { digit: 100, de: 'hundert',      ipa: '/ˈhʊndɐt/'       },
];

const TENS_WORD = {
  20: 'zwanzig', 30: 'dreißig', 40: 'vierzig', 50: 'fünfzig',
  60: 'sechzig', 70: 'siebzig', 80: 'achtzig', 90: 'neunzig',
};
// "ein" is used as the unit inside compounds (einundzwanzig, not einsundzwanzig)
const UNIT_IN_COMPOUND = ['', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun'];

function makeCompound(n) {
  const ten  = Math.floor(n / 10) * 10;
  const unit = n % 10;
  return unit === 0 ? TENS_WORD[ten] : `${UNIT_IN_COMPOUND[unit]}und${TENS_WORD[ten]}`;
}

const DEFINED = new Set(BASE.map(n => n.digit));
const COMPOUNDS = [];
for (let i = 21; i <= 99; i++) {
  if (!DEFINED.has(i)) COMPOUNDS.push({ digit: i, de: makeCompound(i), ipa: '' });
}

export const NUMBERS = [...BASE, ...COMPOUNDS].sort((a, b) => a.digit - b.digit);

// Fast lookup
const _BY_DIGIT = Object.fromEntries(NUMBERS.map(n => [n.digit, n]));
export const getNumber = (digit) => _BY_DIGIT[digit] ?? null;

// ─── Confusable groups ────────────────────────────────────────────────────────
// Each sub-array groups digits that sound similar (used to generate distractors)

const CONFUSABLE_GROUPS = [
  [1, 11, 21],
  [2, 12, 20],
  [3, 13, 30],
  [4, 14, 40],
  [5, 15, 50],
  [6, 16, 60],
  [7, 17, 70],
  [8, 18, 80],
  [9, 19, 90],
  [0, 10, 100],
  [11, 12, 13],
  [14, 15, 16],
  [17, 18, 19],
  [20, 21, 22],
  [30, 31, 32],
];

export function getConfusableDigits(digit) {
  const found = new Set();
  for (const group of CONFUSABLE_GROUPS) {
    if (group.includes(digit)) group.forEach(d => { if (d !== digit) found.add(d); });
  }
  return [...found];
}

// ─── Difficulty pools for matching pairs ─────────────────────────────────────

export const DIFFICULTY_POOLS = {
  easy:   NUMBERS.filter(n => n.digit >= 1  && n.digit <= 10),
  medium: NUMBERS.filter(n => n.digit >= 1  && n.digit <= 20),
  hard:   NUMBERS.filter(n => (n.digit >= 1 && n.digit <= 20) || (n.digit % 10 === 0 && n.digit > 0)),
};
