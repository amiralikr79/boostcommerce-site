import type { Metadata } from 'next';
import { Linkedin, Mail, ShieldCheck, Users, Brain, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Boost Commerce Group is operator-led and founder-owned. Meet Amirali Karimi and the four-layer governance model behind the portfolio.',
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
    body: 'The governing body of Boost Commerce Group. Independent oversight for material capital decisions.',
    bullets: [
      'Amirali Karimi \u2014 Founder, CEO, Chair',
      'Independent observer seat (reserved)',
      'Quarterly governance review',
    ],
  },
  {
    n: 'LAYER 02',
    title: 'Operating principals',
    Icon: Users,
    body: 'Each unit has an operating principal with P&L ownership. Principals run the day-to-day.',
    bullets: [
      'Unit-level P&L accountability',
      'Aligned through long-term economics',
      'Supported by shared BCG services',
    ],
  },
  {
    n: 'LAYER 03',
    title: 'AI operating stack',
    Icon: Brain,
    body: 'The three-role stack \u2014 brain, hands, eyes \u2014 that lets a ten-unit portfolio run without full-time employees.',
    bullets: [
      'ChatGPT Projects \u2014 strategy and memory',
      'Manus \u2014 multi-hour execution',
      'Claude \u2014 review and compliance',
    ],
  },
  {
    n: 'LAYER 04',
    title: 'Advisors & counsel',
    Icon: Scale,
    body: 'Legal, accounting, and compliance partners. Boundaries enforced before scale.',
    bullets: [
      'ZeroLawyer + external Canadian counsel',
      'Accounting & tax \u2014 BC-licensed firm',
      'Privacy & compliance review quarterly',
    ],
  },
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
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Leadership</p>
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
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '60ch', lineHeight: 1.65 }}>
            Boost Commerce Group is private, founder-owned, and governed by a
            four-layer model designed to support a ten-unit portfolio at the
            standard we set, without full-time headcount at the holdco
            level.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'start' }}
            className="md:grid-cols-[300px_1fr]"
          >
            <div
              style={{
                aspectRatio: '4 / 5',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                background:
                  'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-inverse)',
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: 'clamp(4rem, 10vw, 7rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                }}
              >
                AK
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/founder.jpg"
                alt="Amirali Karimi, founder of Boost Commerce Group"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                }}
              />
            </div>
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Founder</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 500, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                Amirali Karimi
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.75rem' }}>
                Founder, CEO & Chair &middot; North Vancouver, BC
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.75 }}>
                  I am a British Columbia founder who did not want to work at
                  a fund, did not want to sprint to an exit, and did not want
                  to run a rollup of a hundred companies. Boost Commerce
                  Group is the holding company I built instead of any of those.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  I run BCG with zero full time employees. The stack is three
                  layers. ChatGPT Projects holds the context. Manus does the
                  execution. Claude handles the review. A founder plus the
                  stack is the entire operating company, and the four units
                  in the portfolio all run on that same architecture. The
                  portfolio cap is ten because a founder plus the stack can
                  supervise ten units at the standard we set, and not much
                  more than ten.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  I built BCG in North Vancouver because I live here. The
                  regulatory surface in BC is clean, the problems are
                  unambiguously local, and the operators I respect live
                  within a two hour drive. The unit sites are domiciled,
                  compliant, and taxed in the province. BCG is not
                  pretending to be a global firm from a mailbox.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                  I chose permanent capital because every clock I have seen
                  other holding companies run on eventually distorted the
                  decisions those companies made. Without a clock, pricing
                  is fair, hiring is patient, and the problems we pick are
                  the ones that will still be problems in twenty years. I
                  would rather own four good units for decades than forty
                  average units for seven years. Ten slots, held indefinitely.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://www.linkedin.com/in/amirali-karimi-405766199"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 1rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                  }}
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href="mailto:hello@boostcommerce.ca"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.625rem 1rem',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                  }}
                >
                  <Mail size={15} /> hello@boostcommerce.ca
                </a>
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
              Four layers, one operating model
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
