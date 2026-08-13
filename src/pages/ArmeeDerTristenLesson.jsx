import React from 'react';
import SongLesson from './SongLesson';
import { ARMEE_DER_TRISTEN_VOCAB, ARMEE_DER_TRISTEN_LYRICS } from '../utils/armeeDerTristenVocabulary';

const ArmeeDerTristenLesson = ({ onHome }) => (
  <SongLesson
    title="Armee der Tristen"
    meta="Rammstein — Zeit (2022)"
    vocab={ARMEE_DER_TRISTEN_VOCAB}
    lyrics={ARMEE_DER_TRISTEN_LYRICS}
    storageKey="itiapp-armee-der-tristen-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Armee+der+Tristen"
    onHome={onHome}
  />
);

export default ArmeeDerTristenLesson;
