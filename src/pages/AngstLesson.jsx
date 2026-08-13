import React from 'react';
import SongLesson from './SongLesson';
import { ANGST_VOCAB, ANGST_LYRICS } from '../utils/angstVocabulary';

const AngstLesson = ({ onHome }) => (
  <SongLesson
    title="Angst"
    meta="Rammstein — Zeit (2022)"
    vocab={ANGST_VOCAB}
    lyrics={ANGST_LYRICS}
    storageKey="itiapp-angst-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Angst"
    onHome={onHome}
  />
);

export default AngstLesson;
