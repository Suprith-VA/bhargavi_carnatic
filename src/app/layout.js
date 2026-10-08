import Script from 'next/script';
import './globals.css';
import MobileFloatingButtons from '@/components/MobileFloatingButtons';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhargavicarnatic.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Carnatic Music Classes by Bhargavi Bhadri | Bengaluru & Online',
  description:
    'Learn Carnatic music, devotional songs, Bhavageethe, folk songs & prayer songs with expert teacher Bhargavi Bhadri. Online & offline classes in Bengaluru (Krishnarajapuram). Students from USA, Dubai, Australia, Europe. 4,000+ students trained since 2016.',
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
    title: 'Carnatic Music Classes by Bhargavi Bhadri | Bengaluru & Online',
    description:
      'Expert Carnatic vocal training since 2016. Online & offline classes, group sessions & one-on-one lessons. 4,000+ students trained worldwide.',
    url: siteUrl,
    siteName: 'Carnatic Music Classes by Bhargavi Bhadri',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carnatic Music Classes by Bhargavi Bhadri, Bengaluru & Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carnatic Music Classes by Bhargavi Bhadri',
    description:
      'Expert Carnatic vocal training since 2016. Online & offline classes worldwide. 4,000+ students trained.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'j-Tuh78czQHa6bh7i0fmCSh1JcH0s3x4SsTO66QI5w8',
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
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
                'Carnatic music vocal training, devotional songs, Bhavageethe, folk songs, and prayer songs. Online and offline classes in Bengaluru and globally.',
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              image: `${siteUrl}/og-image.jpg`,
              telephone: '+919731891537',
              email: 'bhargavianand1974@gmail.com',
              foundingDate: '2016-04-11',
              sameAs: [
                'https://www.facebook.com/profile.php?id=61578842536998',
              ],
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
      <body>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {children}
        <MobileFloatingButtons />
      </body>
    </html>
  );
}
