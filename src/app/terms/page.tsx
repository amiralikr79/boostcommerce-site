import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms under which Boost Commerce Group makes boostcommerce.ca available. Read before using the site.',
  alternates: { canonical: 'https://www.boostcommerce.ca/terms' },
};

const mono =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const sections: { heading: string; body: string[] }[] = [
  {
    heading: '1. Acceptance',
    body: [
      'By accessing www.boostcommerce.ca you agree to these Terms of Use. If you do not agree, do not use the site. These terms are governed by the laws of the Province of British Columbia and the federal laws of Canada applicable therein.',
    ],
  },
  {
    heading: '2. Nature of the site',
    body: [
      'boostcommerce.ca is an informational website about Boost Commerce Group and its portfolio companies. Nothing on this site constitutes legal, financial, medical, tax, or investment advice. The site does not extend an offer to buy or sell securities and does not solicit investment. BCG takes no external capital.',
    ],
  },
  {
    heading: '3. Portfolio companies',
    body: [
      'Each portfolio unit operates on its own domain under its own terms and conditions. Content on boostcommerce.ca describing a portfolio company is a summary only; the operating terms of that company live on its own site. Where the two differ, the operating company\u2019s terms govern transactions with that company.',
    ],
  },
  {
    heading: '4. No regulated services',
    body: [
      'BCG itself is not a mortgage broker, lender, healthcare provider, law firm, or regulated supplier. Content on this site about those categories is published for general information only. Seek licensed counsel in the relevant jurisdiction before making decisions that would normally require one.',
    ],
  },
  {
    heading: '5. Intellectual property',
    body: [
      'All content on boostcommerce.ca including text, layout, code, and brand marks is owned by Boost Commerce Group except where credited. You may quote short excerpts with attribution for editorial purposes. You may not reproduce substantial portions without prior written consent. Press and research use is expressly permitted under the terms on the /press page.',
    ],
  },
  {
    heading: '6. Acceptable use',
    body: [
      'You may not use the site to transmit malware, attempt unauthorized access, scrape content for resale, misrepresent your identity in correspondence with BCG, or impersonate the company or its founder. We reserve the right to block access at our discretion.',
    ],
  },
  {
    heading: '7. Disclaimers',
    body: [
      'The site is provided "as is" and "as available". We make no warranties of availability, completeness, or fitness for any particular purpose. Statements about portfolio operations, metrics, and roadmap items reflect our best information at publication time and can change without notice.',
    ],
  },
  {
    heading: '8. Limitation of liability',
    body: [
      'To the maximum extent permitted by law, BCG is not liable for indirect, incidental, or consequential damages arising from your use of the site. Our aggregate liability for any direct claim is limited to one hundred Canadian dollars.',
    ],
  },
  {
    heading: '9. External links',
    body: [
      'The site links to third-party websites including portfolio units, founder profiles, and reference materials. BCG is not responsible for the content, terms, or privacy practices of third-party sites.',
    ],
  },
  {
    heading: '10. Changes',
    body: [
      'We may update these terms at any time. Material changes will be noted at the top of the page for at least thirty days. Continued use of the site after an update constitutes acceptance.',
    ],
  },
  {
    heading: '11. Contact',
    body: [
      'Legal &amp; compliance, Boost Commerce Group. North Vancouver, British Columbia. hello@boostcommerce.ca.',
    ],
  },
];

export default function TermsPage() {
  return (
    <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className="container-narrow">
        <p style={{ fontFamily: mono, fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Legal &middot; Terms
        </p>
        <h1
          style={{
            fontFamily: 'Boska, Georgia, serif',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          Terms of Use
        </h1>
        <p style={{ fontFamily: mono, fontSize: '0.8rem', color: 'var(--color-text-faint)', marginBottom: '2.5rem' }}>
          Effective date: April 2026 &middot; Last updated: April 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                {s.heading}
              </h2>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: 1.8,
                    marginBottom: '0.75rem',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
