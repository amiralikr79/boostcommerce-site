import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowUpRight,
  Search,
  Megaphone,
  Package,
  Mail,
  Linkedin,
} from 'lucide-react';
import { companies, accentHex } from '@/lib/companies';
import { allInsights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Boost Commerce Group | Authority compounds. Permanent capital.',
  description:
    'A British Columbia holding company that operates a portfolio of high-authority information assets in regulated Canadian categories. Revenue is generated through organic traffic and targeted advertising. Capped at ten properties. Held indefinitely.',
  alternates: { canonical: 'https://www.boostcommerce.ca' },
};

const mono =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const principles = [
  { n: '01', title: 'Authority is the asset', body: 'Each property is a category-defining information source. The asset is the trust signal that compounds with every citation, every reference link, and every direct visit.' },
  { n: '02', title: 'Solve real, searchable problems', body: 'If nobody is typing the question into a search bar or asking a model this week, we are not building the answer. Demand is the prerequisite, not the bet.' },
  { n: '03', title: 'Owned distribution, not rented', body: 'Every property owns its domain, its index position, and its data. We do not depend on a feed, a marketplace, or a paid channel that can disappear with a policy change.' },
  { n: '04', title: 'Indexed in search. Cited by models.', body: 'Search and answer engines are the same job: be the source the algorithm picks. Every property is structured to be both ranked and quoted.' },
  { n: '05', title: 'Portfolio capped at ten', body: 'Ten slots is the forcing function. Anything beyond ten cannot be operated at the institutional standard we set.' },
  { n: '06', title: 'Compliance before scale', body: 'Every property publishes its is-and-is-not boundaries. Scale only comes after the boundary is defensible to a regulator and to a model.' },
];

const aggregateStats = [
  { value: '04', label: 'Properties under management' },
  { value: '04', label: 'Regulated verticals' },
  { value: '165+', label: 'Indexed categories' },
  { value: '16', label: 'BC cities served' },
  { value: '10/10', label: 'Canadian provinces covered' },
  { value: '$0', label: 'External capital' },
];

const monetization = [
  {
    Icon: Search,
    eyebrow: 'Stream 01',
    title: 'Organic traffic',
    body: 'Readers arriving from search and answer-engine citations are routed to vetted partner products. Placements are priced by category, geography, and intent, with full disclosure on every page.',
  },
  {
    Icon: Megaphone,
    eyebrow: 'Stream 02',
    title: 'Targeted advertising',
    body: 'Display and sponsored placements are sold against high-intent audiences in regulated categories. Inventory is priced by audience composition; advertisers transact directly with BCG.',
  },
  {
    Icon: Package,
    eyebrow: 'Stream 03',
    title: 'Direct products',
    body: 'Where the use case warrants it, properties sell directly: province-aware templates, scenario-based reports, and other category-specific products owned and operated by the property.',
  },
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
            British Columbia &middot; Est 2021 &middot; Privately held
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
              Authority compounds.
            </span>
            <br />
            Permanent capital.
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '62ch',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            Boost Commerce Group operates a portfolio of high-authority
            information assets in regulated Canadian categories. Revenue is
            generated through organic traffic and targeted advertising. The
            portfolio is privately held, capped at ten properties, and
            held indefinitely.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/companies" style={btnPrimary}>
              View portfolio <ArrowUpRight size={16} />
            </Link>
            <Link href="/insights/authority-is-the-asset" style={btnGhost}>
              Read thesis
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              flexWrap: 'wrap',
              fontFamily: mono,
              fontSize: '0.78rem',
              color: 'var(--color-text-faint)',
              letterSpacing: '0.04em',
            }}
          >
            <span>4 properties</span>
            <span style={{ color: 'var(--color-divider)' }}>/</span>
            <span>4 regulated verticals</span>
            <span style={{ color: 'var(--color-divider)' }}>/</span>
            <span>10 of 10 provinces covered</span>
          </div>
        </div>
      </section>

      {/* AGGREGATE CREDIBILITY STRIP */}
      <section style={{ borderBottom: '1px solid var(--color-border)', paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="container">
          <p style={{ ...eyebrow, marginBottom: '1.5rem' }}>Portfolio in aggregate</p>
          <div
            style={{
              display: 'grid',
              gap: '1px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              backgroundColor: 'var(--color-border)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            {aggregateStats.map((s) => (
              <div
                key={s.label}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '1.5rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Boska, Georgia, serif',
                    fontSize: 'clamp(2rem, 3.2vw, 2.6rem)',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: mono,
                    fontSize: '0.7rem',
                    color: 'var(--color-text-faint)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
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
              <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Properties &middot; 4 of 10</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 500, letterSpacing: '-0.01em' }}>
                The properties
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
            4 of 10 properties indexed &middot; 6 slots open
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Operating principles</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 500 }}>
              Six rules every property lives by
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

      {/* MONETIZATION */}
      <section style={{ paddingBlock: 'clamp(4rem, 7vw, 6rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Revenue model</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 500 }}>
              How information assets compound
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', maxWidth: '62ch', marginTop: '1rem', lineHeight: 1.65 }}>
              Each property generates revenue across three streams, in the
              proportion that fits its category and audience. Every placement
              is disclosed; every advertiser transacts directly with BCG.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-3">
            {monetization.map((m) => (
              <div
                key={m.eyebrow}
                style={{
                  ...panel,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  minHeight: '240px',
                }}
              >
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
                  <m.Icon size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)', letterSpacing: '0.14em', marginBottom: '0.4rem' }}>
                    {m.eyebrow}
                  </p>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: '2rem',
              fontFamily: mono,
              fontSize: '0.78rem',
              color: 'var(--color-text-faint)',
              letterSpacing: '0.04em',
            }}
          >
            For advertising and partnership inquiries:{' '}
            <a href="mailto:hello@boostcommerce.ca" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
              hello@boostcommerce.ca
            </a>
          </p>
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
                Authority is the asset.
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
                Leadership &amp; governance <ArrowUpRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.75 }}>
                Boost Commerce Group was founded in 2021 to operate a small,
                permanent portfolio of high-authority information assets in
                regulated Canadian categories. Each property is engineered to
                rank in search engines and to be cited by answer engines on
                queries where intent is highest, and to compound in trust
                with every reference link, citation, and direct visit it
                earns.
              </p>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                Revenue is generated through organic traffic and targeted
                advertising. The portfolio is privately held, capped at ten
                properties, and held indefinitely. No external capital. No
                investors. No clock.
              </p>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                Each slot is reserved for a property that earns it through
                documented authority, regulatory defensibility, and a
                category we expect to still matter in twenty years. Once a
                slot is filled, it stays.
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
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Inquiries</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 500, marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
                Acquisitions, advertising, and counsel.
              </h2>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>
                We respond to founders of acquisition candidates in the
                categories we cover, advertisers and partners with interest in
                our regulated audiences, and counsel. One email is enough.
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
