export type CompanyRole = 'COUNSEL' | 'LENDER' | 'SUPPLY' | 'CARE';
export type CompanyAccent = 'emerald' | 'cyan' | 'violet' | 'amber';
export type RoadmapStatus = 'shipped' | 'active' | 'planned';

export interface CompanyStat {
  label: string;
  value: string;
}

export interface CompanyRoadmapItem {
  quarter: string;
  title: string;
  status: RoadmapStatus;
}

export interface Company {
  slug: string;
  name: string;
  domain: string;
  url: string;
  role: CompanyRole;
  category: string;
  status: string;
  launched: string;
  tagline: string;
  summary: string;
  description: string;
  problem: string;
  approach: string;
  stats: CompanyStat[];
  is: string[];
  isNot: string[];
  roadmap: CompanyRoadmapItem[];
  primaryMetric: { label: string; value: string };
  accent: CompanyAccent;
}

export const companies: Company[] = [
  {
    slug: 'bcprivateloans',
    name: 'BCPrivateLoans.ca',
    domain: 'bcprivateloans.ca',
    url: 'https://bcprivateloans.ca',
    role: 'LENDER',
    category: 'Private lending',
    status: 'Active',
    launched: '2025',
    tagline: "BC's private lending desk, demystified.",
    summary:
      'Connects British Columbia borrowers with vetted private mortgage lenders across 16 cities. Rates from 5.99%, terms in plain English.',
    description:
      'BCPrivateLoans is a lender-match platform built on one observation: the private mortgage market in BC is opaque, broker-gated, and overwhelming for borrowers. We bring the catalogue into the open — rate ranges, lender types, and application mechanics — so first-time and bridge borrowers can walk in informed.',
    problem:
      'Private lending in BC runs through a broker funnel that charges for introductions borrowers could often make themselves. Rate sheets are guarded. Borrowers sign expensive terms because they never see the comparison.',
    approach:
      'We publish transparent rate bands by lender category, match borrowers by scenario, and handle the first-round triage so underwriting gets a clean file. Revenue comes from lender placements — borrowers pay nothing to compare.',
    stats: [
      { label: 'Active lenders', value: '15+' },
      { label: 'Cities covered', value: '16' },
      { label: 'Rates from', value: '5.99%' },
      { label: 'Monthly inquiries', value: '400+' },
    ],
    is: [
      'A lender-match platform',
      'A transparency layer on a broker-gated market',
      'Revenue-share with the lender side',
      'Licensed-partner compliant',
    ],
    isNot: [
      'A mortgage broker',
      'A direct lender of capital',
      'Regulated advice',
      'A substitute for legal or financial counsel',
    ],
    roadmap: [
      { quarter: 'Q1 2025', title: 'Initial lender network + 16 cities', status: 'shipped' },
      { quarter: 'Q2 2025', title: 'Scenario-based match + application triage', status: 'shipped' },
      { quarter: 'Q3 2026', title: 'Rate-band observatory with historic data', status: 'active' },
      { quarter: 'Q4 2026', title: 'Alberta expansion', status: 'planned' },
    ],
    primaryMetric: { label: 'Active lenders', value: '15+' },
    accent: 'emerald',
  },
  {
    slug: 'bcmedicalaccess',
    name: 'BCMedicalAccess.ca',
    domain: 'bcmedicalaccess.ca',
    url: 'https://bcmedicalaccess.ca',
    role: 'CARE',
    category: 'Healthcare navigation',
    status: 'Active',
    launched: '2025',
    tagline: 'Private healthcare in BC, explained plainly.',
    summary:
      'Navigation for the 1.2M+ British Columbians on specialist waitlists. Private clinics, cross-border options, and what each actually costs.',
    description:
      'BCMedicalAccess is an information product for patients stuck on public-system waitlists. We do not deliver care. We document what private options exist in BC and beyond, what they cost, what they do not cover, and what questions to ask before signing.',
    problem:
      '1.2M+ British Columbians are on a specialist waitlist. Private options exist but are fragmented, poorly documented, and often marketed with more confidence than their licensing supports. Patients need a plain map.',
    approach:
      'We maintain a structured directory of licensed BC private clinics, cross-border partners, and the procedure-level economics of each. Every listing is sourced and dated. No referral fees — we sell nothing to the clinics.',
    stats: [
      { label: 'Addressable patients', value: '1.2M+' },
      { label: 'Clinics documented', value: '80+' },
      { label: 'Procedures mapped', value: '35' },
      { label: 'Monthly readers', value: '6k+' },
    ],
    is: [
      'An information product',
      'A navigation and comparison layer',
      'Plainly sourced, dated, and updated',
      'Independent of clinics listed',
    ],
    isNot: [
      'A medical provider',
      'A clinical advisor',
      'A paid-placement directory',
      'A substitute for a licensed physician',
    ],
    roadmap: [
      { quarter: 'Q2 2025', title: 'BC private clinic directory v1', status: 'shipped' },
      { quarter: 'Q4 2025', title: 'Cross-border procedure economics', status: 'shipped' },
      { quarter: 'Q2 2026', title: 'Patient-scenario decision flow', status: 'active' },
      { quarter: 'Q4 2026', title: 'Insurance-reimbursement map', status: 'planned' },
    ],
    primaryMetric: { label: 'Addressable', value: '1.2M+' },
    accent: 'cyan',
  },
  {
    slug: 'zerolawyer',
    name: 'ZeroLawyer.ca',
    domain: 'zerolawyer.ca',
    url: 'https://zerolawyer.ca',
    role: 'COUNSEL',
    category: 'Legal templates',
    status: 'Active',
    launched: '2025',
    tagline: 'Province-compliant legal documents, without the retainer.',
    summary:
      'Legal document templates for Canadian founders and small businesses. Province-aware, reviewed annually, priced per document.',
    description:
      'ZeroLawyer sells legal templates for routine Canadian business needs — NDAs, contractor agreements, shareholder agreements, privacy policies — in province-aware variants. Every template is written by a Canadian lawyer and reviewed annually.',
    problem:
      "Founders pay $500–$2,000 for documents the lawyer's office adapted from a template. Small businesses either overpay or skip the document entirely. Off-the-shelf US templates don't match Canadian provincial law.",
    approach:
      'A library of Canadian-lawyer-drafted, province-aware templates priced per document. No subscription. Annual legal review baked into the price. Founders spend $49, not $1,200.',
    stats: [
      { label: 'Templates', value: '42' },
      { label: 'Provinces covered', value: '10' },
      { label: 'Founders served', value: '500+' },
      { label: 'Avg. price', value: '$49' },
    ],
    is: [
      'A document-template library',
      'Drafted by licensed Canadian counsel',
      'Province-aware and dated',
      'One-time purchase per document',
    ],
    isNot: [
      'A law firm',
      'Legal advice',
      'A substitute for counsel on complex matters',
      'A subscription SaaS',
    ],
    roadmap: [
      { quarter: 'Q1 2025', title: 'First 20 templates, 4 provinces', status: 'shipped' },
      { quarter: 'Q3 2025', title: 'All 10 provinces + employment bundle', status: 'shipped' },
      { quarter: 'Q2 2026', title: 'Interactive drafting flow', status: 'active' },
      { quarter: 'Q3 2026', title: 'Corporate-governance pack', status: 'planned' },
    ],
    primaryMetric: { label: 'Founders served', value: '500+' },
    accent: 'violet',
  },
  {
    slug: 'bcindustrialsupply',
    name: 'BCIndustrialSupply.ca',
    domain: 'bcindustrialsupply.ca',
    url: 'https://bcindustrialsupply.ca',
    role: 'SUPPLY',
    category: 'Industrial directory',
    status: 'Active',
    launched: '2025',
    tagline: 'The BC industrial supplier directory contractors actually use.',
    summary:
      'A structured directory of 578+ BC industrial suppliers across 165+ categories. Built for contractors and procurement, not SEO farms.',
    description:
      'BCIndustrialSupply is a no-fluff directory of industrial suppliers across British Columbia. Contractors and procurement managers use it to find suppliers by category, region, and capability. Suppliers list themselves — verification is manual.',
    problem:
      'The existing directories are SEO farms packed with dead links, paid placements, and duplicate listings. Procurement managers waste hours hunting for a supplier who actually answers the phone.',
    approach:
      'A hand-verified directory, updated quarterly, with capability tags and regional coverage. Free to list if verified. Premium placement is clearly labelled. Zero algorithmic re-ranking.',
    stats: [
      { label: 'Suppliers listed', value: '578+' },
      { label: 'Categories', value: '165+' },
      { label: 'Regions', value: '12' },
      { label: 'Monthly searches', value: '9k+' },
    ],
    is: [
      'A verified directory',
      'Updated quarterly',
      'Transparent about paid placements',
      'Built for procurement, not SEO',
    ],
    isNot: [
      'A marketplace or transaction layer',
      'A procurement service',
      'Pay-to-rank',
      'A supplier reviews platform',
    ],
    roadmap: [
      { quarter: 'Q1 2025', title: 'First 300 suppliers, 100 categories', status: 'shipped' },
      { quarter: 'Q3 2025', title: '578+ suppliers, 165 categories, 12 regions', status: 'shipped' },
      { quarter: 'Q2 2026', title: 'Capability-tag search + regional heatmap', status: 'active' },
      { quarter: 'Q4 2026', title: 'Quote-request routing (opt-in)', status: 'planned' },
    ],
    primaryMetric: { label: 'Suppliers', value: '578+' },
    accent: 'amber',
  },
];

export function getCompany(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}

export const accentHex: Record<CompanyAccent, string> = {
  emerald: '#10b981',
  cyan: '#22d3ee',
  violet: '#8b5cf6',
  amber: '#f59e0b',
};
