import { Link } from 'react-router-dom';

const STACK = [
  { tag: 'First layer — the trend', title: 'The AI compute buildout', note: 'Everyone funds the buildout itself.' },
  { tag: 'Second layer — the problem', title: 'Interconnection queues', note: 'Years to connect new load to the grid.' },
  { tag: 'The investment', title: 'Software that clears them', note: 'Seed-stage, asset-light, early.' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      <div
        className="absolute inset-0 dot-grid opacity-70 pointer-events-none"
        style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow reveal">[ A seed-stage sourcing thesis ]</p>
          <h1
            className="font-display text-[3.1rem] sm:text-7xl lg:text-[5.4rem] leading-[0.94] mt-6 reveal"
            style={{ animationDelay: '90ms' }}
          >
            The trend is not the opportunity.
            <br />
            <em className="text-accent">The problems it creates are.</em>
          </h1>
          <p
            className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl reveal"
            style={{ animationDelay: '220ms' }}
          >
            Second Layer investing backs the companies that solve problems{' '}
            <em>created by</em> a dominant trend — not the companies that{' '}
            <em>are</em> the trend. This site is the engine that finds them, and the
            thinking behind it.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-4 reveal"
            style={{ animationDelay: '340ms' }}
          >
            <Link to="/map" className="btn-ink">
              See the map <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/thesis" className="btn-ghost">
              Read the thesis
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 reveal" style={{ animationDelay: '460ms' }} aria-hidden="true">
          <div className="space-y-2.5">
            {STACK.map((s, i) => (
              <div key={s.title}>
                <div
                  className="border border-ink bg-paper p-5"
                  style={{
                    marginLeft: `${i * 22}px`,
                    boxShadow: i === 2 ? '6px 6px 0 0 #E5471B' : '6px 6px 0 0 #0F0F0D',
                  }}
                >
                  <p className="eyebrow">{s.tag}</p>
                  <p className="font-display text-[1.7rem] leading-tight mt-2">{s.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.note}</p>
                </div>
                {i < STACK.length - 1 && (
                  <p className="mono text-gray-400 py-2" style={{ marginLeft: `${i * 22 + 14}px` }}>
                    &darr; {i === 0 ? 'creates' : 'solved by'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
