export type CompanyStatus = 'Active' | 'Incubating' | 'Exited';

export interface CompanyStat {
  label: string;
  value: string;
  note?: string;
}

export interface CompanyRoadmapItem {
  quarter: string;
  title: string;
  status: 'shipped' | 'active' | 'planned';
}

export interface Company {
  slug: string;
  name: string;
  domain: string;
  url: string;
  role: string;           // COUNSEL, LENDER, SUPPLY, CARE
  category: string;       // friendly label
  status: CompanyStatus;
  launched: string;
  tagline: string;         // one line
  summary: string;         // 1-2 sentences for cards
  description: string;     // fuller paragraph for detail page
  problem: string;
  approach: string;
  stats: CompanyStat[];
  is: string[];            // "This business IS..."
  isNot: string[];         // "This business IS NOT..."
  roadmap: CompanyRoadmapItem[];
  primaryMetric: { label: string; value: string };
  accent: 'emerald' | 'cyan' | 'violet' | 'amber';
}

export const companies: Company[] = [
  {
    slug: 'zerolawyer',
    name: 'ZeroLawyer',
    domain: 'zerolawyer.ca',
    url: 'https://zerolawyer.ca',
    role: 'COUNSEL',
    category: 'Legal templates',
    status: 'Active',
    launched: '2025',
    tagline: 'Province-compliant legal templates for Canadian founders.',
    summary:
      'Legal document templates for Canadian founders and small businesses. Province-compliant, affordable, immediate — revenue-ready from launch.',
    description:
      'ZeroLawyer publishes province-compliant legal templates — incorporation packs, NDAs, contractor agreements, shareholder agreements, privacy policies — priced for Canadian founders who need answers today, not a $450/hr retainer tomorrow. Each template ships with a plain-English guide and is reviewed against the latest BC, Ontario, and federal statutory updates.',
    problem:
      'Canadian founders routinely overpay for templated legal work that a well-scoped document and a clear guide could have delivered for a fraction of the cost.',
    approach:
      'A library of jurisdiction-aware templates, a fixed-price checkout, and a content engine that keeps every document current with legislative change.',
    stats: [
      { label: 'Status', value: 'Revenue-ready' },
      { label: 'Coverage', value: 'BC · ON · Federal' },
      { label: 'Founders served', value: '500+' },
      { label: 'Avg. price vs. lawyer', value: '−92%' },
    ],
    is: [
      'A template & guide library',
      'Jurisdiction-aware (BC, ON, federal)',
      'Fixed-price, instant download',
      'Reviewed against statutory change',
    ],
    isNot: [
      'A law firm',
      'A retainer service',
      'Legal advice for a specific matter',
      'A replacement for a lawyer on complex deals',
    ],
    roadmap: [
      { quarter: '2025 Q2', title: 'BC incorporation & founder packs', status: 'shipped' },
      { quarter: '2025 Q3', title: 'Ontario contractor & NDA bundles', status: 'shipped' },
      { quarter: '2025 Q4', title: 'Privacy & PIPEDA policy builder', status: 'active' },
      { quarter: '2026 Q1', title: 'Alberta & federal expansion', status: 'planned' },
    ],
    primaryMetric: { label: 'Founders served', value: '500+' },
    accent: 'emerald',
  },
  {
    slug: 'bcprivateloans',
    name: 'BCPrivateLoans',
    domain: 'bcprivateloans.ca',
    url: 'https://bcprivateloans.ca',
    role: 'LENDER',
    category: 'Private mortgages',
    status: 'Active',
    launched: '2025',
    tagline: 'BC private mortgage marketplace. 15+ active lenders.',
    summary:
      "BC's private lender marketplace connecting borrowers with 15+ active lenders. Rates from 5.99% across 16 cities.",
    description:
      'BCPrivateLoans is a neutral marketplace for British Columbians who need a private mortgage — second mortgages, bridge loans, equity takeouts — without the opacity of traditional broker funnels. We publish rate bands, verified lender profiles, and a short intake that routes to lenders who actually match the file.',
    problem:
      'BC private mortgage borrowers face opaque pricing, unresponsive brokers, and a hard time telling a real lender from a middleman.',
    approach:
      'Publish rate bands and lender profiles in the open. Score intake files against lender mandates. Only route to lenders who will actually quote.',
    stats: [
      { label: 'Active lenders', value: '15+' },
      { label: 'Cities covered', value: '16' },
      { label: 'Rates from', value: '5.99%' },
      { label: 'Typical LTV', value: 'up to 75%' },
    ],
    is: [
      'A neutral BC lender marketplace',
      'Transparent about rate bands',
      'Routing only to matched mandates',
      'Tracking real-world outcomes',
    ],
    isNot: [
      'A lender of record',
      'A mortgage broker retainer',
      'Offering financial advice',
      'Collecting broker fees from borrowers',
    ],
    roadmap: [
      { quarter: '2025 Q1', title: 'Vancouver + Lower Mainland launch', status: 'shipped' },
      { quarter: '2025 Q3', title: 'Expansion to 16 BC cities', status: 'shipped' },
      { quarter: '2025 Q4', title: 'Lender scorecards & response-time SLAs', status: 'active' },
      { quarter: '2026 Q1', title: 'Commercial & land loans vertical', status: 'planned' },
    ],
    primaryMetric: { label: 'Active lenders', value: '15+' },
    accent: 'cyan',
  },
  {
    slug: 'bcindustrialsupply',
    name: 'BCIndustrialSupply',
    domain: 'bcindustrialsupply.ca',
    url: 'https://bcindustrialsupply.ca',
    role: 'SUPPLY',
    category: 'Supplier directory',
    status: 'Active',
    launched: '2025',
    tagline: 'Verified supplier directory for BC procurement.',
    summary:
      'Industrial supplier directory for BC contractors and procurement managers. 1,099 indexed pages, 578+ verified suppliers, 165+ categories.',
    description:
      'BCIndustrialSupply is a procurement-grade directory of British Columbia industrial suppliers — verified, categorized, and crawlable. Contractors use it to shortcut supplier discovery; suppliers use it to surface for searches that actually convert.',
    problem:
      'BC contractors and procurement managers still start supplier searches in Google with broken PDFs and stale association lists.',
    approach:
      'Crawl, verify, and index BC suppliers by category and region. Publish structured pages AI assistants can cite. Charge suppliers for enhanced presence, not for the basic listing.',
    stats: [
      { label: 'Indexed pages', value: '1,099' },
      { label: 'Verified suppliers', value: '578+' },
      { label: 'Categories', value: '165+' },
      { label: 'Regions covered', value: 'BC-wide' },
    ],
    is: [
      'A verified directory',
      'Procurement-grade data',
      'AI-crawlable structured pages',
      'A discovery layer for suppliers',
    ],
    isNot: [
      'A procurement platform',
      'A payments processor',
      'A replacement for RFQs',
      'Pay-to-be-listed pay-to-play',
    ],
    roadmap: [
      { quarter: '2025 Q1', title: 'Initial 100-category index live', status: 'shipped' },
      { quarter: '2025 Q3', title: '1,099 page milestone, 578 verified', status: 'shipped' },
      { quarter: '2025 Q4', title: 'Supplier profile enrichment API', status: 'active' },
      { quarter: '2026 Q1', title: 'Regional vertical pages (Island, Interior)', status: 'planned' },
    ],
    primaryMetric: { label: 'Indexed pages', value: '1,099' },
    accent: 'violet',
  },
  {
    slug: 'bcmedicalaccess',
    name: 'BCMedicalAccess',
    domain: 'bcmedicalaccess.ca',
    url: 'https://bcmedicalaccess.ca',
    role: 'CARE',
    category: 'Healthcare navigation',
    status: 'Active',
    launched: '2025',
    tagline: 'Healthcare navigation for 1.2M+ British Columbians on waitlists.',
    summary:
      'Healthcare navigation for the 1.2M+ British Columbians on specialist waitlists. Private options, explained plainly.',
    description:
      'BCMedicalAccess helps British Columbians stuck on specialist waitlists understand what their private options actually are. Plain-language guides on imaging, orthopaedics, and second opinions — covering both BC private clinics and cross-border options — without upselling a single procedure.',
    problem:
      '1.2M+ British Columbians are on specialist waitlists and almost none of them are told, in plain language, what legal private alternatives exist in BC or across the border.',
    approach:
      'Publish specialist-by-specialist, procedure-by-procedure guides. Catalog verified private clinics. Never take a referral fee tied to a specific procedure.',
    stats: [
      { label: 'Addressable patients', value: '1.2M+' },
      { label: 'Specialties mapped', value: 'Imaging · Ortho · Derm' },
      { label: 'Referral kickbacks', value: '0' },
      { label: 'Coverage', value: 'BC + cross-border' },
    ],
    is: [
      'A plain-language navigator',
      'Independent of any single clinic',
      'Transparent about costs',
      'A waitlist-time educator',
    ],
    isNot: [
      'A clinic or provider',
      'A medical advice service',
      'A referral-fee broker',
      'A replacement for your physician',
    ],
    roadmap: [
      { quarter: '2025 Q2', title: 'Imaging & second-opinion guides', status: 'shipped' },
      { quarter: '2025 Q4', title: 'Orthopaedic pathway library', status: 'active' },
      { quarter: '2026 Q1', title: 'Cross-border clinic scorecards', status: 'planned' },
      { quarter: '2026 Q2', title: 'Dermatology & mental health guides', status: 'planned' },
    ],
    primaryMetric: { label: 'Addressable', value: '1.2M+' },
    accent: 'amber',
  },
];

export const portfolioCap = 10;

export function getCompany(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}
