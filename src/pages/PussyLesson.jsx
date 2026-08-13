import React from 'react';
import SongLesson from './SongLesson';
import { PUSSY_VOCAB, PUSSY_LYRICS } from '../utils/pussyVocabulary';

const PussyLesson = ({ onHome }) => (
  <SongLesson
    title="Pussy"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={PUSSY_VOCAB}
    lyrics={PUSSY_LYRICS}
    storageKey="itiapp-pussy-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Pussy"
    onHome={onHome}
  />
);

export default PussyLesson;
