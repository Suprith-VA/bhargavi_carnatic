'use client';
import { useId } from 'react';
import { WhatsAppIcon } from '@/components/Icons';
import { trackEvent } from '@/lib/analytics';
import { whatsappLink, PHONE, PHONE_DISPLAY } from '@/lib/site';

const INTERESTS = {
  junior: 'Carnatic vocal (beginner / junior)',
  senior: 'Carnatic vocal (senior / advanced)',
  devotional: 'Devotional songs & bhajans',
  bhavageethe: 'Bhavageethe & folk songs',
  exam: 'Music exam preparation',
  unsure: 'Not sure yet',
};

const MODES = {
  offline: 'In-person',
  online: 'Online',
};

// Builds a pre-filled WhatsApp message from the form, so the enquiry lands in
// the same inbox the teacher already uses. Nothing is stored on the server.
export default function EnquiryForm({ id = 'enquiry-form', interest = 'junior', mode = 'offline' }) {
  const uid = useId();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      'Hi Bhargavi, I would like to enquire about music classes.',
      `Name: ${data.get('name')}`,
      data.get('age') && `Student's age: ${data.get('age')}`,
      `Interested in: ${data.get('interest')}`,
      `Class mode: ${data.get('mode')}`,
      data.get('location') && `Location: ${data.get('location')}`,
      'Please share the batch timings and fees.',
    ].filter(Boolean);

    trackEvent('enquiry_form_submit', {
      cta_location: id,
      interest: data.get('interest'),
      class_mode: data.get('mode'),
    });

    const url = whatsappLink(lines.join('\n'));
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
  };

  return (
    <form className="enquiry-form" id={id} onSubmit={onSubmit}>
      <div className="enquiry-field">
        <label htmlFor={`${uid}-name`}>Your name</label>
        <input id={`${uid}-name`} name="name" className="form-input" required autoComplete="name" placeholder="e.g. Priya" />
      </div>

      <div className="enquiry-row">
        <div className="enquiry-field">
          <label htmlFor={`${uid}-age`}>Student&apos;s age</label>
          <input id={`${uid}-age`} name="age" className="form-input" placeholder="e.g. 7, or adult" />
        </div>
        <div className="enquiry-field">
          <label htmlFor={`${uid}-mode`}>Class mode</label>
          <select id={`${uid}-mode`} name="mode" className="form-input" defaultValue={MODES[mode]}>
            {Object.values(MODES).map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
      </div>

      <div className="enquiry-field">
        <label htmlFor={`${uid}-interest`}>Interested in</label>
        <select id={`${uid}-interest`} name="interest" className="form-input" defaultValue={INTERESTS[interest]}>
          {Object.values(INTERESTS).map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>

      <div className="enquiry-field">
        <label htmlFor={`${uid}-location`}>Area or city</label>
        <input id={`${uid}-location`} name="location" className="form-input" autoComplete="address-level2" placeholder="e.g. Whitefield, or New Jersey, USA" />
      </div>

      <button type="submit" className="btn btn-whatsapp enquiry-submit">
        <WhatsAppIcon size={18} color="#ffffff" />
        <span>Send Enquiry on WhatsApp</span>
      </button>
      <p className="enquiry-note">
        Opens WhatsApp with your details filled in. Prefer to talk?{' '}
        <a href={`tel:${PHONE}`} id={`${id}-call`}>Call {PHONE_DISPLAY}</a>
      </p>
    </form>
  );
}
