export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  minutes: number;
  tag: string;
  body: string[];
};

export const NEWS: NewsPost[] = [
  {
    slug: "uae-fmcg-2026-outlook",
    title: "UAE FMCG Outlook 2026: tighter margins, smarter sourcing",
    excerpt: "How shifting freight lanes and currency volatility are reshaping the UAE's bulk food import market — and what hospitality buyers should plan for next quarter.",
    date: "2026-04-12",
    author: "Trade Desk",
    minutes: 6,
    tag: "Market",
    body: [
      "The UAE's FMCG import landscape is entering one of its most dynamic phases in a decade. Three forces are converging: re-routed shipping lanes through the Arabian Sea, persistent INR–AED volatility, and a steady tightening of food-safety documentation across GCC ports.",
      "For hospitality buyers, this means single-source contracts that worked twelve months ago no longer offer the same buffer. We are seeing a clear shift towards multi-origin contracts — particularly for basmati and sona masoori varieties — where 60% of volume is locked at origin and the balance is sourced flexibly.",
      "Our recommendation for Q3 procurement: lock in your highest-volume SKU at a fixed-INR landed cost, leave 30–40% as flexible volume, and ensure your supplier holds buffer stock in a UAE warehouse rather than relying on just-in-time port clearance.",
      "Speak to our trade desk for a buyer-specific outlook — we'll share the latest origin notes from our Punjab and Telangana mill partners, plus current freight indicators on the major lanes.",
    ],
  },
  {
    slug: "basmati-2026-harvest-report",
    title: "Punjab basmati harvest 2026: early notes from origin",
    excerpt: "Our origin team's first read on this season's basmati crop — grain length, moisture and what to expect on yield, quality and price by mid-Q3.",
    date: "2026-03-28",
    author: "Origin Team",
    minutes: 4,
    tag: "Harvest",
    body: [
      "Early field reports from our Punjab partner mills indicate a healthy 2026 basmati crop with grain length averaging 7.2–7.6mm in 1121 varieties — comfortably within our specification.",
      "Moisture is tracking slightly above last season at the field gate, which is expected after the late-September rains. We are flagging this to clients with steam-rice contracts: expect a marginally longer drying window before mill-out.",
      "On price: we anticipate a softer market through May–June as new-crop volumes build, then firming into Q3 as export demand from Iran and the GCC absorbs the surplus.",
      "Buyers planning their next 6–9 months of consumption should consider locking forward contracts in May to take advantage of the soft window.",
    ],
  },
  {
    slug: "sustainable-jute-packaging-rollout",
    title: "Switching 50kg basmati bags to certified-recycled jute",
    excerpt: "We're rolling out FSC-aligned recycled jute packaging across our 50kg basmati line — what it means for buyers, and the trade-offs we worked through.",
    date: "2026-03-10",
    author: "Operations",
    minutes: 5,
    tag: "Sustainability",
    body: [
      "Starting this month, all 50kg basmati shipments leaving our Warsan warehouse will be packed in certified recycled-jute sacks with a documented chain of custody from our packaging partner in Bangladesh.",
      "The change adds approximately 1.2% to per-tonne packaging cost, which we are absorbing through Q2. We believe this is the right baseline for any premium FMCG trader operating in the UAE in 2026.",
      "We considered three alternatives — virgin jute, woven PP and biodegradable-lined paper. Recycled jute won on three counts: durability through long-haul export, breathability for stored rice, and a meaningful reduction in embodied carbon versus virgin alternatives.",
      "The rollout to 25kg and 5kg formats is planned for Q4 once we've completed testing on stack stability.",
    ],
  },
  {
    slug: "hospitality-partnership-q1",
    title: "Onboarding three new five-star hospitality partners in Q1",
    excerpt: "We were proud to onboard three new five-star hospitality partners across Dubai and Abu Dhabi this quarter — covering daily basmati, atta and ground-spice consumption.",
    date: "2026-02-18",
    author: "Sales",
    minutes: 3,
    tag: "Partnerships",
    body: [
      "Q1 has been a strong quarter for partnership growth. We onboarded three new five-star hospitality groups across Dubai and Abu Dhabi, taking responsibility for their daily consumption of basmati rice, whole-wheat atta and core ground spices.",
      "Each partnership followed our standard onboarding: a 30-day pilot with a single property, formal QC alignment with the executive chef and procurement, then a phased rollout across the group's UAE properties.",
      "We're particularly grateful for the trust placed in our team by the procurement leads, who pushed us hard on traceability documentation and gave us a high bar to clear.",
    ],
  },
  {
    slug: "gulfood-2026-recap",
    title: "Gulfood 2026 recap: what UAE buyers were really asking about",
    excerpt: "Three days at Gulfood, hundreds of conversations, and a clear pattern in what UAE bulk-food buyers are asking for in 2026.",
    date: "2026-02-22",
    author: "Trade Desk",
    minutes: 5,
    tag: "Events",
    body: [
      "We spent three full days at Gulfood 2026 hosting buyers, distributors and origin partners at our stand. A few clear themes emerged from the conversations.",
      "First, traceability — buyers are no longer satisfied with origin certificates alone. They want lot-level paperwork from the mill, ideally tied to a specific harvest window.",
      "Second, packaging flexibility — particularly for hospital and institutional buyers who need to standardise on portion-controlled formats.",
      "Third, payment terms — with rates moving and FX uncertainty, buyers are pushing harder on credit terms. We're working through what we can offer to long-term partners.",
      "Thank you to everyone who visited our stand — and to our team who made it run smoothly across all three days.",
    ],
  },
];