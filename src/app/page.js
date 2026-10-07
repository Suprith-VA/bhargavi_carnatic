import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  const galleryPreview = [1, 2, 3, 4];

  return (
    <>
      <Navbar />
      <main>
        {/* ===== HERO ===== */}
        <section className="hero" aria-label="Welcome to Carnatic Music Classes by Bhargavi Bhadri">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-line" />
                <span>Est. April 2016 · Bengaluru</span>
              </div>
              <h1>
                Learn <em>Carnatic Music</em> from an Expert Teacher
              </h1>
              <p className="hero-desc">
                Join over <strong>500 students</strong> trained by Bhargavi Bhadri — experienced vocal music teacher offering online and offline classes in Bengaluru. From juniors to seniors, group sessions to one-on-one, we nurture every musical journey.
              </p>
              <div className="hero-actions">
                <a href="tel:+919731891537" className="btn btn-primary" id="hero-call-btn" aria-label="Call to enroll in Carnatic music classes">
                  📞 Enroll Now
                </a>
                <Link href="/#classes" className="btn btn-secondary" id="hero-explore-btn">
                  Explore Classes
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-num">500+</div>
                  <div className="hero-stat-label">Students Trained</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">9+</div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">5.0★</div>
                  <div className="hero-stat-label">Google Rating</div>
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
                  <div className="badge-icon">🌏</div>
                  <div className="badge-text">Global Students</div>
                  <div className="badge-sub">USA · Dubai · Australia</div>
                </div>
                <div className="hero-badge-floating badge-2">
                  <div className="badge-icon">🎓</div>
                  <div className="badge-text">Certified Exams</div>
                  <div className="badge-sub">All levels</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STRIP ===== */}
        <div className="about-strip" aria-label="Key highlights">
          <div className="about-strip-inner">
            <div className="strip-item">
              <span className="strip-item-icon">🎵</span>
              <div className="strip-item-text">
                <strong>Online & Offline Classes</strong>
                <span>Flexible learning for every student</span>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-item-icon">👥</span>
              <div className="strip-item-text">
                <strong>Group & One-on-One</strong>
                <span>Personalized & collaborative learning</span>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-item-icon">🌍</span>
              <div className="strip-item-text">
                <strong>Students Worldwide</strong>
                <span>Serving multiple time zones</span>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-item-icon">📜</span>
              <div className="strip-item-text">
                <strong>Music Examinations</strong>
                <span>Certified exam preparation</span>
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
                  <Image src="/gallery/gallery-1.png" alt="Carnatic music class by Bhargavi Bhadri" width={600} height={400} style={{ gridColumn: '1/3', height: '280px', objectFit: 'cover', width: '100%' }} />
                  <Image src="/gallery/gallery-2.png" alt="Students learning Carnatic music" width={300} height={200} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                  <Image src="/gallery/gallery-3.png" alt="Music class session Bengaluru" width={300} height={200} style={{ height: '200px', objectFit: 'cover', width: '100%' }} />
                </div>
                <div className="about-tag">
                  <span className="about-tag-num">9+</span>
                  <span className="about-tag-txt">Years of Teaching</span>
                </div>
              </div>

              <div className="about-content">
                <div className="section-badge">About the Teacher</div>
                <h2>Bhargavi Bhadri — Dedicated Carnatic Vocal Music Teacher</h2>
                <p>
                  With a deep-rooted passion for Indian classical music, Bhargavi Bhadri has been guiding students through the profound world of Carnatic music since April 2016. Based in Bengaluru's Krishnarajapuram, she teaches students of all ages — from young beginners discovering music for the first time, to seasoned learners deepening their classical foundation.
                </p>
                <p>
                  Her classes go beyond technical training. Every lesson is designed to build cultural connection, musical sensitivity, and lasting love for the art. Whether you're a child joining for the first time or an adult pursuing music as a lifelong passion, Bhargavi's patient, structured, and encouraging approach makes learning enjoyable and effective.
                </p>
                <div className="about-highlights">
                  <div className="about-highlight">
                    <span className="about-highlight-icon">🏆</span>
                    <div>
                      <h4>Experienced Educator</h4>
                      <p>500+ students trained since 2016</p>
                    </div>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon">💻</span>
                    <div>
                      <h4>Online Ready</h4>
                      <p>Global students across time zones</p>
                    </div>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon">👨‍👩‍👧</span>
                    <div>
                      <h4>All Ages Welcome</h4>
                      <p>Junior, senior & adult programs</p>
                    </div>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon">📍</span>
                    <div>
                      <h4>Bengaluru-Based</h4>
                      <p>Kodigehalli, Krishnarajapuram</p>
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
                Structured programs designed to take students from their very first note to advanced Carnatic proficiency. Choose the format that fits your schedule and goals.
              </p>
            </div>

            <div className="classes-grid">
              <article className="class-card featured" aria-label="Junior Carnatic Music Class">
                <span className="class-icon">🌱</span>
                <h3>Junior Carnatic Classes</h3>
                <p>
                  Specially designed for young learners (ages 5–14). Children are introduced to the fundamental concepts of Carnatic music through engaging, age-appropriate methods — including basic swaras, simple compositions, and folk melodies that make learning joyful.
                </p>
                <div class="class-tags">
                  <span className="class-tag">Ages 5–14</span>
                  <span className="class-tag">Beginner Swaras</span>
                  <span className="class-tag">Fun Learning</span>
                  <span className="class-tag">Foundation</span>
                </div>
              </article>

              <article className="class-card" aria-label="Senior Carnatic Music Class">
                <span className="class-icon">🎶</span>
                <h3>Senior Carnatic Classes</h3>
                <p>
                  Advanced-level training for teenagers and adults (15+). Covers complex ragas, thalas, kritis, compositions by Trinity composers (Tyagaraja, Muthuswami Dikshitar, Syama Sastri), neraval, and kalpanaswaras for comprehensive classical mastery.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Ages 15+</span>
                  <span className="class-tag">Ragas & Thalas</span>
                  <span className="class-tag">Kritis</span>
                  <span className="class-tag">Advanced</span>
                </div>
              </article>

              <article className="class-card" aria-label="Online Music Classes">
                <span className="class-icon">💻</span>
                <h3>Online Classes</h3>
                <p>
                  High-quality online lessons via video call for students anywhere in the world. Students from the USA, Dubai, Australia, and Europe learn conveniently from home with scheduling flexibility across time zones.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Worldwide</span>
                  <span className="class-tag">Flexible Timing</span>
                  <span className="class-tag">Video Call</span>
                  <span className="class-tag">All Levels</span>
                </div>
              </article>

              <article className="class-card" aria-label="One-on-One Personal Classes">
                <span className="class-icon">🎯</span>
                <h3>One-on-One Classes</h3>
                <p>
                  Personalized instruction tailored to each student's pace, interests, and goals. Individual sessions allow Bhargavi to focus entirely on the student's progress, enabling faster learning and deeper musical development.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Personalized</span>
                  <span className="class-tag">Flexible Pace</span>
                  <span className="class-tag">Fast Progress</span>
                </div>
              </article>

              <article className="class-card" aria-label="Group Music Sessions">
                <span className="class-icon">👥</span>
                <h3>Group Sessions</h3>
                <p>
                  Collaborative group classes that build ensemble skills, encourage peer learning, and create a vibrant musical community. Group sessions are great for students who thrive on shared learning energy.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Ensemble</span>
                  <span className="class-tag">Peer Learning</span>
                  <span className="class-tag">Community</span>
                </div>
              </article>

              <article className="class-card" aria-label="Music Certificate Examinations">
                <span className="class-icon">📜</span>
                <h3>Exam Preparation</h3>
                <p>
                  Systematic preparation for recognized music certificate examinations. Students are trained to meet exam standards with structured revision, mock assessments, and performance coaching.
                </p>
                <div className="class-tags">
                  <span className="class-tag">Certification</span>
                  <span className="class-tag">All Grades</span>
                  <span className="class-tag">Structured</span>
                </div>
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
                A rich and diverse curriculum spanning classical Carnatic traditions to devotional and folk genres — building versatile, culturally rooted musicians.
              </p>
            </div>

            <div className="music-types-list">
              <article className="music-type-item" aria-label="Carnatic Classical Music">
                <div className="music-type-icon" aria-hidden="true">🎵</div>
                <div className="music-type-content">
                  <h3>Carnatic Classical Music</h3>
                  <p>
                    The heart of the curriculum. Students learn swaras, alankaaras, varnams, kritis (compositions), ragas, and thalas systematically. Classical works of the Carnatic Trinity — Tyagaraja, Muthuswami Dikshitar, and Syama Sastri — form the core repertoire, alongside compositions by other celebrated composers.
                  </p>
                </div>
              </article>

              <article className="music-type-item" aria-label="Devotional Songs">
                <div className="music-type-icon" aria-hidden="true">🙏</div>
                <div className="music-type-content">
                  <h3>Devotional Songs (Bhakti Geete)</h3>
                  <p>
                    Sacred devotional compositions in Kannada, Telugu, Tamil, and Sanskrit. These songs cultivate spiritual awareness while strengthening vocal technique. Includes popular bhajans, ashtapadis, and keerthanas dedicated to various deities.
                  </p>
                </div>
              </article>

              <article className="music-type-item" aria-label="Bhavageethe">
                <div className="music-type-icon" aria-hidden="true">💛</div>
                <div className="music-type-content">
                  <h3>Bhavageethe (Kannada Light Music)</h3>
                  <p>
                    Beloved Kannada lyrical songs rooted in emotion, poetry, and cultural heritage. Bhavageethe — the signature musical form of Karnataka — features works by legendary poets like D.V. Gundappa, K.S. Narasimhaswamy, and Gopalakrishna Adiga, set to soulful melodies.
                  </p>
                </div>
              </article>

              <article className="music-type-item" aria-label="Folk Songs">
                <div className="music-type-icon" aria-hidden="true">🌾</div>
                <div className="music-type-content">
                  <h3>Folk Songs (Janapada Geete)</h3>
                  <p>
                    Traditional Karnataka folk songs that celebrate rural life, harvest, nature, and festivals. Janapada songs are an essential part of Karnataka's living cultural heritage. Learning them gives students rhythmic versatility and connection to regional roots.
                  </p>
                </div>
              </article>

              <article className="music-type-item" aria-label="Prayer Songs">
                <div className="music-type-icon" aria-hidden="true">⭐</div>
                <div className="music-type-content">
                  <h3>Prayer Songs (Prarthana Geete)</h3>
                  <p>
                    Morning prayers, school assembly songs, invocatory compositions, and national/patriotic songs. These are ideal for children and students who perform at school and cultural events. Includes Sanskrit shlokas and Kannada prayer songs.
                  </p>
                </div>
              </article>

              <article className="music-type-item" aria-label="Varnams and Compositions">
                <div className="music-type-icon" aria-hidden="true">🎼</div>
                <div className="music-type-content">
                  <h3>Varnams, Kritis & Compositions</h3>
                  <p>
                    Advanced Carnatic forms including varnams (technical training pieces), kritis (structured compositions), and padams. Students at higher levels explore manodharma sangeetha — improvisation through raga alapana, neraval, and kalpanaswaras.
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
                Bhargavi Bhadri's classes reach far beyond Bengaluru. Students from across continents join online, carrying the tradition of Carnatic music to every corner of the world.
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
                <div className="country-detail">Online • Multiple States</div>
              </div>
              <div className="country-card" aria-label="Students from Dubai / UAE">
                <div className="country-flag">🇦🇪</div>
                <div className="country-name">Dubai / UAE</div>
                <div className="country-detail">Online • Gulf Region</div>
              </div>
              <div className="country-card" aria-label="Students from Australia">
                <div className="country-flag">🇦🇺</div>
                <div className="country-name">Australia</div>
                <div className="country-detail">Online • All States</div>
              </div>
              <div className="country-card" aria-label="Students from Europe">
                <div className="country-flag">🇪🇺</div>
                <div className="country-name">Europe</div>
                <div className="country-detail">Online • Multiple Countries</div>
              </div>
              <div className="country-card" aria-label="Students from Singapore">
                <div className="country-flag">🇸🇬</div>
                <div className="country-name">Singapore</div>
                <div className="country-detail">Online • South-East Asia</div>
              </div>
              <div className="country-card" aria-label="Students from Canada">
                <div className="country-flag">🇨🇦</div>
                <div className="country-name">Canada</div>
                <div className="country-detail">Online • North America</div>
              </div>
              <div className="country-card" aria-label="And more worldwide">
                <div className="country-flag">🌏</div>
                <div className="country-name">& More</div>
                <div className="country-detail">Growing worldwide</div>
              </div>
            </div>

            <div className="reach-stats">
              <div className="reach-stat">
                <span className="reach-stat-num">500+</span>
                <span className="reach-stat-label">Students Trained</span>
              </div>
              <div className="reach-stat">
                <span className="reach-stat-num">8+</span>
                <span className="reach-stat-label">Countries Reached</span>
              </div>
              <div className="reach-stat">
                <span className="reach-stat-num">9+</span>
                <span className="reach-stat-label">Years of Teaching</span>
              </div>
              <div className="reach-stat">
                <span className="reach-stat-num">5.0★</span>
                <span className="reach-stat-label">Google Reviews</span>
              </div>
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
                  Bhargavi Bhadri prepares students for recognized music certificate examinations. Formal certification validates a student's musical progress and opens doors to higher-level study and performance opportunities.
                </p>
                <ul className="cert-list" aria-label="Examination features">
                  <li>Structured preparation for graded music exams</li>
                  <li>Theory and practical coaching for all exam levels</li>
                  <li>Mock assessments before formal examinations</li>
                  <li>Performance training and stage confidence building</li>
                  <li>Guidance for both junior and senior-level certifications</li>
                  <li>Support for students attending university auditions</li>
                </ul>
                <div style={{ marginTop: '2rem' }}>
                  <a href="tel:+919731891537" className="btn btn-primary" id="cert-enquire-btn">
                    📞 Enquire About Exams
                  </a>
                </div>
              </div>

              <div className="cert-visual">
                <div className="cert-card">
                  <div className="cert-card-icon">🎓</div>
                  <h4>Junior Exams</h4>
                  <p>Beginner to intermediate level certifications</p>
                </div>
                <div className="cert-card">
                  <div className="cert-card-icon">🏅</div>
                  <h4>Senior Exams</h4>
                  <p>Advanced & diploma level certifications</p>
                </div>
                <div className="cert-card">
                  <div className="cert-card-icon">🎵</div>
                  <h4>Practical Training</h4>
                  <p>Hands-on performance exam coaching</p>
                </div>
                <div className="cert-card">
                  <div className="cert-card-icon">📋</div>
                  <h4>Theory Classes</h4>
                  <p>Music theory for all exam boards</p>
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
              <p>A glimpse into the vibrant musical community at Bhargavi Bhadri's music classes.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
              {galleryPreview.map((n) => (
                <div key={n} style={{ borderRadius: '0.75rem', overflow: 'hidden', aspectRatio: '1', position: 'relative' }}>
                  <Image
                    src={`/gallery/gallery-${n}.png`}
                    alt={`Carnatic music class photo ${n}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/gallery" className="btn btn-primary" id="view-gallery-btn">
                View Full Gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="contact" id="contact" aria-label="Contact information">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Get In Touch</div>
              <h2>Enroll or Learn More</h2>
              <p>Ready to begin your Carnatic music journey? Reach out today — classes are open for new students.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-items">
                  <div className="contact-item" aria-label="Phone contact">
                    <div className="contact-icon" aria-hidden="true">📞</div>
                    <div className="contact-item-content">
                      <h4>Phone / WhatsApp</h4>
                      <a href="tel:+919731891537">+91 97318 91537</a>
                      <p>Call or WhatsApp to enquire & enroll</p>
                    </div>
                  </div>

                  <div className="contact-item" aria-label="Address">
                    <div className="contact-icon" aria-hidden="true">📍</div>
                    <div className="contact-item-content">
                      <h4>Address</h4>
                      <p>B002, Mukunda Nandanam B Block,<br />Kodigehalli Main Rd, Ayyappa Nagar,<br />Krishnarajapuram, Bengaluru – 560067</p>
                    </div>
                  </div>

                  <div className="contact-item" aria-label="Class timings">
                    <div className="contact-icon" aria-hidden="true">🕒</div>
                    <div className="contact-item-content">
                      <h4>Class Hours</h4>
                      <div className="hours-table">
                        {[
                          ['Monday', '3:00 PM – 8:30 PM'],
                          ['Tuesday', '3:00 PM – 8:30 PM'],
                          ['Wednesday', '3:00 PM – 8:30 PM'],
                          ['Thursday', '3:00 PM – 8:30 PM'],
                          ['Friday', '3:00 PM – 8:30 PM'],
                          ['Saturday', 'Closed'],
                          ['Sunday', 'Closed'],
                        ].map(([day, time]) => (
                          <div key={day} className="hours-row">
                            <span className="hours-day">{day}</span>
                            <span className={time === 'Closed' ? 'hours-closed' : 'hours-time'}>{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="contact-map-area">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.08203128!2d77.6913!3d13.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f1cdadde75%3A0x6e23d2bf5afe1ce6!2sMukunda%20Nandanam%2C%20Kodigehalli%20Main%20Rd%2C%20Ayyappa%20Nagar%2C%20Krishnarajapuram%2C%20Bengaluru%2C%20Karnataka%20560067!5e0!3m2!1sen!2sin!4v1634567890123"
                    title="Carnatic Music Classes by Bhargavi Bhadri Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Map showing location of Carnatic Music Classes by Bhargavi Bhadri"
                  />
                  <div className="service-areas">
                    <h4>Service Areas</h4>
                    <div className="service-area-tags">
                      {['Hoodi', 'Krishnarajapuram', 'Medahalli', 'Kodigehalli', 'Ayyappa Nagar', 'Basavanapura', 'Hale Devasandra', 'White City Layout', 'Online – Worldwide'].map((area) => (
                        <span key={area} className="service-area-tag">{area}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <a href="tel:+919731891537" className="btn btn-primary" id="contact-call-btn" style={{ marginRight: '1rem' }}>
                    📞 Call Now
                  </a>
                  <a
                    href="https://wa.me/919731891537?text=Hi%20Bhargavi%2C%20I%27m%20interested%20in%20Carnatic%20music%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id="contact-whatsapp-btn"
                  >
                    💬 WhatsApp
                  </a>
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
