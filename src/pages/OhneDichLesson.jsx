import React from 'react';
import SongLesson from './SongLesson';
import { OHNE_DICH_VOCAB, OHNE_DICH_LYRICS } from '../utils/ohneDichVocabulary';

const OhneDichLesson = ({ onHome }) => (
  <SongLesson
    title="Ohne dich"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={OHNE_DICH_VOCAB}
    lyrics={OHNE_DICH_LYRICS}
    storageKey="itiapp-ohne-dich-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Ohne+dich"
    onHome={onHome}
  />
);

export default OhneDichLesson;
