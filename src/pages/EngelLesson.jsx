import React from 'react';
import SongLesson from './SongLesson';
import { ENGEL_VOCAB, ENGEL_LYRICS } from '../utils/engelVocabulary';

const EngelLesson = ({ onHome }) => (
  <SongLesson
    title="Engel"
    meta="Rammstein — Sehnsucht (1997)"
    vocab={ENGEL_VOCAB}
    lyrics={ENGEL_LYRICS}
    storageKey="itiapp-engel-known"
    onHome={onHome}
  />
);

export default EngelLesson;
