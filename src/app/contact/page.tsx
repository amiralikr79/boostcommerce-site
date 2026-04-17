import type { Metadata } from 'next';
import { Mail, Linkedin, Rocket, Users, Newspaper, Sparkles, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Boost Commerce Group. Acquisition intros, operator inquiries, press, and general. hello@boostcommerce.ca.',
  alternates: { canonical: 'https://www.boostcommerce.ca/contact' },
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
  padding: '2rem',
};
const gridBg: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(var(--color-divider) 1px, transparent 1px), linear-gradient(90deg, var(--color-divider) 1px, transparent 1px)',
  backgroundSize: '44px 44px',
  maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
};

const intents = [
  {
    Icon: Rocket,
    title: "I'm building something BCG should acquire",
    body: 'If your business fits the three-question filter and you are open to permanent ownership, let us see it.',
    subject: 'Acquisition intro',
  },
  {
    Icon: Users,
    title: 'I want to operate a future unit',
    body: 'BCG principals have P&L ownership and long-term economics. Tell us what you would operate and why.',
    subject: 'Operator inquiry',
  },
  {
    Icon: Newspaper,
    title: "I'm press or media",
    body: 'Background, portfolio facts, founder availability. We answer genuine press requests.',
    subject: 'Media',
  },
  {
    Icon: Sparkles,
    title: 'Something else',
    body: 'Partnerships, legal, counsel, or a note we have not categorised yet. We read all of it.',
    subject: 'General',
  },
];

export default function ContactPage() {
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
          <p style={{ ...eyebrow, marginBottom: '1.25rem' }}>Contact</p>
          <h1
            style={{
              fontFamily: 'Boska, Georgia, serif',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Let&rsquo;s talk.
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '55ch', lineHeight: 1.65 }}>
            We read everything. We respond when we can add value. Use the
            category that fits &mdash; it routes to the right mailbox faster.
          </p>
        </div>
      </section>

      {/* Primary panels */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 4rem)' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                backgroundImage:
                  'linear-gradient(135deg, var(--color-surface) 0%, var(--color-primary-highlight) 100%)',
                padding: '2.5rem',
              }}
            >
              <p style={{ ...eyebrow, marginBottom: '1rem' }}>Primary</p>
              <p
                style={{
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  marginBottom: '1.5rem',
                  wordBreak: 'break-word',
                }}
              >
                hello@boostcommerce.ca
              </p>
              <a
                href="mailto:hello@boostcommerce.ca"
                style={{
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
                }}
              >
                <Mail size={16} /> Send email
              </a>
            </div>

            <div style={panel}>
              <p style={{ ...eyebrow, marginBottom: '1rem' }}>LinkedIn</p>
              <p
                style={{
                  fontFamily: 'Boska, Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  marginBottom: '0.5rem',
                }}
              >
                Amirali Karimi
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Direct line for operators, press, and counsel. I read messages
                I recognize. Keep the first note short.
              </p>
              <a
                href="https://www.linkedin.com/in/amirali-karimi-405766199"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.7rem 1.25rem',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                <Linkedin size={16} /> Open LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intent grid */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Pick your lane</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 500 }}>
              What are you writing about?
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
            {intents.map((it) => (
              <a
                key={it.subject}
                href={`mailto:hello@boostcommerce.ca?subject=${encodeURIComponent(it.subject)}`}
                style={{
                  ...panel,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'border-color 0.15s ease',
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
                  <it.Icon size={20} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.35 }}>{it.title}</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{it.body}</p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    marginTop: 'auto',
                  }}
                >
                  Write &mdash; subject: {it.subject} <ArrowUpRight size={13} />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
