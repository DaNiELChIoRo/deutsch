import React from 'react';
import SongLesson from './SongLesson';
import { SCHWARZ_VOCAB, SCHWARZ_LYRICS } from '../utils/schwarzVocabulary';

const SchwarzLesson = ({ onHome }) => (
  <SongLesson
    title="Schwarz"
    meta="Rammstein — Zeit (2022)"
    vocab={SCHWARZ_VOCAB}
    lyrics={SCHWARZ_LYRICS}
    storageKey="itiapp-schwarz-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Schwarz"
    onHome={onHome}
  />
);

export default SchwarzLesson;
