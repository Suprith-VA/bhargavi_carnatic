// Sends a GA4 event when gtag is loaded (NEXT_PUBLIC_GA_ID set); no-op otherwise.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, { page_path: window.location.pathname, ...params });
}
