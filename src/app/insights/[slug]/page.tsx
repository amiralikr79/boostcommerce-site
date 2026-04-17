import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { allInsights, getInsight } from '@/lib/insights';

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
const chipPrimary: React.CSSProperties = {
  fontFamily: mono,
  fontSize: '0.68rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  padding: '0.25rem 0.55rem',
  border: '1px solid var(--color-primary-highlight)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--color-primary)',
  backgroundColor: 'var(--color-primary-highlight)',
  display: 'inline-flex',
};

export function generateStaticParams() {
  return allInsights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getInsight(slug);
  if (!essay) return { title: 'Essay not found' };
  return {
    title: essay.title,
    description: essay.excerpt,
    alternates: { canonical: `https://www.boostcommerce.ca/insights/${essay.slug}` },
  };
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getInsight(slug);
  if (!essay) notFound();

  const others = allInsights.filter((i) => i.slug !== essay.slug).slice(0, 2);

  return (
    <>
      <article>
        <section style={{ borderBottom: '1px solid var(--color-border)' }}>
          <div
            className="container-narrow"
            style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}
          >
            <Link
              href="/insights"
              style={{ fontFamily: mono, fontSize: '0.8rem', color: 'var(--color-text-faint)', display: 'inline-block', marginBottom: '1.75rem' }}
            >
              &larr; All insights
            </Link>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <span style={chipPrimary}>{essay.category}</span>
              <span style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)' }}>{essay.date}</span>
              <span style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)' }}>&middot;</span>
              <span style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)' }}>{essay.readTime}</span>
            </div>
            <h1
              style={{
                fontFamily: 'Boska, Georgia, serif',
                fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              {essay.title}
            </h1>
          </div>
        </section>

        <section style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <div
              className="prose prose-lg"
              style={{ maxWidth: '68ch' }}
            >
              {essay.body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.8,
                    color: 'var(--color-text)',
                    marginBottom: '1.4rem',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div
              style={{
                marginTop: '3rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-divider)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <p style={{ fontFamily: mono, fontSize: '0.78rem', color: 'var(--color-text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Written by
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-text)' }}>
                Amirali Karimi &middot; Founder, Boost Commerce Group
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://www.linkedin.com/in/amirali-karimi-405766199"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a
                  href="mailto:hello@boostcommerce.ca"
                  style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}
                >
                  hello@boostcommerce.ca
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>

      {others.length > 0 && (
        <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container">
            <p style={{ ...eyebrow, marginBottom: '0.5rem' }}>Keep reading</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, marginBottom: '2rem' }}>
              More field notes
            </h2>
            <div style={{ display: 'grid', gap: '1rem' }} className="md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/insights/${o.slug}`}
                  style={{ ...panel, textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={chipPrimary}>{o.category}</span>
                    <span style={{ fontFamily: mono, fontSize: '0.72rem', color: 'var(--color-text-faint)' }}>{o.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {o.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{o.excerpt}</p>
                  <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Read <ArrowUpRight size={13} />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
