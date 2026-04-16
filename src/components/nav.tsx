'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/companies', label: 'Portfolio' },
  { href: '/insights', label: 'Insights' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(9,9,11,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'background-color 0.2s ease, border-color 0.2s ease, backdrop-filter 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            textDecoration: 'none',
          }}
          aria-label="Boost Commerce Group — Home"
        >
          <span
            aria-hidden="true"
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
              borderRadius: 8,
              background:
                'linear-gradient(135deg, var(--color-primary) 0%, #22d3ee 100%)',
              boxShadow:
                '0 0 0 1px rgba(16,185,129,0.35), 0 6px 18px rgba(16,185,129,0.35)',
            }}
          >
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#04120d',
                letterSpacing: '-0.03em',
              }}
            >
              B
            </span>
          </span>
          <span
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--color-text)',
              letterSpacing: '-0.01em',
            }}
          >
            Boost Commerce Group
          </span>
        </Link>

        <nav
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '1.75rem' }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                position: 'relative',
                fontSize: '0.875rem',
                fontWeight: isActive(l.href) ? 500 : 400,
                color: isActive(l.href) ? 'var(--color-text)' : 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
            >
              {l.label}
              {isActive(l.href) && (
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -22,
                    height: 2,
                    background:
                      'linear-gradient(to right, transparent, var(--color-primary), transparent)',
                  }}
                />
              )}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'flex',
                padding: '0.4rem',
                borderRadius: 8,
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          )}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
          >
            Get in touch <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            cursor: 'pointer',
            color: 'var(--color-text)',
            padding: '0.5rem',
            borderRadius: 8,
          }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg)',
            padding: '1rem 1.25rem 1.5rem',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '1rem',
                color: isActive(l.href) ? 'var(--color-text)' : 'var(--color-text-muted)',
                borderBottom: '1px solid var(--color-divider)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="btn btn-ghost"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
              >
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
