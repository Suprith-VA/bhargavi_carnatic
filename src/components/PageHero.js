import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { WhatsAppIcon } from '@/components/Icons';
import { breadcrumbSchema } from '@/lib/schema';
import { PHONE, whatsappLink } from '@/lib/site';

// Hero for program pages: visible breadcrumb + BreadcrumbList schema, H1, lead and CTAs.
export default function PageHero({ breadcrumb, eyebrow, title, lead, image, imageAlt, whatsappMessage, idPrefix, children }) {
  const crumbs = [{ name: 'Home', path: '/' }, ...breadcrumb];

  return (
    <section className="page-hero" aria-label={breadcrumb[breadcrumb.length - 1].name}>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <div className="page-hero-inner">
        <div className="page-hero-content">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.path}>
                  {i < crumbs.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span>{eyebrow}</span>
          </div>
          <h1>{title}</h1>
          <p className="page-hero-lead">{lead}</p>
          {children}
          <div className="hero-actions">
            <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id={`${idPrefix}-hero-whatsapp`}>
              <WhatsAppIcon size={18} color="#ffffff" />
              <span>Ask Fees &amp; Timings</span>
            </a>
            <a href={`tel:${PHONE}`} className="btn btn-secondary" id={`${idPrefix}-hero-call`}>
              <Phone size={18} />
              <span>Call to Enroll</span>
            </a>
          </div>
        </div>
        <div className="page-hero-image">
          <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 768px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
