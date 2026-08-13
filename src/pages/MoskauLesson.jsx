import React from 'react';
import SongLesson from './SongLesson';
import { MOSKAU_VOCAB, MOSKAU_LYRICS } from '../utils/moskauVocabulary';

const MoskauLesson = ({ onHome }) => (
  <SongLesson
    title="Moskau"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={MOSKAU_VOCAB}
    lyrics={MOSKAU_LYRICS}
    storageKey="itiapp-moskau-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Moskau"
    onHome={onHome}
  />
);

export default MoskauLesson;
