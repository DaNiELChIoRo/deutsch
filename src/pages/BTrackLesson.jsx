import React from 'react';
import SongLesson from './SongLesson';
import { B_TRACK_VOCAB, B_TRACK_LYRICS } from '../utils/bTrackVocabulary';

const BTrackLesson = ({ onHome }) => (
  <SongLesson
    title="Bückstabü"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={B_TRACK_VOCAB}
    lyrics={B_TRACK_LYRICS}
    storageKey="itiapp-b-track-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+B%C3%BCckstab%C3%BC"
    onHome={onHome}
  />
);

export default BTrackLesson;
