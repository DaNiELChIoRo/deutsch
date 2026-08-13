import React from 'react';
import SongLesson from './SongLesson';
import { EINE_VOCAB, EINE_LYRICS } from '../utils/eineVocabulary';

const EineLesson = ({ onHome }) => (
  <SongLesson
    title="Eine"
    meta="Rammstein — Rosenrot (2005)"
    vocab={EINE_VOCAB}
    lyrics={EINE_LYRICS}
    storageKey="itiapp-eine-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Eine"
    onHome={onHome}
  />
);

export default EineLesson;
