import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { FacebookIcon } from '@/components/Icons';

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
              Providing authentic Carnatic vocal music training since April 2016. Empowering students of all ages across India and the globe to connect with the timeless art of Indian classical music.
            </p>
            <div className="footer-contact-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
              <a href="tel:+919731891537" className="footer-phone" aria-label="Call Bhargavi Bhadri" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} />
                <span>+91 97318 91537</span>
              </a>
              <a href="mailto:bhargavianand1974@gmail.com" style={{ color: 'var(--color-text-light)', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} aria-label="Email Bhargavi Bhadri">
                <Mail size={15} />
                <span>bhargavianand1974@gmail.com</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578842536998" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-amber-light)', fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} aria-label="Bhargavi Bhadri on Facebook">
                <FacebookIcon size={16} color="#1877F2" />
                <span>Follow on Facebook ↗</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/#about">About Bhargavi</Link></li>
              <li><Link href="/#classes">Class Programs</Link></li>
              <li><Link href="/#music-types">Music Types</Link></li>
              <li><Link href="/#global-reach">Global Students</Link></li>
              <li><Link href="/gallery">Photo Gallery</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Programs Offered</h4>
            <ul>
              <li><Link href="/#classes">Junior Carnatic Classes</Link></li>
              <li><Link href="/#classes">Senior Carnatic Classes</Link></li>
              <li><Link href="/#music-types">Devotional Songs</Link></li>
              <li><Link href="/#music-types">Bhavageethe</Link></li>
              <li><Link href="/#music-types">Folk Songs</Link></li>
              <li><Link href="/#music-types">Prayer Songs</Link></li>
              <li><Link href="/#certifications">Music Examinations</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Carnatic Music Classes by Bhargavi Bhadri. All rights reserved.</p>
          <p>
            Located in <a href="https://maps.google.com/?q=Mukunda+Nandanam+Kodigehalli+Bengaluru" target="_blank" rel="noopener noreferrer">Krishnarajapuram, Bengaluru</a> · Serving students worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
