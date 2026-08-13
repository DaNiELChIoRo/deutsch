import React from 'react';
import SongLesson from './SongLesson';
import { RAMM_4_VOCAB, RAMM_4_LYRICS } from '../utils/ramm4Vocabulary';

const Ramm4Lesson = ({ onHome }) => (
  <SongLesson
    title="Ramm 4"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={RAMM_4_VOCAB}
    lyrics={RAMM_4_LYRICS}
    storageKey="itiapp-ramm-4-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Ramm+4"
    onHome={onHome}
  />
);

export default Ramm4Lesson;
