import React from 'react';
import SongLesson from './SongLesson';
import { SEX_VOCAB, SEX_LYRICS } from '../utils/sexVocabulary';

const SexLesson = ({ onHome }) => (
  <SongLesson
    title="Sex"
    meta="Rammstein — Rammstein (2019)"
    vocab={SEX_VOCAB}
    lyrics={SEX_LYRICS}
    storageKey="itiapp-sex-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Sex"
    onHome={onHome}
  />
);

export default SexLesson;
