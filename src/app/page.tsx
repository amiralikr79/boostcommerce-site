import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { allInsights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Boost Commerce Group | Focused Digital Businesses',
  description:
    'A British Columbia holding company that acquires, builds, and operates focused digital businesses serving real local needs.',
  alternates: { canonical: 'https://www.boostcommerce.ca' },
};

const companies = [
  {
    slug: 'bcprivateloans',
    name: 'BCPrivateLoans.ca',
    category: 'Lending',
    status: 'Active',
    description:
      "BC's private lender marketplace connecting borrowers with 15+ active lenders. Rates from 5.99% across 16 cities.",
    url: 'https://bcprivateloans.ca',
    stat: '15+ lenders',
  },
  {
    slug: 'bcmedicalaccess',
    name: 'BCMedicalAccess.ca',
    category: 'Healthcare',
    status: 'Active',
    description:
      'Healthcare navigation for the 1.2M+ British Columbians on specialist waitlists. Private options, explained plainly.',
    url: 'https://bcmedicalaccess.ca',
    stat: '1.2M+ addressable',
  },
  {
    slug: 'zerolawyer',
    name: 'ZeroLawyer.ca',
    category: 'Legal',
    status: 'Active',
    description:
      'Legal document templates for Canadian founders and small businesses. Province-compliant, affordable, immediate.',
    url: 'https://zerolawyer.ca',
    stat: '500+ founders served',
  },
  {
    slug: 'bcindustrialsupply',
    name: 'BCIndustrialSupply.ca',
    category: 'Industrial',
    status: 'Active',
    description:
      'Industrial supplier directory for BC contractors and procurement managers. 578+ suppliers, 165+ categories.',
    url: 'https://bcindustrialsupply.ca',
    stat: '578+ suppliers',
  },
];

export default function Home() {
  const latestInsights = allInsights.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'clamp(4rem, 10vw, 8rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: '0.8125rem',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-primary)',
              marginBottom: '1.5rem',
            }}
          >
            British Columbia, Canada
          </p>
          <h1
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: '500',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
              maxWidth: '14ch',
              marginBottom: '2rem',
            }}
          >
            Focused businesses. Permanent capital.
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '52ch',
              lineHeight: '1.65',
              marginBottom: '2.5rem',
            }}
          >
            Boost Commerce Group acquires, builds, and operates practical digital
            businesses in British Columbia. We hold indefinitely, reinvest
            quietly, and solve problems people actually have.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/companies"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.625rem 1.25rem',
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-text-inverse)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9375rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'background-color 0.15s ease',
              }}
            >
              View portfolio
            </Link>
            <Link
              href="/insights"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.625rem 1.25rem',
                backgroundColor: 'transparent',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9375rem',
                fontWeight: '400',
                textDecoration: 'none',
                transition: 'border-color 0.15s ease',
              }}
            >
              Read insights
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <h2
              style={{
                fontFamily: 'Boska, Georgia, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: '500',
                color: 'var(--color-text)',
              }}
            >
              Portfolio
            </h2>
            <Link
              href="/companies"
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              All companies <ArrowUpRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '1px',
              backgroundColor: 'var(--color-border)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            {companies.map((co) => (
              <div
                key={co.slug}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-text-faint)',
                        padding: '0.2rem 0.5rem',
                        border: '1px solid var(--color-divider)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {co.category}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-primary)',
                        padding: '0.2rem 0.5rem',
                        border: '1px solid var(--color-primary-highlight)',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--color-primary-highlight)',
                      }}
                    >
                      {co.status}
                    </span>
                  </div>
                  <a
                    href={co.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${co.name}`}
                    style={{ color: 'var(--color-text-faint)', transition: 'color 0.15s ease' }}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: 'Boska, Georgia, serif',
                      fontSize: '1.25rem',
                      fontWeight: '500',
                      color: 'var(--color-text)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {co.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: '1.6',
                    }}
                  >
                    {co.description}
                  </p>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--color-divider)' }}>
                  <Link
                    href={`/companies/${co.slug}`}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    View overview <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: '1.25rem',
              fontSize: '0.8125rem',
              color: 'var(--color-text-faint)',
              textAlign: 'right',
            }}
          >
            4 of 10 portfolio slots filled
          </p>
        </div>
      </section>

      {/* About */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'start',
            }}
            className="lg:grid-cols-[280px_1fr]"
          >
            <div>
              <h2
                style={{
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: '500',
                  color: 'var(--color-text)',
                  marginBottom: '0.75rem',
                }}
              >
                About
              </h2>
              <Link
                href="/leadership"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                Meet the founder <ArrowUpRight size={13} />
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: '1.75' }}>
                Boost Commerce Group is a British Columbia holding company founded
                in 2025 by Amirali Karimi. The thesis is simple: find genuine
                problems people in BC actually have, build lean businesses that
                solve them, and hold them indefinitely.
              </p>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
                Every business in the portfolio must pass three tests before earning
                a slot: Does it solve a real, searchable problem? Can it reach
                $1,000 per month within 12 months? Can it operate without
                full-time employees?
              </p>
              <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: '1.75' }}>
                We do not raise external capital. We do not chase trends. We build
                things that last. The portfolio is capped at 10 companies. Growth
                is deliberate, not relentless.
              </p>

              <div
                style={{
                  marginTop: '0.5rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '0.625rem',
                }}
              >
                {[
                  'Solve real local problems first',
                  'Revenue before vanity',
                  'AI-first operations',
                  'Maximum 10 portfolio companies',
                  'Compliance before scale',
                  'Exit-ready at all times',
                ].map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '0.625rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        marginTop: '0.125rem',
                        minWidth: '1.25rem',
                      }}
                    >
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      {latestInsights.length > 0 && (
        <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '2.5rem',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: '500',
                  color: 'var(--color-text)',
                }}
              >
                Latest insights
              </h2>
              <Link
                href="/insights"
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                All articles <ArrowUpRight size={14} />
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {latestInsights.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '1rem',
                    padding: '1.25rem 0',
                    borderBottom: i < latestInsights.length - 1 ? '1px solid var(--color-divider)' : 'none',
                    textDecoration: 'none',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.375rem' }}>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: '500',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--color-primary)',
                        }}
                      >
                        {article.category}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)' }}>{article.date}</span>
                    </div>
                    <p
                      style={{
                        fontFamily: 'Boska, Georgia, serif',
                        fontSize: '1.125rem',
                        fontWeight: '500',
                        color: 'var(--color-text)',
                        marginBottom: '0.375rem',
                        lineHeight: '1.3',
                      }}
                    >
                      {article.title}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    style={{ color: 'var(--color-text-faint)', flexShrink: 0, marginTop: '0.25rem' }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
