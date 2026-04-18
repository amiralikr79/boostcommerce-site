import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Boost Commerce Group collects, uses, and protects personal information under British Columbia PIPA and federal PIPEDA.',
  alternates: { canonical: 'https://www.boostcommerce.ca/privacy' },
};

const mono =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const sections: { heading: string; body: string[] }[] = [
  {
    heading: '1. Who we are',
    body: [
      'Boost Commerce Group ("BCG", "we", "our") is a private holding company incorporated and operating in British Columbia, Canada. Our registered operating address is North Vancouver, British Columbia. Questions about this policy or your information can be sent to hello@boostcommerce.ca.',
    ],
  },
  {
    heading: '2. Scope of this policy',
    body: [
      'This policy covers information collected through www.boostcommerce.ca and any direct correspondence with BCG. Each portfolio unit operates under its own privacy policy on its own domain (for example bcprivateloans.ca, bcmedicalaccess.ca, zerolawyer.ca, bcindustrialsupply.ca). Use of a unit site is governed by that unit\u2019s policy, not this one.',
    ],
  },
  {
    heading: '3. Information we collect',
    body: [
      'On boostcommerce.ca we collect only what you send us. That includes: the email address and any details you include when you write to hello@boostcommerce.ca or a mailto link; aggregate traffic data from privacy-respecting analytics (no fingerprinting, no third-party advertising pixels); and log data from our hosting provider for security and abuse monitoring.',
      'We do not sell email addresses. We do not enroll you in a marketing list without an explicit opt-in. We do not set advertising cookies.',
    ],
  },
  {
    heading: '4. How we use information',
    body: [
      'We use the information you send us to reply to your message, evaluate acquisition inbound, respond to media requests, and maintain basic business records. We retain correspondence for as long as needed to operate the business and meet any applicable Canadian record-keeping obligations.',
    ],
  },
  {
    heading: '5. Legal basis under BC PIPA and PIPEDA',
    body: [
      'We rely on your consent when you email us and on our legitimate business interest for abuse monitoring and analytics. You can withdraw consent at any time by writing to hello@boostcommerce.ca. Withdrawal does not affect information already processed.',
    ],
  },
  {
    heading: '6. Sharing',
    body: [
      'We do not share personal information with third parties except where required to run the site (hosting, email delivery) or to comply with law. We do not transfer personal information outside Canada except insofar as our hosting providers operate international infrastructure, in which case standard contractual protections apply.',
    ],
  },
  {
    heading: '7. Your rights',
    body: [
      'Under BC PIPA and federal PIPEDA you have the right to access your information, request correction, and ask for deletion subject to legal and operational retention requirements. Write to hello@boostcommerce.ca and we will respond within thirty days.',
    ],
  },
  {
    heading: '8. Security',
    body: [
      'We take reasonable technical and administrative measures to protect information. We cannot guarantee absolute security of any transmission over the internet. Do not send sensitive personal information (financial account numbers, health information) by email. Use secure channels provided on the relevant unit site if applicable.',
    ],
  },
  {
    heading: '9. Children',
    body: [
      'This site is not directed at children under 13 and we do not knowingly collect personal information from them. If you believe we have, write to hello@boostcommerce.ca and we will delete it.',
    ],
  },
  {
    heading: '10. Updates',
    body: [
      'We may update this policy. The effective date below is the most recent revision. Material changes will be noted at the top of the page for at least thirty days.',
    ],
  },
  {
    heading: '11. Contact',
    body: [
      'Privacy Officer, Boost Commerce Group. North Vancouver, British Columbia, Canada. hello@boostcommerce.ca.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className="container-narrow">
        <p style={{ fontFamily: mono, fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Legal &middot; Privacy
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
          Privacy Policy
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
