import React from 'react';
import SongLesson from './SongLesson';
import { DEUTSCHLAND_VOCAB, DEUTSCHLAND_LYRICS } from '../utils/deutschlandVocabulary';

const DeutschlandLesson = ({ onHome }) => (
  <SongLesson
    title="Deutschland"
    meta="Rammstein — Rammstein (2019)"
    vocab={DEUTSCHLAND_VOCAB}
    lyrics={DEUTSCHLAND_LYRICS}
    storageKey="itiapp-deutschland-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Deutschland"
    onHome={onHome}
  />
);

export default DeutschlandLesson;
