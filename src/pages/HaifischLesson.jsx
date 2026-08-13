import React from 'react';
import SongLesson from './SongLesson';
import { HAIFISCH_VOCAB, HAIFISCH_LYRICS } from '../utils/haifischVocabulary';

const HaifischLesson = ({ onHome }) => (
  <SongLesson
    title="Haifisch"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={HAIFISCH_VOCAB}
    lyrics={HAIFISCH_LYRICS}
    storageKey="itiapp-haifisch-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Haifisch"
    onHome={onHome}
  />
);

export default HaifischLesson;
