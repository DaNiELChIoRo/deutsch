# Deutsch lernen

A standalone Progressive Web App for learning German through Rammstein song lessons and
interactive grammar exercises.

**Live:** https://danielchioro.github.io/deutsch/

Split out of [ITIApp](https://github.com/DaNiELChIoRo/ITIApp), where this used to ship as the
`/german` section of a combined multi-language build.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173/deutsch/  (the /deutsch/ base path matters)
npm run build    # → dist/
npm run preview  # preview a built dist
npm run deploy   # build + push dist/ to the gh-pages branch
```

Pushing to `main` deploys automatically via `.github/workflows/deploy.yml`.

Node 18+ (Vite 5). There are no tests, linter, or formatter — verify changes with `npm run dev`
and exercise the affected page in the browser.

## What's inside

- **~70 song lessons** (Rammstein, plus a Volkslied) with line-by-line text-to-speech playback
- **Grammar tools** — verbs, adjectives, pronouns, nouns, numbers, compound words, W-Fragen
- **Practice** — flashcards, a speaking game, and a Germany map

## Structure

```
src/
├── main.jsx                  entry + service worker registration
├── Router.jsx                BrowserRouter basename="/deutsch"
├── pages/
│   ├── GermanSection.jsx     all routes live here
│   ├── GermanLanding.jsx     home screen (TOOLS array = grammar tiles)
│   ├── GermanSongsLanding.jsx  song index (SONG_PREVIEWS array)
│   ├── SongLesson.jsx        shared lesson component
│   └── *Lesson.jsx           one per song
├── utils/*Vocabulary.js      vocabulary + lyrics, one per song
├── styles/
├── hooks/                    useTextToSpeech, useSpeechRecognition, useLocalStorage
├── i18n/                     EN/ES UI translations
├── contexts/DataContext.jsx  Firestore reads with hardcoded fallbacks
└── firebase/
```

Routes are flat and live at the root: `/deutsch/verben`, `/deutsch/songs`, `/deutsch/deutschland`.

## Adding a song lesson

1. `src/utils/<songName>Vocabulary.js` — vocabulary array + lyrics
2. `src/pages/<SongName>Lesson.jsx` — copy an existing lesson (e.g. `NebelLesson.jsx`)
3. `src/styles/<SongName>Lesson.css` if it needs its own styles
4. Register the route in `GermanSection.jsx`
5. Add it to the song list and `SONG_PREVIEWS` in `GermanSongsLanding.jsx`

Grammar tools instead go in the `TOOLS` array in `GermanLanding.jsx`.

## Environment variables

All read at build time by Vite, so they must start with `VITE_`. **Every one is optional** — with
no Firebase config the app runs entirely on its bundled data.

- `VITE_FIREBASE_API_KEY`, `_AUTH_DOMAIN`, `_PROJECT_ID`, `_STORAGE_BUCKET`,
  `_MESSAGING_SENDER_ID`, `_APP_ID`, `_MEASUREMENT_ID`

In CI these come from repository secrets of the same name.

## Deployment

GitHub Pages serves the `gh-pages` branch. Because Pages can't rewrite deep links to
`index.html`, `public/404.html` encodes the requested path into a query string and `index.html`
restores it with `history.replaceState`. If the repository is ever renamed, update **both** the
`BASE` constant in `vite.config.js` and the `basename` in `src/Router.jsx`.
