import { Link } from 'react-router-dom';
import { posts } from '../data/writings';
import PageHeader from '../components/Layout/PageHeader';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Writings() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      <PageHeader eyebrow="Writings" title={<>Essays on venture capital craft — <em className="text-accent">thinking out loud.</em></>}>
        Including the build log of this pipeline itself, from the first rubric to the
        engine you&rsquo;re looking at.
      </PageHeader>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="border-t border-ink">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              to={`/writings/${post.slug}`}
              className="group grid md:grid-cols-12 gap-3 md:gap-8 py-9 border-b border-rule"
            >
              <span className="mono text-gray-500 md:col-span-2 md:pt-2">{formatDate(post.date)}</span>
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl md:text-4xl leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-3 leading-relaxed max-w-2xl">{post.excerpt}</p>
                <p className="mono text-gray-400 mt-4">{post.tags.join(' · ')}</p>
              </div>
              <span className="mono text-gray-500 md:col-span-2 md:text-right md:pt-2">
                {post.readingTime}
                <span className="text-accent ml-2 inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
