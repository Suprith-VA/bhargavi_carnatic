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
import { pageMetadata, HOURS } from '@/lib/site';

const PATH = '/carnatic-music-classes-for-kids';
const DESCRIPTION =
  'Carnatic vocal classes for children with Bhargavi Bhadri. Small group and one-on-one batches near Hoodi, KR Puram & Whitefield, Bengaluru, plus live online classes. Junior syllabus, exams and stage performances.';
const WHATSAPP_MESSAGE = 'Hi Bhargavi, I would like to know about Carnatic music classes for my child. Please share the batch timings and fees.';

export const metadata = pageMetadata({
  title: 'Carnatic Music Classes for Kids in Bengaluru',
  description: DESCRIPTION,
  path: PATH,
});

const FAQS = [
  {
    q: 'What is the right age for a child to start Carnatic music?',
    a: 'Many children start around 5 or 6, once they can sit through a short class and repeat a simple phrase. Older children pick up the basics quickly too, so it is never too late to begin.',
  },
  {
    q: 'My child has never learnt music. Can they join?',
    a: 'Yes. Most children join as complete beginners. The junior syllabus starts from the very first swaras (Sa Ri Ga Ma) and builds step by step.',
  },
  {
    q: 'How much should my child practise at home?',
    a: 'Short, regular practice works best for children: 10 to 15 minutes a day of the lesson taught in class, sung with a shruti (drone) from a phone app, is far more useful than one long session a week.',
  },
  {
    q: 'When are the in-person classes for kids?',
    a: `In-person batches run ${HOURS.days}, ${HOURS.time}, with after-school and Saturday slots, at Kodigehalli Main Road, Ayyappa Nagar, KR Puram. Message on WhatsApp for the batch that suits your child's age and school timings.`,
  },
  {
    q: 'Can my child learn online?',
    a: 'Yes. Children from Bengaluru, other Indian cities and abroad learn over live video call. One-on-one online classes work especially well for younger children, as every minute of the class is focused on them.',
  },
  {
    q: 'Will my child get to perform or take exams?',
    a: 'Students sing at cultural programmes and many go on to take junior and senior grade music exams, including Pracheen Kala Kendra exams. Exams are optional; children can also simply learn for joy.',
  },
];

export default function KidsClassesPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: 'Carnatic Music Classes for Kids', description: DESCRIPTION, path: PATH, areaServed: ['Bengaluru', 'Worldwide (online)'] })} />
      <Navbar />
      <main>
        <PageHero
          breadcrumb={[{ name: 'Carnatic Music Classes for Kids', path: PATH }]}
          eyebrow="Junior Syllabus · In-person in Bengaluru · Online"
          title={<><em>Carnatic Music</em> Classes for Kids</>}
          lead="Patient, structured Carnatic vocal classes for children with Bhargavi Bhadri, who has trained 4,000+ students since 2016. Your child builds a strong musical foundation, sings with correct pitch and rhythm, and gains the confidence to perform on stage."
          image={galleryImage(5).src}
          imageAlt={galleryImage(5).alt}
          whatsappMessage={WHATSAPP_MESSAGE}
          idPrefix="kids"
        />

        <section className="content-section" aria-label="Why Carnatic music for children">
          <div className="container">
            <div className="content-grid">
              <div className="prose">
                <div className="section-badge">For Parents</div>
                <h2>Why Carnatic Music Is So Good for Children</h2>
                <p>
                  Carnatic music is one of the most complete musical trainings a child can have. Every lesson exercises the ear, the voice and the memory together, and the rhythm work (keeping tala with the hands while singing) builds real concentration.
                </p>
                <ul>
                  <li><strong>Ear training:</strong> children learn to hear and match pitch (shruti) accurately, a skill that helps with any kind of music later.</li>
                  <li><strong>Focus and memory:</strong> varisais, geethams and songs are learnt by listening and repeating, which strengthens attention span.</li>
                  <li><strong>Confidence:</strong> singing in a group and later solo on stage helps shy children open up.</li>
                  <li><strong>Culture and language:</strong> songs in Kannada, Sanskrit, Telugu and Tamil connect children to festivals, stories and their roots.</li>
                </ul>
                <p>
                  Classes are kept warm and encouraging, so children look forward to them, while still following the proper traditional syllabus.
                </p>
              </div>
              <div>
                <div className="side-image">
                  <Image src={galleryImage(16).src} alt={galleryImage(16).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
                <p className="side-caption">A beginner batch in session</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt" aria-label="What your child will learn">
          <div className="container">
            <div className="content-grid reverse">
              <div>
                <div className="side-image">
                  <Image src={galleryImage(9).src} alt={galleryImage(9).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="prose">
                <div className="section-badge">Junior Syllabus</div>
                <h2>What Your Child Will Learn</h2>
                <p>Children follow the traditional Carnatic learning path, the same foundation every serious Carnatic musician starts with:</p>
                <ol className="steps">
                  <li><strong>Sarali and Janti Varisai:</strong> the first swara exercises that set pitch, voice and rhythm.</li>
                  <li><strong>Dhatu Varisai and Hechchu Sthayi:</strong> wider jumps between notes and singing in the upper octave.</li>
                  <li><strong>Alankaras:</strong> patterns in the seven basic talas, which train rhythm and counting.</li>
                  <li><strong>Geethams:</strong> the first real songs, such as the Malahari geethams of Purandara Dasa (for example, <em>Lambodara Lakumikara</em>).</li>
                  <li><strong>Swarajathis and devotional songs:</strong> longer compositions plus bhajans and shlokas children can sing at home and at functions.</li>
                </ol>
                <p>
                  Once the junior portion is strong, students move to the <Link href="/carnatic-music-exam-preparation">senior syllabus</Link>: varnams, kritis, ragas and manodharma.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" aria-label="How classes work">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">How It Works</div>
              <h2>Class Options for Your Child</h2>
              <p>Pick the format that suits your child&apos;s age, personality and your family&apos;s schedule.</p>
            </div>
            <div className="info-cards">
              <div className="info-card">
                <h3>Small Group Batches</h3>
                <p>Children learn together in age-appropriate groups. Singing with friends builds rhythm, confidence and a love for class. Held in person near Hoodi and KR Puram.</p>
              </div>
              <div className="info-card">
                <h3>One-on-One Lessons</h3>
                <p>Full attention on your child&apos;s voice and pace. Ideal for very young children, shy learners, or students preparing for exams and performances.</p>
              </div>
              <div className="info-card">
                <h3>Live Online Classes</h3>
                <p>For families outside Bengaluru or abroad. Your child learns live over video call at a time that fits your time zone. <Link href="/online-carnatic-music-classes">How online classes work</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section alt" aria-label="Performances and exams">
          <div className="container">
            <div className="content-grid">
              <div className="prose">
                <div className="section-badge">Beyond the Classroom</div>
                <h2>Performances, Exams and Milestones</h2>
                <p>
                  Students get the chance to sing at cultural programmes, often in traditional attire on a real stage, which is a proud moment for children and parents alike.
                </p>
                <p>
                  Children who want a formal goal can work towards junior and senior grade music examinations. Students have taken Pracheen Kala Kendra exams and received their marks cards, with theory and practical coaching given in class. See the <Link href="/carnatic-music-exam-preparation">exam preparation</Link> page for details.
                </p>
                <h3>Tips for parents</h3>
                <ul>
                  <li>Install a free shruti or tanpura app and play it during home practice.</li>
                  <li>Keep practice short and daily rather than long and occasional.</li>
                  <li>Play Carnatic and devotional music at home so your child absorbs the sound naturally.</li>
                </ul>
              </div>
              <div>
                <div className="side-image">
                  <Image src={galleryImage(23).src} alt={galleryImage(23).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
                <p className="side-caption">Students with their music exam marks cards</p>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={FAQS} title="Questions Parents Ask" />

        <EnquirySection
          title="Enquire About Classes for Your Child"
          intro="Share your child's age and whether you prefer in-person or online classes. Bhargavi will reply on WhatsApp with suitable batch timings and fees."
          interest="junior"
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <RelatedPrograms current={PATH.slice(1)} />
      </main>
      <Footer />
    </>
  );
}
