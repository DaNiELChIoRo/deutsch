import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import '../styles/GermanLanding.css';

const TOOLS = [
  {
    icon: '🇩🇪',
    key: 'flashcards',
    en: 'Vocabulary',
    es: 'Vocabulario',
    path: '/flashcards',
  },
  {
    icon: '🎓',
    key: 'fes-iztacala-2',
    en: 'Vocabulary level 2 · FES Iztacala',
    es: 'Vocabulario nivel 2 · FES Iztacala',
    path: '/fes-iztacala-2',
  },
  {
    icon: '📝',
    key: 'a1-exam',
    en: 'A1 Exam Practice',
    es: 'Práctica de Examen A1',
    path: '/a1-exam',
  },
  {
    icon: '🔤',
    key: 'verben',
    en: 'Verbs',
    es: 'Verbos',
    path: '/verben',
  },
  {
    icon: '🏷️',
    key: 'adjektive',
    en: 'Adjective Declension',
    es: 'Declinación de Adjetivos',
    path: '/adjektive',
  },
  {
    icon: '📛',
    key: 'nomen',
    en: 'Nouns · Gender & Plural',
    es: 'Sustantivos · Género y Plural',
    path: '/nomen',
  },
  {
    icon: '👤',
    key: 'pronomen',
    en: 'Pronouns',
    es: 'Pronombres',
    path: '/pronomen',
  },
  {
    icon: '🔢',
    key: 'numbers',
    en: 'Numbers',
    es: 'Números',
    path: '/numbers',
  },
  {
    icon: '❓',
    key: 'wfragen',
    en: 'W-Fragen',
    es: 'W-Fragen',
    path: '/w-fragen',
  },
  {
    icon: '🧩',
    key: 'compounds',
    en: 'Compound Words',
    es: 'Palabras Compuestas',
    path: '/compound-words',
  },
  {
    icon: '🗺️',
    key: 'map',
    en: 'Germany Map',
    es: 'Mapa de Alemania',
    path: '/map',
  },
  {
    icon: '🎙️',
    key: 'speaking',
    en: 'Speaking Game',
    es: 'Juego de Pronunciación',
    path: '/speaking',
  },
  {
    icon: '🃏',
    key: 'adjektive-karten',
    en: 'Common Adjectives',
    es: 'Adjetivos Comunes',
    path: '/adjektive-karten',
  },
];

const SONG_PREVIEWS = [
  // Herzeleid (1995)
  'Seemann',
  // Sehnsucht (1997)
  'Engel', 'Spiel mit mir', 'Alter Mann',
  // Mutter (2001)
  'Feuer und Wasser', 'Nebel',
  // Reise, Reise (2004)
  'Reise, Reise', 'Mein Teil', 'Dalai Lama', 'Keine Lust', 'Los', 'Amerika', 'Moskau', 'Amour', 'Ohne dich', 'Lichterloh',
  // Rosenrot (2005)
  'Benzin', 'Mann gegen Mann', 'Stirb nicht vor mir', 'Zerstören', 'Eine', 'Wo willst du hin', 'Spring', 'Wo bist du?', 'Te quiero puta', 'Rosenrot', 'Ein Lied',
  // Liebe ist für alle da (2009)
  'Ramm 4', 'Ich tu dir weh', 'Waidmanns Heil', 'Haifisch', 'Bückstabü', 'Frühling in Paris', 'Wiener Blut', 'Pussy', 'Liebe ist für alle da', 'Mehr', 'Roter Sand',
  // Zeit (2022)
  'Armee der Tristen', 'Zeit', 'Schwarz', 'Giftig', 'Zick Zack', 'OK', 'Meine Tränen', 'Angst', 'Lügen', 'Dicke Titten', 'Adieu', 'Tattoo',
  // Rammstein (2019)
  'Deutschland', 'Radio', 'Zeig dich', 'Ausländer', 'Sex', 'Diamant', 'Weit weg', 'Puppe', 'Hallomann',
  // Volkslied
  'Wir sind des Geyers schwarzer Haufen',
];

const GermanLanding = () => {
  const navigate = useNavigate();
  const { language } = useI18n();

  return (
    <div className="gl-container">
      <div className="gl-content">

        {/* Header */}
        <header className="gl-header">
          <div className="gl-flag">🇩🇪</div>
          <h1 className="gl-title">
            {language === 'es' ? 'Alemán' : 'German'}
          </h1>
          <p className="gl-subtitle">
            {language === 'es'
              ? 'Vocabulario, gramática y pronunciación'
              : 'Vocabulary, grammar and pronunciation'}
          </p>
        </header>

        {/* Study tools */}
        <div className="gl-section">
          <h2 className="gl-section-label">
            {language === 'es' ? '📚 Herramientas' : '📚 Study tools'}
          </h2>
          <div className="gl-tools-grid">
            {TOOLS.map(tool => (
              <button
                key={tool.key}
                className="gl-tool-btn"
                onClick={() => navigate(tool.path)}
              >
                <span className="gl-tool-icon">{tool.icon}</span>
                <span className="gl-tool-name">
                  {language === 'es' ? tool.es : tool.en}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Songs subsection — single block */}
        <div className="gl-section">
          <h2 className="gl-section-label">
            {language === 'es' ? '🎸 Canciones' : '🎸 Songs'}
          </h2>
          <button
            className="gl-songs-block"
            onClick={() => navigate('/songs')}
          >
            <div className="gl-songs-top">
              <span className="gl-songs-band">Rammstein</span>
              <span className="gl-songs-badge">
                {SONG_PREVIEWS.length} {language === 'es' ? 'canciones' : 'songs'}
              </span>
            </div>
            <p className="gl-songs-preview">
              {SONG_PREVIEWS.join(' · ')}
            </p>
            <span className="gl-songs-cta">
              {language === 'es' ? 'Ver todas →' : 'Browse all →'}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default GermanLanding;
