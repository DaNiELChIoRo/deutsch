import React from 'react';
import SongLesson from './SongLesson';
import { AUSLANDER_VOCAB, AUSLANDER_LYRICS } from '../utils/auslanderVocabulary';

const AuslanderLesson = ({ onHome }) => (
  <SongLesson
    title="Ausländer"
    meta="Rammstein — Rammstein (2019)"
    vocab={AUSLANDER_VOCAB}
    lyrics={AUSLANDER_LYRICS}
    storageKey="itiapp-auslander-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Auslander"
    onHome={onHome}
  />
);

export default AuslanderLesson;
