import React from 'react';
import SongLesson from './SongLesson';
import { DICKE_TITTEN_VOCAB, DICKE_TITTEN_LYRICS } from '../utils/dickeTittenVocabulary';

const DickeTittenLesson = ({ onHome }) => (
  <SongLesson
    title="Dicke Titten"
    meta="Rammstein — Zeit (2022)"
    vocab={DICKE_TITTEN_VOCAB}
    lyrics={DICKE_TITTEN_LYRICS}
    storageKey="itiapp-dicke-titten-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Dicke+Titten"
    onHome={onHome}
  />
);

export default DickeTittenLesson;
