import { useState, useRef, useCallback, useEffect } from 'react';

// Detects which SpeechRecognition constructor is available
function getSpeechRecognition() {
  if (typeof window === 'undefined') return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

export function detectSpeechSupport() {
  const SR = getSpeechRecognition();
  if (!SR) {
    // Firefox ships with no SpeechRecognition at all
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
    return { supported: false, browser: isFirefox ? 'firefox' : 'unknown' };
  }
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return { supported: true, browser: isSafari ? 'safari' : 'other' };
}

export function useSpeechRecognition({ lang = 'de-DE' } = {}) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);

  const { supported, browser } = detectSpeechSupport();

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const start = useCallback(() => {
    const SR = getSpeechRecognition();
    if (!SR) return;

    setTranscript('');
    setError(null);

    const recognition = new SR();
    recognitionRef.current = recognition;

    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = false;
    // Gather up to 5 alternatives so fuzzy matching has more to work with
    recognition.maxAlternatives = 5;

    let resultReceived = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onend = () => {
      setIsListening(false);
      // iOS Safari often fires onend without onresult — treat as no-speech
      if (!resultReceived) setError('no-speech');
    };

    recognition.onerror = (e) => {
      resultReceived = true; // prevent double-error from onend
      setError(e.error);
      setIsListening(false);
    };

    recognition.onresult = (e) => {
      resultReceived = true;
      // Join all alternatives with | so the matcher can try each one
      const alts = Array.from(e.results[0]).map(r => r.transcript.trim());
      setTranscript(alts.join('|'));
    };

    try {
      recognition.start();
    } catch (err) {
      setError('start-failed');
    }
  }, [lang]);

  // Abort on unmount
  useEffect(() => {
    return () => recognitionRef.current?.abort();
  }, []);

  return { isListening, transcript, error, supported, browser, start, stop };
}
