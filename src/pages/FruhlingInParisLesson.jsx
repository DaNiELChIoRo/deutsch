import React from 'react';
import SongLesson from './SongLesson';
import { FRUHLING_IN_PARIS_VOCAB, FRUHLING_IN_PARIS_LYRICS } from '../utils/fruhlingInParisVocabulary';

const FruhlingInParisLesson = ({ onHome }) => (
  <SongLesson
    title="Frühling in Paris"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={FRUHLING_IN_PARIS_VOCAB}
    lyrics={FRUHLING_IN_PARIS_LYRICS}
    storageKey="itiapp-fruhling-in-paris-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Fr%C3%BChling+in+Paris"
    onHome={onHome}
  />
);

export default FruhlingInParisLesson;
