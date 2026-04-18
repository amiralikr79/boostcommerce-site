import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, X, Mail, ArrowUpRight, Target, Clock, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Acquisitions',
  description:
    'What Boost Commerce Group acquires, what we do not, and how the process works. BC-focused digital businesses, $5k to $50k/mo revenue, permanent capital, no broker middlemen.',
  alternates: { canonical: 'https://www.boostcommerce.ca/acquisitions' },
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

const fit = [
  { label: 'Geography', value: 'British Columbia, Canada (remote OK if the revenue is BC)' },
  { label: 'Revenue', value: '$5,000 to $50,000 / month, trailing 6 months' },
  { label: 'Model', value: 'Digital-only. Directory, marketplace, template, lead-gen, content-product' },
  { label: 'Team', value: 'Zero or one operator. We replace employees with the AI stack.' },
  { label: 'Tenure', value: 'Two or more years in market. We avoid pre-PMF bets.' },
  { label: 'Growth', value: 'Flat-to-growing. We do not need a rocket ship.' },
  { label: 'Margins', value: 'Gross margin 60%+ after AI-stack substitution' },
  { label: 'Compliance', value: 'Defensible is/is-not boundary in a regulated category' },
];

const structure = [
  { title: 'All-cash, no earn-out', body: 'We pay cash at close. No seller financing. No seller note. No three-year earn-out chained to your next life.' },
  { title: '3 to 5x SDE, case by case', body: 'We underwrite to stable SDE with AI-stack substitution applied. Premiums for clean books, regulatory moat, or recurring revenue.' },
  { title: '30-day diligence', body: 'Books, traffic, compliance, and platform risk. If diligence is clean, we close in 30 days.' },
  { title: 'Permanent ownership', body: 'We do not flip. If we acquire your business we hold it indefinitely. The brand and the domain stay.' },
];

export default function AcquisitionsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', inset: 0, ...gridBg, opacity: 0.55, pointerEvents: 'none' }} />
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
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Acquisitions &middot; Inbound open</p>
          <h1
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
              fontWeight: 500,
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              maxWidth: '18ch',
            }}
          >
            What we acquire &mdash; and what we do not.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '62ch', lineHeight: 1.65, marginBottom: '2rem' }}>
            BCG operates a capped portfolio of ten focused digital businesses.
            Four slots are filled. Six remain open. If your business fits the
            criteria below, the route is direct &mdash; one email, no brokers,
            no auctions, no IOI theatre.
          </p>
          <a
            href="mailto:hello@boostcommerce.ca?subject=Acquisition%20intro"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.7rem 1.25rem',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-text-inverse)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <Mail size={16} /> Send an intro
          </a>
        </div>
      </section>

      {/* Fit criteria */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Fit criteria</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              Eight facts we check before we reply
            </h2>
          </div>
          <div style={panel}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
              {fit.map((row, i) => (
                <li
                  key={row.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '1.5rem',
                    padding: '1rem 0',
                    borderBottom: i < fit.length - 1 ? '1px solid var(--color-divider)' : 'none',
                    alignItems: 'baseline',
                  }}
                >
                  <span style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {row.label}
                  </span>
                  <span style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.55 }}>
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fit vs not-fit */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Fit vs not-fit</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              Two piles. Be honest with yourself first.
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            <div style={panel}>
              <p style={{ ...eyebrow, marginBottom: '1rem' }}>We acquire</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'BC-focused directories, marketplaces, and lead-gen sites',
                  'Legal / compliance / procurement templates and tools',
                  'Information products with proprietary structured data',
                  'Businesses with a regulatory moat and clear compliance lines',
                  'Content sites that already monetise without an audience play',
                ].map((s) => (
                  <li key={s} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-text)' }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={panel}>
              <p style={{ ...eyebrow, color: 'var(--color-text-faint)', marginBottom: '1rem' }}>We do not</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Physical inventory, stores, or logistics businesses',
                  'Pre-revenue or audience-first plays',
                  'Agencies or services with human delivery as the product',
                  'Crypto, adult, firearms, or other restricted categories',
                  'Businesses that require a full-time operator to survive',
                ].map((s) => (
                  <li key={s} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <X size={18} style={{ color: 'var(--color-text-faint)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)' }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deal structure */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Deal structure</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              How BCG pays
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            {structure.map((s) => (
              <div key={s.title} style={panel}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Process</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
              From first email to close in 30 days
            </h2>
          </div>
          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { n: '01', Icon: Mail, title: 'Intro email', body: 'One paragraph: what the business is, last-12-months revenue, why you are open to sale. No NDA required for this step.' },
              { n: '02', Icon: Target, title: 'Fit review &mdash; 48 hours', body: 'We confirm fit or pass. If we pass we tell you why. If we fit we send a short data-room request.' },
              { n: '03', Icon: Clock, title: 'Diligence &mdash; 21 days', body: 'Books, analytics, platform risk, compliance, content review. Under mutual NDA. Direct line to the founder throughout.' },
              { n: '04', Icon: Scale, title: 'Close &mdash; 7 days', body: 'Purchase agreement, asset transfer, domain + accounts handover. Payment at close, wire same day.' },
            ].map((s) => (
              <li key={s.n} style={{ ...panel, display: 'grid', gap: '1.25rem', gridTemplateColumns: 'auto auto 1fr', alignItems: 'center' }}>
                <span style={{ fontFamily: mono, fontSize: '1.25rem', color: 'var(--color-text-faint)' }}>{s.n}</span>
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
                  }}
                >
                  <s.Icon size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.25rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)' }}>
        <div className="container">
          <div
            style={{
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              backgroundImage:
                'linear-gradient(135deg, var(--color-surface) 0%, var(--color-primary-highlight) 100%)',
              padding: 'clamp(2.5rem, 6vw, 4.5rem)',
            }}
          >
            <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Direct route</p>
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 500, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Think your business fits? Send one email.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '62ch' }}>
              If you are a broker representing a fit business, we still take
              the intro &mdash; but we do not pay broker fees. The seller gets
              the full number.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:hello@boostcommerce.ca?subject=Acquisition%20intro"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.7rem 1.25rem',
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-text-inverse)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <Mail size={16} /> hello@boostcommerce.ca
              </a>
              <Link
                href="/companies"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.7rem 1.25rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                See the portfolio <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
