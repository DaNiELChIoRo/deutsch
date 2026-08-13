import React from 'react';
import SongLesson from './SongLesson';
import { REISE_REISE_VOCAB, REISE_REISE_LYRICS } from '../utils/reiseReiseVocabulary';

const ReiseReiseLesson = ({ onHome }) => (
  <SongLesson
    title="Reise, Reise"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={REISE_REISE_VOCAB}
    lyrics={REISE_REISE_LYRICS}
    storageKey="itiapp-reise-reise-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Reise+Reise"
    onHome={onHome}
  />
);

export default ReiseReiseLesson;
