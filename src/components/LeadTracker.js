'use client';
import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

// Every contact link on the site is tracked here, so new buttons are covered
// automatically. Mark these events as key events in GA4 Admin.
const LEAD_LINKS = [
  [/^tel:/, 'phone_click'],
  [/^https:\/\/wa\.me\//, 'whatsapp_click'],
  [/^mailto:/, 'email_click'],
  [/google\.com\/maps\/dir|maps\.google\.com\/\?cid=/, 'directions_click'],
];

export default function LeadTracker() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href');
      const match = LEAD_LINKS.find(([pattern]) => pattern.test(href));
      if (!match) return;
      trackEvent(match[1], {
        cta_location: link.id || link.closest('[id]')?.id || 'unknown',
        link_url: href,
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
