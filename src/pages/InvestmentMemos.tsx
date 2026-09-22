import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { investmentMemos, INDUSTRIES, type Industry } from '../data/investment-memos';

const RECOMMENDATION_KLASS: Record<string, string> = {
  Invest: 'bg-green-100 text-green-800 border-green-300',
  'Further Review': 'bg-amber-100 text-amber-800 border-amber-300',
  Pass: 'bg-gray-100 text-gray-600 border-gray-300',
};

export default function InvestmentMemos() {
  const [industry, setIndustry] = useState<Industry | 'All'>('All');

  const shown = useMemo(
    () => (industry === 'All' ? investmentMemos : investmentMemos.filter((m) => m.industry === industry)),
    [industry],
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Investment Memos</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Hand-written deep dives on individual companies — market opportunity, team
          strength, competitive positioning, and growth potential. The counterpart to the
          pipeline: it screens at scale, this is what a close look looks like.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {(['All', ...INDUSTRIES] as const).map((ind) => (
            <button
              key={ind}
              onClick={() => setIndustry(ind)}
              className={`text-sm px-3 py-1.5 rounded-full border transition ${
                industry === ind
                  ? 'bg-brand-900 text-white border-brand-900'
                  : 'border-gray-300 text-gray-600 hover:border-brand-400'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="space-y-4 mt-8">
          {shown.map((memo) => (
            <Link
              key={memo.slug}
              to={`/memos/${memo.slug}`}
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-brand-400 transition"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-bold text-gray-900">{memo.company}</h2>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${RECOMMENDATION_KLASS[memo.recommendation]}`}>
                  {memo.recommendation}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {memo.industry} &middot; {memo.stage} &middot; {memo.location}
              </div>
              <div className="text-sm text-gray-500 mt-0.5">Total raised: {memo.totalRaised}</div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{memo.excerpt}</p>
            </Link>
          ))}
          {shown.length === 0 && (
            <p className="text-gray-500 text-sm">No memos in this industry yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
