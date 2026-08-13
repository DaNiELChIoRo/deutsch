import React from 'react';
import SongLesson from './SongLesson';
import { WAIDMANNS_HEIL_VOCAB, WAIDMANNS_HEIL_LYRICS } from '../utils/waidmannsHeilVocabulary';

const WaidmannsHeilLesson = ({ onHome }) => (
  <SongLesson
    title="Waidmanns Heil"
    meta="Rammstein — Liebe ist für alle da (2009)"
    vocab={WAIDMANNS_HEIL_VOCAB}
    lyrics={WAIDMANNS_HEIL_LYRICS}
    storageKey="itiapp-waidmanns-heil-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+Waidmanns+Heil"
    onHome={onHome}
  />
);

export default WaidmannsHeilLesson;
