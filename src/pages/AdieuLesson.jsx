import React from 'react';
import SongLesson from './SongLesson';
import { ADIEU_VOCAB, ADIEU_LYRICS } from '../utils/adieuVocabulary';

const AdieuLesson = ({ onHome }) => (
  <SongLesson
    title="Adieu"
    meta="Rammstein — Zeit (2022)"
    vocab={ADIEU_VOCAB}
    lyrics={ADIEU_LYRICS}
    storageKey="itiapp-adieu-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Adieu"
    onHome={onHome}
  />
);

export default AdieuLesson;
