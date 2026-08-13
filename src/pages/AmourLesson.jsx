import React from 'react';
import SongLesson from './SongLesson';
import { AMOUR_VOCAB, AMOUR_LYRICS } from '../utils/amourVocabulary';

const AmourLesson = ({ onHome }) => (
  <SongLesson
    title="Amour"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={AMOUR_VOCAB}
    lyrics={AMOUR_LYRICS}
    storageKey="itiapp-amour-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Amour"
    onHome={onHome}
  />
);

export default AmourLesson;
