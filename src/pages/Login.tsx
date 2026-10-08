import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../lib/supabase';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (login(password)) {
      navigate('/dealflow');
    } else {
      setError('That password didn’t work. Try again.');
      setPassword('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-12 gap-14 items-start">
      <div className="md:col-span-6">
        <p className="eyebrow reveal">[ Private ]</p>
        <h1
          className="font-display text-5xl sm:text-7xl leading-[0.96] mt-5 reveal"
          style={{ animationDelay: '80ms' }}
        >
          The working <em className="text-accent">surface.</em>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mt-7 max-w-md reveal" style={{ animationDelay: '200ms' }}>
          The full ranked board and watchlist live behind a password. No password?{' '}
          <Link to="/dealflow" className="link-slide text-accent-dark">Request access</Link>.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:col-span-5 md:col-start-8 border border-ink bg-paper p-8 shadow-offset reveal"
        style={{ animationDelay: '280ms' }}
      >
        <label htmlFor="password" className="eyebrow block">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-3 w-full bg-transparent border-0 border-b border-ink px-0 py-3 text-lg focus:outline-none focus:border-accent"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />

        {error && <p className="mono text-accent mt-4" role="alert">{error}</p>}

        <button type="submit" className="btn-ink mt-8 w-full justify-center">
          Enter <span aria-hidden="true">&rarr;</span>
        </button>
      </form>
    </div>
  );
}
