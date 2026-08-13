import React from 'react';
import SongLesson from './SongLesson';
import { MEIN_TEIL_VOCAB, MEIN_TEIL_LYRICS } from '../utils/meinTeilVocabulary';

const MeinTeilLesson = ({ onHome }) => (
  <SongLesson
    title="Mein Teil"
    meta="Rammstein — Reise, Reise (2004)"
    vocab={MEIN_TEIL_VOCAB}
    lyrics={MEIN_TEIL_LYRICS}
    storageKey="itiapp-mein-teil-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Mein+Teil"
    onHome={onHome}
  />
);

export default MeinTeilLesson;
