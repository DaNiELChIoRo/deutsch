import React from 'react';
import SongLesson from './SongLesson';
import { ROTER_SAND_VOCAB, ROTER_SAND_LYRICS } from '../utils/roterSandVocabulary';

const RoterSandLesson = ({ onHome }) => (
  <SongLesson
    title="Roter Sand"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={ROTER_SAND_VOCAB}
    lyrics={ROTER_SAND_LYRICS}
    storageKey="itiapp-roter-sand-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Roter+Sand"
    onHome={onHome}
  />
);

export default RoterSandLesson;
