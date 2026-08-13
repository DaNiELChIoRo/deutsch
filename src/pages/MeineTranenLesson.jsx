import React from 'react';
import SongLesson from './SongLesson';
import { MEINE_TRANEN_VOCAB, MEINE_TRANEN_LYRICS } from '../utils/meineTranenVocabulary';

const MeineTranenLesson = ({ onHome }) => (
  <SongLesson
    title="Meine Tränen"
    meta="Rammstein — Zeit (2022)"
    vocab={MEINE_TRANEN_VOCAB}
    lyrics={MEINE_TRANEN_LYRICS}
    storageKey="itiapp-meine-tranen-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Meine+Tr%C3%A4nen"
    onHome={onHome}
  />
);

export default MeineTranenLesson;
