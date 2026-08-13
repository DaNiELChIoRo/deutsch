import React from 'react';
import SongLesson from './SongLesson';
import { PUPPE_VOCAB, PUPPE_LYRICS } from '../utils/puppeVocabulary';

const PuppeLesson = ({ onHome }) => (
  <SongLesson
    title="Puppe"
    meta="Rammstein — Rammstein (2019)"
    vocab={PUPPE_VOCAB}
    lyrics={PUPPE_LYRICS}
    storageKey="itiapp-puppe-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Puppe"
    onHome={onHome}
  />
);

export default PuppeLesson;
