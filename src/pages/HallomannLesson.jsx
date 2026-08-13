import React from 'react';
import SongLesson from './SongLesson';
import { HALLOMANN_VOCAB, HALLOMANN_LYRICS } from '../utils/hallomannVocabulary';

const HallomannLesson = ({ onHome }) => (
  <SongLesson
    title="Hallomann"
    meta="Rammstein — Rammstein (2019)"
    vocab={HALLOMANN_VOCAB}
    lyrics={HALLOMANN_LYRICS}
    storageKey="itiapp-hallomann-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Hallomann"
    onHome={onHome}
  />
);

export default HallomannLesson;
