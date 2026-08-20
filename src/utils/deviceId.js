const STORAGE_KEY = 'deutsch-device-id';

// Cached so a device with localStorage blocked (private browsing) still gets a
// stable id for the lifetime of the page instead of a new one per call.
let cachedId = null;

function generateId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // randomUUID needs a secure context; fall back to a hand-rolled v4.
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10xx
    const hex = [...bytes].map(b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }
  return `nocrypto-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

/**
 * A stable per-device identifier, created on first use and kept in localStorage.
 *
 * This identifies a *browser profile*, not a person: clearing site data, using a
 * different browser, or opening a private window all produce a new id, and the
 * word list tied to the old one becomes unreachable. It is not a credential and
 * must not be treated as one — see firestore.rules.
 */
export function getDeviceId() {
  if (cachedId) return cachedId;
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
      cachedId = existing;
      return cachedId;
    }
    cachedId = generateId();
    localStorage.setItem(STORAGE_KEY, cachedId);
  } catch {
    // localStorage unavailable — hold the id in memory only.
    cachedId = generateId();
  }
  return cachedId;
}
