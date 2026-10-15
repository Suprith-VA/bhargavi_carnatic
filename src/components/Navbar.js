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
            <li><Link href="/carnatic-music-classes-for-kids">For Kids</Link></li>
            <li><Link href="/online-carnatic-music-classes">Online</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/#contact" className="navbar-cta">Enquire Now</Link></li>
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
        <Link href="/#classes" onClick={closeMenu}>All Classes</Link>
        <Link href="/carnatic-music-classes-for-kids" onClick={closeMenu}>Classes for Kids</Link>
        <Link href="/online-carnatic-music-classes" onClick={closeMenu}>Online Classes</Link>
        <Link href="/carnatic-music-classes-kr-puram" onClick={closeMenu}>KR Puram &amp; Whitefield</Link>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link href="/#contact" onClick={closeMenu} style={{ color: 'var(--color-amber)' }}>Enquire Now</Link>
      </div>
    </>
  );
}
