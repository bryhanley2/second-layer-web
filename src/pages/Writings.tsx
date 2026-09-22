import { Link } from 'react-router-dom';
import { posts } from '../data/writings';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

export default function Writings() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900">Writings</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Essays and notes on venture capital craft — thinking out loud, including the
          build log of this pipeline itself.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 mt-10">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              to={`/writings/${post.slug}`}
              className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-brand-400 transition"
            >
              <div className="text-xs text-gray-400">
                {formatDate(post.date)} &middot; {post.readingTime}
              </div>
              <h2 className="text-lg font-bold text-gray-900 mt-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
