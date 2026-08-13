import React from 'react';
import SongLesson from './SongLesson';
import { WEIT_WEG_VOCAB, WEIT_WEG_LYRICS } from '../utils/weitWegVocabulary';

const WeitWegLesson = ({ onHome }) => (
  <SongLesson
    title="Weit weg"
    meta="Rammstein — Rammstein (2019)"
    vocab={WEIT_WEG_VOCAB}
    lyrics={WEIT_WEG_LYRICS}
    storageKey="itiapp-weit-weg-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Weit+weg"
    onHome={onHome}
  />
);

export default WeitWegLesson;
