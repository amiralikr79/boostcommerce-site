import type { MetadataRoute } from 'next';
import { companies } from '@/lib/companies';
import { allInsights } from '@/lib/insights';

const base = 'https://www.boostcommerce.ca';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/companies`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/acquisitions`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/leadership`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/press`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/disclaimers`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const companyRoutes: MetadataRoute.Sitemap = companies.map((c) => ({
    url: `${base}/companies/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const insightRoutes: MetadataRoute.Sitemap = allInsights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...companyRoutes, ...insightRoutes];
}
