import { useMemo, useState, type ReactNode } from 'react';
import { books, podcasts, articles, type Resource } from '../data/inspirations';
import PageHeader from '../components/Layout/PageHeader';

type Tab = 'Books' | 'Podcasts' | 'Articles';
type CategoryFilter = 'All' | 'venture' | 'psychology';

const CATEGORY_LABEL: Record<Exclude<CategoryFilter, 'All'>, string> = {
  venture: 'Venture & Finance',
  psychology: 'Psychology & Memoir',
};

function BracketToggle({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`mono uppercase tracking-[0.1em] text-[0.7rem] transition-colors ${
        active ? 'text-ink' : 'text-gray-400 hover:text-ink'
      }`}
    >
      <span className={`text-accent ${active ? 'opacity-100' : 'opacity-0'}`}>[</span>
      {children}
      <span className={`text-accent ${active ? 'opacity-100' : 'opacity-0'}`}>]</span>
    </button>
  );
}

export default function Inspirations() {
  const [tab, setTab] = useState<Tab>('Books');
  const [category, setCategory] = useState<CategoryFilter>('All');

  const shownBooks = useMemo(
    () => (category === 'All' ? books : books.filter((b) => b.category === category)),
    [category],
  );

  const list = tab === 'Books' ? shownBooks : tab === 'Podcasts' ? podcasts : articles;

  return (
    <div>
      <PageHeader eyebrow="Inspirations" title={<>What shapes <em className="text-accent">the thinking.</em></>}>
        Curated books, podcasts, and articles that inform my perspective on venture
        capital.
      </PageHeader>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 border-b border-ink pb-4">
          {(['Books', 'Podcasts', 'Articles'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-display text-3xl transition-colors ${
                tab === t ? 'text-ink' : 'text-gray-300 hover:text-gray-500'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 'Books' && (
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6">
            {(['All', 'venture', 'psychology'] as CategoryFilter[]).map((c) => (
              <BracketToggle key={c} active={category === c} onClick={() => setCategory(c)}>
                {c === 'All' ? 'All' : CATEGORY_LABEL[c]}
              </BracketToggle>
            ))}
          </div>
        )}

        <ul className="mt-6">
          {list.map((r: Resource, i) => {
            const body = (
              <>
                <span className="mono text-gray-400 md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="md:col-span-6">
                  <span className="block font-display text-2xl md:text-[1.7rem] leading-tight group-hover:text-accent transition-colors">
                    {r.title}
                  </span>
                  {r.byline && <span className="mono text-gray-500 block mt-2">{r.byline}</span>}
                </span>
                <span className="md:col-span-5 text-gray-600 text-[0.95rem] leading-relaxed">
                  {r.note}
                  {r.url && <span className="text-accent ml-1" aria-hidden="true">↗</span>}
                </span>
              </>
            );
            const cls = 'group grid md:grid-cols-12 gap-3 md:gap-8 py-6 border-b border-rule items-baseline';
            return (
              <li key={r.title}>
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noreferrer" className={cls}>{body}</a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
