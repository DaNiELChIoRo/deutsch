import React from 'react';
import SongLesson from './SongLesson';
import { LOS_VOCAB, LOS_LYRICS } from '../utils/losVocabulary';

const LosLesson = ({ onHome }) => (
  <SongLesson
    title="Los"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={LOS_VOCAB}
    lyrics={LOS_LYRICS}
    storageKey="itiapp-los-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Los"
    onHome={onHome}
  />
);

export default LosLesson;
