import React, { useState, useCallback } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { GERMAN_STATES, GERMANY_CITIES } from '../utils/germanyMapData';
import '../styles/GermanyMap.css';

const GermanyMap = ({ onHome }) => {
  const { t, language } = useI18n();
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [flippedCities, setFlippedCities] = useState(new Set());
  const [cityFilter, setCityFilter] = useState('all');

  const handleStateClick = useCallback((state) => {
    setSelectedState(prev => prev?.id === state.id ? null : state);
  }, []);

  const toggleCityCard = useCallback((cityId) => {
    setFlippedCities(prev => {
      const next = new Set(prev);
      if (next.has(cityId)) next.delete(cityId);
      else next.add(cityId);
      return next;
    });
  }, []);

  const filteredCities = cityFilter === 'all'
    ? GERMANY_CITIES
    : GERMANY_CITIES.filter(c => c.stateId === cityFilter);

  return (
    <div className="germany-container">
      <div className="germany-content">
        <div className="germany-header">
          <button className="germany-back-btn" onClick={onHome} aria-label={t('flashcards.backToHome')}>
            &#8592;
          </button>
          <h1 className="germany-title">
            {language === 'es' ? 'Mapa de Alemania' : 'Map of Germany'}
          </h1>
        </div>

        <p className="germany-subtitle">
          {language === 'es'
            ? 'Toca un estado para aprender su pronunciación y datos clave'
            : 'Tap a state to learn its pronunciation and key facts'}
        </p>

        {/* SVG Map */}
        <div className="germany-map-wrapper">
          <svg
            viewBox="0 0 500 560"
            className="germany-svg"
            aria-label="Map of Germany"
          >
            {GERMAN_STATES.map(state => (
              <g key={state.id} onClick={() => handleStateClick(state)}>
                <polygon
                  points={state.polygon}
                  fill={selectedState?.id === state.id ? state.hoverColor : (hoveredState === state.id ? state.hoverColor : state.color)}
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="germany-state-polygon"
                  onMouseEnter={() => setHoveredState(state.id)}
                  onMouseLeave={() => setHoveredState(null)}
                />
                {/* State abbreviation label (only for larger states) */}
                {!['hamburg', 'bremen', 'berlin', 'saarland'].includes(state.id) && (
                  <text
                    x={state.labelX}
                    y={state.labelY}
                    textAnchor="middle"
                    className="germany-state-label"
                    pointerEvents="none"
                  >
                    {state.id === 'nordrhein-westfalen' ? 'NRW' :
                     state.id === 'mecklenburg-vorpommern' ? 'MV' :
                     state.id === 'sachsen-anhalt' ? 'SA' :
                     state.id === 'rheinland-pfalz' ? 'RP' :
                     state.id === 'niedersachsen' ? 'NS' :
                     state.id === 'schleswig-holstein' ? 'SH' :
                     state.id === 'thueringen' ? 'TH' :
                     state.id === 'sachsen' ? 'SN' :
                     state.id === 'hessen' ? 'HE' :
                     state.id === 'bayern' ? 'BY' :
                     state.id === 'baden-wuerttemberg' ? 'BW' :
                     state.id === 'brandenburg' ? 'BB' : state.name.slice(0, 2).toUpperCase()}
                  </text>
                )}
              </g>
            ))}

            {/* City dots */}
            {GERMANY_CITIES.map(city => (
              <g key={city.id} className="germany-city-dot-group">
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={city.population.includes('M') ? 5 : 3.5}
                  fill="white"
                  stroke="#333"
                  strokeWidth="1.5"
                  className="germany-city-dot"
                />
              </g>
            ))}
          </svg>

          {/* State info card overlay */}
          {selectedState && (
            <div className="germany-state-card">
              <button className="germany-state-card-close" onClick={() => setSelectedState(null)}>✕</button>
              <div className="germany-state-card-header" style={{ borderColor: selectedState.color }}>
                <h2 className="germany-state-card-name">{selectedState.name}</h2>
                {selectedState.nameEn !== selectedState.name && (
                  <span className="germany-state-card-english">{selectedState.nameEn}</span>
                )}
              </div>
              <div className="germany-state-card-ipa">{selectedState.ipa}</div>
              <div className="germany-state-card-row">
                <span className="germany-state-card-label">
                  {language === 'es' ? 'Capital:' : 'Capital:'}
                </span>
                <span className="germany-state-card-value">
                  {selectedState.capital}
                  <span className="germany-state-card-ipa-small"> {selectedState.capitalIpa}</span>
                </span>
              </div>
              <div className="germany-state-card-row">
                <span className="germany-state-card-label">
                  {language === 'es' ? 'Ciudades:' : 'Cities:'}
                </span>
                <span className="germany-state-card-value">{selectedState.cities.join(', ')}</span>
              </div>
              <p className="germany-state-card-fact">
                {selectedState.fact[language] || selectedState.fact.en}
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="germany-legend">
          {GERMAN_STATES.map(state => (
            <button
              key={state.id}
              className={`germany-legend-item ${selectedState?.id === state.id ? 'active' : ''}`}
              onClick={() => handleStateClick(state)}
            >
              <span className="germany-legend-dot" style={{ background: state.color }} />
              <span className="germany-legend-name">{state.name}</span>
            </button>
          ))}
        </div>

        {/* City Memory Cards */}
        <div className="germany-cities-section">
          <h2 className="germany-cities-title">
            {language === 'es' ? 'Ciudades y Pronunciación' : 'Cities & Pronunciation'}
          </h2>
          <p className="germany-cities-subtitle">
            {language === 'es'
              ? 'Toca una tarjeta para ver datos sobre la ciudad'
              : 'Tap a card to see city facts'}
          </p>

          {/* City filter by state */}
          <div className="germany-city-filter">
            <button
              className={`germany-filter-btn ${cityFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCityFilter('all')}
            >
              {language === 'es' ? 'Todas' : 'All'}
            </button>
            {GERMAN_STATES.filter(s => GERMANY_CITIES.some(c => c.stateId === s.id)).map(state => (
              <button
                key={state.id}
                className={`germany-filter-btn ${cityFilter === state.id ? 'active' : ''}`}
                onClick={() => setCityFilter(state.id)}
                style={cityFilter === state.id ? { borderColor: state.color, background: state.color + '33' } : {}}
              >
                {state.name.length > 10 ? state.name.split('-')[0] : state.name}
              </button>
            ))}
          </div>

          <div className="germany-city-grid">
            {filteredCities.map(city => {
              const isFlipped = flippedCities.has(city.id);
              const state = GERMAN_STATES.find(s => s.id === city.stateId);
              return (
                <div
                  key={city.id}
                  className="germany-city-scene"
                  onClick={() => toggleCityCard(city.id)}
                >
                  <div className={`germany-city-card ${isFlipped ? 'is-flipped' : ''}`}>
                    <div className="germany-city-face germany-city-front" style={{ borderTopColor: state?.color || '#5B9BD5' }}>
                      <div className="germany-city-name">{city.name}</div>
                      <div className="germany-city-ipa">{city.ipa}</div>
                      <div className="germany-city-state-badge" style={{ background: state?.color || '#5B9BD5' }}>
                        {state?.name || city.state}
                      </div>
                    </div>
                    <div className="germany-city-face germany-city-back">
                      <div className="germany-city-pop">
                        {language === 'es' ? 'Población:' : 'Population:'} {city.population}
                      </div>
                      <p className="germany-city-fact">
                        {city.fact[language] || city.fact.en}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="germany-actions">
          <button className="germany-action-btn" onClick={() => setFlippedCities(new Set())}>
            {language === 'es' ? 'Ocultar todo' : 'Hide All'}
          </button>
          <button
            className="germany-action-btn"
            onClick={() => setFlippedCities(new Set(filteredCities.map(c => c.id)))}
          >
            {language === 'es' ? 'Mostrar todo' : 'Show All'}
          </button>
          <button className="germany-action-btn" onClick={onHome}>
            {t('flashcards.backToHome')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GermanyMap;
