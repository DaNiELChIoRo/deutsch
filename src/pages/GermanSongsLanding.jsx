import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';

const ALBUMS = [
  {
    title: 'Herzeleid',
    year: '1995',
    songs: [
      { icon: '⚓', title: 'Seemann',            path: '/seemann' },
    ],
  },
  {
    title: 'Sehnsucht',
    year: '1997',
    songs: [
      { icon: '😇', title: 'Engel',              path: '/engel' },
      { icon: '🎮', title: 'Spiel mit mir',      path: '/spiel-mit-mir' },
      { icon: '🌊', title: 'Alter Mann',         path: '/alter-mann' },
    ],
  },
  {
    title: 'Mutter',
    year: '2001',
    songs: [
      { icon: '🔥', title: 'Feuer und Wasser',   path: '/feuer-und-wasser' },
      { icon: '🌫️', title: 'Nebel',              path: '/nebel' },
    ],
  },
  {
    title: 'Reise, Reise',
    year: '2004',
    songs: [
      { icon: '🚢', title: 'Reise, Reise',       path: '/reise-reise' },
      { icon: '🍖', title: 'Mein Teil',          path: '/mein-teil' },
      { icon: '🙏', title: 'Dalai Lama',         path: '/dalai-lama' },
      { icon: '😴', title: 'Keine Lust',         path: '/keine-lust' },
      { icon: '💥', title: 'Los',                path: '/los' },
      { icon: '🗽', title: 'Amerika',            path: '/amerika' },
      { icon: '⭐', title: 'Moskau',             path: '/moskau' },
      { icon: '🎶', title: 'Amour',              path: '/amour' },
      { icon: '💔', title: 'Ohne dich',          path: '/ohne-dich' },
      { icon: '🕯️', title: 'Lichterloh',         path: '/lichterloh' },
    ],
  },
  {
    title: 'Rosenrot',
    year: '2005',
    songs: [
      { icon: '⛽', title: 'Benzin',             path: '/benzin' },
      { icon: '⚔️', title: 'Mann gegen Mann',    path: '/mann-gegen-mann' },
      { icon: '🥀', title: 'Stirb nicht vor mir',path: '/stirb-nicht' },
      { icon: '💣', title: 'Zerstören',          path: '/zerstoren' },
      { icon: '❤️', title: 'Eine',               path: '/eine' },
      { icon: '🌊', title: 'Wo willst du hin',   path: '/wo-willst-du-hin' },
      { icon: '🌉', title: 'Spring',             path: '/spring' },
      { icon: '🎸', title: 'Wo bist du?',        path: '/wo-bist-du' },
      { icon: '💃', title: 'Te quiero puta',     path: '/te-quiero-puta' },
      { icon: '🌹', title: 'Rosenrot',           path: '/rosenrot' },
      { icon: '🎵', title: 'Ein Lied',           path: '/ein-lied' },
    ],
  },
  {
    title: 'Liebe ist für alle da',
    year: '2009',
    songs: [
      { icon: '💪', title: 'Ramm 4',             path: '/ramm-4' },
      { icon: '⚡', title: 'Ich tu dir weh',     path: '/ich-tu-dir-weh' },
      { icon: '🎯', title: 'Waidmanns Heil',     path: '/waidmanns-heil' },
      { icon: '🦈', title: 'Haifisch',           path: '/haifisch' },
      { icon: '🔤', title: 'Bückstabü',          path: '/b-track' },
      { icon: '🌸', title: 'Frühling in Paris',  path: '/fruhling-in-paris' },
      { icon: '🩸', title: 'Wiener Blut',        path: '/wiener-blut' },
      { icon: '🐱', title: 'Pussy',              path: '/pussy' },
      { icon: '❤️‍🔥', title: 'Liebe ist für alle da', path: '/liebe-ist-fur-alle-da' },
      { icon: '➕', title: 'Mehr',               path: '/mehr' },
      { icon: '🏜️', title: 'Roter Sand',         path: '/roter-sand' },
    ],
  },
  {
    title: 'Zeit',
    year: '2022',
    songs: [
      { icon: '⚔️', title: 'Armee der Tristen',  path: '/armee-der-tristen' },
      { icon: '⏳', title: 'Zeit',               path: '/zeit' },
      { icon: '🖤', title: 'Schwarz',            path: '/schwarz' },
      { icon: '🐍', title: 'Giftig',             path: '/giftig' },
      { icon: '✂️', title: 'Zick Zack',          path: '/zick-zack' },
      { icon: '🙆', title: 'OK',                 path: '/ok' },
      { icon: '😢', title: 'Meine Tränen',        path: '/meine-tranen' },
      { icon: '😱', title: 'Angst',              path: '/angst' },
      { icon: '🤥', title: 'Lügen',              path: '/lugen' },
      { icon: '🍑', title: 'Dicke Titten',       path: '/dicke-titten' },
      { icon: '🕊️', title: 'Adieu',              path: '/adieu' },
      { icon: '💉', title: 'Tattoo',             path: '/tattoo' },
    ],
  },
  {
    title: 'Rammstein',
    year: '2019',
    songs: [
      { icon: '🇩🇪', title: 'Deutschland',       path: '/deutschland' },
      { icon: '📻', title: 'Radio',              path: '/radio' },
      { icon: '👁️', title: 'Zeig dich',          path: '/zeig-dich' },
      { icon: '✈️', title: 'Ausländer',          path: '/auslander' },
      { icon: '💋', title: 'Sex',                path: '/sex' },
      { icon: '💎', title: 'Diamant',            path: '/diamant' },
      { icon: '🌌', title: 'Weit weg',           path: '/weit-weg' },
      { icon: '🪆', title: 'Puppe',              path: '/puppe' },
      { icon: '🐚', title: 'Hallomann',          path: '/hallomann' },
    ],
  },
  {
    title: 'Volkslied',
    year: 'c. 1525',
    songs: [
      { icon: '⚔️', title: 'Wir sind des Geyers schwarzer Haufen', path: '/geyers-schwarzer-haufen' },
    ],
  },
];

const GermanSongsLanding = ({ onHome }) => {
  const navigate = useNavigate();
  const { language } = useI18n();

  const totalSongs = ALBUMS.reduce((sum, a) => sum + a.songs.length, 0);

  return (
    <div className="gl-container">
      <div className="gl-content">
        <header className="gl-header">
          <div style={{ fontSize: '2.8rem' }}>🎸</div>
          <h1 className="gl-title">Rammstein</h1>
          <p className="gl-subtitle">
            {language === 'es'
              ? `${totalSongs} canciones · vocabulario y letra`
              : `${totalSongs} songs · vocabulary flashcards and full lyrics`}
          </p>
        </header>

        {ALBUMS.map(album => (
          <div key={album.title} className="gl-section">
            <h2 className="gl-section-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>🎵 {album.title}</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 400, opacity: 0.6 }}>
                {album.year} · {album.songs.length} {language === 'es' ? 'canciones' : 'songs'}
              </span>
            </h2>
            <div className="gl-tools-grid" style={{ gridTemplateColumns: '1fr' }}>
              {album.songs.map(song => (
                <button
                  key={song.path}
                  className="gl-tool-btn"
                  style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 14, padding: '14px 18px' }}
                  onClick={() => navigate(song.path)}
                >
                  <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{song.icon}</span>
                  <span style={{ textAlign: 'left' }}>
                    <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 800 }}>{song.title}</span>
                    <span style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>
                      {album.title} ({album.year})
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}

        <button className="gl-back-btn" onClick={onHome}>
          &#8592; {language === 'es' ? 'Volver' : 'Back'}
        </button>
      </div>
    </div>
  );
};

export default GermanSongsLanding;
