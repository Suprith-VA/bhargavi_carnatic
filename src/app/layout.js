import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import LeadTracker from '@/components/LeadTracker';
import JsonLd from '@/components/JsonLd';
import { businessSchema } from '@/lib/schema';
import { SITE_URL, SITE_NAME, TEACHER_NAME } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

// Pages set their own canonical/openGraph via pageMetadata() in lib/site.js.
// Do not add alternates.canonical here: child pages would inherit it.
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Carnatic Music Classes in Bengaluru & Online | Bhargavi Bhadri',
    template: `%s | ${TEACHER_NAME}`,
  },
  description:
    'Carnatic vocal classes for kids and adults with Bhargavi Bhadri. In-person batches in KR Puram, Bengaluru and live online classes worldwide.',
  applicationName: SITE_NAME,
  authors: [{ name: TEACHER_NAME }],
  creator: TEACHER_NAME,
  publisher: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'j-Tuh78czQHa6bh7i0fmCSh1JcH0s3x4SsTO66QI5w8',
  },
};

export const viewport = {
  themeColor: '#C8822A',
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <JsonLd data={businessSchema()} />
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
        <FloatingContactButtons />
        <LeadTracker />
      </body>
    </html>
  );
}
