import type { Metadata } from 'next';
import { ShieldCheck, Users, Brain, Scale, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Boost Commerce Group is operator-led and founder-owned. Amirali Karimi and the four-layer governance model behind a portfolio of owned-traffic digital properties.',
  alternates: { canonical: 'https://www.boostcommerce.ca/leadership' },
};

const mono =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const eyebrow: React.CSSProperties = {
  fontFamily: mono,
  fontSize: '0.72rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  color: 'var(--color-primary)',
};
const panel: React.CSSProperties = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-lg)',
  padding: '2rem',
};
const gridBg: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(var(--color-divider) 1px, transparent 1px), linear-gradient(90deg, var(--color-divider) 1px, transparent 1px)',
  backgroundSize: '44px 44px',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
};

const layers = [
  {
    n: 'LAYER 01',
    title: 'Board',
    Icon: ShieldCheck,
    body: 'The governing body of Boost Commerce Group. Founder-led, with capacity for an independent observer when scale requires it.',
    bullets: [
      'Amirali Karimi (Founder, CEO, Chair)',
      'Independent observer seat, available',
      'Quarterly governance review',
    ],
  },
  {
    n: 'LAYER 02',
    title: 'Property principals',
    Icon: Users,
    body: 'Each property has a principal with P&L ownership. Principals run day-to-day operations and own search and answer-engine performance for their unit.',
    bullets: [
      'Property-level P&L accountability',
      'Aligned through long-term economics',
      'Owns ranking, citation, and conversion metrics',
    ],
  },
  {
    n: 'LAYER 03',
    title: 'Operating systems',
    Icon: Brain,
    body: 'A proprietary AI-assisted operating model that lets a small team run a multi-property portfolio at institutional standard, without a holdco-level headcount footprint.',
    bullets: [
      'Strategy, memory, and category context',
      'Production execution and editorial workflow',
      'Review, compliance, and citation audit',
    ],
  },
  {
    n: 'LAYER 04',
    title: 'Distribution & authority',
    Icon: Search,
    body: 'The publishing discipline. Schema, sitemaps, citations, and structured data are managed centrally so every property is built to be ranked, quoted, and trusted.',
    bullets: [
      'Schema and structured-data standards',
      'Index health and crawl monitoring',
      'Answer-engine citation tracking',
    ],
  },
  {
    n: 'LAYER 05',
    title: 'Advisors & counsel',
    Icon: Scale,
    body: 'Legal, accounting, and compliance partners. Boundaries enforced before scale.',
    bullets: [
      'External Canadian counsel, per-property',
      'Accounting and tax, BC-licensed firm',
      'Privacy and compliance review quarterly',
    ],
  },
];

const holdcoFacts = [
  { label: 'Entity', value: 'British Columbia holding company' },
  { label: 'Founded', value: '2025' },
  { label: 'Ownership', value: 'Founder-owned, privately held' },
  { label: 'External capital', value: 'None' },
  { label: 'Debt', value: 'None' },
  { label: 'Hold period', value: 'Indefinite' },
  { label: 'Portfolio cap', value: '10 properties' },
  { label: 'Slots filled', value: '4 of 10' },
  { label: 'Asset class', value: 'High-authority information assets' },
  { label: 'Revenue model', value: 'Organic traffic + targeted advertising' },
  { label: 'Acquisition channel', value: 'Direct, no brokers' },
];

export default function LeadershipPage() {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amirali Karimi',
    jobTitle: 'Founder, CEO & Chair',
    url: 'https://www.boostcommerce.ca/leadership',
    sameAs: ['https://www.linkedin.com/in/amirali-karimi-405766199'],
    worksFor: {
      '@type': 'Organization',
      name: 'Boost Commerce Group',
      url: 'https://www.boostcommerce.ca',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.boostcommerce.ca' },
      { '@type': 'ListItem', position: 2, name: 'Leadership', item: 'https://www.boostcommerce.ca/leadership' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', inset: 0, ...gridBg, opacity: 0.5, pointerEvents: 'none' }} />
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-100px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(30,61,50,0.14), transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="container"
          style={{ position: 'relative', paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Leadership &amp; governance</p>
          <h1
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              maxWidth: '18ch',
            }}
          >
            Operator-led. Founder-owned.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '62ch', lineHeight: 1.65 }}>
            Boost Commerce Group is private, founder-owned, and governed by a
            five-layer model designed to operate a ten-property portfolio of
            high-authority information assets at institutional standard.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'start' }}
            className="md:grid-cols-[320px_1fr]"
          >
            <aside
              style={{
                ...panel,
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'sticky',
                top: '88px',
              }}
            >
              <div
                style={{
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-divider)',
                }}
              >
                <p style={{ fontFamily: mono, fontSize: '0.7rem', color: 'var(--color-text-faint)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  Holding company
                </p>
                <p style={{ fontFamily: 'Boska, Georgia, serif', fontSize: '1.125rem', fontWeight: 500, color: 'var(--color-text)', letterSpacing: '-0.01em' }}>
                  Boost Commerce Group
                </p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                {holdcoFacts.map((f, i) => (
                  <li
                    key={f.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.5fr',
                      gap: '0.75rem',
                      padding: '0.65rem 0',
                      borderBottom: i < holdcoFacts.length - 1 ? '1px solid var(--color-divider)' : 'none',
                      alignItems: 'baseline',
                    }}
                  >
                    <span style={{ fontFamily: mono, fontSize: '0.68rem', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {f.label}
                    </span>
                    <span style={{ fontFamily: mono, fontSize: '0.82rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)', letterSpacing: '0.04em', paddingTop: '0.5rem', borderTop: '1px solid var(--color-divider)' }}>
                <a href="mailto:hello@boostcommerce.ca" style={{ color: 'var(--color-text-faint)', textDecoration: 'none' }}>
                  hello@boostcommerce.ca
                </a>
              </p>
            </aside>
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Founder</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 500, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                Amirali Karimi
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
                Founder, CEO &amp; Chair &middot; North Vancouver, BC
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.75 }}>
                  Amirali Karimi founded Boost Commerce Group in 2025 around
                  a single conviction: the most valuable digital asset of
                  the next decade is the property that search engines rank
                  first and answer engines cite by name. Not the loudest
                  brand. Not the largest team. The canonical source.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  BCG was built to own a small portfolio of those
                  properties, permanently. Every property earns its
                  audience in regulated categories where authority matters,
                  and is monetized through organic traffic and targeted
                  advertising. The cap of ten is a ceiling, not a goal.
                  Each slot is reserved for a property that earns it, and
                  once a slot is filled, it stays.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  There is no fund. There is no clock. There is no plan to
                  sell. The work is to own the right ten properties and to
                  be the steward those properties deserve, for as long as
                  the categories they cover continue to matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance grid */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Governance</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              Five layers, one operating model
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            {layers.map((l) => (
              <div key={l.n} style={panel}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-primary-highlight)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <l.Icon size={20} />
                  </div>
                  <div>
                    <p style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)', letterSpacing: '0.14em', marginBottom: '0.25rem' }}>
                      {l.n}
                    </p>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 500 }}>{l.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {l.body}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {l.bullets.map((b) => (
                    <li
                      key={b}
                      style={{ fontSize: '0.875rem', color: 'var(--color-text)', display: 'flex', gap: '0.5rem' }}
                    >
                      <span style={{ color: 'var(--color-primary)', fontFamily: mono, fontSize: '0.8rem' }}>&rsaquo;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
