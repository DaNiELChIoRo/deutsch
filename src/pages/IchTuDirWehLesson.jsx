import React from 'react';
import SongLesson from './SongLesson';
import { ICH_TU_DIR_WEH_VOCAB, ICH_TU_DIR_WEH_LYRICS } from '../utils/ichTuDirWehVocabulary';

const IchTuDirWehLesson = ({ onHome }) => (
  <SongLesson
    title="Ich tu dir weh"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={ICH_TU_DIR_WEH_VOCAB}
    lyrics={ICH_TU_DIR_WEH_LYRICS}
    storageKey="itiapp-ich-tu-dir-weh-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Ich+tu+dir+weh"
    onHome={onHome}
  />
);

export default IchTuDirWehLesson;
