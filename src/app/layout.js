import './globals.css';

export const metadata = {
  title: 'Carnatic Music Classes by Bhargavi Bhadri | Bengaluru & Online',
  description:
    'Learn Carnatic music, devotional songs, Bhavageethe, folk songs & prayer songs with expert teacher Bhargavi Bhadri. Online & offline classes in Bengaluru (Krishnarajapuram). Students from USA, Dubai, Australia, Europe. 500+ students trained since 2016.',
  keywords: [
    'Carnatic music classes Bengaluru',
    'Carnatic music online classes',
    'Bhargavi Bhadri music teacher',
    'Carnatic vocal classes Krishnarajapuram',
    'Carnatic music classes Kodigehalli',
    'Carnatic music classes Hoodi',
    'devotional songs class Bengaluru',
    'Bhavageethe classes',
    'folk songs music class',
    'music classes for kids Bengaluru',
    'online Carnatic music classes India',
    'Carnatic music exam preparation',
    'music school Ayyappa Nagar Bengaluru',
    'Indian classical music classes',
    'Carnatic music classes USA',
    'Carnatic music classes Dubai',
    'Carnatic music classes Australia',
  ],
  authors: [{ name: 'Bhargavi Bhadri' }],
  creator: 'Bhargavi Bhadri',
  publisher: 'Carnatic Music Classes by Bhargavi Bhadri',
  openGraph: {
    title: 'Carnatic Music Classes by Bhargavi Bhadri',
    description:
      'Expert Carnatic vocal training since 2016. Online & offline classes, group sessions & one-on-one lessons. 500+ students trained worldwide.',
    url: 'https://www.bhargavicarnatic.com',
    siteName: 'Carnatic Music Classes by Bhargavi Bhadri',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Carnatic Music Classes by Bhargavi Bhadri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carnatic Music Classes by Bhargavi Bhadri',
    description:
      'Expert Carnatic vocal training since 2016. Online & offline classes worldwide.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.bhargavicarnatic.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#C8822A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicSchool',
              name: 'Carnatic Music Classes by Bhargavi Bhadri',
              description:
                'Carnatic music vocal training, devotional songs, Bhavageethe, folk songs, and prayer songs. Online and offline classes.',
              url: 'https://www.bhargavicarnatic.com',
              logo: 'https://www.bhargavicarnatic.com/logo.png',
              telephone: '+919731891537',
              email: '',
              foundingDate: '2016-04-11',
              address: {
                '@type': 'PostalAddress',
                streetAddress:
                  '2P4H+765, B002, Mukunda Nandanam B block, Kodigehalli Main Rd, Ayyappa Nagar',
                addressLocality: 'Krishnarajapuram',
                addressRegion: 'Karnataka',
                postalCode: '560067',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 13.0225,
                longitude: 77.6935,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '15:00',
                  closes: '20:30',
                },
              ],
              priceRange: '₹₹',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '9',
              },
              areaServed: [
                'Bengaluru',
                'Krishnarajapuram',
                'Hoodi',
                'Kodigehalli',
                'Medahalli',
                'Ayyappa Nagar',
                'Worldwide (Online)',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Music Classes',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Junior Carnatic Music Classes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Senior Carnatic Music Classes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Devotional Songs',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bhavageethe',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Folk Songs',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
