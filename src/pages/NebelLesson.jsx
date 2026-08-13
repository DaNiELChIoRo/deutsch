import React from 'react';
import SongLesson from './SongLesson';
import { NEBEL_VOCAB, NEBEL_LYRICS } from '../utils/nebelVocabulary';

const NebelLesson = ({ onHome }) => (
  <SongLesson
    title="Nebel"
    meta="Rammstein — Mutter (2001)"
    vocab={NEBEL_VOCAB}
    lyrics={NEBEL_LYRICS}
    storageKey="itiapp-nebel-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Nebel"
    onHome={onHome}
  />
);

export default NebelLesson;
