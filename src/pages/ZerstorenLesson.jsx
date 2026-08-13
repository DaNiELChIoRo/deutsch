import React from 'react';
import SongLesson from './SongLesson';
import { ZERSTOREN_VOCAB, ZERSTOREN_LYRICS } from '../utils/zerstorenVocabulary';

const ZerstorenLesson = ({ onHome }) => (
  <SongLesson
    title="Zerstören"
    meta="Rammstein — Rosenrot (2005)"
    vocab={ZERSTOREN_VOCAB}
    lyrics={ZERSTOREN_LYRICS}
    storageKey="itiapp-zerstoren-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Zerst%C3%B6ren"
    onHome={onHome}
  />
);

export default ZerstorenLesson;
