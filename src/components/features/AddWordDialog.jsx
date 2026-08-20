import React, { useState, useCallback } from 'react';
import { SYNC } from '../../hooks/useCustomVocabulary';
import '../../styles/AddWordDialog.css';

const SYNC_LABEL = {
  [SYNC.LOCAL]:   { en: 'Saved on this device',      es: 'Guardado en este dispositivo' },
  [SYNC.SYNCING]: { en: 'Saving…',                   es: 'Guardando…' },
  [SYNC.SYNCED]:  { en: 'Synced',                    es: 'Sincronizado' },
  [SYNC.OFFLINE]: { en: 'Offline — saved locally',   es: 'Sin conexión — guardado local' },
};

const AddWordDialog = ({ words, addWord, removeWord, syncState, deviceId, language, onClose }) => {
  const es = language === 'es';
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [ipa, setIpa] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [idCopied, setIdCopied] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const w = word.trim();
    const tr = translation.trim();

    if (!w || !tr) {
      setError(es ? 'La palabra y el significado son obligatorios.' : 'Word and meaning are both required.');
      return;
    }
    if (words.some(x => x.word.toLowerCase() === w.toLowerCase())) {
      setError(es ? `Ya agregaste "${w}".` : `You've already added "${w}".`);
      return;
    }

    setBusy(true);
    setError('');
    await addWord({ word: w, translation: tr, ipa });
    setBusy(false);
    setWord('');
    setTranslation('');
    setIpa('');
  }, [word, translation, ipa, words, addWord, es]);

  const copyId = useCallback(() => {
    navigator.clipboard?.writeText(deviceId).then(
      () => { setIdCopied(true); setTimeout(() => setIdCopied(false), 2000); },
      () => {}
    );
  }, [deviceId]);

  return (
    <div className="awd-backdrop" onClick={onClose}>
      <div
        className="awd-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={es ? 'Agregar palabra' : 'Add a word'}
        onClick={e => e.stopPropagation()}
      >
        <div className="awd-header">
          <h2 className="awd-title">{es ? 'Mis palabras' : 'My words'}</h2>
          <button className="awd-close" onClick={onClose} aria-label={es ? 'Cerrar' : 'Close'}>&times;</button>
        </div>

        <form className="awd-form" onSubmit={handleSubmit}>
          <label className="awd-field">
            <span className="awd-label">{es ? 'Palabra en alemán' : 'German word'} *</span>
            <input
              className="awd-input"
              value={word}
              onChange={e => setWord(e.target.value)}
              placeholder={es ? 'z. B. die Einladung' : 'e.g. die Einladung'}
              autoFocus
            />
          </label>

          <label className="awd-field">
            <span className="awd-label">{es ? 'Significado' : 'Meaning'} *</span>
            <input
              className="awd-input"
              value={translation}
              onChange={e => setTranslation(e.target.value)}
              placeholder={es ? 'p. ej. invitación' : 'e.g. invitation'}
            />
          </label>

          <label className="awd-field">
            <span className="awd-label">{es ? 'Pronunciación (opcional)' : 'Pronunciation (optional)'}</span>
            <input
              className="awd-input"
              value={ipa}
              onChange={e => setIpa(e.target.value)}
              placeholder="[ˈaɪnˌlaːdʊŋ]"
            />
          </label>

          {error && <p className="awd-error">{error}</p>}

          <button className="awd-submit" type="submit" disabled={busy}>
            {busy ? (es ? 'Guardando…' : 'Saving…') : (es ? 'Agregar palabra' : 'Add word')}
          </button>
        </form>

        <div className="awd-list-section">
          <div className="awd-list-head">
            <span className="awd-count">
              {words.length} {es ? 'palabra(s) tuya(s)' : words.length === 1 ? 'custom word' : 'custom words'}
            </span>
            <span className={`awd-sync awd-sync-${syncState}`}>
              {SYNC_LABEL[syncState]?.[es ? 'es' : 'en']}
            </span>
          </div>

          {words.length === 0 ? (
            <p className="awd-empty">
              {es
                ? 'Todavía no has agregado palabras. Las que agregues aparecerán junto a las demás tarjetas.'
                : 'No words yet. Anything you add shows up alongside the built-in cards.'}
            </p>
          ) : (
            <ul className="awd-list">
              {words.map(w => (
                <li key={w.id} className="awd-item">
                  <div className="awd-item-text">
                    <span className="awd-item-word">{w.word}</span>
                    {w.ipa && <span className="awd-item-ipa">{w.ipa}</span>}
                    <span className="awd-item-translation">{w.translation}</span>
                  </div>
                  <button
                    className="awd-remove"
                    onClick={() => removeWord(w.id)}
                    aria-label={`${es ? 'Eliminar' : 'Remove'} ${w.word}`}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="awd-device">
          <span className="awd-device-label">{es ? 'ID de dispositivo' : 'Device ID'}</span>
          <code className="awd-device-id">{deviceId}</code>
          <button className="awd-copy" onClick={copyId}>
            {idCopied ? (es ? '¡Copiado!' : 'Copied!') : (es ? 'Copiar' : 'Copy')}
          </button>
          <p className="awd-device-note">
            {es
              ? 'Tus palabras están ligadas a este navegador. Si borras los datos del sitio, se pierde el vínculo.'
              : 'Your words are tied to this browser. Clearing site data breaks the link.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddWordDialog;
