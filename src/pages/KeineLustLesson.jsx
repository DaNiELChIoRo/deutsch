import React from 'react';
import SongLesson from './SongLesson';
import { KEINE_LUST_VOCAB, KEINE_LUST_LYRICS } from '../utils/keineLustVocabulary';

const KeineLustLesson = ({ onHome }) => (
  <SongLesson
    title="Keine Lust"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={KEINE_LUST_VOCAB}
    lyrics={KEINE_LUST_LYRICS}
    storageKey="itiapp-keine-lust-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Keine+Lust"
    onHome={onHome}
  />
);

export default KeineLustLesson;
