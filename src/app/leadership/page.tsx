import type { Metadata } from 'next';
import { Linkedin, Mail, ShieldCheck, Users, Brain, Scale, Search } from 'lucide-react';

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
    title: 'AI operating stack',
    Icon: Brain,
    body: 'The three-role stack, brain, hands, eyes, that lets a ten-property portfolio run without full-time employees.',
    bullets: [
      'ChatGPT Projects, strategy and memory',
      'Manus, multi-hour execution',
      'Claude, review and compliance',
    ],
  },
  {
    n: 'LAYER 04',
    title: 'Distribution & data',
    Icon: Search,
    body: 'The owned-traffic discipline. Schema, sitemaps, citations, and structured data are managed centrally so every property is built to be both indexed and quotable.',
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

const founderFacts = [
  { label: 'Role', value: 'Founder, CEO & Chair' },
  { label: 'Based', value: 'North Vancouver, BC' },
  { label: 'Founded', value: '2025' },
  { label: 'Properties', value: '4 of 10 indexed' },
  { label: 'External capital', value: 'None' },
  { label: 'Operating model', value: 'AI-native, zero full-time employees' },
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
            five-layer model designed to operate ten owned-traffic properties
            at institutional standard, without full-time headcount at the
            holdco level.
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--color-divider)',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    background:
                      'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
                    color: 'var(--color-text-inverse)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Boska, Georgia, serif',
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  AK
                </div>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text)' }}>
                    Amirali Karimi
                  </p>
                  <p style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>
                    Profile
                  </p>
                </div>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                {founderFacts.map((f, i) => (
                  <li
                    key={f.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1.4fr',
                      gap: '0.75rem',
                      padding: '0.7rem 0',
                      borderBottom: i < founderFacts.length - 1 ? '1px solid var(--color-divider)' : 'none',
                      alignItems: 'baseline',
                    }}
                  >
                    <span style={{ fontFamily: mono, fontSize: '0.7rem', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {f.label}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a
                  href="https://www.linkedin.com/in/amirali-karimi-405766199"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.5rem 0.85rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.825rem',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                  }}
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href="mailto:hello@boostcommerce.ca"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.5rem 0.85rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.825rem',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                  }}
                >
                  <Mail size={14} /> Email
                </a>
              </div>
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
                  Boost Commerce Group is a holding company for digital
                  information businesses, directories, lead-gen sites, and
                  media properties whose distribution is owned, not rented.
                  Every property in the portfolio earns its traffic from
                  search engines and answer engines, channels where the user
                  has already declared intent.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  BCG runs with zero full-time employees. The stack is three
                  layers. ChatGPT Projects holds the context, Manus does the
                  execution, Claude handles the review. A founder plus the
                  stack is the entire operating company. The four properties
                  in the portfolio today all run on that architecture, and
                  the cap of ten exists because a founder plus the stack can
                  supervise ten properties at the institutional standard we
                  set, and not much more than ten.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  BCG is domiciled in British Columbia. The regulatory
                  surface in BC is clean, the categories we work in are
                  unambiguously local, and the properties are taxed and
                  compliant in the province. BCG is not a mailbox firm.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  Permanent capital is the discipline behind the strategy.
                  Without a clock, pricing is fair, content is patient, and
                  the problems chosen are the ones that will still be
                  searched for in ten years and cited by models in twenty.
                  Ten slots, held indefinitely.
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
