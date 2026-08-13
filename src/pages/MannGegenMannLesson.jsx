import React from 'react';
import SongLesson from './SongLesson';
import { MANN_VOCAB, MANN_LYRICS } from '../utils/mannGegenMannVocabulary';

const MannGegenMannLesson = ({ onHome }) => (
  <SongLesson
    title="Mann gegen Mann"
    meta="Rammstein — Rosenrot (2005)"
    vocab={MANN_VOCAB}
    lyrics={MANN_LYRICS}
    storageKey="itiapp-mann-gegen-mann-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Mann+gegen+Mann"
    onHome={onHome}
  />
);

export default MannGegenMannLesson;
