export type Resource = {
  title: string;
  byline?: string;
  url?: string;
  note?: string;
  category?: "venture" | "psychology";
};

export const books: Resource[] = [
  {
    title: "Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist",
    byline: "Brad Feld & Jason Mendelson",
    note: "The definitive guide to startup financing, term sheets, and navigating the VC process.",
    category: "venture"
  },
  {
    title: "Man's Search for Meaning",
    byline: "Viktor E. Frankl",
    note: "Psychiatrist's timeless lessons on purpose, resilience, and meaning.",
    category: "psychology"
  },
  {
    title: "The Cold Start Problem: How to Start and Scale Network Effects",
    byline: "Andrew Chen",
    note: "Practical playbook for igniting, scaling, and defending network effects.",
    category: "venture"
  },
  {
    title: "The Desert and the Sea: 977 Days Captive on the Somali Pirate Coast",
    byline: "Michael Scott Moore",
    note: "A gripping memoir about captivity, endurance, and the human psyche.",
    category: "psychology"
  },
  {
    title: "Competitive Strategy",
    byline: "Michael E. Porter",
    note: "Foundational frameworks on industry structure and competitive advantage.",
    category: "venture"
  },
  {
    title: "Greenlights",
    byline: "Matthew McConaughey",
    note: "Memoir of stories, lessons, and 'greenlights' for navigating life with humor and grit.",
    category: "psychology"
  },
  {
    title: "12 Rules for Life: An Antidote to Chaos",
    byline: "Jordan Peterson",
    note: "Practical principles for finding meaning, responsibility, and order in modern life.",
    category: "psychology"
  },
  {
    title: "Mastering Private Equity: Transformation via Venture Capital, Minority Investments and Buyouts",
    byline: "Claudia Zeisberger, Michael Pratt, Bowen White",
    note: "Comprehensive guide to private equity strategies, from venture capital to buyouts and value creation.",
    category: "venture"
  },
  {
    title: "Higher Purpose Venture Capital",
    byline: "Ron Levin",
    note: "Framework for aligning venture capital with social impact and sustainable value creation.",
    category: "venture"
  },
  {
    title: "Crossing the Chasm",
    byline: "Geoffrey A. Moore",
    note: "Marketing strategies for bringing disruptive technology products to mainstream markets.",
    category: "venture"
  },
  {
    title: "Good Company",
    byline: "Arthur Blank",
    note: "Leadership principles and values-driven business practices from The Home Depot co-founder.",
    category: "venture"
  }
];

export const podcasts: Resource[] = [
  { title: "Invest Like the Best", byline: "Patrick O'Shaughnessy", note: "Consistently sharp interviews." },
  { title: "20VC", byline: "Harry Stebbings", note: "Tactics and real founder/investor stories." },
  { title: "a16z Podcast", byline: "Andreessen Horowitz", note: "Thematic explorations of frontier tech." },
  { title: "Y Combinator Podcast", byline: "Y Combinator", note: "Practical advice on building and scaling startups." }
];

export const articles: Resource[] = [
  { title: "Good and Bad Reasons to Become a VC", byline: "Paul Graham", url: "https://paulgraham.com/vc.html" },
  { title: "The Only Thing That Matters", byline: "Marc Andreessen", url: "https://pmarchive.com/guide_to_startups_part4.html" },
  { title: "How to Do Great Work", byline: "Paul Graham", url: "https://paulgraham.com/greatwork.html" },
  { title: "Frameworks v0.2", url: "https://docs.google.com/document/d/1-UiEeoiV0xBFVZgid63FRaph03OCmHzyEExubn63j0U/edit?tab=t.0#heading=h.by5ehyjf5695" },
  { title: "The VC's Customer", byline: "Fred Wilson", url: "https://avc.com/2005/11/the_vcs_custome/" }
];
