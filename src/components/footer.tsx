import Link from 'next/link';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        marginTop: '6rem',
        padding: '3rem 0',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: 'Boska, Georgia, serif',
                fontSize: '1rem',
                fontWeight: '500',
                color: 'var(--color-text)',
                marginBottom: '0.625rem',
              }}
            >
              Boost Commerce Group
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                maxWidth: '28ch',
              }}
            >
              British Columbia holding company. Building focused businesses that last.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-faint)',
                marginBottom: '0.75rem',
              }}
            >
              Site
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/companies', label: 'Portfolio' },
                { href: '/insights', label: 'Insights' },
                { href: '/acquisitions', label: 'Acquisitions' },
                { href: '/leadership', label: 'Leadership' },
                { href: '/press', label: 'Press' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Portfolio links */}
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-faint)',
                marginBottom: '0.75rem',
              }}
            >
              Portfolio
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: 'https://bcprivateloans.ca', label: 'BCPrivateLoans.ca' },
                { href: 'https://bcmedicalaccess.ca', label: 'BCMedicalAccess.ca' },
                { href: 'https://zerolawyer.ca', label: 'ZeroLawyer.ca' },
                { href: 'https://bcindustrialsupply.ca', label: 'BCIndustrialSupply.ca' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-text-faint)',
                marginBottom: '0.75rem',
              }}
            >
              Legal
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/privacy', label: 'Privacy' },
                { href: '/terms', label: 'Terms' },
                { href: '/disclaimers', label: 'Disclaimers' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--color-divider)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-faint)' }}>
            &copy; {new Date().getFullYear()} Boost Commerce Group. British Columbia, Canada.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-faint)' }}>
            <a
              href="mailto:hello@boostcommerce.ca"
              style={{ color: 'var(--color-text-faint)', textDecoration: 'none' }}
            >
              hello@boostcommerce.ca
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
