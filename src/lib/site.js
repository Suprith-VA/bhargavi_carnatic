// Single source of truth for business details, URLs and page metadata.
// Keep NAP (name, address, phone) identical to the Google Business Profile.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://bhargavicarnatic.vercel.app').replace(/\/$/, '');
export const SITE_HOST = new URL(SITE_URL).host;

// Short brand name used for Google's "site name" (WebSite schema, og:site_name)
export const SITE_NAME = 'Bhargavi Bhadri Carnatic Music';
// Exact business name on the Google Business Profile
export const BUSINESS_NAME = 'Carnatic Music Classes by Bhargavi Bhadri';
export const TEACHER_NAME = 'Bhargavi Bhadri';

export const PHONE = '+919731891537';
export const PHONE_DISPLAY = '+91 97318 91537';
export const EMAIL = 'bhargavianand1974@gmail.com';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61578842536998';

export const FOUNDING_DATE = '2016-04-11';
export const YEARS_TEACHING = Math.floor((Date.now() - new Date(FOUNDING_DATE).getTime()) / (365.25 * 24 * 60 * 60 * 1000));

export const ADDRESS = {
  street: 'B002, Block B, Mukunda Nandanam, Kodigehalli Main Rd, Ayyappa Nagar, Krishnarajapuram',
  city: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560067',
  country: 'IN',
};
export const ADDRESS_LINES = [
  'B002, Block B, Mukunda Nandanam',
  'Kodigehalli Main Rd, Ayyappa Nagar',
  'Krishnarajapuram, Bengaluru 560067',
];
// Pin position of the Google Business Profile listing (plus code 2P4H+765)
export const GEO = { lat: 13.0056392, lng: 77.728725 };

export const HOURS = {
  days: 'Monday to Saturday',
  dayList: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '10:00',
  closes: '20:30',
  time: '10:00 AM to 8:30 PM',
  display: 'Mon–Sat, 10:00 AM – 8:30 PM',
};

// Google Business Profile: Mukunda Nandanam listing
const PLACE_ID = 'ChIJBdznj6ERrjsRGi43X6PDOdk';
const MAPS_CID = '15652757086347406874';
export const GOOGLE_MAPS_URL = `https://maps.google.com/?cid=${MAPS_CID}`;
export const GOOGLE_REVIEWS_URL = `https://search.google.com/local/reviews?placeid=${PLACE_ID}`;
export const MAP_EMBED_URL = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!3m2!1m1!4s${MAPS_CID}`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_NAME)}&destination_place_id=${PLACE_ID}`;

const WHATSAPP_NUMBER = '919731891537';
export const DEFAULT_WHATSAPP_MESSAGE = 'Hi Bhargavi, I am interested in Carnatic music classes. Please share the batch timings and fees.';

export function whatsappLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SERVICE_AREAS = [
  'KR Puram',
  'TC Palya',
  'Hoodi',
  'Kodigehalli',
  'Medahalli',
  'Ayyappa Nagar',
  'Whitefield',
  'Mahadevapura',
  'Kadugodi',
  'Bhattarahalli',
  'Basavanapura',
  'Hale Devasandra',
  'White City Layout',
];

export const PROGRAMS = [
  {
    slug: 'carnatic-music-classes-for-kids',
    name: 'Carnatic Music Classes for Kids',
    blurb: 'Junior syllabus for children: varisais, alankaras, geethams and first songs.',
  },
  {
    slug: 'online-carnatic-music-classes',
    name: 'Online Carnatic Music Classes',
    blurb: 'Live video classes for students in the USA, UAE, Australia, Europe and India.',
  },
  {
    slug: 'carnatic-music-classes-kr-puram',
    name: 'Classes in KR Puram, Ayyappa Nagar & Hoodi',
    blurb: 'In-person batches on Kodigehalli Main Road, Ayyappa Nagar.',
  },
  {
    slug: 'devotional-songs-bhajan-classes',
    name: 'Devotional Songs & Bhajan Classes',
    blurb: 'Bhajans, devaranamas, shlokas and prayer songs in four languages.',
  },
  {
    slug: 'bhavageethe-folk-song-classes',
    name: 'Bhavageethe & Folk Song Classes',
    blurb: 'Kannada light music and Janapada geethe for stage and competitions.',
  },
  {
    slug: 'carnatic-music-exam-preparation',
    name: 'Carnatic Music Exam Preparation',
    blurb: 'Junior and senior grade theory and practical coaching.',
  },
];

const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Carnatic Music Classes by Bhargavi Bhadri, Bengaluru & Online',
};

// Builds complete per-page metadata. Nested fields such as openGraph are not
// merged with the root layout, so every page gets its own canonical and OG tags.
export function pageMetadata({ title, description, path, absoluteTitle = false }) {
  const socialTitle = absoluteTitle ? title : `${title} | ${TEACHER_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
