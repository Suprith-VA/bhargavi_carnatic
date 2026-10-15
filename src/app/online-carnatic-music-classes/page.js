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

const PATH = '/online-carnatic-music-classes';
const DESCRIPTION =
  'Live online Carnatic vocal classes for kids and adults with Bhargavi Bhadri, Bengaluru. One-on-one and small-group lessons for students in the USA, Canada, UK, Europe, Dubai/UAE, Singapore and Australia, timed to your time zone.';
const WHATSAPP_MESSAGE = 'Hi Bhargavi, I am interested in online Carnatic music classes. I am based in ___. Please share the timings and fees.';

export const metadata = pageMetadata({
  title: 'Online Carnatic Music Classes for Kids & Adults',
  description: DESCRIPTION,
  path: PATH,
});

const TIME_ZONES = [
  ['USA & Canada (Eastern)', '9½–10½ hours behind', 'Your evening is India\u2019s early morning; your morning is India\u2019s evening'],
  ['USA (Pacific)', '12½–13½ hours behind', 'Your evening is India\u2019s morning'],
  ['United Kingdom', '4½–5½ hours behind', 'Your morning and early afternoon is India\u2019s afternoon and evening'],
  ['Europe (Central)', '3½–4½ hours behind', 'Your afternoon is India\u2019s evening'],
  ['Dubai / UAE', '1½ hours behind', 'Your after-school hours are India\u2019s evening'],
  ['Singapore', '2½ hours ahead', 'Your after-school hours are India\u2019s afternoon'],
  ['Australia (Sydney / Melbourne)', '4½–5½ hours ahead', 'Your afternoon and evening is India\u2019s late morning and afternoon'],
];

const FAQS = [
  {
    q: 'Does Carnatic music really work well online?',
    a: 'Yes. Carnatic music has always been taught by listening and repeating, which works well over a live video call. The teacher hears every phrase you sing and corrects pitch, rhythm and pronunciation in real time. A stable internet connection and a quiet room make the biggest difference.',
  },
  {
    q: 'How are class timings fixed for my time zone?',
    a: 'When you enquire, share your city and preferred days. Bhargavi will suggest slots that fall in your child’s after-school hours or your evenings and weekends wherever possible.',
  },
  {
    q: 'What do I need for online classes?',
    a: 'A laptop, tablet or phone with a camera, a reliable internet connection, and a quiet space. A free shruti or tanpura app on your phone is enough for practice; you do not need to buy an instrument to start.',
  },
  {
    q: 'Are online classes one-on-one or in groups?',
    a: 'Both options are available. One-on-one lessons give the most attention and the most flexible timing; small groups suit students at a similar level and time zone.',
  },
  {
    q: 'Can adults learn Carnatic music online?',
    a: 'Absolutely. Many adults learn online, including complete beginners and people returning to music after years. Classes go at your pace.',
  },
  {
    q: 'Can online students learn devotional songs and Bhavageethe too?',
    a: 'Yes. Along with the Carnatic syllabus, online students can learn bhajans, devaranamas, shlokas, Bhavageethe and Kannada folk songs, which many families abroad want for festivals and community events.',
  },
];

export default function OnlineClassesPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: 'Online Carnatic Music Classes', description: DESCRIPTION, path: PATH, areaServed: ['United States', 'Canada', 'United Kingdom', 'Europe', 'United Arab Emirates', 'Singapore', 'Australia', 'India'] })} />
      <Navbar />
      <main>
        <PageHero
          breadcrumb={[{ name: 'Online Carnatic Music Classes', path: PATH }]}
          eyebrow="Live Video Classes · Kids & Adults · Worldwide"
          title={<>Online <em>Carnatic Music</em> Classes, Live from Bengaluru</>}
          lead="Learn Carnatic vocal music with Bhargavi Bhadri from anywhere in the world. Students in the USA, Canada, Europe, Dubai, Singapore and Australia join live one-on-one and small-group classes, scheduled around their time zone."
          image={galleryImage(19).src}
          imageAlt={galleryImage(19).alt}
          whatsappMessage={WHATSAPP_MESSAGE}
          idPrefix="online"
        />

        <section className="content-section" aria-label="Why learn online with Bhargavi Bhadri">
          <div className="container">
            <div className="content-grid">
              <div className="prose">
                <div className="section-badge">Why Online</div>
                <h2>A Traditional Bengaluru Teacher, Wherever You Live</h2>
                <p>
                  For families living abroad, finding a good Carnatic teacher nearby is hard. Online classes give your child the same structured, traditional training taught in Bengaluru, with a teacher who has trained over 4,000 students since 2016.
                </p>
                <p>
                  Many families abroad want their children to stay connected to Indian music, language and festivals. Carnatic lessons, bhajans and Kannada songs do exactly that, while building a genuine musical skill.
                </p>
                <ul>
                  <li><strong>Live, not recorded:</strong> every class is a real-time lesson with correction on the spot.</li>
                  <li><strong>Proper syllabus:</strong> the same junior and senior Carnatic path as in-person students.</li>
                  <li><strong>Flexible timing:</strong> slots arranged around school hours and your time zone.</li>
                  <li><strong>All ages:</strong> young children, teenagers and adult beginners.</li>
                </ul>
              </div>
              <div>
                <div className="side-image">
                  <Image src={galleryImage(4).src} alt={galleryImage(4).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt" aria-label="Time zones">
          <div className="container">
            <div className="prose" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="section-badge">Time Zones</div>
              <h2>How Indian Class Times Fit Your Time Zone</h2>
              <p>
                India Standard Time (IST) is UTC+5:30 and does not change for daylight saving, so the gap below shifts by an hour when your clocks change. Timings are always agreed with you directly.
              </p>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th scope="col">Where you live</th>
                      <th scope="col">Difference from India</th>
                      <th scope="col">What usually works</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TIME_ZONES.map(([region, diff, fit]) => (
                      <tr key={region}>
                        <td><strong>{region}</strong></td>
                        <td>{diff}</td>
                        <td>{fit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" aria-label="How online classes work">
          <div className="container">
            <div className="content-grid reverse">
              <div>
                <div className="side-image">
                  <Image src={galleryImage(13).src} alt={galleryImage(13).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="prose">
                <div className="section-badge">Getting Started</div>
                <h2>How to Start Online Classes</h2>
                <ol className="steps">
                  <li><strong>Send an enquiry</strong> on WhatsApp with the student&apos;s age, your city and what you would like to learn.</li>
                  <li><strong>Agree on a slot</strong> that fits your time zone, and choose one-on-one or a small group.</li>
                  <li><strong>Join the live class</strong> on video call from a laptop, tablet or phone, with a shruti app running for practice.</li>
                  <li><strong>Practise between classes</strong> with the lesson taught, and build up from varisais to songs and kritis.</li>
                </ol>
                <h3>What you can learn online</h3>
                <ul>
                  <li><Link href="/carnatic-music-classes-for-kids">Junior Carnatic syllabus</Link>: varisais, alankaras, geethams, swarajathis</li>
                  <li><Link href="/carnatic-music-exam-preparation">Senior syllabus and exam preparation</Link>: varnams, kritis, ragas, theory</li>
                  <li><Link href="/devotional-songs-bhajan-classes">Devotional songs, bhajans and shlokas</Link></li>
                  <li><Link href="/bhavageethe-folk-song-classes">Bhavageethe and Kannada folk songs</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={FAQS} title="Online Classes: Common Questions" background="cream" />

        <EnquirySection
          title="Enquire About Online Classes"
          intro="Tell us where you live and who will be learning. Bhargavi will reply on WhatsApp with slots that suit your time zone, along with the fees."
          interest="junior"
          mode="online"
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <RelatedPrograms current={PATH.slice(1)} />
      </main>
      <Footer />
    </>
  );
}
