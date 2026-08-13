import React from 'react';
import SongLesson from './SongLesson';
import { LICHTERLOH_VOCAB, LICHTERLOH_LYRICS } from '../utils/lichterlohVocabulary';

const LichterlohLesson = ({ onHome }) => (
  <SongLesson
    title="Lichterloh"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={LICHTERLOH_VOCAB}
    lyrics={LICHTERLOH_LYRICS}
    storageKey="itiapp-lichterloh-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Lichterloh"
    onHome={onHome}
  />
);

export default LichterlohLesson;
