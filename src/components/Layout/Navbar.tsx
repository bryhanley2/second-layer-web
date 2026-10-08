import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../../lib/supabase';

const LINKS = [
  { to: '/thesis', label: 'Thesis' },
  { to: '/map', label: 'Map' },
  { to: '/writings', label: 'Writings' },
  { to: '/memos', label: 'Memos' },
  { to: '/dealflow', label: 'Dealflow' },
  { to: '/about', label: 'About' },
];

function Mark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" fill="none" stroke="#0F0F0D" strokeWidth="2.4" />
      <rect x="11" y="11" width="16" height="16" fill="#E5471B" />
    </svg>
  );
}

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(t);
  }, []);
  const time = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'America/New_York',
  }).format(now);
  return <span className="mono text-gray-500 hidden xl:inline">NYC {time}</span>;
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = isAuthenticated();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Mark />
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            Bryan Hanley<span className="mono text-accent ml-1">.vc</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `group mono uppercase tracking-[0.12em] text-[0.7rem] transition-colors ${
                  isActive ? 'text-ink' : 'text-gray-500 hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`text-accent mr-1 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    [
                  </span>
                  {l.label}
                  <span
                    className={`text-accent ml-1 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    ]
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Clock />
          {authenticated ? (
            <button onClick={handleLogout} className="btn-ghost !py-1 hidden sm:inline-flex">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn-ghost !py-1 hidden sm:inline-flex">
              Login <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          <button
            className="lg:hidden mono uppercase tracking-[0.12em] text-[0.7rem] border border-ink px-3 py-1.5"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-rule bg-paper">
          <nav className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex flex-col" aria-label="Mobile">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-display text-3xl py-2.5 border-b border-rule ${
                    isActive ? 'text-accent' : 'text-ink'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-4">
              {authenticated ? (
                <button onClick={handleLogout} className="btn-ghost">Logout</button>
              ) : (
                <Link to="/login" className="btn-ghost">Login &rarr;</Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
