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

const PATH = '/carnatic-music-exam-preparation';
const DESCRIPTION =
  'Coaching for junior and senior grade Carnatic music exams, including Pracheen Kala Kendra exams. Practical and theory preparation, mock tests and stage confidence with Bhargavi Bhadri in KR Puram, Bengaluru and online.';
const WHATSAPP_MESSAGE = 'Hi Bhargavi, I would like to know about Carnatic music exam preparation. Please share the details and fees.';

export const metadata = pageMetadata({
  title: 'Carnatic Music Exam Preparation in Bengaluru',
  description: DESCRIPTION,
  path: PATH,
});

const FAQS = [
  {
    q: 'Which music exams do you prepare students for?',
    a: 'Students are prepared for junior and senior grade Carnatic vocal examinations. Students have taken Pracheen Kala Kendra (Chandigarh) exams. If you are preparing for a specific board, mention it when you enquire.',
  },
  {
    q: 'Is theory taught along with practical?',
    a: 'Yes. Exam preparation covers both: practical singing of the prescribed syllabus and the theory portion, including ragas, talas, musical forms, notation and the lives of composers.',
  },
  {
    q: 'Are there mock exams?',
    a: 'Yes. Students go through mock tests and individual assessments before the exam, so they know what to expect from the examiner and can sing with confidence.',
  },
  {
    q: 'Does my child have to take exams?',
    a: 'No. Exams are optional. Many students learn purely for enjoyment, while others like the structure and certificates that grade exams provide.',
  },
  {
    q: 'Can online students prepare for exams?',
    a: 'Yes, the practical and theory preparation can be done online. Ask about exam centres and registration for your city when you enquire.',
  },
];

export default function ExamPreparationPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: 'Carnatic Music Exam Preparation', description: DESCRIPTION, path: PATH, areaServed: ['Bengaluru', 'Worldwide (online)'] })} />
      <Navbar />
      <main>
        <PageHero
          breadcrumb={[{ name: 'Carnatic Music Exam Preparation', path: PATH }]}
          eyebrow="Junior & Senior Grade · Theory & Practical"
          title={<><em>Carnatic Music</em> Exam Preparation</>}
          lead="Structured coaching for junior and senior grade Carnatic vocal examinations, including Pracheen Kala Kendra exams. Bhargavi Bhadri prepares students in both practical and theory, with mock tests and stage-confidence training before exam day."
          image={galleryImage(23).src}
          imageAlt={galleryImage(23).alt}
          whatsappMessage={WHATSAPP_MESSAGE}
          idPrefix="exam"
        />

        <section className="content-section" aria-label="Practical syllabus">
          <div className="container">
            <div className="content-grid">
              <div className="prose">
                <div className="section-badge">Practical</div>
                <h2>Practical Syllabus Covered</h2>
                <h3>Junior grade</h3>
                <ul>
                  <li>Sarali, Janti and Dhatu Varisai and upper-octave exercises in different speeds</li>
                  <li>Alankaras in the seven basic talas</li>
                  <li>Geethams and Swarajathis</li>
                  <li>Keeping tala correctly with hand gestures while singing</li>
                </ul>
                <h3>Senior grade</h3>
                <ul>
                  <li>Varnams in multiple speeds</li>
                  <li>Kritis of the Carnatic Trinity (Tyagaraja, Muthuswami Dikshitar, Syama Sastri) and other composers</li>
                  <li>Raga recognition and an introduction to manodharma: raga alapana, neraval and kalpanaswara</li>
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

        <section className="content-section alt" aria-label="Theory syllabus">
          <div className="container">
            <div className="prose" style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div className="section-badge">Theory</div>
              <h2>Theory Portion Covered</h2>
              <ul>
                <li><strong>Raga lakshana:</strong> arohana, avarohana and characteristic phrases of prescribed ragas</li>
                <li><strong>The melakarta system:</strong> the 72 parent scales and how ragas are derived from them</li>
                <li><strong>Tala system:</strong> the seven basic talas, the five jathis and the 35-tala scheme</li>
                <li><strong>Musical forms:</strong> geetham, swarajathi, varnam, kriti and their structure</li>
                <li><strong>Composers:</strong> the lives and contributions of Purandara Dasa and the Carnatic Trinity</li>
                <li><strong>Notation:</strong> reading and writing swara notation for the prescribed compositions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section" aria-label="How exam preparation works">
          <div className="container">
            <div className="content-grid reverse">
              <div>
                <div className="side-image">
                  <Image src={galleryImage(3).src} alt={galleryImage(3).alt} fill sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="prose">
                <div className="section-badge">The Process</div>
                <h2>How Preparation Works</h2>
                <ol className="steps">
                  <li><strong>Syllabus check:</strong> confirm the board, grade and prescribed compositions.</li>
                  <li><strong>Practical training:</strong> each composition is learnt and polished to exam standard.</li>
                  <li><strong>Theory sessions:</strong> concepts are explained and revised with written practice.</li>
                  <li><strong>Mock exams:</strong> individual assessments in exam conditions.</li>
                  <li><strong>Exam-day readiness:</strong> confidence, stage etiquette and what examiners look for.</li>
                </ol>
                <p>
                  New to Carnatic music? Start with the <Link href="/carnatic-music-classes-for-kids">junior syllabus classes</Link>; exam preparation builds on that foundation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={FAQS} title="Exam Preparation: Common Questions" background="cream" />

        <EnquirySection
          title="Enquire About Exam Preparation"
          intro="Tell us the student's current level and the exam you are aiming for. Bhargavi will reply on WhatsApp with a plan, timings and fees."
          interest="exam"
          whatsappMessage={WHATSAPP_MESSAGE}
        />

        <RelatedPrograms current={PATH.slice(1)} />
      </main>
      <Footer />
    </>
  );
}
