import React from 'react';
import SongLesson from './SongLesson';
import { BENZIN_VOCAB, BENZIN_LYRICS } from '../utils/benzinVocabulary';

const BenzinLesson = ({ onHome }) => (
  <SongLesson
    title="Benzin"
    meta="Rammstein — Rosenrot (2005)"
    vocab={BENZIN_VOCAB}
    lyrics={BENZIN_LYRICS}
    storageKey="itiapp-benzin-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Benzin"
    onHome={onHome}
  />
);

export default BenzinLesson;
