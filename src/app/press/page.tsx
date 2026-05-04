import type { Metadata } from 'next';
import { Mail, Linkedin, Download, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press & Media',
  description:
    'Press kit, facts, and founder availability for Boost Commerce Group, a British Columbia holding company that operates a portfolio of high-authority information assets in regulated Canadian categories.',
  alternates: { canonical: 'https://www.boostcommerce.ca/press' },
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

const facts = [
  { label: 'Entity', value: 'Boost Commerce Group, British Columbia holding company' },
  { label: 'Founded', value: '2025' },
  { label: 'Headquarters', value: 'North Vancouver, British Columbia, Canada' },
  { label: 'Founder & CEO', value: 'Amirali Karimi' },
  { label: 'Mandate', value: 'Operate a portfolio of high-authority information assets in regulated Canadian categories' },
  { label: 'Portfolio cap', value: '10 properties' },
  { label: 'Slots filled', value: '4 of 10' },
  { label: 'Capital structure', value: 'Founder-owned, privately held. No external capital. No debt.' },
  { label: 'Hold period', value: 'Indefinite' },
  { label: 'Revenue model', value: 'Organic traffic and targeted advertising' },
  { label: 'Categories', value: 'Private lending, healthcare navigation, legal templates, industrial directory' },
  { label: 'Provincial coverage', value: '10 of 10 Canadian provinces (via portfolio)' },
];

const boilerplate =
  'Boost Commerce Group is a British Columbia holding company that operates a portfolio of high-authority information assets in regulated Canadian categories. Founded in 2025 by Amirali Karimi in North Vancouver, BCG is privately held, takes no external capital, and caps its portfolio at ten properties. Each property is engineered to rank in search engines and to be cited by answer engines on queries with real commercial intent, and is monetized through organic traffic and targeted advertising. The portfolio is held indefinitely.';

export default function PressPage() {
  return (
    <>
      {/* Hero */}
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
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Press &amp; media</p>
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
            For journalists and researchers
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '62ch', lineHeight: 1.65 }}>
            Facts, figures, boilerplate, and founder availability below. Use
            anything here without asking. For comment on authority publishing,
            search and answer-engine economics, the regulated-category
            information market, or BC digital media, email the line below.
          </p>
        </div>
      </section>

      {/* Quick contact */}
      <section style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            <div style={panel}>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Press contact</p>
              <p
                style={{
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                hello@boostcommerce.ca
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                We reply to press same-day when we can. Include your outlet,
                deadline, and the angle in the first email.
              </p>
              <a
                href="mailto:hello@boostcommerce.ca?subject=Media"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.625rem 1rem',
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                <Mail size={15} /> Send media request
              </a>
            </div>
            <div style={panel}>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Founder</p>
              <p
                style={{
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Amirali Karimi
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Founder, CEO &amp; Chair. Available for on-the-record comment
                on authority publishing, the economics of regulated-category
                information assets, and the search-and-citation media market.
              </p>
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
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fact sheet */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Fact sheet</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              BCG at a glance
            </h2>
          </div>
          <div style={panel}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
              {facts.map((f, i) => (
                <li
                  key={f.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '1.5rem',
                    padding: '0.9rem 0',
                    borderBottom: i < facts.length - 1 ? '1px solid var(--color-divider)' : 'none',
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {f.label}
                  </span>
                  <span style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.55 }}>
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Boilerplate</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              Copy this into your story
            </h2>
          </div>
          <div
            style={{
              ...panel,
              backgroundColor: 'var(--color-surface-offset)',
              fontFamily: mono,
              fontSize: '0.9rem',
              lineHeight: 1.75,
              color: 'var(--color-text)',
              whiteSpace: 'pre-wrap',
            }}
          >
            {boilerplate}
          </div>
          <p style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)', marginTop: '0.75rem' }}>
            Free to use without attribution.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Topics we comment on</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              What to ask us about
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            {[
              { title: 'Authority as a media asset', body: 'Why information assets compound on a different curve than venture-funded software, and what makes a property the canonical source in a regulated category.' },
              { title: 'Search and answer-engine economics', body: 'How search and answer engines pick sources, what citation share is worth at the property level, and where intent value is highest.' },
              { title: 'Permanent capital in digital media', body: 'Holdco structure for information assets, the economics of indefinite hold vs private-equity windows, and why the ten-cap.' },
              { title: 'The BC private lending market', body: 'Broker funnels, rate bands by tier, what borrowers should know, regulatory boundaries.' },
              { title: 'Healthcare navigation in BC', body: 'Specialist waitlists, private clinic economics, cross-border options, what information products can and cannot do.' },
              { title: 'Targeted advertising in regulated categories', body: 'Audience composition, intent signals, and the inventory mechanics of advertising against information assets in lending, healthcare, legal, and procurement.' },
            ].map((t) => (
              <div key={t.title} style={panel}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>{t.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand assets */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Brand assets</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              Logo &amp; usage
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            <div style={{ ...panel, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  aspectRatio: '16 / 9',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-surface-offset)',
                  border: '1px solid var(--color-divider)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                }}
              >
                <svg width="56" height="56" viewBox="0 0 32 32" aria-label="BCG logo">
                  <defs>
                    <linearGradient id="pr1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <rect width="32" height="32" rx="6" fill="url(#pr1)" />
                  <path
                    d="M9.2 8.5h6.2c2.8 0 4.6 1.55 4.6 3.82 0 1.38-.66 2.42-1.78 3 1.58.5 2.5 1.72 2.5 3.3 0 2.44-1.78 3.7-4.66 3.7H9.2V8.5zm2.58 5.78h3.6c1.4 0 2.2-.65 2.2-1.8 0-1.15-.8-1.78-2.2-1.78h-3.6v3.58zm0 5.86h3.92c1.5 0 2.4-.7 2.4-1.9 0-1.2-.9-1.9-2.4-1.9h-3.92v3.8z"
                    fill="#04120d"
                  />
                </svg>
                <span style={{ fontFamily: 'Boska, Georgia, serif', fontSize: '1.5rem', fontWeight: 500 }}>
                  Boost Commerce Group
                </span>
              </div>
              <a
                href="/favicon.svg"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 0.9rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                }}
              >
                <Download size={14} /> Download SVG mark
              </a>
            </div>
            <div style={panel}>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Usage rules</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Use the full name "Boost Commerce Group" on first mention. "BCG" is acceptable thereafter.',
                  'Do not alter the mark colors, proportions, or letterforms.',
                  'Maintain minimum clear space equal to the height of the B on all sides.',
                  'The mark is trademarked in Canada. Editorial use does not require a license.',
                ].map((s) => (
                  <li key={s} style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.65, display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontFamily: mono, fontSize: '0.85rem' }}>&rsaquo;</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
