import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/writings';

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });
}

const IMAGE_RE = /^\[image:([^|]+)\|([^\]]*)\]$/;

export default function WritingDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-500">That writing wasn&rsquo;t found.</p>
          <Link to="/writings" className="text-brand-700 hover:text-brand-900 font-semibold">
            &larr; Back to Writings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/writings" className="text-sm text-brand-700 hover:text-brand-900 font-semibold">
          &larr; Writings
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">{post.title}</h1>
        <div className="text-sm text-gray-500 mt-3">
          {formatDate(post.date)} &middot; {post.readingTime}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-5 text-gray-700 leading-relaxed">
          {post.content.map((para, i) => {
            const img = para.match(IMAGE_RE);
            if (img) {
              const [, src, caption] = img;
              return (
                <figure key={i} className="my-8">
                  <img src={src} alt={caption} className="w-full rounded-lg border border-gray-200" />
                  {caption && (
                    <figcaption className="text-xs text-gray-500 mt-2 leading-relaxed">{caption}</figcaption>
                  )}
                </figure>
              );
            }
            if (para.includes('\n')) {
              return (
                <div key={i} className="bg-gray-100 rounded-lg p-5 font-mono text-sm text-gray-700 whitespace-pre-wrap">
                  {para}
                </div>
              );
            }
            const isHeading = para.length < 60 && para.endsWith(':');
            return isHeading ? (
              <h3 key={i} className="text-lg font-bold text-gray-900 pt-2">{para}</h3>
            ) : (
              <p key={i}>{para}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
