import React from 'react';
import SongLesson from './SongLesson';
import { TE_QUIERO_PUTA_VOCAB, TE_QUIERO_PUTA_LYRICS } from '../utils/teQuieroPutaVocabulary';

const TeQuieroPutaLesson = ({ onHome }) => (
  <SongLesson
    title="Te quiero puta"
    meta="Rammstein — Rosenrot (2005)"
    vocab={TE_QUIERO_PUTA_VOCAB}
    lyrics={TE_QUIERO_PUTA_LYRICS}
    storageKey="itiapp-te-quiero-puta-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Te+quiero+puta"
    onHome={onHome}
  />
);

export default TeQuieroPutaLesson;
