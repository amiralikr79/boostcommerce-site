import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.boostcommerce.ca'),
  title: {
    default: 'Boost Commerce Group',
    template: '%s | Boost Commerce Group',
  },
  description:
    'A British Columbia holding company that operates a portfolio of high-authority information assets in regulated Canadian categories. Revenue is generated through organic traffic and targeted advertising. Privately held. Capped at ten properties. Held indefinitely.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.boostcommerce.ca',
    siteName: 'Boost Commerce Group',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.boostcommerce.ca',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Boost Commerce Group',
              url: 'https://www.boostcommerce.ca',
              logo: 'https://www.boostcommerce.ca/favicon.svg',
              description:
                'A British Columbia holding company that operates a portfolio of high-authority information assets in regulated Canadian categories.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'North Vancouver',
                addressRegion: 'BC',
                addressCountry: 'CA',
              },
              founder: {
                '@type': 'Person',
                name: 'Amirali Karimi',
                jobTitle: 'CEO and Chair',
                url: 'https://www.boostcommerce.ca/leadership',
              },
              sameAs: [
                'https://www.linkedin.com/in/amirali-karimi-405766199',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
