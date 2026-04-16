import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { companies } from '@/lib/companies';
import './globals.css';

const SITE = 'https://www.boostcommerce.ca';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Boost Commerce Group — Permanent capital for BC digital businesses',
    template: '%s · Boost Commerce Group',
  },
  description:
    'Boost Commerce Group is a British Columbia holding company. We acquire, build, and operate AI-native digital businesses serving real local needs. Portfolio capped at 10.',
  keywords: [
    'Boost Commerce Group',
    'BCG holding company',
    'British Columbia holding company',
    'permanent capital',
    'AI-native operations',
    'Amirali Karimi',
    'ZeroLawyer',
    'BCPrivateLoans',
    'BCIndustrialSupply',
    'BCMedicalAccess',
  ],
  authors: [{ name: 'Amirali Karimi', url: `${SITE}/leadership` }],
  creator: 'Boost Commerce Group Inc.',
  publisher: 'Boost Commerce Group Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: SITE,
    siteName: 'Boost Commerce Group',
    title: 'Boost Commerce Group — Permanent capital for BC digital businesses',
    description:
      'A British Columbia holding company operating AI-native digital units. ZeroLawyer, BCPrivateLoans, BCIndustrialSupply, BCMedicalAccess.',
    images: [
      { url: '/og-default.png', width: 1200, height: 630, alt: 'Boost Commerce Group' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boost Commerce Group',
    description: 'Permanent capital for focused BC digital businesses.',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  alternates: { canonical: SITE },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}#org`,
    name: 'Boost Commerce Group Inc.',
    alternateName: 'BCG',
    legalName: 'Boost Commerce Group Inc.',
    url: SITE,
    logo: `${SITE}/favicon.svg`,
    description:
      'British Columbia holding company operating AI-native digital businesses. Permanent capital, portfolio capped at 10 companies.',
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    founder: {
      '@type': 'Person',
      name: 'Amirali Karimi',
      jobTitle: 'Founder, CEO & Chair',
      url: `${SITE}/leadership`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'North Vancouver',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
    },
    sameAs: ['https://www.linkedin.com/in/amirali-karimi-405766199'],
    subOrganization: companies.map((c) => ({
      '@type': 'Organization',
      name: c.name,
      url: c.url,
      description: c.tagline,
    })),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href={SITE} />
        <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafaf9" media="(prefers-color-scheme: light)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          value={{ dark: 'dark', light: 'light' }}
        >
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
