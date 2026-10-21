import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import JsonLd from '@/components/JsonLd';
import EnquiryForm from '@/components/EnquiryForm';
import { FacebookIcon, WhatsAppIcon, NamaskaraIcon } from '@/components/Icons';
import { websiteSchema, teacherSchema } from '@/lib/schema';
import { galleryImage } from '@/lib/gallery';
import {
  pageMetadata,
  PHONE,
  PHONE_DISPLAY,
  EMAIL,
  FACEBOOK_URL,
  ADDRESS_LINES,
  HOURS,
  SERVICE_AREAS,
  YEARS_TEACHING,
  MAP_EMBED_URL,
  DIRECTIONS_URL,
  GOOGLE_REVIEWS_URL,
  whatsappLink,
} from '@/lib/site';
import {
  Sprout,
  Music,
  Music2,
  Users,
  GraduationCap,
  Globe,
  Award,
  Trophy,
  Laptop,
  UserCheck,
  BookOpen,
  Radio,
  Sparkles,
  ScrollText,
  Mic2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
} from 'lucide-react';

export const metadata = pageMetadata({
  title: 'Carnatic Music Classes in Bengaluru & Online | Bhargavi Bhadri',
  description:
    'Carnatic vocal music (sangeetha) classes for kids & adults with Bhargavi Bhadri in Ayyappa Nagar, KR Puram, near Hoodi, TC Palya & Whitefield, Bengaluru. Live online classes worldwide. 4,000+ students since 2016.',
  path: '/',
  absoluteTitle: true,
});

const HOME_FAQS = [
  {
    q: 'Are these vocal (singing) music classes?',
    a: 'Yes. Bhargavi Bhadri teaches vocal music, also called sangeetha or singing classes: Carnatic classical vocal, devotional songs and bhajans, Bhavageethe, Kannada folk songs and prayer songs, for children and adults.',
  },
  {
    q: 'What age can my child start learning Carnatic music?',
    a: 'Many children start around 5 or 6 years old, once they can sit through a short class and repeat a simple tune. Older children, teenagers and adults can start at any age. Send the student\'s age on WhatsApp and Bhargavi will suggest the right batch.',
  },
  {
    q: 'Where are the in-person classes held?',
    a: `In-person classes are held at Mukunda Nandanam, Kodigehalli Main Road, Ayyappa Nagar, Krishnarajapuram (KR Puram), Bengaluru 560067, close to Hoodi, Medahalli and Whitefield. Classes run ${HOURS.days}, ${HOURS.time}.`,
  },
  {
    q: 'Do you offer online Carnatic music classes for students outside India?',
    a: 'Yes. Students from the USA, Dubai/UAE, Australia, Singapore, Canada and Europe learn live over video call. Class timings are fixed to suit your time zone.',
  },
  {
    q: 'Can adults join Carnatic music classes?',
    a: 'Yes. Adult beginners and adults returning to music after a break are welcome, in group batches or one-on-one sessions.',
  },
  {
    q: 'Are classes group or one-on-one?',
    a: 'Both are available. Group sessions build confidence and rhythm through singing together, while one-on-one classes give full attention to the student\'s voice, pace and goals.',
  },
  {
    q: 'What does a beginner learn first?',
    a: 'Beginners start with the traditional Carnatic foundation: Sarali Varisai, Janti Varisai, Dhatu Varisai and upper-octave (Hechchu Sthayi) exercises, then Alankaras in the seven talas, followed by Geethams and Swarajathis.',
  },
  {
    q: 'Do you prepare students for music exams?',
    a: 'Yes. Students are prepared for junior and senior grade Carnatic music examinations, including Pracheen Kala Kendra exams, with both theory and practical coaching.',
  },
  {
    q: 'What are the class fees?',
    a: 'Fees depend on the format (group or one-on-one, in-person or online). Message on WhatsApp or call for the current fees and available batch timings.',
  },
];

export default function HomePage() {
  const galleryPreview = [5, 16, 1, 23].map(galleryImage);

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={teacherSchema()} />
      <Navbar />
      <main>
        {/* ===== HERO ===== */}
        <section className="hero" aria-label="Welcome to Carnatic Music Classes by Bhargavi Bhadri">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-line" />
                <span>Since 2016 · Ayyappa Nagar, KR Puram · Online Worldwide</span>
              </div>
              <h1>
                <em>Carnatic Music</em> Classes in Bengaluru &amp; Online
              </h1>
              <p className="hero-desc">
                Vocal classes for kids and adults with <strong>Bhargavi Bhadri</strong>, teaching since 2016 with <strong>4,000+ students</strong> trained. In-person batches near Hoodi and KR Puram, and live online classes for students in the USA, Dubai, Australia and Europe.
              </p>
              <div className="hero-actions">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  id="hero-whatsapp-btn"
                  aria-label="Ask fees and timings on WhatsApp"
                >
                  <WhatsAppIcon size={18} color="#ffffff" />
                  <span>Get Fees &amp; Timings</span>
                </a>
                <a href={`tel:${PHONE}`} className="btn btn-secondary" id="hero-call-btn" aria-label="Call to enroll in Carnatic music classes">
                  <Phone size={18} />
                  <span>Call to Enroll</span>
                </a>
              </div>
              <p className="hero-rating">
                <span className="hero-rating-stars" aria-hidden="true">★★★★★</span>
                <span>5.0 on Google ·</span>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" id="hero-reviews-link">Read parent reviews</a>
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">4,000+</div>
                  <div className="hero-stat-label">Students Trained</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">{YEARS_TEACHING}+</div>
                  <div className="hero-stat-label">Years of Experience</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">5.0★</div>
                  <div className="hero-stat-label">Google Rating</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">100%</div>
                  <div className="hero-stat-label">Exam Success</div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-wrap">
                <div className="hero-logo-bg">
                  <Image
                    src="/logo.png"
                    alt="Carnatic Music Classes by Bhargavi Bhadri"
                    width={260}
                    height={260}
                    priority
                  />
                </div>
                <div className="hero-badge-floating badge-1">
                  <div className="badge-icon"><Sprout size={20} /></div>
                  <div className="badge-text">Junior Classes</div>
                  <div className="badge-sub">Foundational Portions</div>
                </div>
                <div className="hero-badge-floating badge-2">
                  <div className="badge-icon"><Music2 size={20} /></div>
                  <div className="badge-text">Senior Classes</div>
                  <div className="badge-sub">Advanced Portions</div>
                </div>
                <div className="hero-badge-floating badge-3">
                  <div className="badge-icon"><Users size={20} /></div>
                  <div className="badge-text">Group Sessions</div>
                  <div className="badge-sub">Interactive learning</div>
                </div>
                <div className="hero-badge-floating badge-4">
                  <div className="badge-icon"><GraduationCap size={20} /></div>
                  <div className="badge-text">Certified Exams</div>
                  <div className="badge-sub">Junior & Senior syllabus</div>
                </div>
                <div className="hero-badge-floating badge-5">
                  <div className="badge-icon"><Globe size={20} /></div>
                  <div className="badge-text">Global Students</div>
                  <div className="badge-sub">USA, Dubai, Australia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STRIP ===== */}
        <div className="about-strip" aria-label="Key highlights">
          <div className="about-strip-inner">
            <div className="strip-item">
              <span className="strip-item-icon"><Laptop size={26} /></span>
              <div className="strip-item-text">
                <strong>Online & Offline Classes</strong>
                <span>Flexible learning for every student</span>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-item-icon"><Users size={26} /></span>
              <div className="strip-item-text">
                <strong>Group & One-on-One</strong>
                <span>Personalized and collaborative learning</span>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-item-icon"><Globe size={26} /></span>
              <div className="strip-item-text">
                <strong>Students Worldwide</strong>
                <span>Serving multiple global time zones</span>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-item-icon"><Award size={26} /></span>
              <div className="strip-item-text">
                <strong>Music Examinations</strong>
                <span>Certified exam preparation and guidance</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ABOUT ===== */}
        <section className="about" id="about" aria-label="About Bhargavi Bhadri">
          <div className="container">
            <div className="about-grid">
              <div className="about-img-wrap">
                <div className="about-img-collage">
                  <Image src={galleryImage(1).src} alt={galleryImage(1).alt} width={600} height={400} style={{ gridColumn: '1/3', height: '280px', objectFit: 'cover', width: '100%' }} />
                  <Image src={galleryImage(2).src} alt={galleryImage(2).alt} width={300} height={200} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                  <Image src={galleryImage(7).src} alt={galleryImage(7).alt} width={300} height={200} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                </div>
                <div className="about-tag">
                  <div className="about-tag-num">{YEARS_TEACHING}+</div>
                  <div className="about-tag-txt">Years Teaching</div>
                </div>
              </div>

              <div className="about-content">
                <div className="section-badge">About the Teacher</div>
                <h2>Bhargavi Bhadri, Dedicated Carnatic Vocal Music Teacher</h2>
                <p>
                  With a deep-rooted passion for Indian classical music, Bhargavi Bhadri has been guiding students through the profound world of Carnatic music since April 2016. Based in Bengaluru&apos;s Krishnarajapuram, she teaches students of all ages, from beginners discovering music for the first time to seasoned learners deepening their classical foundation.
                </p>
                <p>
                  Her classes go beyond technical training. Every lesson is designed to build cultural connection, musical sensitivity, and lasting love for the art. Whether learning for joyful recreation or preparing for formal examinations, Bhargavi&apos;s patient, structured, and encouraging approach makes learning enjoyable and effective.
                </p>
                <div className="about-highlights">
                  <div className="about-highlight">
                    <span className="about-highlight-icon"><Trophy size={20} /></span>
                    <div>
                      <h4>Experienced Educator</h4>
                      <p>4,000+ students trained since 2016</p>
                    </div>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon"><Laptop size={20} /></span>
                    <div>
                      <h4>Online Ready</h4>
                      <p>Global students across time zones</p>
                    </div>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon"><Users size={20} /></span>
                    <div>
                      <h4>All Ages Welcome</h4>
                      <p>Junior portions, senior portions, and adult learners</p>
                    </div>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon"><MapPin size={20} /></span>
                    <div>
                      <h4>Bengaluru-Based</h4>
                      <p>Kodigehalli Main Rd, KR Puram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CLASSES ===== */}
        <section className="classes" id="classes" aria-label="Class programs">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Our Programs</div>
              <h2>Carnatic Music Class Programs for All Levels</h2>
              <p>
                Structured programs designed to take students from foundational swaras to advanced Carnatic proficiency. Choose the format that fits your learning goals.
              </p>
            </div>

            <div className="classes-grid">
              <article className="class-card featured" aria-label="Junior Carnatic Music Class">
                <span className="class-icon"><Sprout size={28} /></span>
                <h3>Junior Carnatic Classes</h3>
                <p>
                  Foundational syllabus covering Sarali Varisai, Janti Varisai, Dhatu Varisai, Hechchu Sthayi, Alankaras, Geethams, and Swarajathis. Focused on cultivating accurate shruti alignment, steady laya, and authentic vocal production for learners beginning their Carnatic journey.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Sarali & Janti Varisai</span>
                  <span className="class-tag">Alankaras</span>
                  <span className="class-tag">Geethams</span>
                  <span className="class-tag">Foundational Syllabus</span>
                </div>
                <Link href="/carnatic-music-classes-for-kids" className="card-link">Classes for kids <ArrowRight size={15} /></Link>
              </article>

              <article className="class-card" aria-label="Senior Carnatic Music Class">
                <span className="class-icon"><Music2 size={28} /></span>
                <h3>Senior Carnatic Classes</h3>
                <p>
                  Advanced syllabus covering Varnams in multiple speeds, complex Kritis by the Trinity and classical masters, various ragas and thalas, Neraval, Kalpanaswara, and an introduction to Manodharma sangeetha. Prepares students for advanced performance and senior board exams.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Varnams & Kritis</span>
                  <span className="class-tag">Ragas & Thalas</span>
                  <span className="class-tag">Manodharma Sangeetha</span>
                  <span className="class-tag">Senior Syllabus</span>
                </div>
                <Link href="/carnatic-music-exam-preparation" className="card-link">Senior syllabus &amp; exams <ArrowRight size={15} /></Link>
              </article>

              <article className="class-card" aria-label="Online Music Classes">
                <span className="class-icon"><Laptop size={28} /></span>
                <h3>Online Classes</h3>
                <p>
                  Interactive online lessons via high-definition video call for students anywhere in the world. Learners from the USA, Dubai, Australia, and Europe study comfortably from home with flexible scheduling across international time zones.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Worldwide</span>
                  <span className="class-tag">Flexible Timing</span>
                  <span className="class-tag">Video Call</span>
                  <span className="class-tag">All Levels</span>
                </div>
                <Link href="/online-carnatic-music-classes" className="card-link">Online classes &amp; time zones <ArrowRight size={15} /></Link>
              </article>

              <article className="class-card" aria-label="One-on-One Personal Classes">
                <span className="class-icon"><UserCheck size={28} /></span>
                <h3>One-on-One Classes</h3>
                <p>
                  Individual instruction tailored to each student&apos;s pace, vocal range, and personal goals. One-on-one sessions allow complete attention to nuance, swara clarity, and accelerated musical progress.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Personalized</span>
                  <span className="class-tag">Custom Pace</span>
                  <span className="class-tag">Focused Mentorship</span>
                </div>
              </article>

              <article className="class-card" aria-label="Group Music Sessions">
                <span className="class-icon"><Users size={28} /></span>
                <h3>Group Sessions</h3>
                <p>
                  Collaborative group classes that build choral discipline, rhythmic synchrony, and confidence in group singing. Group sessions cultivate mutual inspiration and a warm musical community.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Ensemble</span>
                  <span className="class-tag">Peer Learning</span>
                  <span className="class-tag">Community</span>
                </div>
              </article>

              <article className="class-card" aria-label="Music Certificate Examinations">
                <span className="class-icon"><GraduationCap size={28} /></span>
                <h3>Exam Preparation</h3>
                <p>
                  Systematic preparation for Junior and Senior grade Carnatic music examinations, including Pracheen Kala Kendra exams. Includes comprehensive theory, practical revision, mock exams, and performance guidance.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Board Exams</span>
                  <span className="class-tag">Junior & Senior Grade</span>
                  <span className="class-tag">Theory & Practical</span>
                </div>
                <Link href="/carnatic-music-exam-preparation" className="card-link">Exam preparation <ArrowRight size={15} /></Link>
              </article>
            </div>
          </div>
        </section>

        {/* ===== MUSIC TYPES ===== */}
        <section className="music-types" id="music-types" aria-label="Types of music taught">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Repertoire</div>
              <h2>Types of Music Taught by Bhargavi Bhadri</h2>
              <p>
                A rich curriculum spanning classical Carnatic traditions to devotional and folk genres, building versatile and culturally rooted singers.
              </p>
            </div>

            <div className="music-types-list">
              <article className="music-type-item" aria-label="Carnatic Classical Music">
                <div className="music-type-icon" aria-hidden="true"><Music size={26} /></div>
                <div className="music-type-content">
                  <h3>Carnatic Classical Music</h3>
                  <p>
                    The foundation of the curriculum. Students systematically learn swaras, alankaras, varnams, kritis, ragas, and thalas. Compositions by the Carnatic Trinity (Tyagaraja, Muthuswami Dikshitar, and Syama Sastri) and Purandara Dasa form the core repertoire.
                  </p>
                </div>
              </article>

              <article className="music-type-item" aria-label="Devotional Songs">
                <div className="music-type-icon" aria-hidden="true"><NamaskaraIcon size={26} color="#ffffff" /></div>
                <div className="music-type-content">
                  <h3>Devotional Songs (Bhakti Geete)</h3>
                  <p>
                    Sacred devotional compositions in Kannada, Telugu, Tamil, and Sanskrit. These compositions cultivate devotion while strengthening vocal technique, featuring popular bhajans, devaranamas, and keerthanas.
                  </p>
                  <Link href="/devotional-songs-bhajan-classes" className="card-link">Devotional &amp; bhajan classes <ArrowRight size={15} /></Link>
                </div>
              </article>

              <article className="music-type-item" aria-label="Bhavageethe">
                <div className="music-type-icon" aria-hidden="true"><BookOpen size={26} /></div>
                <div className="music-type-content">
                  <h3>Bhavageethe (Kannada Light Music)</h3>
                  <p>
                    Beloved Kannada lyrical poetry set to soulful melodies. Featuring timeless verses by celebrated poets like D.V. Gundappa, K.S. Narasimhaswamy, Kuvempu, and Bendre, expressing deep emotion and cultural resonance.
                  </p>
                  <Link href="/bhavageethe-folk-song-classes" className="card-link">Bhavageethe classes <ArrowRight size={15} /></Link>
                </div>
              </article>

              <article className="music-type-item" aria-label="Folk Songs">
                <div className="music-type-icon" aria-hidden="true"><Radio size={26} /></div>
                <div className="music-type-content">
                  <h3>Folk Songs (Janapada Geete)</h3>
                  <p>
                    Traditional Karnataka folk songs celebrating nature, harvest, rural life, and cultural festivities. Janapada songs offer rhythmic variety and a strong connection to regional roots.
                  </p>
                  <Link href="/bhavageethe-folk-song-classes" className="card-link">Folk song classes <ArrowRight size={15} /></Link>
                </div>
              </article>

              <article className="music-type-item" aria-label="Prayer Songs">
                <div className="music-type-icon" aria-hidden="true"><Sparkles size={26} /></div>
                <div className="music-type-content">
                  <h3>Prayer Songs (Prarthana Geete)</h3>
                  <p>
                    Invocatory shlokas, morning prayers, school assembly songs, and patriotic renditions. Ideal for students performing at cultural functions, school events, and auspicious gatherings.
                  </p>
                  <Link href="/devotional-songs-bhajan-classes" className="card-link">Prayer &amp; shloka classes <ArrowRight size={15} /></Link>
                </div>
              </article>

              <article className="music-type-item" aria-label="Varnams and Compositions">
                <div className="music-type-icon" aria-hidden="true"><ScrollText size={26} /></div>
                <div className="music-type-content">
                  <h3>Varnams, Kritis & Compositions</h3>
                  <p>
                    Technical mastery pieces including Adi thala and Ata thala varnams, structured kritis across varied ragas, and introductory manodharma improvisation through raga alapana and swaraprasthara.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== GLOBAL REACH ===== */}
        <section className="global-reach" id="global-reach" aria-label="Global students and online reach">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Global Reach</div>
              <h2>Carnatic Music Connecting the World</h2>
              <p>
                Bhargavi Bhadri&apos;s classes reach far beyond Bengaluru. Students from across continents join online, carrying the rich heritage of Carnatic music worldwide.
              </p>
            </div>

            <div className="countries-grid">
              <div className="country-card" aria-label="Students from India">
                <div className="country-flag">🇮🇳</div>
                <div className="country-name">India</div>
                <div className="country-detail">Bengaluru & Nationwide</div>
              </div>
              <div className="country-card" aria-label="Students from USA">
                <div className="country-flag">🇺🇸</div>
                <div className="country-name">United States</div>
                <div className="country-detail">Online · Multiple States</div>
              </div>
              <div className="country-card" aria-label="Students from Dubai / UAE">
                <div className="country-flag">🇦🇪</div>
                <div className="country-name">Dubai / UAE</div>
                <div className="country-detail">Online · Gulf Region</div>
              </div>
              <div className="country-card" aria-label="Students from Australia">
                <div className="country-flag">🇦🇺</div>
                <div className="country-name">Australia</div>
                <div className="country-detail">Online · All States</div>
              </div>
              <div className="country-card" aria-label="Students from Europe">
                <div className="country-flag">🇪🇺</div>
                <div className="country-name">Europe</div>
                <div className="country-detail">Online · Multiple Countries</div>
              </div>
              <div className="country-card" aria-label="Students from Singapore">
                <div className="country-flag">🇸🇬</div>
                <div className="country-name">Singapore</div>
                <div className="country-detail">Online · South-East Asia</div>
              </div>
              <div className="country-card" aria-label="Students from Canada">
                <div className="country-flag">🇨🇦</div>
                <div className="country-name">Canada</div>
                <div className="country-detail">Online · North America</div>
              </div>
              <div className="country-card" aria-label="And more worldwide">
                <div className="country-flag">🌏</div>
                <div className="country-name">& More</div>
                <div className="country-detail">Growing worldwide</div>
              </div>
            </div>

            <div className="reach-stats">
              <div className="reach-stat">
                <span className="reach-stat-num">4,000+</span>
                <span className="reach-stat-label">Students Trained</span>
              </div>
              <div className="reach-stat">
                <span className="reach-stat-num">8+</span>
                <span className="reach-stat-label">Countries Reached</span>
              </div>
              <div className="reach-stat">
                <span className="reach-stat-num">{YEARS_TEACHING}+</span>
                <span className="reach-stat-label">Years of Teaching</span>
              </div>
              <div className="reach-stat">
                <span className="reach-stat-num">5.0★</span>
                <span className="reach-stat-label">Google Reviews</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/online-carnatic-music-classes" className="btn btn-primary" id="global-online-btn">
                <span>How Online Classes Work</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CERTIFICATIONS ===== */}
        <section className="certifications" id="certifications" aria-label="Music certifications and exams">
          <div className="container">
            <div className="cert-grid">
              <div className="cert-content">
                <div className="section-badge">Examinations</div>
                <h2>Music Certificate Examinations & Formal Training</h2>
                <p>
                  Bhargavi Bhadri prepares students for Junior and Senior grade Carnatic music examinations, including Pracheen Kala Kendra exams. Formal certification validates musical progress and opens doors to advanced performance opportunities.
                </p>
                <ul className="cert-list" aria-label="Examination features">
                  <li>Structured preparation for Junior and Senior board examinations</li>
                  <li>In-depth coaching in both music theory and practical performance</li>
                  <li>Mock tests and individual assessments prior to examination day</li>
                  <li>Confidence building and stage etiquette training</li>
                  <li>Guidance on exam board requirements and syllabus rubrics</li>
                  <li>Support for university music auditions and youth festivals</li>
                </ul>
                <div className="hero-actions" style={{ marginTop: '2rem' }}>
                  <a href={whatsappLink('Hi Bhargavi, I would like to know about Carnatic music exam preparation.')} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="cert-enquire-btn">
                    <WhatsAppIcon size={18} color="#ffffff" />
                    <span>Enquire About Exams</span>
                  </a>
                  <Link href="/carnatic-music-exam-preparation" className="btn btn-secondary" id="cert-learn-more-btn">
                    <span>Exam Syllabus</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="cert-visual">
                <div className="cert-card">
                  <div className="cert-card-icon"><GraduationCap size={26} /></div>
                  <h4>Junior Syllabus</h4>
                  <p>Sarali to Geethams and foundational exams</p>
                </div>
                <div className="cert-card">
                  <div className="cert-card-icon"><Award size={26} /></div>
                  <h4>Senior Syllabus</h4>
                  <p>Varnams, Kritis and senior certification</p>
                </div>
                <div className="cert-card">
                  <div className="cert-card-icon"><Mic2 size={26} /></div>
                  <h4>Practical Coaching</h4>
                  <p>Vocal clarity, shruti accuracy, and laya control</p>
                </div>
                <div className="cert-card">
                  <div className="cert-card-icon"><BookOpen size={26} /></div>
                  <h4>Theory Guidance</h4>
                  <p>Raga lakshanas, thala systems, and musical history</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== GALLERY PREVIEW ===== */}
        <section className="gallery-section" id="gallery-preview" aria-label="Gallery preview">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Gallery</div>
              <h2>Moments from Our Classes</h2>
              <p>A glimpse into our vibrant musical journey at Bhargavi Bhadri&apos;s music classes.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
              {galleryPreview.map((img) => (
                <div key={img.id} style={{ borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '1', position: 'relative' }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/gallery" className="btn btn-primary" id="view-gallery-btn">
                <span>View Full Gallery</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <FAQ faqs={HOME_FAQS} intro="Quick answers for parents and adult learners. For anything else, message Bhargavi on WhatsApp." />

        {/* ===== CONTACT ===== */}
        <section className="contact" id="contact" aria-label="Enquire and contact information">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Admissions Open</div>
              <h2>Enquire About Classes</h2>
              <p>Share a few details and Bhargavi will reply on WhatsApp with suitable batch timings and fees for in-person or online classes.</p>
            </div>

            <div className="contact-grid">
              <div>
                <div className="enquiry-card">
                  <h3 style={{ marginBottom: '1.25rem' }}>Send an enquiry</h3>
                  <EnquiryForm id="home-enquiry-form" />
                </div>

                <div className="contact-items" style={{ marginTop: '1.5rem' }}>
                  <div className="contact-item" aria-label="Phone contact">
                    <div className="contact-icon" aria-hidden="true"><Phone size={22} /></div>
                    <div className="contact-item-content">
                      <h4>Phone / WhatsApp</h4>
                      <a href={`tel:${PHONE}`} id="contact-call-link">{PHONE_DISPLAY}</a>
                      <p>Call or WhatsApp to enquire and enroll</p>
                    </div>
                  </div>

                  <div className="contact-item" aria-label="Email contact">
                    <div className="contact-icon" aria-hidden="true"><Mail size={22} /></div>
                    <div className="contact-item-content">
                      <h4>Email</h4>
                      <a href={`mailto:${EMAIL}`} id="contact-email-link">{EMAIL}</a>
                      <p>Write to us for enquiries and admissions</p>
                    </div>
                  </div>

                  <div className="contact-item" aria-label="Facebook page">
                    <div className="contact-icon" aria-hidden="true"><FacebookIcon size={22} color="#ffffff" /></div>
                    <div className="contact-item-content">
                      <h4>Facebook</h4>
                      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                        Visit Facebook Page ↗
                      </a>
                      <p>Follow updates, student performances, and events</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="contact-map-area">
                  <iframe
                    src={MAP_EMBED_URL}
                    title="Carnatic Music Classes by Bhargavi Bhadri on Google Maps"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="service-areas">
                    <div className="contact-item" style={{ padding: 0, border: 'none', marginBottom: '1.25rem' }} aria-label="Address">
                      <div className="contact-icon" aria-hidden="true"><MapPin size={22} /></div>
                      <div className="contact-item-content">
                        <h4>In-Person Classes</h4>
                        <p>{ADDRESS_LINES.map((line) => <span key={line}>{line}<br /></span>)}</p>
                        <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" id="contact-directions-link" style={{ fontWeight: 600 }}>Get directions ↗</a>
                      </div>
                    </div>
                    <div className="contact-item" style={{ padding: 0, border: 'none', marginBottom: '1.5rem' }} aria-label="Class hours">
                      <div className="contact-icon" aria-hidden="true"><Clock size={22} /></div>
                      <div className="contact-item-content">
                        <h4>Class Hours</h4>
                        <p>{HOURS.display} (in-person)<br />Online slots arranged to suit your time zone</p>
                      </div>
                    </div>
                    <h4>Students Come From</h4>
                    <div className="service-area-tags">
                      {[...SERVICE_AREAS, 'Online - Worldwide'].map((area) => (
                        <span key={area} className="service-area-tag">{area}</span>
                      ))}
                    </div>
                    <Link href="/carnatic-music-classes-kr-puram" className="card-link">In-person classes near KR Puram, Hoodi &amp; Whitefield <ArrowRight size={15} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
