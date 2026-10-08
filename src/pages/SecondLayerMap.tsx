import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSecondLayerMap, MapTrend, MapLayer } from '../lib/map';

export default function SecondLayerMap() {
  const [trends, setTrends] = useState<MapTrend[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    getSecondLayerMap()
      .then((d) => setTrends(d.trends))
      .catch((e) => console.warn('second layer map:', e))
      .finally(() => setLoading(false));
  }, []);

  // A public page: a fetch failure and "not built yet" both land on the same
  // neutral empty state — never a raw error string.
  const empty = !loading && trends.length === 0;
  const trend = trends[selected];

  const stats = useMemo(() => {
    if (!trend) return null;
    return {
      layers: trend.layers.length,
      companies: trend.layers.reduce((n, l) => n + l.companies.length, 0),
    };
  }, [trend]);

  return (
    <div>
      {/* Hero */}
      <header className="relative bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#F5F3EE 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-16 md:pt-24 md:pb-24">
          <p className="eyebrow !text-gray-400 reveal">[ A Second Layer map ]</p>

          {trends.length > 1 && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              {trends.map((t, i) => (
                <button
                  key={t.trend}
                  onClick={() => setSelected(i)}
                  className={`mono uppercase tracking-[0.1em] text-[0.7rem] transition-colors ${
                    i === selected ? 'text-paper' : 'text-gray-500 hover:text-paper'
                  }`}
                >
                  <span className={`text-accent ${i === selected ? 'opacity-100' : 'opacity-0'}`}>[</span>
                  {t.trend}
                  <span className={`text-accent ${i === selected ? 'opacity-100' : 'opacity-0'}`}>]</span>
                </button>
              ))}
            </div>
          )}

          <h1
            className="font-display text-5xl sm:text-7xl lg:text-[5.6rem] leading-[0.94] mt-6 max-w-4xl reveal"
            style={{ animationDelay: '80ms' }}
          >
            {trend?.trend || 'The AI compute buildout'}
          </h1>
          <p
            className="text-lg text-gray-300 mt-8 max-w-2xl leading-relaxed reveal"
            style={{ animationDelay: '200ms' }}
          >
            {trend?.trend_blurb ||
              'The dominant trend is not the opportunity. The problems it creates are.'}
          </p>
          <p className="mono text-gray-500 mt-8">
            {stats ? `${stats.companies} companies · ${stats.layers} layers` : '—'}
            {trend?.updated ? ` · refreshed ${trend.updated}` : ''}
            {' · '}maintained by an AI sourcing pipeline
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-6 pb-14 border-b border-rule">
          <p className="md:col-span-7 text-gray-600 text-lg leading-relaxed">
            Each layer below is a problem the trend <em>creates</em>. The companies in it
            are seed-stage, surfaced automatically from specialist fund portfolios, public
            filings, and sector press — then checked against the thesis. Inclusion is not
            an endorsement.
          </p>
          <p className="md:col-span-4 md:col-start-9 text-sm text-gray-500 leading-relaxed">
            A curated selection — the top companies per layer. The full ranked dealflow
            and watchlist are private. For hand-written deep dives across every sector,
            see{' '}
            <Link to="/memos" className="link-slide text-accent-dark">Investment Memos</Link>.
          </p>
        </div>

        {loading && <p className="mono text-gray-500 py-16">Loading the map…</p>}
        {empty && (
          <div className="border border-ink p-10 my-16 shadow-offset bg-paper">
            <p className="eyebrow">[ Compiling ]</p>
            <p className="font-display text-3xl mt-3">The map is being built from the latest pipeline run.</p>
            <p className="text-gray-500 mt-2">Check back shortly.</p>
          </div>
        )}

        <div>
          {trend?.layers.map((layer, i) => (
            <LayerSection key={layer.id} layer={layer} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LayerSection({ layer, index }: { layer: MapLayer; index: number }) {
  return (
    <section className="grid md:grid-cols-12 gap-x-10 gap-y-6 py-14 border-b border-rule first:pt-6">
      <div className="md:col-span-4">
        <p className="mono text-accent">
          {String(index + 1).padStart(2, '0')}
          <span className="text-gray-400"> / layer</span>
        </p>
        <h2 className="font-display text-4xl leading-[1.02] mt-3">{layer.name}</h2>
        <p className="text-gray-600 mt-4 leading-relaxed text-[0.95rem]">{layer.problem}</p>
        <p className="mono text-gray-400 mt-5">
          {layer.companies.length} {layer.companies.length === 1 ? 'company' : 'companies'}
        </p>
      </div>

      <div className="md:col-span-8">
        <div className="grid sm:grid-cols-2 border-t border-l border-ink">
          {layer.companies.map((c) => (
            <div
              key={c.name}
              className="group border-r border-b border-ink p-6 bg-paper hover:bg-white transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                {c.website ? (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-2xl leading-tight hover:text-accent transition-colors"
                  >
                    {c.name} <span className="text-accent text-lg" aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="font-display text-2xl leading-tight">{c.name}</span>
                )}
                {c.stage && <span className="mono uppercase text-gray-500 whitespace-nowrap">{c.stage}</span>}
              </div>
              <p className="text-gray-600 mt-3 text-[0.92rem] leading-relaxed">{c.blurb}</p>
              {c.founders && <p className="mono text-gray-400 mt-4">{c.founders}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
