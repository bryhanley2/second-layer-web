import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { investmentMemos, INDUSTRIES, type Industry } from '../data/investment-memos';
import PageHeader from '../components/Layout/PageHeader';
import { REC_KLASS, CONVERGENT_SLUGS } from '../lib/memoMeta';

export default function InvestmentMemos() {
  const [industry, setIndustry] = useState<Industry | 'All'>('All');

  const shown = useMemo(
    () => (industry === 'All' ? investmentMemos : investmentMemos.filter((m) => m.industry === industry)),
    [industry],
  );

  return (
    <div>
      <PageHeader eyebrow="Investment memos" title={<>A close look, <em className="text-accent">written by hand.</em></>}>
        <p>
          Deep dives on individual companies — market, team, positioning, growth. The
          counterpart to the pipeline: it screens at scale; this is what a close look
          looks like.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          For the automated version — one thesis, live, self-refreshing — see the{' '}
          <Link to="/map" className="text-accent-dark link-slide">Second Layer Map</Link>. Two
          AI Infrastructure memos here (Glacian Technologies, CapeZero) were independently
          surfaced by that pipeline too.
        </p>
      </PageHeader>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10" role="tablist" aria-label="Filter by industry">
          {(['All', ...INDUSTRIES] as const).map((ind) => {
            const active = industry === ind;
            return (
              <button
                key={ind}
                role="tab"
                aria-selected={active}
                onClick={() => setIndustry(ind)}
                className={`mono uppercase tracking-[0.1em] text-[0.7rem] transition-colors ${
                  active ? 'text-ink' : 'text-gray-400 hover:text-ink'
                }`}
              >
                <span className={`text-accent ${active ? 'opacity-100' : 'opacity-0'}`}>[</span>
                {ind}
                <span className={`text-accent ${active ? 'opacity-100' : 'opacity-0'}`}>]</span>
              </button>
            );
          })}
        </div>

        <div className="border-t border-ink">
          {shown.map((memo) => (
            <Link
              key={memo.slug}
              to={`/memos/${memo.slug}`}
              className="group grid md:grid-cols-12 gap-3 md:gap-8 py-8 border-b border-rule items-baseline"
            >
              <div className="md:col-span-4">
                <h2 className="font-display text-3xl leading-tight group-hover:text-accent transition-colors">
                  {memo.company}
                </h2>
                <p className="mono text-gray-500 mt-2">
                  {memo.industry} · {memo.stage}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-gray-600 leading-relaxed text-[0.95rem]">{memo.excerpt}</p>
                {CONVERGENT_SLUGS.has(memo.slug) && (
                  <p className="mono text-accent mt-3">&bull; Also surfaced by the Second Layer Map</p>
                )}
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className={`mono uppercase tracking-[0.1em] ${REC_KLASS[memo.recommendation]}`}>
                  &bull; {memo.recommendation}
                </p>
                <p className="mono text-gray-500 mt-2">{memo.totalRaised}</p>
              </div>
            </Link>
          ))}
          {shown.length === 0 && <p className="text-gray-500 py-8">No memos in this industry yet.</p>}
        </div>
      </section>
    </div>
  );
}
