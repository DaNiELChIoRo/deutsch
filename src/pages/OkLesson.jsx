import React from 'react';
import SongLesson from './SongLesson';
import { OK_VOCAB, OK_LYRICS } from '../utils/okVocabulary';

const OkLesson = ({ onHome }) => (
  <SongLesson
    title="OK"
    meta="Rammstein — Zeit (2022)"
    vocab={OK_VOCAB}
    lyrics={OK_LYRICS}
    storageKey="itiapp-ok-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+OK"
    onHome={onHome}
  />
);

export default OkLesson;
