import React from 'react';
import SongLesson from './SongLesson';
import { STIRB_NICHT_VOCAB, STIRB_NICHT_LYRICS } from '../utils/stirbNichtVocabulary';

const StirNichtLesson = ({ onHome }) => (
  <SongLesson
    title="Stirb nicht vor mir"
    meta="Rammstein feat. Sharleen Spiteri — Rosenrot (2005)"
    vocab={STIRB_NICHT_VOCAB}
    lyrics={STIRB_NICHT_LYRICS}
    storageKey="itiapp-stirb-nicht-known"
    altFlag="🇬🇧"
    appleMusic="https://music.apple.com/search?term=Rammstein+Stirb+nicht+vor+mir"
    onHome={onHome}
  />
);

export default StirNichtLesson;
