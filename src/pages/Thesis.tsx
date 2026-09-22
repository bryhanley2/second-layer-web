const LAYERS = [
  { first: 'AI adoption scales across industries', second: 'AI governance & model risk platforms' },
  { first: 'Fintech expands globally', second: 'AML, KYB/KYC compliance automation' },
  { first: 'Healthcare digitizes rapidly', second: 'HIPAA-compliant workflow infrastructure' },
  { first: 'Legal AI proliferates', second: 'Compliance-grade legal tooling' },
  { first: 'Crypto/DeFi grows', second: 'Financial crime detection infrastructure' },
];

const STEPS = [
  ['Step 1a. What industries are most dominant today?', 'Step 1b. What industries are growing the fastest?'],
  ['Step 2a. What opportunities might 1a and 1b lead to?', 'Step 2b. What risks might 1a and 1b lead to?'],
  ['Step 3a. What solutions supplement the growth of 2a? → these are investments',
   'Step 3b. What solutions mitigate the risks of 2b? → these are investments'],
];

export default function Thesis() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">The Second Layer Approach</h1>

        <div className="mt-8 space-y-5 text-gray-700 leading-relaxed">
          <p>
            The majority of venture capital today is concentrated in industries AI is
            directly shaping — healthtech, fintech, software, manufacturing. The work of
            founders building in these spaces is essential, and the rebound in VC funding
            heading into 2026 reflects that.
          </p>
          <p>But to solely look in these areas is a near-sighted approach to a long-term opportunity.</p>
          <p>
            AI will impact innumerable industries. What we can&rsquo;t forget to ask is not
            just how the industries currently touched by AI will be impacted — but how
            those industries will impact <em>others</em>. That second-order question is
            where I focus.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">
            I call this the Second Layer approach to venture investing:
          </h2>

          <div className="space-y-5 py-2">
            {STEPS.map((pair, i) => (
              <div key={i} className="space-y-1.5 pl-4 border-l-2 border-brand-300">
                {pair.map((s) => <p key={s}>{s}</p>)}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 pt-4">Why this matters now</h2>
          <p>
            2025 was a top-heavy year — over 50% of all VC deal value came from just 0.05%
            of deals, led by decacorns like Databricks, OpenAI, SpaceX, and Anthropic. 2026
            is expected to bring greater deal volume and less concentration as investors
            shift focus toward measurable outcomes over pure experimentation.
          </p>
          <p>
            With greater liquidity returning to LPs — finally seeing returns as AI
            companies pursue enterprise partnerships, subscription tiers, and monetization
            at scale — there is more dry powder available and greater openness to
            diversification.
          </p>
          <p>
            While a majority of investors center their focus on the industries AI is
            impacting today, by taking a more forward-looking approach, the Second Layer
            Approach seeks out opportunities both with less competition and with more
            long-term runway.
          </p>

          <div className="overflow-x-auto py-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">First Layer (dominant trend)</th>
                  <th className="text-left py-3 font-semibold text-gray-900">Second Layer (the opportunity)</th>
                </tr>
              </thead>
              <tbody>
                {LAYERS.map((row) => (
                  <tr key={row.first} className="border-b border-gray-200">
                    <td className="py-3 pr-4">{row.first}</td>
                    <td className="py-3">
                      <span className="text-brand-700 mr-2">&rarr;</span>{row.second}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            This is not compliance tech investing. It is a sourcing logic — a systematic
            way of finding the companies that dominant trends make inevitable, before the
            broader market recognizes them as a category.
          </p>
        </div>
      </div>
    </div>
  );
}
