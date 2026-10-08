import { Link, useParams } from 'react-router-dom';
import { investmentMemos } from '../data/investment-memos';
import { REC_KLASS, CONVERGENT_SLUGS } from '../lib/memoMeta';

export default function InvestmentMemoDetail() {
  const { slug } = useParams();
  const memo = investmentMemos.find((m) => m.slug === slug);

  if (!memo) {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-28">
        <p className="eyebrow">[ 404 ]</p>
        <h1 className="font-display text-5xl mt-4">That memo wasn&rsquo;t found.</h1>
        <Link to="/memos" className="btn-ghost mt-8">&larr; Back to memos</Link>
      </div>
    );
  }

  const facts: [string, string][] = [
    ['Stage', memo.stage],
    ['Location', memo.location],
    ['Total raised', memo.totalRaised],
  ];

  return (
    <article>
      <header className="border-b border-rule">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-14 pb-12 md:pt-20">
          <Link to="/memos" className="mono text-gray-500 hover:text-accent transition-colors">
            &larr; Investment memos
          </Link>
          <p className="eyebrow mt-10 reveal">[ {memo.industry} ]</p>
          <h1
            className="font-display text-5xl sm:text-7xl leading-[0.96] mt-5 reveal"
            style={{ animationDelay: '80ms' }}
          >
            {memo.company}
          </h1>
          <p
            className={`mono uppercase tracking-[0.12em] mt-6 reveal ${REC_KLASS[memo.recommendation]}`}
            style={{ animationDelay: '160ms' }}
          >
            &bull; {memo.recommendation}
          </p>
          {CONVERGENT_SLUGS.has(memo.slug) && (
            <p className="mono text-accent mt-3">
              Also surfaced independently by the automated{' '}
              <Link to="/map" className="link-slide">Second Layer Map</Link>.
            </p>
          )}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-14">
        <dl className="grid sm:grid-cols-3 border-y border-ink">
          {facts.map(([k, v], i) => (
            <div key={k} className={`py-5 sm:px-5 ${i > 0 ? 'sm:border-l border-rule' : 'sm:pl-0'}`}>
              <dt className="eyebrow">{k}</dt>
              <dd className="mt-2 text-[0.98rem]">{v}</dd>
            </div>
          ))}
          <div className="py-5 sm:col-span-3 border-t border-rule">
            <dt className="eyebrow">Investors</dt>
            <dd className="mt-2 text-[0.98rem]">{memo.investors}</dd>
          </div>
          {memo.website && (
            <div className="py-5 sm:col-span-3 border-t border-rule">
              <dt className="eyebrow">Website</dt>
              <dd className="mt-2">
                <a href={memo.website} target="_blank" rel="noreferrer" className="link-slide text-accent-dark break-all">
                  {memo.website.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
                </a>
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-12 prose-editorial max-w-3xl">
          {memo.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <section className="mt-14 max-w-3xl">
          <p className="eyebrow">[ Top factors ]</p>
          <ol className="mt-6 border-t border-ink">
            {memo.topFactors.map((f, i) => (
              <li key={f.factor} className="grid grid-cols-12 gap-4 py-6 border-b border-rule">
                <span className="mono text-accent col-span-2 sm:col-span-1">0{i + 1}</span>
                <div className="col-span-10 sm:col-span-11">
                  <h3 className="font-display text-2xl leading-tight">{f.factor}</h3>
                  <p className="text-gray-600 mt-2 leading-relaxed text-[0.95rem]">{f.rationale}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <p className="mono text-gray-400 mt-12">{memo.tags.join(' · ')}</p>
        <div className="mt-10">
          <Link to="/memos" className="btn-ghost">&larr; All memos</Link>
        </div>
      </div>
    </article>
  );
}
