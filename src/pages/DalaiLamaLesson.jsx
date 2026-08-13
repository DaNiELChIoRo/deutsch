import React from 'react';
import SongLesson from './SongLesson';
import { DALAI_LAMA_VOCAB, DALAI_LAMA_LYRICS } from '../utils/dalaiLamaVocabulary';

const DalaiLamaLesson = ({ onHome }) => (
  <SongLesson
    title="Dalai Lama"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={DALAI_LAMA_VOCAB}
    lyrics={DALAI_LAMA_LYRICS}
    storageKey="itiapp-dalai-lama-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Dalai+Lama"
    onHome={onHome}
  />
);

export default DalaiLamaLesson;
