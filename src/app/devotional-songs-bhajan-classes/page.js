import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import EnquirySection from '@/components/EnquirySection';
import RelatedPrograms from '@/components/RelatedPrograms';
import JsonLd from '@/components/JsonLd';
import { serviceSchema } from '@/lib/schema';
import { galleryImage } from '@/lib/gallery';
import { pageMetadata } from '@/lib/site';

const PATH = '/devotional-songs-bhajan-classes';
const DESCRIPTION =
  'Learn bhajans, devaranamas, keerthanas, shlokas and prayer songs in Kannada, Sanskrit, Telugu and Tamil with Bhargavi Bhadri. Classes for kids, adults and seniors in KR Puram, Bengaluru and online.';
const WHATSAPP_MESSAGE = 'Hi Bhargavi, I would like to learn devotional songs / bhajans. Please share the class timings and fees.';

export const metadata = pageMetadata({
  title: 'Bhajan & Devotional Song Classes in Bengaluru',
  description: DESCRIPTION,
  path: PATH,
});

const FAQS = [
  {
    q: 'Do I need to know Carnatic music to learn bhajans?',
    a: 'No. Devotional songs can be learnt from scratch. Students who also learn basic Carnatic exercises find their pitch and breath control improve faster, but it is not required.',
  },
  {
    q: 'Which languages are the songs in?',
    a: 'Songs are taught in Kannada, Sanskrit, Telugu and Tamil, including devaranamas, keerthanas, bhajans, shlokas and namavalis.',
  },
  {
    q: 'Can I ask to learn a particular song?',
    a: 'Yes. When you enquire, mention any songs you want to learn for a festival, puja or family function, along with the occasion and date if there is one.',
  },
  {
    q: 'Are devotional song classes available for children?',
    a: 'Yes. Children learn shlokas, simple bhajans and prayer songs, which they can sing at home, in school assemblies and at cultural events.',
  },
  {
    q: 'Can seniors or groups join?',
    a: 'Yes. Devotional classes suit adults and seniors who want to sing at satsangs, temples and bhajan groups. Ask about group sessions if you are a group of friends or a community group wanting to learn together.',
  },
];

export default function DevotionalClassesPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: 'Devotional Songs & Bhajan Classes', description: DESCRIPTION, path: PATH, areaServed: ['Bengaluru', 'Worldwide (online)'] })} />
      <Navbar />
      <main>
        <PageHero
          breadcrumb={[{ name: 'Devotional Songs & Bhajan Classes', path: PATH }]}
          eyebrow="Bhakti Geethe · Kids, Adults & Seniors"
          title={<><em>Devotional Songs</em> &amp; Bhajan Classes</>}
          lead="Learn to sing bhajans, devaranamas, keerthanas, shlokas and prayer songs with correct pitch, rhythm and pronunciation. Classes with Bhargavi Bhadri in KR Puram, Bengaluru and online, for children, adults and seniors."
          image={galleryImage(11).src}
          imageAlt={galleryImage(11).alt}
          whatsappMessage={WHATSAPP_MESSAGE}
          idPrefix="devotional"
        />

        <section className="content-section" aria-label="What you will learn">
          <div className="container">
            <div className="content-grid">
              <div className="prose">
                <div className="section-badge">Repertoire</div>
                <h2>What You Can Learn</h2>
                <ul>
                  <li><strong>Bhajans and namavalis:</strong> simple, joyful songs for daily prayer, satsangs and group singing.</li>
                  <li><strong>Devaranamas:</strong> Kannada compositions of the Haridasas such as Purandara Dasa and Kanaka Dasa.</li>
                  <li><strong>Keerthanas:</strong> devotional compositions in Telugu, Tamil, Kannada and Sanskrit, set in Carnatic ragas.</li>
                  <li><strong>Shlokas and stotras:</strong> Sanskrit verses with clear pronunciation and steady rhythm.</li>
                  <li><strong>Prayer songs (Prarthana Geethe):</strong> morning prayers, school assembly songs and patriotic songs.</li>
                  <li><strong>Songs for festivals and pujas:</strong> learn songs for family functions and festival celebrations.</li>
                </ul>
              </div>
              <div>
                <div className="side-image">
                  <Image src={galleryImage(10).src} alt={galleryImage(10).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt" aria-label="Why learn with a Carnatic teacher">
          <div className="container">
            <div className="prose" style={{ maxWidth: '820px', margin: '0 auto' }}>
              <div className="section-badge">The Difference</div>
              <h2>Why Learn Devotional Songs From a Carnatic Teacher</h2>
              <p>
                Most devotional compositions are set in Carnatic ragas and talas. Learning them from a trained Carnatic teacher means you sing them the way they were composed: in tune with the shruti, in the correct raga, with the right rhythm and with clear pronunciation of every word.
              </p>
              <p>
                Bhargavi Bhadri has taught Carnatic vocal music since 2016, and devotional songs are a core part of her classes for students of every age. Students who enjoy these songs often go on to the full <Link href="/carnatic-music-classes-for-kids">Carnatic syllabus</Link>, and Kannada speakers often add <Link href="/bhavageethe-folk-song-classes">Bhavageethe</Link> as well.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section" aria-label="Class formats">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Class Formats</div>
              <h2>Ways to Learn</h2>
            </div>
            <div className="info-cards">
              <div className="info-card">
                <h3>In Person</h3>
                <p>Weekday afternoon and evening classes on Kodigehalli Main Road, KR Puram. <Link href="/carnatic-music-classes-kr-puram">Location &amp; timings</Link>.</p>
              </div>
              <div className="info-card">
                <h3>Online</h3>
                <p>Live classes over video call for students across India and abroad, timed to your time zone. <Link href="/online-carnatic-music-classes">Online classes</Link>.</p>
              </div>
              <div className="info-card">
                <h3>Groups &amp; One-on-One</h3>
                <p>Learn individually, or ask about group sessions for friends, family members or a bhajan group.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={FAQS} title="Devotional Classes: Common Questions" background="cream" />

        <EnquirySection
          title="Enquire About Devotional Song Classes"
          intro="Tell us who is learning and any songs or occasions you have in mind. Bhargavi will reply on WhatsApp with timings and fees."
          interest="devotional"
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <RelatedPrograms current={PATH.slice(1)} />
      </main>
      <Footer />
    </>
  );
}
