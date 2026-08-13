import React from 'react';
import SongLesson from './SongLesson';
import { TATTOO_VOCAB, TATTOO_LYRICS } from '../utils/tattooVocabulary';

const TattooLesson = ({ onHome }) => (
  <SongLesson
    title="Tattoo"
    meta="Rammstein — Zeit (2022)"
    vocab={TATTOO_VOCAB}
    lyrics={TATTOO_LYRICS}
    storageKey="itiapp-tattoo-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Tattoo"
    onHome={onHome}
  />
);

export default TattooLesson;
