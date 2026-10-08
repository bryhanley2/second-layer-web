import { Link } from 'react-router-dom';

const EXPLORE = [
  { to: '/thesis', label: 'Thesis' },
  { to: '/map', label: 'Second Layer Map' },
  { to: '/writings', label: 'Writings' },
  { to: '/memos', label: 'Investment Memos' },
  { to: '/inspirations', label: 'Inspirations' },
  { to: '/dealflow', label: 'Dealflow' },
  { to: '/about', label: 'About' },
];

const CONNECT = [
  { href: 'https://www.linkedin.com/in/bryan-stanley-hanley/', label: 'LinkedIn', external: true },
  { href: 'https://bryanhanley.substack.com/about', label: 'Substack', external: true },
  { href: 'mailto:bry.hanley2@gmail.com', label: 'Email', external: false },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-10">
        <p className="eyebrow !text-gray-400">[ Second Layer ]</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-5 max-w-4xl">
          The trend is not the opportunity.{' '}
          <em className="text-accent not-italic md:italic">The problems it creates are.</em>
        </h2>

        <div className="grid gap-12 md:grid-cols-3 mt-16 pt-10 border-t border-white/15">
          <div>
            <p className="eyebrow !text-gray-400 mb-4">Index</p>
            <ul className="space-y-2.5">
              {EXPLORE.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-gray-400 mb-4">Connect</p>
            <ul className="space-y-2.5">
              {CONNECT.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-gray-400 mb-4">This site</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              A seed-stage sourcing engine and the thinking behind it. The pipeline
              proposes; a human decides.
            </p>
          </div>
        </div>

        <div className="mono text-gray-500 mt-16 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Bryan Hanley</span>
          <span>New York, USA</span>
        </div>
      </div>
    </footer>
  );
}
