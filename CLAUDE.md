# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Commands

```bash
npm run dev      # Vite dev server — open http://localhost:5173/deutsch/ (the base path matters)
npm run build    # → dist/
npm run preview  # preview a built dist
npm run deploy   # build + push dist/ to gh-pages (CI also does this on push to main)
```

There are **no tests, no linter, and no formatter**. Don't add a "run tests" step; verify changes
by running `npm run dev` and exercising the affected page in the browser.

Node 18+ (Vite 5).

## Big picture

A single-purpose German-learning PWA: ~70 Rammstein song lessons plus grammar tools. It was split
out of [ITIApp](https://github.com/DaNiELChIoRo/ITIApp), which still contains a Bible quiz and a
Russian section — and still serves its own copy of the German section at `/ITIApp/german/`.

**This means shared code is duplicated across the two repos.** `hooks/`, `i18n/`, `firebase/`,
`contexts/DataContext.jsx`, and `components/common/LanguageSelector.jsx` were copied, not linked.
A fix to any of those must be applied in both places if it matters in both.

### Routing

`src/Router.jsx` is a `BrowserRouter` with `basename="/deutsch"` mounting a single route,
`/*` → `pages/GermanSection.jsx`, which holds the real `<Routes>` table.

Routes are **flat and at the root**: `/deutsch/verben`, `/deutsch/songs`, `/deutsch/deutschland`.
In ITIApp these same routes are nested under a `/german` prefix — when porting code between the
repos, watch for `/german/...` path strings that need stripping (or adding).

Lesson pages receive `onHome={goSongs}` (back to `/songs`); grammar/tool pages receive
`onHome={goSection}` (back to `/`).

### Provider nesting order is load-bearing

```
DataProvider → I18nProvider → Routes
```

`I18nProvider` consumes `useData()` to read translations. Reordering breaks i18n silently, falling
back to the hardcoded EN/ES strings only.

(ITIApp additionally wraps these in `AuthProvider` for its admin panel. There is no admin panel
here, so `AuthContext` was not carried over.)

### Data layer

`src/contexts/DataContext.jsx` loads `quizzes` and `translations` from Firestore in parallel, with
hardcoded fallbacks. **The app works fully with no Firebase env vars** — it just uses bundled data.
`src/firebase/firestoreService.js` wraps each read in a 1-hour localStorage cache keyed
`firestore_*`.

Only two values are actually consumed: `quizzes` (by `FlashCards.jsx`, which looks up the
`german-vocabulary` quiz) and `translations` (by `I18nContext`). ITIApp's version of this file also
carries `books` and five Bible/Russian quizzes; that was deliberately dropped here, so don't copy
that file over wholesale.

Quiz data is bilingual: `{ en: [...questions], es: [...questions] }`. Translations are a nested
object read by dot-path (`t('home.quizTypes.order.title')`) with automatic English fallback.

### User-added vocabulary

Learners can add their own words on the flashcards page. The pieces:

- `src/utils/deviceId.js` — a v4 UUID minted on first use and kept in localStorage
- `src/hooks/useCustomVocabulary.js` — state, persistence, and Firestore reconciliation
- `src/components/features/AddWordDialog.jsx` — the add/manage modal
- `firestore.rules` — **must be deployed** before this is safe in production

**localStorage is the source of truth**, so the feature works with no Firebase config and
offline. When Firebase *is* configured the list is mirrored to
`userVocabulary/{deviceId}.decks[deckId]`. Writes always land locally first; a failed sync
degrades to an "offline" badge and never drops the word.

**Everything is scoped per deck.** `useCustomVocabulary(deckId)` keys localStorage as
`deutsch-custom-vocabulary-<deckId>` and writes Firestore with `merge: true`, so words added
to one deck never leak into another and saving one deck can't clobber another. Decks that
accept custom words are listed in `CUSTOM_WORDS_ENABLED_FOR` in `FlashCards.jsx` — currently
`german-vocabulary` and `fes-iztacala-level-2`. The A1 exam set is deliberately excluded:
it's a fixed practice set, not a personal list.

### Quiz decks

Three decks are registered in `DataContext.jsx` `FALLBACK_QUIZZES`, each backed by a file in
`src/utils/` and reachable through its own route:

| id | route | source | custom words |
|---|---|---|---|
| `german-vocabulary` | `/flashcards` | `germanVocabulary.js` | yes |
| `fes-iztacala-level-2` | `/fes-iztacala-2` | `fesIztacalaLevel2.js` | yes |
| `a1-exam-practice` | `/a1-exam` | `a1ExamPractice.js` | no |

All three share the card shape, so `FlashCards.jsx` renders any of them. Adding a fourth
means: a file in `src/utils/`, an entry in `FALLBACK_QUIZZES`, a `<Route>` in
`GermanSection.jsx`, and a tile in the `TOOLS` array in `GermanLanding.jsx`.

A stored word is `{ id, word, translation, ipa, createdAt }`. `customWordToCard()` in
`FlashCards.jsx` turns it into the same card shape as bundled vocabulary, supplying just one
option — `buildQuizOptions()` already backfills three distractors from the rest of the deck,
so users are never asked to invent wrong answers.

Custom card ids are strings (`custom-<uuid>-<ts>`) while bundled ids are numbers, so they
can't collide in the stored `knownIds` progress array. Progress counts are intersected
against the live card list (`learnedCount`), because deleting a learned custom word would
otherwise leave a stale id and push the progress bar past 100%.

**The device id is a bearer token, not an identity.** Anyone holding it can read and
overwrite that word list. The rules file denies `list` so the collection can't be
enumerated, checks the id is UUID-shaped, and bounds the payload — but the real fix, if this
ever needs to be genuinely private, is Firebase Anonymous Auth keyed on `request.auth.uid`.
Read the header comment in `firestore.rules` before changing any of this.

### Adding a song lesson

Song lessons follow a rigid pattern — copy an existing one (e.g. `NebelLesson.jsx`):

1. `src/utils/<songName>Vocabulary.js` — vocabulary array and lyrics
2. `src/pages/<SongName>Lesson.jsx` — uses `useTextToSpeech` for line-by-line playback
3. `src/styles/<SongName>Lesson.css` if it needs its own styles
4. Register the route in `GermanSection.jsx`
5. Add an entry to the song list **and** the `SONG_PREVIEWS` array in `GermanSongsLanding.jsx`

Grammar/vocab tiles instead go in the `TOOLS` array in `GermanLanding.jsx`.

### Dependency pinning

`firebase` is pinned to an exact `12.9.0`, not a caret range. Firebase 12.17 inflates the main
chunk by roughly 220 kB for no gain here. Keep it pinned unless you have measured the tradeoff.

### Deployment

GitHub Pages serves the `gh-pages` branch, published by `.github/workflows/deploy.yml` on push to
`main`. Deep links rely on the `public/404.html` → `index.html` query-string round-trip, since
Pages cannot rewrite to `index.html` itself.

The base path appears in **two** places that must stay in sync: `BASE` in `vite.config.js` and
`basename` in `src/Router.jsx`. Both assume the repository is named `deutsch`.
