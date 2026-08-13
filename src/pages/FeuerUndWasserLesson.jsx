import React from 'react';
import SongLesson from './SongLesson';
import { FEUER_WASSER_VOCAB, FEUER_WASSER_LYRICS } from '../utils/feuerUndWasserVocabulary';

const FeuerUndWasserLesson = ({ onHome }) => (
  <SongLesson
    title="Feuer und Wasser"
    meta="Rammstein — Mutter (2001)"
    vocab={FEUER_WASSER_VOCAB}
    lyrics={FEUER_WASSER_LYRICS}
    storageKey="itiapp-feuer-und-wasser-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Feuer+und+Wasser"
    onHome={onHome}
  />
);

export default FeuerUndWasserLesson;
