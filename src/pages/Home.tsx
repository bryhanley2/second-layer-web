import { Link } from 'react-router-dom';
import Hero from '../components/Home/Hero';
import { posts } from '../data/writings';
import { investmentMemos } from '../data/investment-memos';

const STEPS = [
  {
    n: '01',
    title: 'Source',
    body: 'Specialist fund portfolios, SEC filings, sector press, accelerator cohorts, and program awardees — diffed run over run so only genuinely new companies enter.',
  },
  {
    n: '02',
    title: 'Verify',
    body: 'Every funding figure is cross-checked against Crunchbase, SEC Form D, and the company’s own site — cited with a confidence level, or marked unverified.',
  },
  {
    n: '03',
    title: 'Filter',
    body: 'A thesis test drops companies that are the trend rather than a second-layer response to it, and rejects funds, accelerators, and programs.',
  },
  {
    n: '04',
    title: 'Score',
    body: 'A 9-factor rubric, fed each company’s own website and web-searched context, ranks the survivors. The score is a sort key, not a gate.',
  },
];

const STATS = [
  { n: String(investmentMemos.length), label: 'Investment memos' },
  { n: String(posts.length), label: 'Essays' },
  { n: '22', label: 'Verticals sourced' },
  { n: '55', label: 'Proprietary sources' },
];

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Home() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  const memoNames = investmentMemos
    .filter((m) => m.industry === 'AI Infrastructure')
    .slice(0, 5)
    .map((m) => m.company);

  return (
    <div>
      <Hero />

      {/* By the numbers */}
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 sm:px-8 py-9 border-rule ${i % 2 === 1 ? 'border-l' : ''} ${
                i > 0 ? 'md:border-l' : ''
              } ${i > 1 ? 'border-t md:border-t-0' : ''}`}
            >
              <p className="font-display text-5xl leading-none">{s.n}</p>
              <p className="eyebrow mt-3">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engine */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <p className="eyebrow">[ 01 — The engine ]</p>
        <h2 className="font-display text-4xl sm:text-6xl leading-[1] mt-4 max-w-3xl">
          A pipeline that does the expensive research. <em className="text-accent">You make the call.</em>
        </h2>
        <p className="text-gray-600 mt-6 max-w-2xl text-lg leading-relaxed">
          Manual-trigger by design. It runs on demand, writes a ranked list with every
          figure cited or flagged, and no investment decision is automated.
        </p>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-ink pt-5">
              <p className="mono text-accent">{s.n}</p>
              <h3 className="font-display text-3xl mt-3">{s.title}</h3>
              <p className="text-gray-600 mt-3 text-[0.95rem] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two surfaces */}
      <section className="border-y border-rule bg-paper-2">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
          <p className="eyebrow">[ 02 — Two surfaces ]</p>
          <div className="mt-10 border-t border-ink">
            {[
              {
                to: '/map',
                tag: 'Public',
                title: 'The Second Layer Map',
                body: 'One dominant trend, the problem layers it creates, and the seed-stage companies attacking each — auto-maintained by the pipeline.',
              },
              {
                to: '/dealflow',
                tag: 'Private',
                title: 'Dealflow',
                body: 'The full ranked board and a watchlist of companies tracked for movement between runs. Access on request.',
              },
            ].map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group grid md:grid-cols-12 gap-4 items-baseline py-9 border-b border-rule px-0 hover:bg-ink hover:text-paper hover:px-5 transition-all duration-200"
              >
                <span className="eyebrow md:col-span-2 group-hover:!text-gray-400">{r.tag}</span>
                <span className="font-display text-4xl md:text-5xl md:col-span-5 leading-none">{r.title}</span>
                <span className="text-gray-600 group-hover:text-gray-300 md:col-span-4 text-[0.95rem] leading-relaxed">
                  {r.body}
                </span>
                <span
                  className="md:col-span-1 md:text-right text-2xl text-accent transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest writing */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow">[ 03 — Writing ]</p>
            <h2 className="font-display text-4xl sm:text-6xl leading-[1] mt-4">Latest thinking</h2>
          </div>
          <Link to="/writings" className="btn-ghost">All writings <span aria-hidden="true">&rarr;</span></Link>
        </div>

        <div className="mt-12 border-t border-ink">
          {latest.map((p) => (
            <Link
              key={p.slug}
              to={`/writings/${p.slug}`}
              className="group grid md:grid-cols-12 gap-3 md:gap-8 py-7 border-b border-rule items-baseline"
            >
              <span className="mono text-gray-500 md:col-span-2">{formatDate(p.date)}</span>
              <span className="font-display text-3xl md:text-[2rem] leading-tight md:col-span-7 group-hover:text-accent transition-colors">
                {p.title}
              </span>
              <span className="mono text-gray-500 md:col-span-3 md:text-right">{p.readingTime}</span>
            </Link>
          ))}
        </div>

        <div className="mt-14 border border-ink p-7 md:p-9 grid md:grid-cols-12 gap-6 items-center shadow-offset bg-paper">
          <div className="md:col-span-8">
            <p className="eyebrow">Hand-written deep dives</p>
            <p className="font-display text-3xl md:text-4xl leading-tight mt-3">
              {investmentMemos.length} investment memos across seven industries.
            </p>
            <p className="mono text-gray-500 mt-4">{memoNames.join(' · ')} · …</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/memos" className="btn-ink">Read the memos <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
