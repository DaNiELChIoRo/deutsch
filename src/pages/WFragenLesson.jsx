import React from 'react';
import SongLesson from './SongLesson';
import { W_FRAGEN_VOCAB, W_FRAGEN_EXAMPLES, W_FRAGEN_TYPE_LABELS } from '../utils/wFragenData';

const WFragenLesson = ({ onHome }) => (
  <SongLesson
    title="W-Fragen"
    meta="Fragewörter — German Question Words"
    vocab={W_FRAGEN_VOCAB}
    lyrics={W_FRAGEN_EXAMPLES}
    storageKey="itiapp-wfragen-known"
    typeLabels={W_FRAGEN_TYPE_LABELS}
    lyricsTabLabel={{ en: 'Examples', es: 'Ejemplos' }}
    pronLabel={{ en: 'grammar notes', es: 'notas gramaticales' }}
    onHome={onHome}
  />
);

export default WFragenLesson;
