import { useState, useEffect, useCallback, useRef } from 'react';
import { getDeviceId } from '../utils/deviceId';
import { getCustomVocabulary, saveCustomVocabularyDeck } from '../firebase/firestoreService';
import { isFirebaseConfigured } from '../firebase/config';

const lsKey = deckId => `deutsch-custom-vocabulary-${deckId}`;

// 'local'   — saved on this device, no Firebase configured
// 'syncing' — a write is in flight
// 'synced'  — local and Firestore agree
// 'offline' — Firebase configured but unreachable; local still saved
const SYNC = { LOCAL: 'local', SYNCING: 'syncing', SYNCED: 'synced', OFFLINE: 'offline' };

function readLocal(deckId) {
  try {
    const raw = localStorage.getItem(lsKey(deckId));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocal(deckId, words) {
  try {
    localStorage.setItem(lsKey(deckId), JSON.stringify(words));
  } catch {
    // quota exceeded or storage blocked — in-memory state still works this session
  }
}

/** Union by id, newest `createdAt` winning, sorted oldest-first. */
function mergeById(a, b) {
  const byId = new Map();
  for (const w of [...a, ...b]) {
    const existing = byId.get(w.id);
    if (!existing || (w.createdAt || 0) > (existing.createdAt || 0)) byId.set(w.id, w);
  }
  return [...byId.values()].sort((x, y) => (x.createdAt || 0) - (y.createdAt || 0));
}

/**
 * User-added vocabulary for one deck on this device.
 *
 * localStorage is the source of truth so the feature works with no Firebase config
 * and while offline. When Firebase *is* configured the list is mirrored to
 * `userVocabulary/{deviceId}.decks[deckId]`, so it survives a cache clear and can be
 * pulled onto another device by reusing the same id.
 *
 * Scoped per deck: words added to the FES Iztacala list must not leak into the
 * general vocabulary deck.
 */
export function useCustomVocabulary(deckId) {
  const deviceId = getDeviceId();
  const [words, setWords] = useState(() => readLocal(deckId));
  const [syncState, setSyncState] = useState(isFirebaseConfigured ? SYNC.SYNCING : SYNC.LOCAL);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  // Switching decks swaps in that deck's stored list.
  useEffect(() => {
    const local = readLocal(deckId);
    setWords(local);
    wordsRef.current = local;
    setSyncState(isFirebaseConfigured ? SYNC.SYNCING : SYNC.LOCAL);
  }, [deckId]);

  // Pull whatever the server has for this deck and reconcile it with this device.
  useEffect(() => {
    if (!isFirebaseConfigured) return;
    let cancelled = false;

    (async () => {
      const decks = await getCustomVocabulary(deviceId);
      if (cancelled) return;

      if (decks === null) {
        setSyncState(SYNC.OFFLINE);
        return;
      }

      const remote = decks[deckId] || [];
      const merged = mergeById(wordsRef.current, remote);
      setWords(merged);
      wordsRef.current = merged;
      writeLocal(deckId, merged);

      // Push back only if this device knows something the server doesn't.
      if (merged.length !== remote.length) {
        try {
          await saveCustomVocabularyDeck(deviceId, deckId, merged);
          if (!cancelled) setSyncState(SYNC.SYNCED);
        } catch {
          if (!cancelled) setSyncState(SYNC.OFFLINE);
        }
      } else {
        setSyncState(SYNC.SYNCED);
      }
    })();

    return () => { cancelled = true; };
  }, [deviceId, deckId]);

  // Write locally first, then mirror — a failed sync must never lose the word.
  const persist = useCallback(async (next) => {
    setWords(next);
    wordsRef.current = next;
    writeLocal(deckId, next);

    if (!isFirebaseConfigured) {
      setSyncState(SYNC.LOCAL);
      return;
    }
    setSyncState(SYNC.SYNCING);
    try {
      await saveCustomVocabularyDeck(deviceId, deckId, next);
      setSyncState(SYNC.SYNCED);
    } catch (err) {
      console.warn('Custom vocabulary sync failed, kept locally:', err.message);
      setSyncState(SYNC.OFFLINE);
    }
  }, [deviceId, deckId]);

  const addWord = useCallback(({ word, translation, ipa }) => {
    const entry = {
      id: `custom-${getDeviceId()}-${Date.now()}`,
      word: word.trim(),
      translation: translation.trim(),
      ipa: (ipa || '').trim(),
      createdAt: Date.now(),
    };
    return persist([...wordsRef.current, entry]);
  }, [persist]);

  const removeWord = useCallback((id) => {
    return persist(wordsRef.current.filter(w => w.id !== id));
  }, [persist]);

  return { deviceId, words, addWord, removeWord, syncState };
}

export { SYNC };
