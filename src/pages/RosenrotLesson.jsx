import React from 'react';
import SongLesson from './SongLesson';
import { ROSENROT_VOCAB, ROSENROT_LYRICS } from '../utils/rosenrotVocabulary';

const RosenrotLesson = ({ onHome }) => (
  <SongLesson
    title="Rosenrot"
    meta="Rammstein — Rosenrot (2005)"
    vocab={ROSENROT_VOCAB}
    lyrics={ROSENROT_LYRICS}
    storageKey="itiapp-rosenrot-known"
    onHome={onHome}
  />
);

export default RosenrotLesson;
