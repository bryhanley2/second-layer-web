import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/writings';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

const IMAGE_RE = /^\[image:([^|]+)\|([^\]]*)\]$/;

export default function WritingDetail() {
  const { slug } = useParams();
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const idx = sorted.findIndex((p) => p.slug === slug);
  const post = sorted[idx];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-28">
        <p className="eyebrow">[ 404 ]</p>
        <h1 className="font-display text-5xl mt-4">That writing wasn&rsquo;t found.</h1>
        <Link to="/writings" className="btn-ghost mt-8">&larr; Back to writings</Link>
      </div>
    );
  }

  const next = sorted[idx + 1];

  return (
    <article>
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-12 md:pt-20">
          <Link to="/writings" className="mono text-gray-500 hover:text-accent transition-colors">
            &larr; Writings
          </Link>
          <p className="eyebrow mt-10 reveal">
            {formatDate(post.date)} &middot; {post.readingTime}
          </p>
          <h1
            className="font-display text-4xl sm:text-6xl leading-[1] mt-5 reveal"
            style={{ animationDelay: '80ms' }}
          >
            {post.title}
          </h1>
          <p className="mono text-gray-400 mt-6">{post.tags.join(' · ')}</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 prose-editorial">
        {post.content.map((para, i) => {
          const img = para.match(IMAGE_RE);
          if (img) {
            const [, src, caption] = img;
            return (
              <figure key={i} className="my-10 !mx-0">
                <img src={src} alt={caption} className="w-full border border-rule bg-white" />
                {caption && (
                  <figcaption className="mono text-gray-500 mt-3 leading-relaxed !text-[0.72rem]">
                    {caption}
                  </figcaption>
                )}
              </figure>
            );
          }
          if (para.includes('\n')) {
            return (
              <div
                key={i}
                className="mono bg-paper-2 border border-rule p-6 my-8 whitespace-pre-wrap leading-loose !text-[0.82rem] text-gray-700"
              >
                {para}
              </div>
            );
          }
          const isHeading = para.length < 60 && para.endsWith(':');
          return isHeading ? <h3 key={i}>{para.replace(/:$/, '')}</h3> : <p key={i}>{para}</p>;
        })}
      </div>

      <footer className="max-w-3xl mx-auto px-5 sm:px-8 pb-24">
        <div className="border-t border-ink pt-8 flex flex-wrap items-baseline justify-between gap-4">
          <Link to="/writings" className="btn-ghost">&larr; All writings</Link>
          {next && (
            <Link to={`/writings/${next.slug}`} className="group text-right max-w-sm">
              <span className="eyebrow">Next</span>
              <span className="block font-display text-2xl leading-tight mt-1 group-hover:text-accent transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}
