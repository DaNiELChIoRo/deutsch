import React from 'react';
import SongLesson from './SongLesson';
import { EIN_LIED_VOCAB, EIN_LIED_LYRICS } from '../utils/einLiedVocabulary';

const EinLiedLesson = ({ onHome }) => (
  <SongLesson
    title="Ein Lied"
    meta="Rammstein — Rosenrot (2005)"
    vocab={EIN_LIED_VOCAB}
    lyrics={EIN_LIED_LYRICS}
    storageKey="itiapp-ein-lied-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Ein+Lied"
    onHome={onHome}
  />
);

export default EinLiedLesson;
