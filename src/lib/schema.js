import {
  SITE_URL,
  SITE_HOST,
  SITE_NAME,
  BUSINESS_NAME,
  TEACHER_NAME,
  PHONE,
  EMAIL,
  FACEBOOK_URL,
  FOUNDING_DATE,
  ADDRESS,
  GEO,
  HOURS,
  GOOGLE_MAPS_URL,
  SERVICE_AREAS,
  PROGRAMS,
} from '@/lib/site';

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const TEACHER_ID = `${SITE_URL}/#teacher`;

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MusicSchool'],
    '@id': BUSINESS_ID,
    name: BUSINESS_NAME,
    alternateName: SITE_NAME,
    description:
      'Carnatic vocal music classes for kids and adults by Bhargavi Bhadri: junior and senior syllabus, devotional songs, Bhavageethe, folk songs and exam preparation. In-person classes in KR Puram, Bengaluru and live online classes worldwide.',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/gallery/gallery-5.jpg`, `${SITE_URL}/gallery/gallery-1.jpg`],
    telephone: PHONE,
    email: EMAIL,
    foundingDate: FOUNDING_DATE,
    founder: { '@id': TEACHER_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: HOURS.opens,
        closes: HOURS.closes,
      },
    ],
    priceRange: '₹₹',
    areaServed: [...SERVICE_AREAS.map((name) => `${name}, Bengaluru`), 'Worldwide (online classes)'],
    sameAs: [FACEBOOK_URL, GOOGLE_MAPS_URL],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Music Classes',
      itemListElement: PROGRAMS.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: p.name, url: `${SITE_URL}/${p.slug}` },
      })),
    },
  };
}

// Must be on the home page for Google to show the site name instead of "Vercel".
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    alternateName: [BUSINESS_NAME, 'Bhargavi Carnatic', SITE_HOST],
    url: `${SITE_URL}/`,
    inLanguage: 'en-IN',
    publisher: { '@id': BUSINESS_ID },
  };
}

export function teacherSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': TEACHER_ID,
    name: TEACHER_NAME,
    alternateName: 'ಭಾರ್ಗವಿ ಭದ್ರಿ',
    jobTitle: 'Carnatic Vocal Music Teacher',
    url: `${SITE_URL}/#about`,
    image: `${SITE_URL}/logo.png`,
    worksFor: { '@id': BUSINESS_ID },
    knowsAbout: ['Carnatic music', 'Carnatic vocal', 'Bhavageethe', 'Devotional music', 'Janapada geethe', 'Music examinations'],
    address: { '@type': 'PostalAddress', addressLocality: ADDRESS.city, addressRegion: ADDRESS.region, addressCountry: ADDRESS.country },
  };
}

export function serviceSchema({ name, description, path, areaServed }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: 'Music lessons',
    provider: { '@id': BUSINESS_ID },
    areaServed,
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
