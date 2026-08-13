import React from 'react';
import SongLesson from './SongLesson';
import { WO_WILLST_DU_HIN_VOCAB, WO_WILLST_DU_HIN_LYRICS } from '../utils/woWillstDuHinVocabulary';

const WoWillstDuHinLesson = ({ onHome }) => (
  <SongLesson
    title="Wo willst du hin"
    meta="Rammstein — Rosenrot (2005)"
    vocab={WO_WILLST_DU_HIN_VOCAB}
    lyrics={WO_WILLST_DU_HIN_LYRICS}
    storageKey="itiapp-wo-willst-du-hin-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Wo+willst+du+hin"
    onHome={onHome}
  />
);

export default WoWillstDuHinLesson;
