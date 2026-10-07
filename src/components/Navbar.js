'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo" aria-label="Carnatic Music Classes by Bhargavi Bhadri - Home">
            <Image src="/logo.png" alt="Bhargavi Bhadri Carnatic Music Logo" width={42} height={42} priority />
            <div className="navbar-logo-text">
              <span className="navbar-logo-name">Bhargavi Bhadri</span>
              <span className="navbar-logo-sub">Carnatic Music</span>
            </div>
          </Link>

          <ul className="navbar-links" role="list">
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#classes">Classes</Link></li>
            <li><Link href="/#music-types">Music</Link></li>
            <li><Link href="/#global-reach">Global</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/#contact" className="navbar-cta">Contact Us</Link></li>
          </ul>

          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            id="navbar-hamburger-btn"
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <Link href="/#about" onClick={closeMenu}>About</Link>
        <Link href="/#classes" onClick={closeMenu}>Classes</Link>
        <Link href="/#music-types" onClick={closeMenu}>Music</Link>
        <Link href="/#global-reach" onClick={closeMenu}>Global Reach</Link>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link href="/#contact" onClick={closeMenu} style={{ color: 'var(--color-amber)' }}>Contact Us</Link>
      </div>
    </>
  );
}
