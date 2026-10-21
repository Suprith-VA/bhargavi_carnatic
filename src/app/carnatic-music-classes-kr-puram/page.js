import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import EnquirySection from '@/components/EnquirySection';
import RelatedPrograms from '@/components/RelatedPrograms';
import JsonLd from '@/components/JsonLd';
import { serviceSchema } from '@/lib/schema';
import { galleryImage } from '@/lib/gallery';
import {
  pageMetadata,
  ADDRESS_LINES,
  HOURS,
  SERVICE_AREAS,
  MAP_EMBED_URL,
  DIRECTIONS_URL,
  GOOGLE_REVIEWS_URL,
} from '@/lib/site';

const PATH = '/carnatic-music-classes-kr-puram';
const DESCRIPTION =
  'In-person Carnatic music classes on Kodigehalli Main Road, Ayyappa Nagar, KR Puram, Bengaluru, close to TC Palya, Hoodi, Medahalli, Whitefield, Kadugodi and Mahadevapura. Kids & adults, group & one-on-one, weekday evenings.';
const WHATSAPP_MESSAGE = 'Hi Bhargavi, I am looking for in-person Carnatic music classes near KR Puram / Hoodi. Please share the batch timings and fees.';

export const metadata = pageMetadata({
  title: 'Carnatic Music Classes in KR Puram, Ayyappa Nagar & Hoodi',
  description: DESCRIPTION,
  path: PATH,
  absoluteTitle: true,
});

const FAQS = [
  {
    q: 'Where exactly are the classes held?',
    a: `Classes are held at ${ADDRESS_LINES.join(', ')}. The Google Maps listing is "Carnatic Music Classes by Bhargavi Bhadri", and the Get directions link on this page opens turn-by-turn directions.`,
  },
  {
    q: 'What are the class timings?',
    a: `In-person classes run ${HOURS.days}, 3:00 PM to 8:30 PM, which fits after school and after work. Batches are grouped by age and level; message on WhatsApp for current openings.`,
  },
  {
    q: 'Which areas do students come from?',
    a: `Students come from ${SERVICE_AREAS.slice(0, -1).join(', ')} and ${SERVICE_AREAS[SERVICE_AREAS.length - 1]}, as well as other parts of East Bengaluru.`,
  },
  {
    q: 'I live in Whitefield or Mahadevapura. Is there an option without travelling?',
    a: 'Yes. If travel on weekday evenings is difficult, you can take live online classes with the same teacher and syllabus, and switch to in-person classes whenever it suits you.',
  },
  {
    q: 'Do you teach adults in person?',
    a: 'Yes. Adult beginners and returning learners are welcome in person, in group batches or one-on-one.',
  },
];

export default function LocalClassesPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: 'Carnatic Music Classes in KR Puram, Bengaluru', description: DESCRIPTION, path: PATH, areaServed: SERVICE_AREAS.map((a) => `${a}, Bengaluru`) })} />
      <Navbar />
      <main>
        <PageHero
          breadcrumb={[{ name: 'Classes in KR Puram & Ayyappa Nagar', path: PATH }]}
          eyebrow="In-Person Classes · East Bengaluru"
          title={<><em>Music Classes</em> in Ayyappa Nagar, KR Puram, Hoodi &amp; TC Palya</>}
          lead="In-person Carnatic vocal classes for children and adults on Kodigehalli Main Road, Ayyappa Nagar, Krishnarajapuram, a short drive from TC Palya, Hoodi, Medahalli, Whitefield, Kadugodi and Mahadevapura. Taught by Bhargavi Bhadri since 2016."
          image={galleryImage(7).src}
          imageAlt={galleryImage(7).alt}
          whatsappMessage={WHATSAPP_MESSAGE}
          idPrefix="local"
        />

        <section className="content-section" aria-label="Class location and timings">
          <div className="container">
            <div className="content-grid">
              <div className="prose">
                <div className="section-badge">Location &amp; Timings</div>
                <h2>Where and When Classes Happen</h2>
                <ul className="enquiry-contacts" style={{ margin: '0 0 1.5rem' }}>
                  <li>
                    <span className="contact-icon" aria-hidden="true"><MapPin size={20} /></span>
                    <div>
                      <strong>Address</strong>
                      <span>{ADDRESS_LINES.join(', ')}</span>
                      <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" id="local-directions">Get directions on Google Maps ↗</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon" aria-hidden="true"><Clock size={20} /></span>
                    <div>
                      <strong>Class hours</strong>
                      <span>{HOURS.display}</span>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon" aria-hidden="true"><Star size={20} /></span>
                    <div>
                      <strong>Rated 5.0 on Google</strong>
                      <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Read reviews from local parents ↗</a>
                    </div>
                  </li>
                </ul>
                <p>
                  Weekday afternoon and evening batches mean children can come straight after school, and working adults can join after office hours.
                </p>
              </div>
              <div>
                <iframe
                  className="map-embed"
                  src={MAP_EMBED_URL}
                  title="Map: Carnatic Music Classes by Bhargavi Bhadri, KR Puram"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt" aria-label="Areas served">
          <div className="container">
            <div className="content-grid reverse">
              <div>
                <div className="side-image">
                  <Image src={galleryImage(22).src} alt={galleryImage(22).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="prose">
                <div className="section-badge">Neighbourhoods</div>
                <h2>Students From Across East Bengaluru</h2>
                <p>
                  Families from these neighbourhoods learn Carnatic music with Bhargavi Bhadri:
                </p>
                <div className="service-area-tags" style={{ marginBottom: '1.25rem' }}>
                  {SERVICE_AREAS.map((area) => (
                    <span key={area} className="service-area-tag">{area}</span>
                  ))}
                </div>
                <p>
                  The class is on Kodigehalli Main Road in Ayyappa Nagar, near Hoodi, making it convenient for families in the Whitefield and KR Puram belt who would rather not travel into the city for good classical training.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" aria-label="What is taught">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Programs</div>
              <h2>What You Can Learn In Person</h2>
            </div>
            <div className="info-cards">
              <div className="info-card">
                <h3>Junior Carnatic</h3>
                <p>Varisais, alankaras, geethams and swarajathis for beginners. <Link href="/carnatic-music-classes-for-kids">Classes for kids</Link>.</p>
              </div>
              <div className="info-card">
                <h3>Senior Carnatic &amp; Exams</h3>
                <p>Varnams, kritis, ragas, manodharma and grade exam coaching. <Link href="/carnatic-music-exam-preparation">Exam preparation</Link>.</p>
              </div>
              <div className="info-card">
                <h3>Devotional, Bhavageethe &amp; Folk</h3>
                <p>Bhajans, devaranamas, shlokas, Kannada light music and Janapada songs. <Link href="/devotional-songs-bhajan-classes">Devotional</Link> · <Link href="/bhavageethe-folk-song-classes">Bhavageethe</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt" aria-label="Why learn in person">
          <div className="container">
            <div className="prose" style={{ maxWidth: '820px', margin: '0 auto' }}>
              <div className="section-badge">In Person</div>
              <h2>Why Learn Carnatic Music In Person</h2>
              <ul>
                <li><strong>Hands-on correction:</strong> posture, breathing, tala hand gestures and voice are corrected face to face.</li>
                <li><strong>Singing together:</strong> group batches build rhythm, listening and stage confidence.</li>
                <li><strong>Community:</strong> children make friends who share their interest, and take part in programmes and festivals together.</li>
                <li><strong>Routine:</strong> a fixed weekly class near home makes regular practice a habit.</li>
              </ul>
              <p>
                Prefer to learn from home? The same syllabus is also taught through <Link href="/online-carnatic-music-classes">live online classes</Link>.
              </p>
            </div>
          </div>
        </section>

        <FAQ faqs={FAQS} title="Local Classes: Common Questions" />

        <EnquirySection
          title="Enquire About In-Person Classes"
          intro="Share the student's age and the area you live in. Bhargavi will reply on WhatsApp with the batch timings and fees."
          interest="junior"
          mode="offline"
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <RelatedPrograms current={PATH.slice(1)} />
      </main>
      <Footer />
    </>
  );
}
