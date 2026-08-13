import React from 'react';
import SongLesson from './SongLesson';
import { AMERIKA_VOCAB, AMERIKA_LYRICS } from '../utils/amerikaVocabulary';

const AmerikaLesson = ({ onHome }) => (
  <SongLesson
    title="Amerika"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={AMERIKA_VOCAB}
    lyrics={AMERIKA_LYRICS}
    storageKey="itiapp-amerika-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Amerika"
    onHome={onHome}
  />
);

export default AmerikaLesson;
