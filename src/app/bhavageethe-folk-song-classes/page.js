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

const PATH = '/bhavageethe-folk-song-classes';
const DESCRIPTION =
  'Bhavageethe (Kannada light music) and Janapada geethe (folk song) classes for kids and adults with Bhargavi Bhadri. Songs of Kuvempu, Bendre, K.S. Narasimhaswamy and more. KR Puram, Bengaluru and online.';
const WHATSAPP_MESSAGE = 'Hi Bhargavi, I would like to learn Bhavageethe / Janapada songs. Please share the class timings and fees.';

export const metadata = pageMetadata({
  title: 'Bhavageethe & Folk Song Classes in Bengaluru',
  description: DESCRIPTION,
  path: PATH,
});

const FAQS = [
  {
    q: 'What is Bhavageethe?',
    a: 'Bhavageethe is Kannada light music (sugama sangeetha): poems by Kannada poets such as Kuvempu, D.R. Bendre, K.S. Narasimhaswamy, G.S. Shivarudrappa and D.V. Gundappa, set to melodies that bring out the feeling (bhava) of the words.',
  },
  {
    q: 'Do I need to know Kannada to learn Bhavageethe?',
    a: 'Fluency is not required. Many students learn Kannada songs while still learning the language; understanding the meaning and pronouncing each line correctly is part of learning every song.',
  },
  {
    q: 'Should my child learn Carnatic music before Bhavageethe?',
    a: 'It is not compulsory, but a Carnatic foundation helps a lot with pitch, breath control and expression. Many students learn both together.',
  },
  {
    q: 'Can my child prepare for school competitions?',
    a: 'Yes. Bhavageethe and Janapada geethe are popular categories at school competitions such as Pratibha Karanji and at cultural fests. Mention the event and date when you enquire.',
  },
  {
    q: 'Are these classes available online?',
    a: 'Yes. Kannadiga families across India and abroad learn Bhavageethe and folk songs through live online classes.',
  },
];

export default function BhavageetheClassesPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: 'Bhavageethe & Janapada Geethe Classes', description: DESCRIPTION, path: PATH, areaServed: ['Bengaluru', 'Karnataka', 'Worldwide (online)'] })} />
      <Navbar />
      <main>
        <PageHero
          breadcrumb={[{ name: 'Bhavageethe & Folk Song Classes', path: PATH }]}
          eyebrow="ಭಾವಗೀತೆ · ಜಾನಪದ ಗೀತೆ · Kannada Light Music"
          title={<><em>Bhavageethe</em> &amp; Kannada Folk Song Classes</>}
          lead="Learn to sing the beloved poems of Kuvempu, Bendre and K.S. Narasimhaswamy, and the lively Janapada songs of Karnataka, with Bhargavi Bhadri. Classes for children and adults in KR Puram, Bengaluru and online."
          image={galleryImage(1).src}
          imageAlt={galleryImage(1).alt}
          whatsappMessage={WHATSAPP_MESSAGE}
          idPrefix="bhavageethe"
        />

        <section className="content-section" aria-label="About Bhavageethe">
          <div className="container">
            <div className="content-grid">
              <div className="prose">
                <div className="section-badge">Bhavageethe</div>
                <h2>Kannada Poetry, Set to Music</h2>
                <p>
                  Bhavageethe, literally &quot;songs of feeling&quot;, is the Kannada tradition of setting great poetry to melody. Composers such as Mysore Ananthaswamy and C. Ashwath made the poems of Kuvempu, D.R. Bendre, K.S. Narasimhaswamy, G.S. Shivarudrappa and D.V. Gundappa loved in homes across Karnataka.
                </p>
                <p>
                  Singing Bhavageethe well is about more than the tune. Students learn to:
                </p>
                <ul>
                  <li><strong>Understand the poem:</strong> the meaning of each line, so the emotion comes through.</li>
                  <li><strong>Pronounce Kannada clearly:</strong> every syllable, including the long and short vowels.</li>
                  <li><strong>Sing in tune and in rhythm:</strong> with the shruti and with expressive phrasing.</li>
                  <li><strong>Present on stage:</strong> confidence for school events, competitions and cultural programmes.</li>
                </ul>
              </div>
              <div>
                <div className="side-image">
                  <Image src={galleryImage(17).src} alt={galleryImage(17).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt" aria-label="About Janapada geethe">
          <div className="container">
            <div className="content-grid reverse">
              <div>
                <div className="side-image">
                  <Image src={galleryImage(20).src} alt={galleryImage(20).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="prose">
                <div className="section-badge">Janapada Geethe</div>
                <h2>Folk Songs of Karnataka</h2>
                <p>
                  Janapada geethe are the folk songs of rural Karnataka: songs of the harvest, festivals, weddings, lullabies and daily village life, passed down by ear for generations. Their simple, rhythmic tunes make them a joy for children and a favourite at cultural events.
                </p>
                <p>
                  Bhavageethe and Janapada geethe are popular categories at school competitions such as Pratibha Karanji, at Kannada Rajyotsava celebrations, and at community events organised by Kannada associations abroad.
                </p>
                <p lang="kn">
                  ಬೆಂಗಳೂರಿನ ಕೆ.ಆರ್. ಪುರಂನಲ್ಲಿ ಮತ್ತು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಮಕ್ಕಳಿಗೆ ಮತ್ತು ದೊಡ್ಡವರಿಗೆ ಭಾವಗೀತೆ, ಜಾನಪದ ಗೀತೆ, ದೇವರನಾಮ ಮತ್ತು ಕರ್ನಾಟಕ ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತ ತರಗತಿಗಳು. ವಿವರಗಳಿಗೆ ವಾಟ್ಸಾಪ್ ಮಾಡಿ.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" aria-label="Who these classes are for">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Who It&apos;s For</div>
              <h2>Who Joins These Classes</h2>
            </div>
            <div className="info-cards">
              <div className="info-card">
                <h3>Children</h3>
                <p>Kids preparing for school events and competitions, or simply learning songs in their mother tongue. <Link href="/carnatic-music-classes-for-kids">Classes for kids</Link>.</p>
              </div>
              <div className="info-card">
                <h3>Adults</h3>
                <p>Adults who grew up hearing Bhavageethe on the radio and want to finally sing these songs themselves.</p>
              </div>
              <div className="info-card">
                <h3>Kannadigas Abroad</h3>
                <p>Families in the USA, UAE, Australia and Europe keeping Kannada alive at home. <Link href="/online-carnatic-music-classes">Online classes</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={FAQS} title="Bhavageethe Classes: Common Questions" background="cream" />

        <EnquirySection
          title="Enquire About Bhavageethe & Folk Classes"
          intro="Tell us who is learning and whether there is a competition or event coming up. Bhargavi will reply on WhatsApp with timings and fees."
          interest="bhavageethe"
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <RelatedPrograms current={PATH.slice(1)} />
      </main>
      <Footer />
    </>
  );
}
