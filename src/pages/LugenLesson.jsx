import React from 'react';
import SongLesson from './SongLesson';
import { LUGEN_VOCAB, LUGEN_LYRICS } from '../utils/lugenVocabulary';

const LugenLesson = ({ onHome }) => (
  <SongLesson
    title="Lügen"
    meta="Rammstein — Zeit (2022)"
    vocab={LUGEN_VOCAB}
    lyrics={LUGEN_LYRICS}
    storageKey="itiapp-lugen-known"
    appleMusic="https://music.apple.com/search?term=Rammstein+L%C3%BCgen"
    onHome={onHome}
  />
);

export default LugenLesson;
