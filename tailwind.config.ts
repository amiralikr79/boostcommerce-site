import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Boska', 'Georgia', 'serif'],
        body: ['Satoshi', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        faint: 'var(--color-text-faint)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
      },
      maxWidth: {
        narrow: '640px',
        content: '960px',
        wide: '1200px',
      },
      typography: (theme: (arg: string) => string) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            maxWidth: '72ch',
            lineHeight: '1.75',
            'h1, h2, h3, h4': {
              color: 'var(--color-text)',
              fontFamily: theme('fontFamily.display'),
              fontWeight: '500',
            },
            a: {
              color: 'var(--color-primary)',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            'p, li': { color: 'var(--color-text)' },
            blockquote: {
              borderLeftColor: 'var(--color-primary)',
              color: 'var(--color-text-muted)',
            },
            hr: { borderColor: 'var(--color-border)' },
            strong: { color: 'var(--color-text)' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
