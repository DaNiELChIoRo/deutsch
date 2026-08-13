import React from 'react';
import SongLesson from './SongLesson';
import { ZEIG_DICH_VOCAB, ZEIG_DICH_LYRICS } from '../utils/zeigDichVocabulary';

const ZeigDichLesson = ({ onHome }) => (
  <SongLesson
    title="Zeig dich"
    meta="Rammstein — Rammstein (2019)"
    vocab={ZEIG_DICH_VOCAB}
    lyrics={ZEIG_DICH_LYRICS}
    storageKey="itiapp-zeig-dich-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Zeig+dich"
    onHome={onHome}
  />
);

export default ZeigDichLesson;
