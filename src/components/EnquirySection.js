import { Phone, MapPin, Clock, Star } from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';
import { WhatsAppIcon } from '@/components/Icons';
import {
  PHONE,
  PHONE_DISPLAY,
  ADDRESS_LINES,
  HOURS,
  DIRECTIONS_URL,
  GOOGLE_REVIEWS_URL,
  whatsappLink,
} from '@/lib/site';

export default function EnquirySection({
  id = 'enquire',
  title = 'Enquire About Classes',
  intro = 'Tell us a little about the student and we will reply on WhatsApp with suitable batch timings and fees.',
  interest,
  mode,
  whatsappMessage,
}) {
  return (
    <section className="enquiry-section" id={id} aria-label={title}>
      <div className="container">
        <div className="enquiry-grid">
          <div className="enquiry-card">
            <div className="section-badge">Admissions Open</div>
            <h2>{title}</h2>
            <p className="enquiry-intro">{intro}</p>
            <EnquiryForm id={`${id}-form`} interest={interest} mode={mode} />
          </div>

          <div className="enquiry-aside">
            <h3>Or reach Bhargavi directly</h3>
            <ul className="enquiry-contacts">
              <li>
                <span className="contact-icon" aria-hidden="true"><WhatsAppIcon size={20} color="#ffffff" /></span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" id={`${id}-whatsapp`}>Message {PHONE_DISPLAY}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true"><Phone size={20} /></span>
                <div>
                  <strong>Phone</strong>
                  <a href={`tel:${PHONE}`} id={`${id}-call`}>{PHONE_DISPLAY}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true"><MapPin size={20} /></span>
                <div>
                  <strong>In-person classes</strong>
                  <span>{ADDRESS_LINES.join(', ')}</span>
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" id={`${id}-directions`}>Get directions ↗</a>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true"><Clock size={20} /></span>
                <div>
                  <strong>Class hours</strong>
                  <span>{HOURS.display} (in-person). Online slots by arrangement.</span>
                </div>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true"><Star size={20} /></span>
                <div>
                  <strong>Rated 5.0 on Google</strong>
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">Read parent &amp; student reviews ↗</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
