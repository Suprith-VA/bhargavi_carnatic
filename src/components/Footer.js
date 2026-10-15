import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FacebookIcon } from '@/components/Icons';
import {
  BUSINESS_NAME,
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  FACEBOOK_URL,
  ADDRESS_LINES,
  HOURS,
  DIRECTIONS_URL,
  GOOGLE_REVIEWS_URL,
  PROGRAMS,
} from '@/lib/site';

const footerLinkStyle = { color: 'var(--color-text-light)', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' };

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/logo.png" alt="Bhargavi Bhadri Carnatic Music" width={40} height={40} />
              <div>
                <div className="footer-logo-text">Bhargavi Bhadri</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-amber-light)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>Carnatic Music</div>
              </div>
            </div>
            <p>
              Carnatic vocal music classes since April 2016, in person in KR Puram, Bengaluru and online for students across India and around the world.
            </p>
            <div className="footer-contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
              <a href={`tel:${PHONE}`} className="footer-phone" id="footer-call" aria-label="Call Bhargavi Bhadri" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} id="footer-email" style={footerLinkStyle} aria-label="Email Bhargavi Bhadri">
                <Mail size={15} />
                <span>{EMAIL}</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={{ ...footerLinkStyle, color: 'var(--color-amber-light)' }} aria-label="Bhargavi Bhadri on Facebook">
                <FacebookIcon size={16} color="#1877F2" />
                <span>Follow on Facebook ↗</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Classes</h4>
            <ul>
              {PROGRAMS.map((p) => (
                <li key={p.slug}><Link href={`/${p.slug}`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/#about">About Bhargavi</Link></li>
              <li><Link href="/#classes">Class Programs</Link></li>
              <li><Link href="/#music-types">Music Taught</Link></li>
              <li><Link href="/gallery">Photo Gallery</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/#contact">Enquire Now</Link></li>
              <li><a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Google Reviews ↗</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visit Us</h4>
            <address style={{ fontStyle: 'normal', fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(250, 243, 234, 0.65)' }}>
              <strong style={{ color: 'var(--color-cream)', fontWeight: 600 }}>{BUSINESS_NAME}</strong><br />
              {ADDRESS_LINES.map((line) => (
                <span key={line}>{line}<br /></span>
              ))}
            </address>
            <p style={{ ...footerLinkStyle, marginTop: '0.75rem', color: 'rgba(250, 243, 234, 0.65)' }}>
              <Clock size={15} /> {HOURS.display}
            </p>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" id="footer-directions" style={{ ...footerLinkStyle, marginTop: '0.75rem', color: 'var(--color-amber-light)' }}>
              <MapPin size={15} /> Get directions ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p>
            Located in <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Krishnarajapuram, Bengaluru</a> · Online classes worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
