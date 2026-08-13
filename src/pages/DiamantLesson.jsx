import React from 'react';
import SongLesson from './SongLesson';
import { DIAMANT_VOCAB, DIAMANT_LYRICS } from '../utils/diamantVocabulary';

const DiamantLesson = ({ onHome }) => (
  <SongLesson
    title="Diamant"
    meta="Rammstein — Rammstein (2019)"
    vocab={DIAMANT_VOCAB}
    lyrics={DIAMANT_LYRICS}
    storageKey="itiapp-diamant-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Diamant"
    onHome={onHome}
  />
);

export default DiamantLesson;
