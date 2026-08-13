import React from 'react';
import SongLesson from './SongLesson';
import { GIFTIG_VOCAB, GIFTIG_LYRICS } from '../utils/giftigVocabulary';

const GiftigLesson = ({ onHome }) => (
  <SongLesson
    title="Giftig"
    meta="Rammstein — Zeit (2022)"
    vocab={GIFTIG_VOCAB}
    lyrics={GIFTIG_LYRICS}
    storageKey="itiapp-giftig-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Giftig"
    onHome={onHome}
  />
);

export default GiftigLesson;
