import React from 'react';
import SongLesson from './SongLesson';
import { SPIEL_MIT_MIR_VOCAB, SPIEL_MIT_MIR_LYRICS } from '../utils/spielMitMirVocabulary';

const SpielMitMirLesson = ({ onHome }) => (
  <SongLesson
    title="Spiel mit mir"
    meta="Rammstein — Sehnsucht (1997)"
    vocab={SPIEL_MIT_MIR_VOCAB}
    lyrics={SPIEL_MIT_MIR_LYRICS}
    storageKey="itiapp-spiel-mit-mir-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Spiel+mit+mir"
    onHome={onHome}
  />
);

export default SpielMitMirLesson;
