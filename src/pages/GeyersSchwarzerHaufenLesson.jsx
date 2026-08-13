import React from 'react';
import SongLesson from './SongLesson';
import { GEYERS_SCHWARZER_HAUFEN_VOCAB, GEYERS_SCHWARZER_HAUFEN_LYRICS } from '../utils/geyersSchwarzerHaufenVocabulary';

const GeyersSchwarzerHaufenLesson = ({ onHome }) => (
  <SongLesson
    title="Wir sind des Geyers schwarzer Haufen"
    meta="Botho Lucas Chor — Volkslied (c. 1525)"
    vocab={GEYERS_SCHWARZER_HAUFEN_VOCAB}
    lyrics={GEYERS_SCHWARZER_HAUFEN_LYRICS}
    storageKey="itiapp-geyers-schwarzer-haufen-known"
    appleMusic="https://music.apple.com/mx/album/wir-sind-des-geyers-schwarzer-haufen/944285262?i=944285333"
    onHome={onHome}
  />
);

export default GeyersSchwarzerHaufenLesson;
