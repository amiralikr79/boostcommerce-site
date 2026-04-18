export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  body: string[];
  publishedISO: string;
  updatedISO: string;
}

export const allInsights: Insight[] = [
  {
    slug: 'my-employees-are-claude',
    title: 'My employees are Claude',
    excerpt:
      'The labour cost problem was never talent. It was supervision. When the cost of a competent reviewer fell to almost nothing, the shape of a small business changed with it.',
    date: 'April 2026',
    category: 'Thesis',
    readTime: '6 min read',
    publishedISO: '2026-04-18',
    updatedISO: '2026-04-18',
    body: [
      'The labour cost problem was never talent. It was supervision. What shifted in the last eighteen months is the cost of a competent review, and when that cost fell, the entire shape of a small business shifted with it.',
      'For most of the twentieth century, a business was a cage of people built around a task. The task stayed the same for decades. The cage around it grew. By the time the cage was finished, nobody inside it could remember what the task had been. This is how you end up with ten people producing five people of output at fifteen people of cost. The cage is the reason.',
      'Every knowledge worker I know is in one of two moods right now. They think AI is a toy, or they think AI is a threat. Both views are wrong. AI is an employee. It is not a very senior employee. It is a brilliant junior who never sleeps, never asks for equity, and will run the same task ten thousand times without getting bored once.',
      'Every workflow decomposes into three roles. Strategy. Execution. Review. You used to hire for each. Strategy was a founder. Execution was an operator. Review was a manager. Three chairs, minimum. Often ten. What AI did was make the middle chair almost free, and the other two cheaper than anyone in the old economy wants to admit.',
      'Boost Commerce Group is a holding company of four focused digital businesses. It has zero full time employees. Claude is the part of the stack that did the most to make that possible. Not because Claude is the most verbose model. Because Claude is the reviewer. Every piece of code that ships, every piece of content that goes to a customer, every compliance boundary that gets tested, runs through Claude before it leaves the building.',
      'Run the arithmetic. A competent reviewer in Canada costs one hundred and twenty thousand dollars a year, all in. Claude at my usage runs about one hundred dollars a month. The savings are not the headline. The speed is. A human reviewer takes twenty four hours to turn around a document. Claude takes twenty four seconds. Twenty four hours to twenty four seconds is not a productivity improvement. It is a change in the nature of time.',
      'The mistake most founders make with AI is treating it as a tool. A tool is something you use. An employee is something you delegate to. When you start delegating to Claude the way you would delegate to a junior you respect, the output changes. You stop rewriting the prompt. You start handing over context, constraints, and a standard of review. The work scales with the quality of the delegation, exactly like a human.',
      'Every business that still runs a twenty person operations team is running on the nineteen ninety six labour model in a twenty twenty six market. Most of them have not noticed. Some will not notice until a five person competitor eats their lunch. The new math is simple. One operator, one model, ten portfolio units. That is the BCG configuration. It is not a forecast. It is what I am running right now.',
      'Of the frontier models, Claude is the one I trust with judgment. Others are better at generation. Claude is better at saying no. It pushes back on bad reasoning. It flags claims that need a source. It refuses to ship content that crosses a compliance line even when you want it to. A reviewer that never caves is the kind of employee you cannot find at any salary. Claude is that employee.',
      'The cost of labour was always a proxy for the cost of judgment. What you were paying your operators for was not execution. It was the ability to say no to bad work. When the price of a competent no falls to almost nothing, the number of chairs in the middle of your org chart falls with it. What remains is a founder, a model, and the problems they choose to solve together.',
      'I do not think AI will replace employees. I think it will replace the reason anyone ever needed twenty of them. That is a different and more powerful claim. The best founders I know this year are not building AI companies. They are building companies that could not have existed before AI, which is something else entirely. The ones who figure this out early will compound for a decade before the rest of the market notices. The employee in the next office is already the agent on your desk. You either make peace with that now, or you pay twenty salaries to people who will figure it out before you do.',
    ],
  },
  {
    slug: 'permanent-capital-thesis',
    title: 'Why we hold indefinitely',
    excerpt:
      'Permanent capital is not just a holding strategy. It changes how you hire, price, and decide which problems to solve.',
    date: 'March 2026',
    category: 'Thesis',
    readTime: '6 min read',
    publishedISO: '2026-03-10',
    updatedISO: '2026-03-10',
    body: [
      'Most small-business buyers are on a clock. A private-equity fund has a seven-year window. A search fund has an acquisition thesis and an exit. Even a bootstrapped founder usually plans to sell to somebody, someday. The clock is the hidden operator behind every decision that firm makes.',
      'Boost Commerce Group is built to remove the clock. We do not raise external capital. We do not underwrite to an exit multiple. Every unit we acquire, we acquire under the assumption that we will own it in 2040 and somebody competent will operate it in 2055. That single change, no pressure to exit, propagates through every other decision the unit makes.',
      'It changes hiring. If the plan is to sell in five years, you hire for the sprint. You find a head of growth who will stretch the numbers. You accept people who will not be in the seat long enough to pay down the debt of their own onboarding. In a permanent-capital frame, you hire for the decade. You pay what it takes. You choose slow, steady operators over fast, brittle ones. You accept that the best hire you make this year may not produce a spike in revenue for 18 months.',
      'It changes pricing. A unit on a clock extracts. It layers on upsells. It raises prices to the pain threshold because the owner needs the multiple. In a permanent-capital frame, you price fairly and collect the rent over decades. BCPrivateLoans does not charge borrowers because it does not need the spike, it needs the reputation. ZeroLawyer prices documents at $49 because annuity customers beat maximum-extraction customers over 30 years.',
      'It changes which problems you pick up. Clock-driven capital chases hype. It buys into categories that look like they will have multiple expansion at the exit. Permanent capital can ignore hype entirely. It can pick compounding problems, BC private lending, medical navigation, procurement directories, that will still be problems in ten years and whose solutions will still be valuable in thirty.',
      'The portfolio is capped at ten. We will never be a hundred-company roll-up. The cap is the mechanism that forces us to treat each unit like a decision we have to live with. Zero of our ten units are "try it and see." All ten will be bets we want to wake up to for the rest of our working lives. If a prospect does not survive that test, it does not earn a slot.',
      'Permanent capital is not a marketing line. It is the forcing function behind every other choice.',
    ],
  },
  {
    slug: 'ai-native-operations',
    title: 'The AI-native operating stack',
    excerpt:
      'Three layers: ChatGPT Projects as brain, Manus as hands, Claude as eyes. How a ten-company portfolio runs with zero full-time employees.',
    date: 'February 2026',
    category: 'Operations',
    readTime: '7 min read',
    publishedISO: '2026-02-14',
    updatedISO: '2026-02-14',
    body: [
      "Every BCG unit is operated by the same three-layer stack. No unit has full-time employees. Every workflow that used to demand an operations hire has been decomposed into three roles: brain, hands, eyes. Each role is owned by a specific AI system, because each system is disproportionately good at one part of the job.",
      "Layer 01. BRAIN. ChatGPT Projects holds strategy, memory, and context. Every unit has its own Project with the founding thesis, the compliance boundaries, the current roadmap, and the operating decisions made in every prior week. When a new question arrives (should we price this bundle at $79 or $99, should we list this lender as tier one) the Brain does not answer from scratch. It answers with the full context of what the unit has already decided, which keeps the unit consistent over time without a human memory in the loop.",
      "Layer 02. HANDS. Manus executes. When the Brain produces a plan (update the directory, draft the outreach email, compile the quarterly rate band report) Manus is the layer that actually opens the tools, produces the artifacts, and follows through. This is the layer that used to be an operations hire. It is now an agent that can run a multi hour job without supervision and produce the file, the draft, the row in the spreadsheet.",
      "Layer 03. EYES. Claude reviews. Nothing ships until the Eyes layer signs off. For code, Claude reads the diff and verifies correctness against the stated intent. For content, Claude flags factual claims that need sourcing. For compliance, Claude enforces the is and is not boundaries declared on each unit's page. If the draft reads like regulated advice and the unit is not licensed to give it, the Eyes layer kills the draft before it ships.",
      "The loop is tight. Brain strategizes. Hands executes. Eyes reviews. If Eyes rejects, Hands iterates or Brain re-plans. If Eyes approves, we ship. The whole thing runs as code, no human sits in the middle unless the Eyes layer kicks the decision upstream.",
      "Why this works: a ten-company portfolio is too much surface area for a founder plus a handful of operators. It is not too much surface area for a founder plus a disciplined three-layer AI stack. The cap exists because humans cannot supervise more than ten units; the stack exists because ten units cannot be operated by humans alone.",
      "This is not generative AI as feature. It is generative AI as the operating company. The difference is whether you have replaced workflows or replaced the chairs the workflows used to sit in. BCG has replaced the chairs.",
    ],
  },
  {
    slug: 'unit-value-framework',
    title: 'The three questions every BCG unit must answer',
    excerpt:
      'Real searchable problem? $1k/mo in twelve months? Operable without employees? If any answer is no, it is not a unit.',
    date: 'January 2026',
    category: 'Framework',
    readTime: '5 min read',
    publishedISO: '2026-01-18',
    updatedISO: '2026-01-18',
    body: [
      "Every prospective unit (a business we build from scratch, a domain we are considering acquiring, an idea that came in over the transom) has to pass three questions before it earns a slot. The questions are simple. They are also ruthless. The portfolio cap of ten means every slot is expensive, and the three questions are the filter that keeps the expensive slots from being wasted.",
      "Question one: does it solve a real, searchable problem? Not a problem we imagined. A problem people are typing into Google this week. BCPrivateLoans solves the question 'how do I get a private mortgage in BC.' BCMedicalAccess solves 'private MRI BC.' ZeroLawyer solves 'NDA template Ontario.' If the prospect cannot be anchored to a real search query with real volume, it does not pass. Real search volume is the market telling us the problem exists before we build anything.",
      "Question two: can it reach $1,000 per month within 12 months? This is not an ambition target, it is a reality check. A unit that cannot reach $1k/mo in twelve months is telling us something about the market, the unit economics, or our own ability to execute. We would rather know that on day 30 than on day 400. If the path to $1k/mo is not plausible with the operating stack we have, we walk.",
      "Question three: can it operate without full-time employees? Every unit in the portfolio runs on the three-layer stack plus a founder who reviews. If the unit requires a full-time operator to survive, we do not take it on. Not because operators are bad, because a hire is a decade-long obligation and we will only make it when the unit has already proven it can run without one. This is the question that kills the most prospects. Most good businesses still require people. We do not want good businesses. We want good businesses that compound without employees.",
      "Three yes answers and the prospect earns a slot evaluation. Any single no and it does not. This keeps us from the biggest failure mode a small holdco can have, which is filling the portfolio with decent businesses that do not fit the operating model. Decent plus misfit still costs a slot, and we only have ten.",
    ],
  },
  {
    slug: 'bc-private-lending-landscape',
    title: 'The BC private lending market',
    excerpt:
      'After routing hundreds of BC borrowers to private lenders, here is what borrowers do not know and lenders will not say.',
    date: 'December 2025',
    category: 'Market',
    readTime: '8 min read',
    publishedISO: '2025-12-12',
    updatedISO: '2025-12-12',
    body: [
      "British Columbia has one of the most opaque private-lending markets in Canada. After operating BCPrivateLoans for most of a year and routing hundreds of borrower inquiries to private lenders across sixteen BC cities, the pattern is clear. The opacity is not accidental. It is the business model.",
      "Private lending in BC runs through a broker funnel. A borrower who cannot qualify for a traditional mortgage ends up in front of a mortgage broker. The broker has relationships with fifteen to thirty private lenders. The broker charges the borrower a fee, typically 1 to 2% of the loan, for the introduction. The lender also pays the broker a referral. The borrower signs paperwork without ever seeing the rate sheets of the lenders the broker did not choose.",
      "That structure produces three predictable asymmetries. First, rate bands are invisible. A borrower who is told '10.5%' has no way to know that the same lender quoted 9.25% to another broker's client last week. Second, lender tiers are invisible. Lenders self-sort into A-tier (bank-like terms, strict criteria), B-tier (flexible criteria, rate premium), and C-tier (asset-based, high rate, tight term). Borrowers rarely know which tier the broker is shopping them into. Third, fee structures are invisible. The borrower sees their own fee. They do not see the lender's referral to the broker.",
      "What borrowers do not know. You can usually walk directly into the lender's office without the broker and get the same rate. You can negotiate the broker fee. It is not a regulated rate, it is a quote. Most private mortgages in BC are one year terms. A 'better rate' for a two year term almost always has a renewal clause that resets the rate. The lender's 'discharge fee' is negotiable on origination but not on exit. The LTV on the appraisal is what the lender says it is, not what the appraiser says it is. Lenders often haircut the appraised value by 10 to 15% for underwriting.",
      "What lenders will not say. The rate they quote the broker is not the rate they would quote you directly. The rate floor is lower than they claim. Ask for their C tier borrower rate and their A tier borrower rate for the same LTV and you will see a spread of 200 to 400 bps. Their 'network' of brokers is actually four or five who send most of the volume. They will decline a file in 48 hours but they will ghost a file for three weeks if they do not want to decline on paper.",
      "BCPrivateLoans bypasses the broker funnel. We publish transparent rate bands by lender tier. We route the borrower directly. Our revenue comes from the lender placement, not the borrower, so the borrower pays nothing to comparison-shop. The market does not love this. The market gets used to it.",
      "If you are a BC borrower considering a private mortgage: ask the lender, not the broker. Ask for the rate sheet. Ask for two LTV quotes, one at your actual LTV and one at ten points lower. Ask for discharge fee numbers on day one. Anything a broker can do you can usually do yourself with a phone call and a patient hour.",
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return allInsights.find((i) => i.slug === slug);
}
