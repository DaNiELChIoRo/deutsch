import React from 'react';
import SongLesson from './SongLesson';
import { ZICK_ZACK_VOCAB, ZICK_ZACK_LYRICS } from '../utils/zickZackVocabulary';

const ZickZackLesson = ({ onHome }) => (
  <SongLesson
    title="Zick Zack"
    meta="Rammstein — Zeit (2022)"
    vocab={ZICK_ZACK_VOCAB}
    lyrics={ZICK_ZACK_LYRICS}
    storageKey="itiapp-zick-zack-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Zick+Zack"
    onHome={onHome}
  />
);

export default ZickZackLesson;
