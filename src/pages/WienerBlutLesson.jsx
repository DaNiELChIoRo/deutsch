import React from 'react';
import SongLesson from './SongLesson';
import { WIENER_BLUT_VOCAB, WIENER_BLUT_LYRICS } from '../utils/wienerBlutVocabulary';

const WienerBlutLesson = ({ onHome }) => (
  <SongLesson
    title="Wiener Blut"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={WIENER_BLUT_VOCAB}
    lyrics={WIENER_BLUT_LYRICS}
    storageKey="itiapp-wiener-blut-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Wiener+Blut"
    onHome={onHome}
  />
);

export default WienerBlutLesson;
