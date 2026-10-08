import PageHeader from '../components/Layout/PageHeader';

const LAYERS = [
  { first: 'AI adoption scales across industries', second: 'AI governance & model risk platforms' },
  { first: 'Fintech expands globally', second: 'AML, KYB/KYC compliance automation' },
  { first: 'Healthcare digitizes rapidly', second: 'HIPAA-compliant workflow infrastructure' },
  { first: 'Legal AI proliferates', second: 'Compliance-grade legal tooling' },
  { first: 'Crypto/DeFi grows', second: 'Financial crime detection infrastructure' },
];

const STEPS: { label: string; items: [string, string][] }[] = [
  {
    label: 'Observe',
    items: [
      ['1a', 'What industries are most dominant today?'],
      ['1b', 'What industries are growing the fastest?'],
    ],
  },
  {
    label: 'Question',
    items: [
      ['2a', 'What opportunities might 1a and 1b lead to?'],
      ['2b', 'What risks might 1a and 1b lead to?'],
    ],
  },
  {
    label: 'Invest',
    items: [
      ['3a', 'What solutions supplement the growth of 2a?'],
      ['3b', 'What solutions mitigate the risks of 2b?'],
    ],
  },
];

export default function Thesis() {
  return (
    <div>
      <PageHeader eyebrow="Thesis" title={<>The <em className="text-accent">Second Layer</em> approach.</>}>
        A forward-looking way to source venture investments — by asking what dominant
        trends make inevitable, before the market recognizes it as a category.
      </PageHeader>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 prose-editorial">
        <p>
          The majority of venture capital today is concentrated in industries AI is
          directly shaping — healthtech, fintech, software, manufacturing. The work of
          founders building in these spaces is essential, and the rebound in VC funding
          heading into 2026 reflects that.
        </p>
        <p>But to solely look in these areas is a near-sighted approach to a long-term opportunity.</p>
        <p>
          AI will impact innumerable industries. What we can&rsquo;t forget to ask is not
          just how the industries currently touched by AI will be impacted — but how those
          industries will impact <em>others</em>. That second-order question is where I
          focus.
        </p>
      </div>

      <section className="border-y border-rule bg-paper-2">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
          <p className="eyebrow">[ The framework ]</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1] mt-4 max-w-2xl">
            Six questions, <em className="text-accent">asked in order.</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-10 mt-14">
            {STEPS.map((s, i) => (
              <div key={s.label} className="border-t border-ink pt-5">
                <p className="mono text-accent">0{i + 1} &middot; {s.label}</p>
                <ul className="mt-5 space-y-5">
                  {s.items.map(([k, q]) => (
                    <li key={k} className="grid grid-cols-12 gap-3">
                      <span className="mono text-gray-500 col-span-2 pt-1">{k}</span>
                      <span className="col-span-10 font-display text-2xl leading-snug">{q}</span>
                    </li>
                  ))}
                </ul>
                {s.label === 'Invest' && (
                  <p className="mono text-accent mt-6">&rarr; these are the investments</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-20 prose-editorial">
        <h3>Why this matters now</h3>
        <p>
          2025 was a top-heavy year — over 50% of all VC deal value came from just 0.05% of
          deals, led by decacorns like Databricks, OpenAI, SpaceX, and Anthropic. 2026 is
          expected to bring greater deal volume and less concentration as investors shift
          focus toward measurable outcomes over pure experimentation.
        </p>
        <p>
          With greater liquidity returning to LPs — finally seeing returns as AI companies
          pursue enterprise partnerships, subscription tiers, and monetization at scale —
          there is more dry powder available and greater openness to diversification.
        </p>
        <p>
          While a majority of investors center their focus on the industries AI is
          impacting today, by taking a more forward-looking approach, the Second Layer
          Approach seeks out opportunities both with less competition and with more
          long-term runway.
        </p>
      </div>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ink">
                <th className="eyebrow py-4 pr-6 font-normal">First layer — the dominant trend</th>
                <th className="eyebrow py-4 font-normal">Second layer — the opportunity</th>
              </tr>
            </thead>
            <tbody>
              {LAYERS.map((row) => (
                <tr key={row.first} className="border-b border-rule">
                  <td className="py-6 pr-6 font-display text-2xl text-gray-500 leading-snug">{row.first}</td>
                  <td className="py-6 font-display text-2xl leading-snug">
                    <span className="text-accent mr-3" aria-hidden="true">&rarr;</span>
                    {row.second}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 pb-24 pt-8 prose-editorial">
        <p>
          This is not compliance tech investing. It is a sourcing logic — a systematic way
          of finding the companies that dominant trends make inevitable, before the broader
          market recognizes them as a category.
        </p>
      </div>
    </div>
  );
}
