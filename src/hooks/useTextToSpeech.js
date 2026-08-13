import { useState, useCallback, useEffect, useRef } from 'react';

export function useTextToSpeech() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [speakingId, setSpeakingId] = useState(null);
  const utteranceRef = useRef(null);

  const speak = useCallback((text, id, lang = 'de-DE') => {
    if (!supported) return;

    // Cancel anything currently playing
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85; // slightly slower — better for learning
    utterance.pitch = 1;
    utteranceRef.current = utterance;

    utterance.onstart = () => setSpeakingId(id);
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  }, [supported]);

  const stop = useCallback(() => {
    if (supported) window.speechSynthesis.cancel();
    setSpeakingId(null);
  }, [supported]);

  // Cancel on unmount
  useEffect(() => () => { if (supported) window.speechSynthesis.cancel(); }, [supported]);

  return { supported, speakingId, speak, stop };
}
