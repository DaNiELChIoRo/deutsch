import React from 'react';
import SongLesson from './SongLesson';
import { MEHR_VOCAB, MEHR_LYRICS } from '../utils/mehrVocabulary';

const MehrLesson = ({ onHome }) => (
  <SongLesson
    title="Mehr"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={MEHR_VOCAB}
    lyrics={MEHR_LYRICS}
    storageKey="itiapp-mehr-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Mehr"
    onHome={onHome}
  />
);

export default MehrLesson;
