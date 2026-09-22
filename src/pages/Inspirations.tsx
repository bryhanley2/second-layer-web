import { useMemo, useState } from 'react';
import { books, podcasts, articles, type Resource } from '../data/inspirations';

type Tab = 'Books' | 'Podcasts' | 'Articles';
type CategoryFilter = 'All' | 'venture' | 'psychology';

const CATEGORY_LABEL: Record<Exclude<CategoryFilter, 'All'>, string> = {
  venture: 'Venture & Finance',
  psychology: 'Psychology & Memoir',
};

export default function Inspirations() {
  const [tab, setTab] = useState<Tab>('Books');
  const [category, setCategory] = useState<CategoryFilter>('All');

  const shownBooks = useMemo(
    () => (category === 'All' ? books : books.filter((b) => b.category === category)),
    [category],
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Inspirations</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Curated books, podcasts, and articles that inform my perspective on venture
          capital.
        </p>

        <div className="flex gap-2 mt-8 border-b border-gray-200">
          {(['Books', 'Podcasts', 'Articles'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition ${
                tab === t
                  ? 'border-brand-900 text-brand-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'Books' && (
          <>
            <div className="flex flex-wrap gap-2 mt-6">
              {(['All', 'venture', 'psychology'] as CategoryFilter[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-sm px-3 py-1.5 rounded-full border transition ${
                    category === c
                      ? 'bg-brand-900 text-white border-brand-900'
                      : 'border-gray-300 text-gray-600 hover:border-brand-400'
                  }`}
                >
                  {c === 'All' ? 'All' : CATEGORY_LABEL[c]}
                </button>
              ))}
            </div>
            <ResourceGrid resources={shownBooks} />
          </>
        )}
        {tab === 'Podcasts' && <ResourceGrid resources={podcasts} />}
        {tab === 'Articles' && <ResourceGrid resources={articles} />}
      </div>
    </div>
  );
}

function ResourceGrid({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {resources.map((r) => {
        const inner = (
          <>
            <h3 className="font-bold text-gray-900 leading-snug">{r.title}</h3>
            {r.byline && <p className="text-sm text-gray-500 mt-1">{r.byline}</p>}
            {r.note && <p className="text-sm text-gray-600 mt-2 leading-relaxed">{r.note}</p>}
          </>
        );
        const cls = 'block bg-white rounded-xl border border-gray-200 p-5' +
          (r.url ? ' hover:border-brand-400 transition' : '');
        return r.url ? (
          <a key={r.title} href={r.url} target="_blank" rel="noreferrer" className={cls}>
            {inner}
          </a>
        ) : (
          <div key={r.title} className={cls}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
