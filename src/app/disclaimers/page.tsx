import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimers',
  description:
    'Editorial, regulatory, and category-specific disclaimers for Boost Commerce Group and its portfolio.',
  alternates: { canonical: 'https://www.boostcommerce.ca/disclaimers' },
};

const mono =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const sections: { heading: string; body: string[] }[] = [
  {
    heading: 'General editorial disclaimer',
    body: [
      'Content on boostcommerce.ca is published for general information. Statements about markets, operations, and portfolio metrics reflect BCG\u2019s best understanding at the date of publication and can change without notice. Readers should verify anything that informs a material decision.',
    ],
  },
  {
    heading: 'Not legal advice',
    body: [
      'Content referencing legal topics, document templates, provincial regulation, or corporate governance is not legal advice and does not create a lawyer-client relationship. ZeroLawyer.ca sells province-aware templates drafted by licensed Canadian counsel; templates are not a substitute for counsel on complex matters. Consult a licensed lawyer in your province before relying on any template or BCG content for a real-world legal decision.',
    ],
  },
  {
    heading: 'Not financial or investment advice',
    body: [
      'Content referencing private lending, mortgage products, rate bands, or lender tiers is informational and is not financial, mortgage, or investment advice. BCPrivateLoans.ca is a lender-match platform, not a regulated broker and not a direct lender. Rate figures are indicative and vary by scenario, LTV, and lender. Consult a licensed mortgage professional and your own counsel before entering into any lending arrangement. BCG does not solicit investment in itself or its portfolio units.',
    ],
  },
  {
    heading: 'Not medical advice',
    body: [
      'Content referencing private healthcare clinics, cross-border procedures, wait-times, or cost comparisons is informational only and is not medical advice. BCMedicalAccess.ca does not deliver care, does not diagnose, and does not recommend specific providers. Procedure economics and clinic listings are sourced and dated; they can be out of date. Always consult a licensed physician before making a healthcare decision.',
    ],
  },
  {
    heading: 'Industrial directory disclaimer',
    body: [
      'BCIndustrialSupply.ca is a directory and not a transaction layer. Listings are manually verified on a quarterly basis; fit, pricing, and capability still need to be confirmed by the buyer with the supplier directly. Paid placements, where present, are clearly labelled.',
    ],
  },
  {
    heading: 'Forward-looking statements',
    body: [
      'The "roadmap" panels published on unit pages describe intended future work. They are not commitments. Items listed as planned can be delayed, reprioritised, or cut.',
    ],
  },
  {
    heading: 'Acquisition inbound',
    body: [
      'The /acquisitions page describes the categories and structure under which BCG evaluates acquisition opportunities. Nothing on that page constitutes a binding offer or price commitment. All deals are subject to diligence, definitive agreement, and mutual sign-off.',
    ],
  },
  {
    heading: 'Accuracy &amp; corrections',
    body: [
      'If you find a factual error in any BCG content, email hello@boostcommerce.ca with a link to the page and the correction. Verified corrections are applied promptly and the "Last updated" date on the page is revised.',
    ],
  },
  {
    heading: 'Jurisdiction',
    body: [
      'Content on boostcommerce.ca is written from a British Columbia, Canada perspective. Laws, regulations, and market conditions vary by jurisdiction. Readers outside BC or Canada should not assume applicability.',
    ],
  },
];

export default function DisclaimersPage() {
  return (
    <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className="container-narrow">
        <p style={{ fontFamily: mono, fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Legal &middot; Disclaimers
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
          Disclaimers
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
