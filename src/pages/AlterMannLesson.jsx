import React from 'react';
import SongLesson from './SongLesson';
import { ALTER_MANN_VOCAB, ALTER_MANN_LYRICS } from '../utils/alterMannVocabulary';

const AlterMannLesson = ({ onHome }) => (
  <SongLesson
    title="Alter Mann"
    meta="Rammstein — Sehnsucht (1997)"
    vocab={ALTER_MANN_VOCAB}
    lyrics={ALTER_MANN_LYRICS}
    storageKey="itiapp-alter-mann-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Alter+Mann"
    onHome={onHome}
  />
);

export default AlterMannLesson;
