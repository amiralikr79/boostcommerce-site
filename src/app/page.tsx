import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Eye,
  Mail,
  Linkedin,
} from 'lucide-react';
import { companies, accentHex } from '@/lib/companies';
import { allInsights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Boost Commerce Group | Permanent capital. Focused businesses.',
  description:
    'A British Columbia holding company acquiring, building, and operating focused digital businesses. Portfolio capped at 10. Permanent capital. No external investors.',
  alternates: { canonical: 'https://www.boostcommerce.ca' },
};

const mono =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const principles = [
  { n: '01', title: 'Solve real, searchable problems', body: 'If nobody is typing the question into a search bar this week, we are not building the answer.' },
  { n: '02', title: 'Revenue before audience', body: 'We measure units by cash collected, not followers accumulated. Every unit is expected to pay for itself.' },
  { n: '03', title: 'AI-native by default', body: 'Brain, hands, and eyes are roles, not hires. Every workflow decomposes onto the three-layer stack.' },
  { n: '04', title: 'Portfolio capped at 10', body: 'Ten slots is the forcing function. Anything beyond ten cannot be operated at the standard we set.' },
  { n: '05', title: 'Compliance before scale', body: 'Every unit publishes its is-and-is-not boundaries. Scale only comes after the boundary is defensible.' },
  { n: '06', title: 'Exit-ready, hold forever', body: 'We keep the books clean enough to sell tomorrow and the conviction strong enough to never sell at all.' },
];

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

const btnPrimary: React.CSSProperties = {
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
};

const btnGhost: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.7rem 1.25rem',
  backgroundColor: 'transparent',
  color: 'var(--color-text)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)',
  fontSize: '0.9375rem',
  fontWeight: 500,
  textDecoration: 'none',
};

const gridBg: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(var(--color-divider) 1px, transparent 1px), linear-gradient(90deg, var(--color-divider) 1px, transparent 1px)',
  backgroundSize: '44px 44px',
  backgroundPosition: '-1px -1px',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
};

export default function Home() {
  const latest = allInsights.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ position: 'absolute', inset: 0, ...gridBg, opacity: 0.55, pointerEvents: 'none' }} />
        <div
          style={{
            position: 'absolute',
            top: '-180px',
            right: '-120px',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(30,61,50,0.14), transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            left: '-100px',
            width: '460px',
            height: '460px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(90,158,136,0.18), transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="container"
          style={{
            position: 'relative',
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          }}
        >
          <p style={{ ...eyebrow, marginBottom: '1.5rem' }}>
            British Columbia &middot; Est 2025
          </p>
          <h1
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: 'clamp(2.5rem, 6.5vw, 5.25rem)',
              fontWeight: 500,
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              maxWidth: '16ch',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(120deg, var(--color-text) 0%, var(--color-primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Permanent capital.
            </span>
            <br />
            Focused businesses.
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '58ch',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            Boost Commerce Group acquires, builds, and operates focused digital
            businesses from North Vancouver, British Columbia. Ten slots, no
            external capital, no clock. Every unit solves a real problem,
            operates without employees, and is built to hold indefinitely.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/companies" style={btnPrimary}>
              View portfolio <ArrowUpRight size={16} />
            </Link>
            <Link href="/insights/permanent-capital-thesis" style={btnGhost}>
              Read thesis
            </Link>
          </div>
          <p style={{ fontFamily: mono, fontSize: '0.8rem', color: 'var(--color-text-faint)' }}>
            bcg@north-vancouver:~$ ls ./units &nbsp;&rarr;&nbsp; 4 active / 10 slots
          </p>
        </div>
      </section>

      {/* METRIC STRIP */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingBlock: '2.5rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gap: '0.75rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            {companies.map((co) => (
              <div key={co.slug} style={{ ...panel, padding: '1.25rem' }}>
                <p style={{ ...eyebrow, color: accentHex[co.accent], marginBottom: '0.5rem' }}>{co.role}</p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {co.name}
                </p>
                <p
                  style={{
                    fontFamily: mono,
                    fontSize: '1.65rem',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    lineHeight: 1.1,
                  }}
                >
                  {co.primaryMetric.value}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)', marginTop: '0.25rem' }}>
                  {co.primaryMetric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Portfolio &middot; 4 of 10</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
                The units
              </h2>
            </div>
            <Link
              href="/companies"
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              All companies <ArrowUpRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            {companies.map((co) => (
              <div
                key={co.slug}
                style={{
                  ...panel,
                  borderLeft: `3px solid ${accentHex[co.accent]}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  minHeight: '280px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ ...chip, color: accentHex[co.accent], borderColor: 'var(--color-divider)' }}>
                      {co.role}
                    </span>
                    <span style={chipPrimary}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-primary)',
                          display: 'inline-block',
                        }}
                      />
                      {co.status}
                    </span>
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
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '0.25rem' }}>{co.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                    {co.tagline}
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.75rem 0',
                    borderTop: '1px solid var(--color-divider)',
                    borderBottom: '1px solid var(--color-divider)',
                  }}
                >
                  {co.stats.slice(0, 3).map((s) => (
                    <div key={s.label}>
                      <p style={{ fontFamily: mono, fontSize: '0.95rem', fontWeight: 500, color: 'var(--color-text)' }}>
                        {s.value}
                      </p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--color-text-faint)', marginTop: '0.125rem' }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    href={`/companies/${co.slug}`}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    View overview <ArrowUpRight size={13} />
                  </Link>
                  <span style={{ fontFamily: mono, fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>
                    {co.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: '1.5rem',
              fontFamily: mono,
              fontSize: '0.78rem',
              color: 'var(--color-text-faint)',
              textAlign: 'right',
            }}
          >
            4 of 10 portfolio slots filled
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Operating principles</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 500 }}>
              Six rules every unit lives by
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {principles.map((p) => (
              <div key={p.n} style={panel}>
                <p style={{ fontFamily: mono, fontSize: '0.85rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                  {p.n}
                </p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI STACK */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>AI-native operations</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 500 }}>
              How BCG actually operates
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', maxWidth: '56ch', marginTop: '1rem', lineHeight: 1.65 }}>
              Every unit runs on the same three-layer stack. No full-time
              employees. Each role is owned by the system that is disproportionately
              good at that part of the job.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { layer: 'LAYER 01', title: 'BRAIN', tool: 'ChatGPT Projects', body: 'Strategy, memory, and context. Holds every prior decision so new decisions are consistent with the unit\u2019s history.', Icon: Brain },
              { layer: 'LAYER 02', title: 'HANDS', tool: 'Manus', body: 'Execution. Opens the tools, drafts the artifacts, follows multi-hour workflows to completion without supervision.', Icon: Cpu },
              { layer: 'LAYER 03', title: 'EYES', tool: 'Claude', body: 'Review. Verifies correctness, enforces compliance boundaries, kills drafts that cross the is/is-not line.', Icon: Eye },
            ].map((l) => (
              <div key={l.layer} style={{ ...panel, display: 'grid', gap: '1.25rem', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-highlight)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <l.Icon size={22} />
                </div>
                <div>
                  <p style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)', letterSpacing: '0.14em', marginBottom: '0.25rem' }}>
                    {l.layer}
                  </p>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.25rem' }}>
                    {l.title} &middot; <span style={{ fontFamily: mono, fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>{l.tool}</span>
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{l.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-surface-offset)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              fontFamily: mono,
              fontSize: '0.875rem',
              lineHeight: 1.7,
              overflowX: 'auto',
            }}
          >
            <div style={{ color: 'var(--color-text-faint)' }}>// bcg-ops.ts</div>
            <div>
              <span style={{ color: 'var(--color-primary)' }}>const</span>{' '}
              <span style={{ color: 'var(--color-text)' }}>unit</span>{' '}
              ={' '}
              <span style={{ color: 'var(--color-primary)' }}>await</span>{' '}
              <span style={{ color: 'var(--color-text)' }}>brain</span>.
              <span style={{ color: 'var(--color-text-muted)' }}>strategize</span>
              (<span style={{ color: 'var(--color-text)' }}>problem</span>);
            </div>
            <div>
              <span style={{ color: 'var(--color-primary)' }}>const</span>{' '}
              <span style={{ color: 'var(--color-text)' }}>build</span>{' '}
              ={' '}
              <span style={{ color: 'var(--color-primary)' }}>await</span>{' '}
              <span style={{ color: 'var(--color-text)' }}>hands</span>.
              <span style={{ color: 'var(--color-text-muted)' }}>execute</span>
              (<span style={{ color: 'var(--color-text)' }}>unit</span>.plan);
            </div>
            <div>
              <span style={{ color: 'var(--color-primary)' }}>const</span>{' '}
              <span style={{ color: 'var(--color-text)' }}>verify</span>{' '}
              ={' '}
              <span style={{ color: 'var(--color-primary)' }}>await</span>{' '}
              <span style={{ color: 'var(--color-text)' }}>eyes</span>.
              <span style={{ color: 'var(--color-text-muted)' }}>review</span>
              (<span style={{ color: 'var(--color-text)' }}>build</span>);
            </div>
            <div>
              <span style={{ color: 'var(--color-primary)' }}>return</span>{' '}
              verify.ok ? ship(build) : iterate();
            </div>
          </div>
        </div>
      </section>

      {/* THESIS */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'start',
            }}
            className="lg:grid-cols-[320px_1fr]"
          >
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Thesis &middot; About BCG</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500, marginBottom: '1rem' }}>
                Permanent capital, operator-led.
              </h2>
              <Link
                href="/leadership"
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                Meet the founder <ArrowUpRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.75 }}>
                Boost Commerce Group is a British Columbia holding company
                founded in 2025 by Amirali Karimi in North Vancouver. We acquire
                and build focused digital businesses and hold them indefinitely.
                No external capital. No investors. No clock.
              </p>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                The portfolio is capped at ten. The cap is the forcing function
                that keeps the bar high: each slot is an expensive decision, so
                each unit must clear three questions before it earns one.
              </p>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                Does it solve a real, searchable problem? Can it reach
                $1,000 per month within twelve months? Can it operate without
                full-time employees? Three yes answers, or the prospect does
                not pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Field notes</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 500 }}>Latest insights</h2>
            </div>
            <Link
              href="/insights"
              style={{ fontSize: '0.875rem', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              All essays <ArrowUpRight size={14} />
            </Link>
          </div>
          <div>
            {latest.map((a, i) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '1rem',
                  padding: '1.5rem 0',
                  borderBottom: i < latest.length - 1 ? '1px solid var(--color-divider)' : 'none',
                  textDecoration: 'none',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: mono, fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>{a.date}</span>
                    <span style={chipPrimary}>{a.category}</span>
                    <span style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>{a.readTime}</span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'Boska, Georgia, serif',
                      fontSize: '1.375rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      marginBottom: '0.35rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {a.title}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{a.excerpt}</p>
                </div>
                <ArrowUpRight size={18} style={{ color: 'var(--color-text-faint)', marginTop: '0.35rem' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)' }}>
        <div className="container">
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              backgroundImage:
                'linear-gradient(135deg, var(--color-surface) 0%, var(--color-primary-highlight) 100%)',
              padding: 'clamp(2.5rem, 6vw, 4.5rem)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-100px',
                right: '-60px',
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at center, rgba(30,61,50,0.2), transparent 65%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', maxWidth: '60ch' }}>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Let&apos;s talk</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 500, marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
                Building something BCG should know about?
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>
                We read everything. Operators, founders of candidate units, and
                legal/accounting counsel — if you fit one of the ten slots or
                want to run one, send a note.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="mailto:hello@boostcommerce.ca" style={btnPrimary}>
                  <Mail size={16} /> hello@boostcommerce.ca
                </a>
                <a
                  href="https://www.linkedin.com/in/amirali-karimi-405766199"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={btnGhost}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
