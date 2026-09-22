import { Link, useParams } from 'react-router-dom';
import { investmentMemos } from '../data/investment-memos';

const RECOMMENDATION_KLASS: Record<string, string> = {
  Invest: 'bg-green-100 text-green-800 border-green-300',
  'Further Review': 'bg-amber-100 text-amber-800 border-amber-300',
  Pass: 'bg-gray-100 text-gray-600 border-gray-300',
};

export default function InvestmentMemoDetail() {
  const { slug } = useParams();
  const memo = investmentMemos.find((m) => m.slug === slug);

  if (!memo) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500">That memo wasn&rsquo;t found.</p>
          <Link to="/memos" className="text-brand-700 hover:text-brand-900 font-semibold">
            &larr; Back to Investment Memos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/memos" className="text-sm text-brand-700 hover:text-brand-900 font-semibold">
          &larr; Investment Memos
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{memo.company}</h1>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${RECOMMENDATION_KLASS[memo.recommendation]}`}>
            {memo.recommendation}
          </span>
        </div>
        <div className="text-gray-500 mt-2">
          {memo.industry} &middot; {memo.stage} &middot; {memo.location}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Total raised</div>
            <div className="text-gray-900 mt-1">{memo.totalRaised}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Website</div>
            {memo.website ? (
              <a href={memo.website} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-900 mt-1 inline-block break-all">
                {memo.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </a>
            ) : (
              <div className="text-gray-400 mt-1">&mdash;</div>
            )}
          </div>
          <div className="sm:col-span-2">
            <div className="text-xs text-gray-400 uppercase tracking-wide">Investors</div>
            <div className="text-gray-900 mt-1">{memo.investors}</div>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
          {memo.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-900">Top factors</h2>
          <div className="space-y-4 mt-4">
            {memo.topFactors.map((f) => (
              <div key={f.factor} className="border-l-2 border-brand-500 pl-4">
                <div className="font-semibold text-gray-900">{f.factor}</div>
                <div className="text-gray-600 text-sm mt-1 leading-relaxed">{f.rationale}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {memo.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
