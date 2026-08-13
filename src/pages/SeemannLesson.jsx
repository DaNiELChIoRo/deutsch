import React from 'react';
import SongLesson from './SongLesson';
import { SEEMANN_VOCAB, SEEMANN_LYRICS } from '../utils/seemannVocabulary';

const SeemannLesson = ({ onHome }) => (
  <SongLesson
    title="Seemann"
    meta="Rammstein — Herzeleid (1995)"
    vocab={SEEMANN_VOCAB}
    lyrics={SEEMANN_LYRICS}
    storageKey="itiapp-seemann-known"
    onHome={onHome}
  />
);

export default SeemannLesson;
