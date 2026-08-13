import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';
import { I18nProvider } from './i18n/I18nContext';
import LanguageSelector from './components/common/LanguageSelector';
import GermanSection from './pages/GermanSection';
import './styles/App.css';

// Provider order is load-bearing: I18nProvider reads translations via useData().
const Router = () => (
  <BrowserRouter basename="/deutsch">
    <DataProvider>
      <I18nProvider>
        <div className="app">
          <div className="app-language-selector">
            <LanguageSelector />
          </div>
          <Routes>
            <Route path="/*" element={<GermanSection />} />
          </Routes>
        </div>
      </I18nProvider>
    </DataProvider>
  </BrowserRouter>
);

export default Router;
