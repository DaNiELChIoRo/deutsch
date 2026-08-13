import React from 'react';
import SongLesson from './SongLesson';
import { WO_BIST_DU_VOCAB, WO_BIST_DU_LYRICS } from '../utils/woBistDuVocabulary';

const WoBistDuLesson = ({ onHome }) => (
  <SongLesson
    title="Wo bist du?"
    meta="Rammstein — Rosenrot (2005)"
    vocab={WO_BIST_DU_VOCAB}
    lyrics={WO_BIST_DU_LYRICS}
    storageKey="itiapp-wo-bist-du-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Wo+bist+du"
    onHome={onHome}
  />
);

export default WoBistDuLesson;
