import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { companies, accentHex } from '@/lib/companies';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'The Boost Commerce Group portfolio: four focused digital businesses, a cap of ten slots, and no external capital. Meet the units.',
  alternates: { canonical: 'https://www.boostcommerce.ca/companies' },
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
  padding: '1.75rem',
};
const chip: React.CSSProperties = {
  fontFamily: mono,
  fontSize: '0.68rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '0.25rem 0.55rem',
  border: '1px solid var(--color-divider)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--color-text-muted)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
};
const chipPrimary: React.CSSProperties = {
  ...chip,
  color: 'var(--color-primary)',
  backgroundColor: 'var(--color-primary-highlight)',
  borderColor: 'var(--color-primary-highlight)',
};

const gridBg: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(var(--color-divider) 1px, transparent 1px), linear-gradient(90deg, var(--color-divider) 1px, transparent 1px)',
  backgroundSize: '44px 44px',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
};

export default function CompaniesPage() {
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
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Portfolio &middot; 4 of 10</p>
          <h1
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            The units
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '60ch', lineHeight: 1.65 }}>
            BCG operates a capped portfolio of ten focused digital businesses.
            Four slots are filled today. Six remain open and we are selective
            about who fills them &mdash; each unit must solve a real searchable
            problem, reach $1k/mo within twelve months, and operate without
            full-time employees.
          </p>
        </div>
      </section>

      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '1.25rem' }} className="md:grid-cols-2">
            {companies.map((co) => (
              <div
                key={co.slug}
                style={{
                  ...panel,
                  borderLeft: `3px solid ${accentHex[co.accent]}`,
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ ...chip, color: accentHex[co.accent] }}>{co.role}</span>
                    <span style={chipPrimary}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary)',
                        }}
                      />
                      {co.status}
                    </span>
                    <span style={chip}>Launched {co.launched}</span>
                  </div>
                  <a
                    href={co.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${co.domain}`}
                    style={{ color: 'var(--color-text-faint)' }}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 500, marginBottom: '0.35rem' }}>{co.name}</h2>
                  <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{co.tagline}</p>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.65 }}>{co.summary}</p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem',
                    padding: '0.75rem 0',
                    borderTop: '1px solid var(--color-divider)',
                    borderBottom: '1px solid var(--color-divider)',
                  }}
                >
                  {co.stats.map((s) => (
                    <div key={s.label}>
                      <p style={{ fontFamily: mono, fontSize: '1.05rem', fontWeight: 500 }}>{s.value}</p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--color-text-faint)', marginTop: '0.125rem' }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ ...eyebrow, color: 'var(--color-text-faint)', marginBottom: '0.5rem' }}>Roadmap preview</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {co.roadmap.slice(0, 3).map((r) => (
                      <li key={r.quarter} style={{ display: 'flex', gap: '0.75rem', alignItems: 'baseline' }}>
                        <span style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)', minWidth: '68px' }}>{r.quarter}</span>
                        <span style={{ fontSize: '0.9rem', color: r.status === 'shipped' ? 'var(--color-text)' : 'var(--color-text-muted)' }}>
                          {r.title}
                        </span>
                        <span
                          style={{
                            ...chip,
                            marginLeft: 'auto',
                            color:
                              r.status === 'shipped'
                                ? 'var(--color-primary)'
                                : r.status === 'active'
                                  ? 'var(--color-text)'
                                  : 'var(--color-text-faint)',
                            borderColor:
                              r.status === 'shipped'
                                ? 'var(--color-primary-highlight)'
                                : 'var(--color-divider)',
                            backgroundColor:
                              r.status === 'shipped'
                                ? 'var(--color-primary-highlight)'
                                : 'transparent',
                          }}
                        >
                          {r.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <Link
                    href={`/companies/${co.slug}`}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--color-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    Unit overview <ArrowUpRight size={14} />
                  </Link>
                  <span style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)' }}>
                    {co.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Slot availability strip */}
          <div style={{ marginTop: '3rem', ...panel, padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <p style={eyebrow}>Slot availability</p>
              <p style={{ fontFamily: mono, fontSize: '0.8rem', color: 'var(--color-text-faint)' }}>
                6 slots remaining &middot; acquiring selectively
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Array.from({ length: 10 }).map((_, i) => {
                const filled = i < companies.length;
                return (
                  <div
                    key={i}
                    title={filled ? companies[i].name : 'Open slot'}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: filled ? 'var(--color-primary)' : 'transparent',
                      border: filled ? 'none' : '1.5px dashed var(--color-border)',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
