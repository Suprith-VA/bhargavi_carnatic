'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Static local gallery images (always shown)
const staticImages = Array.from({ length: 23 }, (_, i) => ({
  id: `local-${i + 1}`,
  src: `/gallery/gallery-${i + 1}.png`,
  alt: `Carnatic music class photo ${i + 1}, Bhargavi Bhadri`,
  isLocal: true,
}));

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [cloudinaryImages, setCloudinaryImages] = useState([]);

  useEffect(() => {
    // Fetch Cloudinary images (uploaded via admin)
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data) => {
        if (data.images && data.images.length > 0) {
          setCloudinaryImages(data.images);
        }
      })
      .catch(() => {}); // silently fail - static images always show
  }, []);

  const allImages = [...cloudinaryImages, ...staticImages];

  const openLightbox = (idx) => {
    setLightboxIdx(idx);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };
  const prev = useCallback(() => {
    setLightboxIdx((i) => (i - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);
  const next = useCallback(() => {
    setLightboxIdx((i) => (i + 1) % allImages.length);
  }, [allImages.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, prev, next]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section
          style={{
            background: 'linear-gradient(160deg, var(--color-cream) 0%, var(--color-cream-dark) 100%)',
            padding: '7rem 1.5rem 3rem',
            textAlign: 'center',
            borderBottom: '1px solid var(--color-border-light)',
          }}
          aria-label="Gallery header"
        >
          <div className="section-badge">Photo Gallery</div>
          <h1 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            Life at Bhargavi Bhadri's Music Classes
          </h1>
          <p style={{ maxWidth: '580px', margin: '0 auto 2rem', fontSize: '1.05rem', color: 'var(--color-text-muted)' }}>
            Moments of learning, joy, and celebration from our Carnatic music classes in Bengaluru and online sessions with students worldwide.
          </p>
          <Link href="/#contact" className="btn btn-primary" id="gallery-enroll-btn">
            Join Our Classes →
          </Link>
        </section>

        {/* Gallery grid */}
        <section
          style={{ background: 'var(--color-white)', padding: '4rem 1.5rem' }}
          aria-label="Photo gallery of Carnatic music classes"
        >
          <div className="container">
            <div className="gallery-grid">
              {allImages.map((img, idx) => (
                <div
                  key={img.id}
                  className="gallery-item"
                  onClick={() => openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo ${idx + 1} of ${allImages.length}: ${img.alt}`}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-icon" aria-hidden="true">🔍</span>
                  </div>
                </div>
              ))}
            </div>

            {cloudinaryImages.length === 0 && (
              <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                More photos added regularly by our teacher.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--color-amber), var(--color-amber-dark))',
            padding: '4rem 1.5rem',
            textAlign: 'center',
          }}
          aria-label="Enroll call to action"
        >
          <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>
            Be Part of Our Musical Family
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Join our growing community of music lovers, enroll today and start your Carnatic journey.
          </p>
          <a href="tel:+919731891537" className="btn" style={{ background: 'var(--color-white)', color: 'var(--color-amber-dark)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} id="gallery-cta-call-btn">
            <Phone size={16} />
            <span>Call to Enroll</span>
          </a>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${lightboxIdx + 1} of ${allImages.length}`}
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <Image
            src={allImages[lightboxIdx].src}
            alt={allImages[lightboxIdx].alt}
            width={1200}
            height={900}
            className="lightbox-img"
            priority
          />
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">✕</button>
          <button className="lightbox-nav prev" onClick={prev} aria-label="Previous photo">‹</button>
          <button className="lightbox-nav next" onClick={next} aria-label="Next photo">›</button>
          <span className="lightbox-counter">{lightboxIdx + 1} / {allImages.length}</span>
        </div>
      )}

      <Footer />
    </>
  );
}
