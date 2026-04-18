import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check, X, CircleDot, CircleCheck, Circle } from 'lucide-react';
import { companies, getCompany, accentHex } from '@/lib/companies';

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

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return { title: 'Unit not found' };
  return {
    title: `${company.name}`,
    description: company.summary,
    alternates: { canonical: `https://www.boostcommerce.ca/companies/${company.slug}` },
  };
}

export default async function CompanyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  const others = companies.filter((c) => c.slug !== company.slug);

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.url,
    description: company.summary,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Boost Commerce Group',
      url: 'https://www.boostcommerce.ca',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.boostcommerce.ca' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.boostcommerce.ca/companies' },
      { '@type': 'ListItem', position: 3, name: company.name, item: `https://www.boostcommerce.ca/companies/${company.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border)',
          borderTop: `3px solid ${accentHex[company.accent]}`,
        }}
      >
        <div
          className="container"
          style={{ position: 'relative', paddingTop: 'clamp(3.5rem, 7vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <Link
            href="/companies"
            style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)', marginBottom: '1.5rem', display: 'inline-block' }}
          >
            &larr; All units
          </Link>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span style={{ ...chip, color: accentHex[company.accent] }}>{company.role}</span>
            <span style={chipPrimary}>
              <span
                style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}
              />
              {company.status}
            </span>
            <span style={chip}>{company.category}</span>
            <span style={chip}>Launched {company.launched}</span>
          </div>

          <h1
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            {company.name}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '58ch', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            {company.tagline}
          </p>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', maxWidth: '62ch', lineHeight: 1.75, marginBottom: '2rem' }}>
            {company.description}
          </p>
          <a href={company.url} target="_blank" rel="noopener noreferrer" style={btnPrimary}>
            Visit {company.domain} <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 4rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '0.75rem' }} className="md:grid-cols-4">
            {company.stats.map((s) => (
              <div key={s.label} style={{ ...panel, padding: '1.5rem' }}>
                <p style={{ fontFamily: mono, fontSize: '1.75rem', fontWeight: 500, lineHeight: 1.1 }}>{s.value}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-faint)', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is / Is not */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Compliance boundaries</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 500 }}>What this unit is and is not</h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            <div style={panel}>
              <p style={{ ...eyebrow, color: 'var(--color-primary)', marginBottom: '1rem' }}>This unit is</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {company.is.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <Check size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={panel}>
              <p style={{ ...eyebrow, color: 'var(--color-text-faint)', marginBottom: '1rem' }}>This unit is not</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {company.isNot.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <X size={18} style={{ color: 'var(--color-text-faint)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + approach */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '1.25rem' }} className="md:grid-cols-2">
            <div style={panel}>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>The problem</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75 }}>{company.problem}</p>
            </div>
            <div style={panel}>
              <p style={{ ...eyebrow, marginBottom: '0.75rem' }}>Our approach</p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75 }}>{company.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Roadmap</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 500 }}>What is shipped, active, and planned</h2>
          </div>
          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {company.roadmap.map((r) => {
              const Icon = r.status === 'shipped' ? CircleCheck : r.status === 'active' ? CircleDot : Circle;
              const iconColor =
                r.status === 'shipped'
                  ? 'var(--color-primary)'
                  : r.status === 'active'
                    ? 'var(--color-text)'
                    : 'var(--color-text-faint)';
              return (
                <li
                  key={r.quarter}
                  style={{
                    ...panel,
                    display: 'grid',
                    gridTemplateColumns: 'auto auto 1fr auto',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                  }}
                >
                  <Icon size={20} style={{ color: iconColor }} />
                  <span style={{ fontFamily: mono, fontSize: '0.8rem', color: 'var(--color-text-faint)', minWidth: '70px' }}>{r.quarter}</span>
                  <span style={{ fontSize: '1rem', color: 'var(--color-text)' }}>{r.title}</span>
                  <span
                    style={{
                      ...chip,
                      color:
                        r.status === 'shipped'
                          ? 'var(--color-primary)'
                          : r.status === 'active'
                            ? 'var(--color-text)'
                            : 'var(--color-text-faint)',
                      backgroundColor:
                        r.status === 'shipped' ? 'var(--color-primary-highlight)' : 'transparent',
                      borderColor:
                        r.status === 'shipped' ? 'var(--color-primary-highlight)' : 'var(--color-divider)',
                    }}
                  >
                    {r.status === 'active' && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-text)',
                          animation: 'pulse 1.8s ease-in-out infinite',
                        }}
                      />
                    )}
                    {r.status}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Other units */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
            <div>
              <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Other units</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500 }}>More of the portfolio</h2>
            </div>
            <Link href="/companies" style={{ fontSize: '0.875rem', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              Back to portfolio <ArrowUpRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-3">
            {others.map((co) => (
              <Link
                key={co.slug}
                href={`/companies/${co.slug}`}
                style={{ ...panel, borderLeft: `3px solid ${accentHex[co.accent]}`, textDecoration: 'none', color: 'inherit' }}
              >
                <p style={{ ...eyebrow, color: accentHex[co.accent], marginBottom: '0.5rem' }}>{co.role}</p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.35rem' }}>{co.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>{co.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
