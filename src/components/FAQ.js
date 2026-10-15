import JsonLd from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';

export default function FAQ({ faqs, title = 'Frequently Asked Questions', intro, id = 'faq', background = 'white' }) {
  return (
    <section className={`faq faq-${background}`} id={id} aria-label={title}>
      <JsonLd data={faqSchema(faqs)} />
      <div className="container">
        <div className="section-header">
          <div className="section-badge">FAQ</div>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
