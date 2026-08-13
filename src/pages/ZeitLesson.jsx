import React from 'react';
import SongLesson from './SongLesson';
import { ZEIT_VOCAB, ZEIT_LYRICS } from '../utils/zeitVocabulary';

const ZeitLesson = ({ onHome }) => (
  <SongLesson
    title="Zeit"
    meta="Rammstein — Zeit (2022)"
    vocab={ZEIT_VOCAB}
    lyrics={ZEIT_LYRICS}
    storageKey="itiapp-zeit-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Zeit"
    onHome={onHome}
  />
);

export default ZeitLesson;
