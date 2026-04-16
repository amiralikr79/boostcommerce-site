'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="container"
        style={{
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            textDecoration: 'none',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-label="Boost Commerce Group"
          >
            <rect width="28" height="28" rx="6" fill="var(--color-primary)" />
            <path
              d="M8 8h5.5c2.485 0 4 1.343 4 3.3 0 1.2-.6 2.1-1.6 2.6 1.4.45 2.2 1.5 2.2 2.9 0 2.1-1.6 3.2-4.2 3.2H8V8zm2.2 5h3.1c1.2 0 1.9-.55 1.9-1.55S14.5 9.9 13.3 9.9h-3.1V13zm0 5.1h3.4c1.3 0 2.1-.6 2.1-1.65s-.8-1.65-2.1-1.65h-3.4V18.1z"
              fill="var(--color-text-inverse)"
            />
          </svg>
          <span
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'var(--color-text)',
              letterSpacing: '-0.01em',
            }}
          >
            Boost Commerce Group
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          className="hidden md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: pathname.startsWith(l.href) ? '500' : '400',
                color: pathname.startsWith(l.href)
                  ? 'var(--color-text)'
                  : 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
            >
              {l.label}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'flex',
                padding: '0.25rem',
                borderRadius: '4px',
                transition: 'color 0.15s ease',
              }}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text)',
            padding: '0.25rem',
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg)',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.625rem 0',
                fontSize: '1rem',
                color: pathname.startsWith(l.href)
                  ? 'var(--color-text)'
                  : 'var(--color-text-muted)',
                borderBottom: '1px solid var(--color-divider)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              style={{
                marginTop: '1rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          )}
        </div>
      )}
    </header>
  );
}
