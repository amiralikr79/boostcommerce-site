import Link from 'next/link';
import { companies } from '@/lib/companies';

export function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        borderTop: '1px solid var(--color-border)',
        marginTop: '6rem',
        padding: '4rem 0 2rem',
        backgroundColor: 'var(--color-bg-elevated)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        className="orb orb-emerald"
        style={{
          width: 420,
          height: 420,
          left: '-12%',
          bottom: '-55%',
          opacity: 0.25,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}
          className="md:grid-cols-4"
        >
          <div style={{ gridColumn: 'span 1 / span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <span
                aria-hidden="true"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #22d3ee 100%)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 700,
                  color: '#04120d',
                  fontSize: '0.75rem',
                  letterSpacing: '-0.03em',
                }}
              >
                B
              </span>
              <p
                style={{
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--color-text)',
                }}
              >
                Boost Commerce Group
              </p>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                maxWidth: '32ch',
              }}
            >
              A British Columbia holding company operating AI-native digital
              businesses. Permanent capital. Portfolio capped at 10.
            </p>
            <p
              className="mono"
              style={{
                marginTop: '1rem',
                fontSize: '0.75rem',
                color: 'var(--color-text-faint)',
                letterSpacing: '0.06em',
              }}
            >
              NORTH VANCOUVER · BC · CA
            </p>
          </div>

          <FooterCol title="Site">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/companies">Portfolio</FooterLink>
            <FooterLink href="/insights">Insights</FooterLink>
            <FooterLink href="/leadership">Leadership</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Portfolio">
            {companies.map((c) => (
              <FooterLink key={c.slug} href={`/companies/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Elsewhere">
            <FooterLink href="mailto:hello@boostcommerce.ca" external>
              hello@boostcommerce.ca
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/amirali-karimi-405766199"
              external
            >
              LinkedIn (Founder)
            </FooterLink>
            <FooterLink href="/sitemap.xml" external>
              Sitemap
            </FooterLink>
          </FooterCol>
        </div>

        <hr className="hairline" style={{ marginTop: '3rem' }} />

        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p
            className="mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-faint)',
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} BOOST COMMERCE GROUP INC.
          </p>
          <p
            className="mono"
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-faint)',
              letterSpacing: '0.04em',
            }}
          >
            BUILT WITH AI · HELD FOREVER
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        className="mono"
        style={{
          fontSize: '0.7rem',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--color-text-faint)',
          marginBottom: '1rem',
        }}
      >
        {title}
      </p>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {children}
      </nav>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const style: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'var(--color-text-muted)',
    textDecoration: 'none',
    transition: 'color 0.15s ease',
  };
  if (external) {
    return (
      <a
        href={href}
        style={style}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}
