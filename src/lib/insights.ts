export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const allInsights: Insight[] = [
  {
    slug: 'building-bc-digital-businesses',
    title: 'What it actually takes to build a profitable digital business in BC',
    excerpt:
      'Most digital businesses fail because they chase audience before revenue. Here is how we think about building lean, cash-positive operations from day one.',
    date: 'April 2025',
    category: 'Operations',
  },
  {
    slug: 'permanent-capital-thesis',
    title: 'Why we hold indefinitely — and what that changes about every decision',
    excerpt:
      'Permanent capital is not just a holding strategy. It changes how you hire, price, and choose which problems to solve.',
    date: 'March 2025',
    category: 'Philosophy',
  },
  {
    slug: 'bc-private-lending-landscape',
    title: 'The BC private lending market: what borrowers do not know and lenders will not say',
    excerpt:
      'After connecting hundreds of BC borrowers with private lenders, we have learned a few things about how this market actually works.',
    date: 'February 2025',
    category: 'Market',
  },
];
