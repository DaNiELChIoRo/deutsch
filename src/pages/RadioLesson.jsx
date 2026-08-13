import React from 'react';
import SongLesson from './SongLesson';
import { RADIO_VOCAB, RADIO_LYRICS } from '../utils/radioVocabulary';

const RadioLesson = ({ onHome }) => (
  <SongLesson
    title="Radio"
    meta="Rammstein — Rammstein (2019)"
    vocab={RADIO_VOCAB}
    lyrics={RADIO_LYRICS}
    storageKey="itiapp-radio-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Radio"
    onHome={onHome}
  />
);

export default RadioLesson;
