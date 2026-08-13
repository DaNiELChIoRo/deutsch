import React from 'react';
import SongLesson from './SongLesson';
import { SPRING_VOCAB, SPRING_LYRICS } from '../utils/springVocabulary';

const SpringLesson = ({ onHome }) => (
  <SongLesson
    title="Spring"
    meta="Rammstein — Rosenrot (2005)"
    vocab={SPRING_VOCAB}
    lyrics={SPRING_LYRICS}
    storageKey="itiapp-spring-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Spring"
    onHome={onHome}
  />
);

export default SpringLesson;
