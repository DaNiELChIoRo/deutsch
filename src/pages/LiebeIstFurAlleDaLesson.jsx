import React from 'react';
import SongLesson from './SongLesson';
import { LIEBE_IST_FUR_ALLE_DA_VOCAB, LIEBE_IST_FUR_ALLE_DA_LYRICS } from '../utils/liebeIstFurAlleDaVocabulary';

const LiebeIstFurAlleDaLesson = ({ onHome }) => (
  <SongLesson
    title="Liebe ist für alle da"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={LIEBE_IST_FUR_ALLE_DA_VOCAB}
    lyrics={LIEBE_IST_FUR_ALLE_DA_LYRICS}
    storageKey="itiapp-liebe-ist-fur-alle-da-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Liebe+ist+f%C3%BCr+alle+da"
    onHome={onHome}
  />
);

export default LiebeIstFurAlleDaLesson;
