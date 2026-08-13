import React from 'react';
import { useI18n } from '../../i18n/I18nContext';
import '../../styles/LanguageSelector.css';

/**
 * Language selector component
 */
const LanguageSelector = () => {
  const { language, setLanguage, t } = useI18n();

  return (
    <div className="language-selector">
      <button
        className={`lang-button ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        title={t('language.en')}
        aria-label={t('language.en')}
      >
        EN
      </button>
      <button
        className={`lang-button ${language === 'es' ? 'active' : ''}`}
        onClick={() => setLanguage('es')}
        title={t('language.es')}
        aria-label={t('language.es')}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
