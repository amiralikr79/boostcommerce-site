import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { allInsights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    "Field notes from the operator's desk at Boost Commerce Group. Essays on permanent capital, AI-native operations, and the BC market.",
  alternates: { canonical: 'https://www.boostcommerce.ca/insights' },
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
const chipPrimary: React.CSSProperties = {
  fontFamily: mono,
  fontSize: '0.68rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '0.25rem 0.55rem',
  border: '1px solid var(--color-primary-highlight)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--color-primary)',
  backgroundColor: 'var(--color-primary-highlight)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
};
const gridBg: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(var(--color-divider) 1px, transparent 1px), linear-gradient(90deg, var(--color-divider) 1px, transparent 1px)',
  backgroundSize: '44px 44px',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
};

export default function InsightsPage() {
  return (
    <>
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
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Field notes</p>
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
            Insights from the operator&rsquo;s desk
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '58ch', lineHeight: 1.65 }}>
            Essays on permanent capital, AI-native operations, the three
            questions every BCG unit must answer, and what we have learned
            operating focused businesses in British Columbia.
          </p>
        </div>
      </section>

      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {allInsights.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                style={{ ...panel, textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center' }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)' }}>{a.date}</span>
                    <span style={chipPrimary}>{a.category}</span>
                    <span style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>{a.readTime}</span>
                  </div>
                  <h2
                    style={{
                      fontFamily: 'Boska, Georgia, serif',
                      fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                      fontWeight: 500,
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {a.title}
                  </h2>
                  <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{a.excerpt}</p>
                  <p
                    style={{
                      marginTop: '1rem',
                      fontSize: '0.9rem',
                      color: 'var(--color-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    Read <ArrowUpRight size={14} />
                  </p>
                </div>
                <ArrowUpRight size={22} style={{ color: 'var(--color-text-faint)' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
