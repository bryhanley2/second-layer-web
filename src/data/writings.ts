export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  content: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "why-venture-capital-doesnt-make-sense-for-most",
    title: "Why Venture Capital Doesn't Make Sense... For Most",
    excerpt: "The Facebooks and Amazons of the world are not common. Here, I explore the reality of venture investing — and why it might not be the best choice for most investors.",
    date: "2026-05-01",
    readingTime: "6 min",
    tags: ["venture capital", "returns", "risk", "LPs"],
    content: [
      "People know VC Firms as those that invested in the likes of Facebook (Meta), Apple, Microsoft, Amazon, and Google (Alphabet) at their earliest stages, realizing massive returns on their investments. And while, yes, those who made those investments did strike it rich, outcomes like this are rare, painting a very small fraction of the full picture (visualized below).",
      "[image:/images/articles/vc-deal-outcomes.jpg|Where the returns actually come from: individual deal outcomes in a typical VC fund portfolio. In a typical fund of 20–30 companies, 1–3 investments generate 50–80% of total returns. Sources: Correlation Ventures study of 27,000+ VC investments (2009–2018), cited by Deutsche Bank Wealth Management; AngelList research; PitchBook/Cambridge Associates 2024.]",
      "The Issue with Venture:",
      "VC investing, especially compared to more easily accessible means of investing such as index funds, brings its fair share of problems. The first of note is that all VC firms aren't created equal; the extent to which these firms differentiate amongst each other from a return perspective is quite significant. Many top-performers (think Sequoia, Andreessen-Horowitz, General Catalyst) perform in the range of 15%–27% IRR annually, providing LPs with significant returns on their investment.",
      "However, not every firm is like Sequoia (though they strive to be). In reality, it's these top firms that are going to have their top pick of the very best founders: they have the track record, they have the capital (happy LPs will continue to invest into new fundraises), and they have the expertise. But what about the firms that don't perform as well? Smaller firms without a track record, or new funds/inexperienced GPs? The story is a bit different.",
      "[image:/images/articles/vc-net-irr-tiers.jpg|Net IRR by performance tier — 2017 vintage VC funds (as of Q1 2025). Based on 2,500+ US venture funds on Carta. Sources: Carta VC Fund Performance Report, Q1 2025; S&P 500 10-yr AACR from Cambridge Associates LLC US PE/VC Benchmark Commentary, H1 2025. All VC IRRs net of fees, expenses, and carried interest.]",
      "The data is clear: top funds perform exceptionally well in terms of IRR, with bottom (and even median) funds performing worse than the S&P 500. Put simply, VC is hard. Between the likelihood of investing in a unicorn to make up for those who don't make it (especially if you're a smaller fund), and the associated management fees, expenses, and carry these firms payout back to fund managers, VC isn't the most lucrative investment option for most. And that's not even considering the illiquidity of VC investments, where realizing gains from VC funds could take as long as 7–10 years (or longer).",
      "Why People Still Invest in Venture Funds:",
      "So if you're accredited, why invest in venture? Well, it does come with its perks. If you do choose correctly, you will see significant upside, particularly if you agree to favorable terms (liquidity preferences, preferred stock, etc.). By investing in a firm, you also have the opportunity to help shape its course: venture firms sit on the board of directors of the company, and have a major say in the overall strategy of the company you back. You can directly influence their likelihood of success, a path that benefits all parties involved.",
      "With venture investing, you can not only realize significant returns, but you can also help change the world for the better. I certainly recommend giving Ron Levin's Higher Purpose Venture Capital a read when you get the chance. The book does a really great job of demonstrating how venture-backed founders are effectively addressing the world's most critical issues in exciting new ways, from poverty to income inequality and education. Most founders really are out to make a difference in the world with their idea, and by investing in them, venture firms are empowering startup founders to do so.",
      "Lastly, venture capital is exciting. It may take years for you to realize the returns of your investments, but the opportunity to make an impact on a company at its earliest years is part of the package, and can't be dismissed. It's part of the reason why venture is so competitive career-wise — the opportunity to find the next wave of world-changing companies, and grow alongside them, is very rewarding.",
      "So does venture make sense? Well, there's a reason why you must be accredited in order to invest in these companies (though ETFs like XOVR and closed investment funds like USVC are trying to change that): there is significant risk associated with these investments. With 75% of startups failing to return invested capital, venture capital can't be the money you use to pay the mortgage. But for those willing to take on the risk, and especially those with a successful approach to choosing winners, it could be a high-yielding investment vehicle, providing investors the opportunity to shape the world for the better.",
      "Note: Statistics referenced are illustrative midpoints drawn from cited industry sources including Correlation Ventures, AngelList, PitchBook, Cambridge Associates, and Carta. Past performance is not indicative of future results."
    ]
  },
  {
    slug: "high-volume-low-stake-or-high-stake-low-volume",
    title: "High Volume, Low Stake or High Stake, Low Volume?",
    excerpt: "Comparing two fundamental VC investment strategies — high-volume co-investing versus concentrated, hands-on portfolios — and what the data says about risk, returns, and multiples across different time horizons.",
    date: "2026-03-20",
    readingTime: "8 min",
    tags: ["venture capital", "strategy", "portfolio construction", "risk"],
    content: [
      "One of the most recognized economic principles of venture capital is the Power Law, which states a small number of investments yield the vast majority of a fund's annual returns. Venture funds are established with this principle in mind: while you hope that every investment you make leads to a 1X, 3X, 5X, or even greater return, that simply is not the case in reality.",
      "A Correlation Ventures study examining over 27,000 investments from 2009–2018 found that 64% of VC deals did not even return the original principal (Berman 2018). Investors know this when they raise their fund and choose investment opportunities. However, it's the upside on the few investments that provide the substantial returns realized by top venture capital firms (it's important to note the stark difference in returns of the top-quartile and lower-quartile VC firms from a returns standpoint, which I'll discuss in greater detail later).",
      "I had the opportunity to meet with two different VC firms recently, both of which execute different investment strategies influencing both risk and potential returns along different time horizons. The first focused on a high volume of investments, typically as a co-investor (meaning, investment rounds aren't led and investors commit less capital for a smaller stake); the second, a concentrated, hands-on approach to investing (where deals are led and a greater equity stake is obtained).",
      "With the high volume approach, deals are made much more frequently: however, on a per-deal basis, the committed capital is lower because lower equity stakes are secured. This means much less (or even no) board representation, demonstrating less involvement in key decisions of the business, and a reliance that the founders and other investors with a greater stake will make decisions in alignment with yours. On the other hand, the concentrated investment strategy seeks to commit capital more carefully, taking a larger equity stake in companies but keeping a much smaller portfolio.",
      "The economics of these two different approaches are quite interesting: when considering a 5-year, 10-year, 15-year, and 20-year horizon, each strategy yields different Net IRR%, different multiples on invested capital, and different levels of risk and liquidity. The below graphs depict different scenarios of capital invested across the two different strategies, and do not represent historical evidence (though, they are derived from analyses of historical performance).",
      "Net IRR Performance: As demonstrated in Figure 1, the concentrated hands-on approach has a greater volatility, commonly referred to as a Beta (ꞵ). This is due to the lower volume of investments, and is very similar to why stock indexes are so popular: the greater the number of investments (or stocks), even if a few fail, your returns aren't influenced as considerably. However, the same goes for your returns: even if a couple of investments perform very well, due to your lower concentration and lower equity stake in these winners, that high return is not as visible.",
      "[image:/images/articles/irr-chart.png|Figure 1: Annualized Net IRR Over Fund Life]",
      "Multiple on Invested Capital: The story for MOIC is a bit different: the larger equity stake leads to a higher multiple for invested capital for the concentrated approach, and this is true for both the median and the best-case scenarios. The best way to describe this is in the case of a winner: if a fund owns a 25% equity stake in a company that reaches a $500 million valuation, that position returns $125 million. For a co-investor in the same deal, if they own just 3% of that same company, they only get $15 million out of it.",
      "Other factors include risk (higher risk tolerance = greater gains), but liquidation preferences and anti-dilution play a role as well. If you are leading deals, you set the path forward, which becomes increasingly important as liquidation preferences and cap tables become more complex. With anti-dilution, as lead investors set the standard, they almost always negotiate pro-rata rights to maintain their larger equity stake, which smaller co-investors may not have.",
      "[image:/images/articles/moic-chart.png|Figure 2: Multiple on Invested Capital (MOIC)]",
      "Risk and Liquidity: Lastly, it's essential to discuss risk and liquidity. A concentrated profile has a higher risk of loss; as we remember the stats provided earlier, 64% of deals do not even return the principal. Just as importantly, it's essential to note where the gains actually come from — Dave McClure, founder of 500 Startups, noted that just 1–2% of investments yield the 50x returns investors hope for when they agree to fund a deal (McClure 2015). Finding a unicorn is not only difficult, but when you have a limited number of investment deals to make, the search becomes even more difficult.",
      "[image:/images/articles/risk-liquidity-chart.png|Figure 3: Risk and Liquidity Profile Comparison]",
      "Conclusion: Both approaches have their own benefits and drawbacks; investing in many companies, just like stocks, reduces your risk; however, given lower equity percentages, you don't see as much of an upside on your winners. If you're building a concentrated portfolio with a greater equity stake, influence via board seats, and greater time devoted to helping your portfolio companies grow, you'll ultimately see more significant returns if these companies scale as hoped. But as we noted above, finding a unicorn (as the name suggests) is no easy feat. That being said, if executed successfully, both strategies have the potential to return substantial gains.",
      "The above graphs and theories, however, just scratch the surface. There are so many different factors which determine risk and reward within these two approaches that we haven't discussed yet: some of these factors include lead investor success, specific investment areas and stage, and investment terms. I look forward to diving into these areas with you soon.",
      "Note: Illustrative composites synthesized from Cambridge Associates US VC Index benchmarks (2,699 funds, 1981–2025), Carta fund performance data (2,835 funds, 2017–2025 vintages), AngelList LP portfolio analysis (10,665 portfolios), CEPRES database (1,840 funds, 28,452 deals, 1980–2023), Correlation Ventures (27,000 investments, 2009–2018), NBER research on venture capital risk and return, and CAIS/Preqin persistence studies. These are not predictions or backtests of any specific fund. These are median representations of the data, not necessarily demonstrating outliers. All returns net of standard 2/20 fee structures. Past performance is not indicative of future results.",
      "References:",
      "Berman, Seth. 2018. \"Venture Capital: No, We're Not Normal.\" Medium, May 30, 2018.",
      "McClure, Dave. 2015. \"99 VC Problems But A Batch Ain't One: Why Portfolio Size Matters For Returns.\" 500 Hats, May 22, 2015."
    ]
  },
  {
    slug: "defensibility-of-applications-in-ai-era",
    title: "The Defensibility of Applications in the AI Era",
    excerpt: "With AI removing barriers to building apps, the focus shifts from execution to validation, scaling, and defending your idea.",
    date: "2026-02-23",
    readingTime: "7 min",
    tags: ["ai", "entrepreneurship", "startups", "strategy"],
    content: [
      "I used to hear all the time that ideas are commodities, but the execution of them is not. And while this certainly still holds true (for the most part), execution just got a lot easier.",
      "The enhancement of AI applications over the past few weeks has been nothing short of remarkable (and, frankly, a bit scary). The time it takes to move from idea into action continues to decrease substantially, with platforms generating accurate code (which previously would take weeks to months) in a manner of seconds. As many are concerned about the impact these platforms may have on the job market, one clear benefit is this: there's no more barrier to building that app you dreamed of.",
      "You don't need to invest hundreds of hours into learning how to code, or scanning websites and research materials to help you define the competitive landscape, or building a PowerPoint presentation from scratch. AI eliminates those barriers, centering the focus on scalability as opposed to early-stage planning and development.",
      "However, with the barriers to entry removed for developing these applications (at least in their early stages), how do you differentiate? It's no longer about whether or not you can build it, but whether or not you can validate it, scale it, and defend it.",
      "Yes, it's easy to come up with an MVP for an idea you've been thinking about. But the efforts needed to refine, test, and scale aren't remediated by AI efficiencies. In other words, you still need to build something customers actually want (not what an LLM might indicate they want). You still need to know how to improve upon your ideas based on feedback from current/potential customers. And you still need to create a \"moat\" that gets both customers interested in paying and investors interested in writing you a check (if that is the path you'd like to go down).",
      "So how do you create and sustain this moat? Here are some of my thoughts in my experience as a startup operator:",
      "Network Effects: think about Facebook: their primary moat throughout their startup phase was their user base. Demonstrating a growing user base is one of the best forms of defense you can have as you scale your product. People only have so much time in the day, meaning they can only be on so many different applications. That barrier has not changed. So creating a product that becomes more valuable as more users join, and encouraging users to love it so much that they share it with their friends and family, are keys to scale that provide differentiation and an eventual, sustainable moat.",
      "Customer Feedback: speak to your users… but more importantly, listen to your users. I was listening to the Y-Combinator Podcast on how to get your first customers in 2026, and the emphasis of the video was to launch early with a Minimum Evolvable Product (MEP). In launching early, you get invaluable feedback from your first users that can help you shape the course of product development. The human touch must not be undermined: they are the ones who will be buying it. Steer away from analysis paralysis, and talk to people who just might like what you're building.",
      "Barrier by Association: probably the most straightforward way (though not easy by any means) to protect your product is through regulatory barriers. One way can be through defensibility by association (for example, a fintech application launches on the American Express network). The second, by obtaining the legal requirements to operate in areas others can't. For example, at the startup I work at now, one of our main competitive moats for our conformance testing service is our certification from the global standards provider of traceability. Not everyone will have that, so find a way to get it.",
      "Effective Presentation/Pitching: at the end of the day, AI can build a lot - however, it doesn't tell the story. That part is up to you. Knowing your product, competitors, and the market inside and out (enough to defend it when an investor or customer questions you) is essential. This also highlights the importance of a deep interest in your idea - as Steve Jobs once said, the only way to do great work is to love what you do. Having immense passion for an idea or an industry is essential - not everyone will, and it certainly helps in the storytelling process.",
      "Continuous Improvement: finally, implementing continuous improvement across all the different aspects of your business is essential. Want to know if you should add feature one or feature two? Or both? Ask your users. Want to know if you should extend your offerings to a larger TAM, or focus on a highly specialized niche? Map out the market, then ask your customers. This point really boils down to the following: under the current state of AI, you can't be complicit. Always look for ways to enhance your product and please your customer base. Continue to test, continue to build, and continue to rebuild!",
      "I'm curious to hear your thoughts on each of these areas. To you, what does starting and scaling a startup look like in 2026? What are other ways to defend your idea?"
    ]
  },
  {
    slug: "what-changes-to-serp-tells-us-about-economics-of-ai",
    title: "What Changes to Search Engine Result Pages Tells Us about the Economics of AI",
    excerpt: "Exploring how AI integration into search engines is reshaping advertising economics and what it signals about the future monetization of AI platforms.",
    date: "2026-01-23",
    readingTime: "4 min",
    tags: ["ai", "advertising", "technology", "economics"],
    content: [
      "As I think about how AI will impact different industries, one that comes to mind is the Search Engine Result Pages (SERP). Google's total advertising revenue in 2024 was $264.59 billion, with an estimated 70% of that coming from YouTube and Google Search Ads.",
      "However, when you used to do a Google Search, you would get a series of sponsored ads related to the search. These would be at the top of your SERP - with some text indicating the result was in fact sponsored.",
      "With Google's AI platform Gemini integrating directly into Google's search engine, I began to wonder… How is it going to work? The goal of an AI is to provide the most accurate information it can, and by ineffectively integrating ads into the platform, it could prevent or inhibit this. So why not ask Gemini to share its take on the matter.",
      "Turns out, these sponsored ads are now towards the bottom - unlike what was previously the case, where sponsored ads were located towards the very top. This begs the question, will that change? With the significant investments in artificial intelligence these major tech companies are making, will harder-to-find sponsored ads towards the bottom of the page provide enough of a payoff?",
      "This seems like just a small part of the direction I see us heading with artificial intelligence. Right now, we are at the peak of increasing engagement and adding users (at least in the United States). However, we could soon be headed in a different direction: now that you use it, and now that you like it, now we have to start giving our investors a return on their capital.",
      "Chat GPT recently began rolling out ads; Gemini and Perplexity have already implemented advertisements; and Meta AI plans to do so in February (with Claude as the ad-free outlier, solely focusing on subscriptions). What started as a \"last resort\" for these platforms is now a reality. The question is, what extent will these advertisements influence responses? What data/privacy concerns might come of it? How will advertisements impact the churn rates and customer lifetime value of users? Only time will tell, but if I had to guess, we'll learn a lot very quickly."
    ]
  },
  {
    slug: "customers-are-here-to-stay",
    title: "Customers are Here to Stay",
    excerpt: "In an era where AI can build prototypes in minutes, one thing remains irreplaceable: learning from real customers and experts.",
    date: "2026-01-18",
    readingTime: "4 min",
    tags: ["entrepreneurship", "ai", "customer discovery", "founders"],
    content: [
      "In the wake of the artificial intelligence boom, as I've emphasized in past writings, the ease of turning an idea into action has become astoundingly simple. The technical and informational barriers that once made the process much more difficult for founders have been lifted, thanks to the launch of LLMs. Accessing information, and even building a prototype or end-to-end application, are now more straightforward than ever before.",
      "What does this mean? For one, it's going to become a lot cheaper to launch a new website or app - which obviously hurts developers who once relied upon this for their income. The focus is now not how you can build something, but entirely on what can you build? In this sense, innovation is going to spike. And it's certainly something the Venture Capital industry should be excited about.",
      "A few years ago, I had the opportunity to interview Marc Baghadjian, the co-founder of Hyper, which is making it easier for employers and employees to manage corporate spending via autonomous AI agents. \"Everytime you think of a new idea, you need to get it down. But not just the name or the idea - create a little deck that describes the problem it solves, the opportunity, and the solution.\" Now, more than ever, creating a baseline for your next idea is no difficult feat.",
      "With a lot of the research and organization of the early entrepreneurial process becoming automated, you can't streamline everything. You still have to remember, no matter how much LLMs can support evaluating an opportunity (market size, industry growth, gaps in the current offerings, etc.), LLMs will never be your customers. You still need to learn from them.",
      "When I worked as a strategy consultant for Treacy & Company a few summers ago, despite having enumerable research and analysis about the client we were working with and the industry they were in, the importance of human conversation could not be replaced. We still spent hundreds to even thousands of dollars an hour on expert interviews - and their input was invaluable.",
      "But even if you don't have thousands of dollars to spend on an expert interview, the point remains true: we learn a lot from people that AI can't teach us. And for many, this might feel uncomfortable (I know for me, this is the case). Feedback might contradict what you (or even AI) has to say about your idea. But nonetheless, it's one of the most important steps you can take as you turn your idea into a prototype and beyond.",
      "Speaking with people is here to stay - and as an entrepreneur, you have to be ready. Having those conversations with customers and experts alike will bring you a wealth of knowledge that AI simply can't replicate."
    ]
  },
  {
    slug: "what-100-highest-valued-unicorns-tell-us",
    title: "What the 100 Highest Valued Unicorns Could Tell us About the Future of VC",
    excerpt: "Analyzing patterns from the 100 highest valued unicorns to uncover insights about geographic concentration, AI dominance, and the evolving venture capital landscape.",
    date: "2026-01-17",
    readingTime: "8 min",
    tags: ["venture capital", "unicorns", "ai", "analysis", "startups"],
    content: [
      "Today, I evaluated 100 of the highest valued unicorns, a list which includes their date of founding, country of origin, industry, number of founders, among other variables. Here are some of the biggest similarities amongst these different companies, and what it could say about the future of venture as a whole:",
      "Key Similarities:",
      "1. Extreme Geographic Concentration: 29% are in San Francisco alone. 57% in the US, 17% in China. Just two countries account for 74% of all unicorns.",
      "2. AI Dominance: 30% are AI companies. Of the top 7 mega-unicorns ($100B+), 5 are AI-focused. AI companies now reach $10B+ valuation in 1-2 years vs. the traditional 5-10.",
      "3. The 2010s Founding Era: 66% were founded between 2010-2019. This decade had perfect conditions: cloud maturity, mobile revolution, abundant VC capital.",
      "4. Multi-Category Positioning: 99% span multiple industries (average: 4.4 categories). This expands TAM and creates defensibility.",
      "5. Co-Founder Teams: Average: 2.7 founders. 2-3 co-founders is the sweet spot (58.5% combined). Solo founders only 22%.",
      "6. Software & Platform Business Models: SaaS, platforms, and infrastructure dominate. B2B focus more common than pure consumer. Capital-efficient scaling essential.",
      "7. Scale to 1,000+ Employees: 61% have 1,000+ team members. Small teams (<50) only survive if they're cutting-edge AI research labs.",
      "8. FinTech's Massive Presence: 17% are FinTech companies. Another 11% are Financial Services. Crypto/blockchain represents 9% despite volatility.",
      "9. Power Law Value Distribution: Top 7 companies (7%) worth more than bottom 60+ combined. Median: $14B, but OpenAI alone at $500B. Winner-takes-most dynamics.",
      "10. Speed to Unicorn Accelerating: Recent AI companies: 1-2 years to $10B. Traditional timeline: 5-10 years. 8 companies founded 2023+ already at $10B+.",
      "Key Takeaways",
      "It's now easier than ever to scale an idea with a smaller team. Lean startups emerged as a concept around 2008, with Eric Ries coining the term in his blog, Startup Lessons Learned. AI represents not only an opportunity for investment, but can supplement a founding team's ability to move from idea to concept to business significantly faster. We see this with the success, yet lean teams of companies like Thinking Machine Labs and Safe Superintelligence, with valuations of $12 billion and $32 billion in 2025 (respectively), have accomplished these valuations with very lean teams (between 11 - 50 employees).",
      "AI is dominating, but something needs to change. No surprise, the 15 most recent startups that make the list all focus on Artificial Intelligence. 2026 will bring about continued investment in artificial intelligence companies. However, given substantial valuations for these companies, investments are likely to become more impatient, and seek some of that liquidity back in the form of profit. For example, Chat GPT is beginning to test ads in their lower tiers throughout the United States, an indication that beyond developing new and improved models, investors want to begin to see greater unit economics.",
      "Most startups have either two or three co-founders. With AI decreasing the barrier to entry to code your ideas into prototypes and even products, I believe this number could eventually decrease. We likely will see more startups built off of the idea of just one or two co-founders, with AI LLMs taking over a lot of the task-heavy coding humans once needed to focus on.",
      "Only three healthcare companies made the list, even though healthcare is the largest industry across the globe in terms of impact and market size. What I recently learned from Roelof Botha of Sequoia is about $.20 for every dollar spent in healthcare goes to administrative and operational costs. Estimates suggest the U.S. spent over $5.5 trillion on healthcare alone - that means over a trillion dollars spent goes to operational and administrative costs. I believe the number of healthcare startups making this list will increase, given the ability for AI to enhance efficiencies. We are already seeing startups trying to solve this problem, including Camber, Abridge, Ambience Healthcare, and Tennr.",
      "2026 will be an exciting year, and without a doubt we will be seeing more companies added to this list as the year goes on. That being said, I think 2026 will also be a year where AI startups (both current startups looking to raise new rounds and startups looking for their first round of funding) emphasize the importance of a sustainable business model to complement the addition of novel features."
    ]
  },
  {
    slug: "update-on-sourcing-model-and-2025",
    title: "Update on the Sourcing Model and a Look Back on 2025",
    excerpt: "Reflecting on progress with the Seed-Stage Sourcing model, the dominance of AI in VC, and exploring opportunities beyond the hype.",
    date: "2025-12-28",
    readingTime: "4 min",
    tags: ["venture capital", "ai", "automation", "2025 review"],
    content: [
      "A lot of progress has been made on the Seed-Stage Sourcing model I've been developing over the past couple of weeks now. It's amazing to see how A.I. has made it so easy for ideas to become websites in just a matter of minutes.",
      "The evaluation platform is certainly still a work-in-progress. Nonetheless, some of the most significant changes include the Portfolio - actually demonstrating how companies were scored, instead of just providing their scores. Constantly updating the formula to include new and refined metrics was not a quick process, and I'm glad I spent a lot of time ensuring the formula was right before I began the startup evaluation process.",
      "Providing this methodology serves as evidence/provides credibility for this investment, and as I begin to publish this website to the public, I know the importance of this. My ultimate goal for this platform is to have as many numeric components automated as possible, while still providing aspiring investors (myself) as well as more experienced professionals the ability to provide their own assessments of seed-stage companies.",
      "Ultimately, I see this becoming a sort of database for startups and investors, and potentially something that can be implemented into venture capital companies as they organize their own database of potential and/or live investments. This has been an exciting process so far, and I look forward to providing updates in the near future.",
      "In the world of VC, 2025 saw tremendous investment in Artificial Intelligence, which is going to continue as we enter the new year. Considering some of the crazy high valuations we have seen in the space, I'm interested to see if and how these companies will begin to answer the question of profitability (OpenAI believes it won't reach profitability until 2029 or 2030). Are we going to see more conservative investments grounded on shorter profitability timelines, or will the hundred-billion dollar investments with a longer path to profitability continue?",
      "Lastly, with the new year just days away, I spoke to a mentor of mine, a Managing Partner at Alumni Ventures, discussing areas outside of A.I.. With AI dominating the investment focus for VC funds this year, he emphasized the importance of companies that exist outside the field, and the opportunity stemming from many investor's prioritization of A.I.. With many startups launching in fintech, healthtech, energy, and space, my hope is that these industries also remain at top of mind for many funds - while A.I. is an uber exciting space, there's still other industries in need!",
      "Looking forward to another exciting year ahead, and I can't wait to explore what founders are coming up with next as the new year comes around. Thanks for following along."
    ]
  },
  {
    slug: "my-first-sourcing-automation-project",
    title: "My First Sourcing Automation Project",
    excerpt: "Exploring how AI can transform startup evaluation and investment decisions by analyzing patterns in successful companies.",
    date: "2025-11-16",
    readingTime: "4 min",
    tags: ["venture capital", "ai", "automation", "investment strategy"],
    content: [
      "You don't need to be an expert in VC to know artificial intelligence is getting the most attention when it comes to startup investment. In fact, roughly 1 in 4 unicorns across the globe are artificial intelligence companies, even despite its relatively recent emergence as a mainstream tool (2023, with the release and adoption of generative AI platforms like ChatGPT).",
      "As artificial intelligence continues to shape how people work, I certainly think there's a role for AI on the investment side. While talking to founders and their customers (or target audience) is certainly here to stay, I believe there's an important role AI can play in how investors can find and filter startups based on certain performance metrics - including some we might not have previously considered. And even for metrics we know influence the likelihood of a successful startup, which individual metrics matter more?",
      "That being said, I wanted to try it for myself: what patterns exist amongst successful startups that we can use to better predict who to invest in next? So what I did was establish my own individualized evaluation rubric for Pre-Seed, Seed, and Series A companies (I wanted to focus on earlier stage companies, as it's here where there are the most companies to choose from, and also the greatest risk). I built this rubric with major help from Alumni Venture's VC MasterClass: The art of Evaluating a Deal. In this article, they provided the rubric they used to evaluate companies, which helped me shape my own thesis.",
      "I considered the following factors when evaluating rubrics: Revenue Growth, Market Size, Product Stickiness, Cash Runway, Team (Founders and Leadership Team), and Investors (if applicable, depends on if they received prior investment). I weighted each of these categories based on their perceived importance (and, again, I also considered how Alumni Ventures weights each of these categories).",
      "After gathering and aggregating data across various startup databases, I condensed the list into 30 different companies depending on which had available data. Then, I applied my evaluating rubric to each of the companies, using Generative AI to scan the Internet for the relevant data and provide a corresponding score for each metric.",
      "Nonetheless, I understand this was only the start. Many investors have been using a similar evaluating process for a very long time - but how do we know if it truly works? The only way to know would be to apply it to companies that went on to become unicorns, focusing on their progress at a similar point in time (when they were at a Pre-Seed, Seed, or Series A stage). How did each of these companies perform when I applied my rubric?",
      "After seeing the results, I would have to reshape my rubric - what specific metrics mattered more? Which mattered less? What other factors should I include in my rubric to make it both more granular and precise? How do each of these values change as I continue evaluating even more successful startups at their earlier stages? There's a lot to be learned, and I think that's part of what makes this project so exciting. I look forward to sharing my findings as this project continues to evolve, and I am always open to new ideas when it comes to this process."
    ]
  },
  {
    slug: "vc-competitive-dynamics",
    title: "The Broader Competitive Landscape of Venture Capital",
    excerpt: "Why VC firms compete not just with each other, but with safer investment alternatives—and what this means for fund strategy.",
    date: "2025-08-21",
    readingTime: "4 min",
    tags: ["venture capital", "competition", "investment strategy", "lps"],
    content: [
      "I used to think that the success of a Venture Capital fund relied most heavily on a firm's ability to be the right \"fit\" for a team, deemed by the ability of a fund to differentiate itself based on capital, typical investment stage, experience, and culture. However, my mindset has shifted a bit.",
      "I've listened to a lot of lectures on venture capital, specifically how firms like Sequoia Capital chose the next big winners, and why these winners end up choosing Sequoia Capital. But what a lot of people don't realize is the lack of success many of these portfolio companies experience, even after investment from some of the top VC firms. A glaring example is FTX, which received $1.73 billion dollars from some of the most notable investors across the globe, including Sequoia.",
      "VC firms, particularly those at the earliest stages, take on a ton of risk. According to Seth Levine, Managing Director of Foundry Group, \"65% of financings fail to return 1X their capital. And perhaps more interestingly, only 4% produce a return of 10X or more and only 10% produce a return of 5X or more.\" VC firms commit significant capital, resources, and time to find the next big winners—all while knowing the likelihood of finding the next big winner is slim.",
      "VC firms are not just competing against each other to win investment opportunities with who they perceive to be the next Facebook or Google. These firms are competing against the safety other investment options would provide their licensed partners (LPs), including real estate, private credit, and later-stage private equity.",
      "Failing to stand out in the VC industry, while failing to perform better than these often-safer options, reminds us that the playing field for a VC firm not only exists directly within the VC industry. This highlights the importance of a refined investment thesis, top-tier executional skills, and a team that is not only willing to provide capital but commit time and energy to put portfolio companies on the path to success. Fail to do so, and the limited partners will commit their capital elsewhere.",
      "It's this example in particular that reminded me that oftentimes, the competitiveness of an industry is more broad than one may think. We must remind ourselves to take a step back to truly understand the competitive dynamics of an opportunity. Investment firms, like entrepreneurs, don't solely compete with others like them—they compete with other substitutes they may not have previously considered. Adjusting to shifts amongst both directly competitive offerings and external substitutes is crucial."
    ]
  },
  {
    slug: "bagel-store",
    title: "Bagel Store",
    excerpt: "A bagel shop moment on why passion—not just AI-enabled efficiency—ultimately powers entrepreneurship.",
    date: "2025-08-12",
    readingTime: "3 min",
    tags: ["entrepreneurship", "ai", "founders"],
    content: [
      "My interest in venture capital has grown recently, particularly considering my excitement for my own startup idea, working in strategy and operations for a startup, and venture capital's recovery from its low point last year. A.I. has opened up plenty more investment opportunities, and we are starting to see some of the levels of deal activity we saw in 2021 and 2022.",
      "With greater market opportunity means a much higher likelihood for business creation. Without a doubt, companies raising seed rounds will inspire the next wave of entrepreneurs, particularly in an era where developing a deep understanding of a market, competitive due diligence, and advanced product development/GTM strategy can be accomplished in a manner of minutes.",
      "A.I. has allowed anyone with internet to access all the internet has to offer (and then some), with generative applications bringing all of the knowledge available to your screen instantaneously. Greater feasibility means greater opportunity, and I'm all for it. There might not be a more exciting time for founders in history.",
      "The other day, I was at my hometown bagel store, which happened to be flooded with customers at the time. I watched the owner (with whom I've become friends with) running from one end of the store to the other, taking orders, checking finished ones, and greeting customers by name. Inching my way to the front, I couldn't help but comment to him on how crowded his store was.",
      "Seconds later, the owner pulled me aside. Pointing to a date picture of a small bagel shop, he told me that this is what his store looked like 30 years ago. A quarter of the size, and quarter of the staff, and 10% of the customers. He explained to me how tough it was to bring people through that door, but it never stopped him.",
      "He went on to explain further that it's moments like this, when there's no time to catch your breath, no time to relax, that you become truly grateful. When no matter how you look or feel on the outside, on the inside, you couldn't be happier.",
      "This brief interaction reminded me of the true meaning of entrepreneurship, and one in which I encourage all founders and prospective ones to maintain as they turn their idea into action: A.I. might help it grow faster, it might make it easier to start and scale, but only one thing can make it reach its true potential: passion. We can't let efficiency and automation allow us to lose sight of what's most important.",
      "A.I. might build the runway quicker. But without passion, there won't even be a plane."
    ]
  },
  {
    slug: "second-layer-approach",
    title: "The Second Layer Approach to Venture Capital",
    excerpt: "A proactive framework for discovering untapped investment opportunities by anticipating what industries will emerge from today's dominant trends.",
    date: "2025-10-16",
    readingTime: "5 min",
    tags: ["venture capital", "investment strategy", "sourcing", "framework"],
    content: [
      "I was thinking about how venture capital companies source new business ideas and the opportunities that they tend to focus on. Most venture capitalists will give similar answers: Artificial Intelligence & Machine Learning, Healthtech, Fintech, and SaaS. However, there are three major issues with designating these industries as attractive, at least under this much generality:",
      "Vagueness: As hinted above, saying these industries as a whole are attractive is not specific enough. These industries are not only broad in their distinction, but as you consider diving deeper into the companies within them, you'll find it hard to create comparisons among the companies you are considering investing in. For example, if I source from a long list of SaaS companies, it'll be a lot more difficult to compare and contrast metrics for startups with drastically different business models that serve drastically different problems.",
      "Competition: When you are general in your search, particularly if using Large Language Models to enhance your search capabilities, chances are you will find companies that have already been evaluated by other venture capital firms. By zeroing in on specific industries, there's a better chance you will find the \"diamond in the rough\" that has yet to be evaluated, likely due to their lower ranking in SERPs and other aggregate lists of startup opportunities.",
      "Breadth: Perhaps the most obvious (but at the same time, most important) consideration is the breadth of companies you will uncover through venture capital sourcing if you are too general in your search. Most venture capital firms start wide in their search and then narrow it down. We need to consider the sheer number of startup companies launching every single day, particularly with the rise of AI platforms that make turning an idea into a business easier (no-code platforms, deck-building platforms, etc.).",
      "But being specific isn't enough. We need to be proactive, not reactive.",
      "I was listening to an interview with Michael Collins, the CEO of Alumni Ventures, and he provided a reference I know all too well as a former hockey player: As Gretzky used to say, \"Go to where the puck is going to be, not where it is.\"",
      "This made me start thinking about my own approach to venture capital, which I'll coin the \"second layer\" approach to finding attractive industries with untapped potential. Here's what this looks like:",
      "Second Layer Approach\n1a. What industries are the most dominant today?\n1b. What industries are growing the fastest today?\n2a. What opportunities might 1a and 1b lead to?\n2b. What risks might 1a and 1b lead to?\n3a. What solutions are needed to help supplement the growth of 2a?\n3b. What solutions are needed to mitigate the risks of 2b?",
      "With this approach, we can begin to look ahead with an understanding of what industries could be on the horizon that we haven't uncovered yet. Those who do will become the first to find (or even support) those sharing a similar vision.",
      "It's immature to remain hyper-focused on a single, large industry as you consider making investments in venture capital. Understanding how these industries may lead to other growth industries and the risks that may face them opens up an entirely new window of opportunities for venture capitalists and entrepreneurs alike."
    ]
  }
];
