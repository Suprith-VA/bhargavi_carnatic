import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROGRAMS } from '@/lib/site';

export default function RelatedPrograms({ current, title = 'Explore Other Classes' }) {
  const programs = PROGRAMS.filter((p) => p.slug !== current);

  return (
    <section className="related-programs" aria-label={title}>
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        <div className="related-grid">
          {programs.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="related-card">
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <span className="related-link">Learn more <ArrowRight size={15} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
