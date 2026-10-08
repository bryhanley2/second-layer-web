import PageHeader from '../components/Layout/PageHeader';

const LINKS = [
  { href: 'https://www.linkedin.com/in/bryan-stanley-hanley/', label: 'LinkedIn', external: true },
  { href: 'https://bryanhanley.substack.com/about', label: 'Substack', external: true },
  { href: 'mailto:bry.hanley2@gmail.com', label: 'Email', external: false },
];

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="About" title={<>Bryan <em className="text-accent">Hanley.</em></>} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 prose-editorial">
          <p>
            Bryan Hanley currently works as the Operations and Strategy Lead for Gateway
            Checker, a Boston-based pharmaceutical compliance software startup providing
            product verification, traceability, and supply chain integrity solutions for
            pharmaceutical trade partners.
          </p>
          <p>
            Bryan helps establish and oversee the relationship between hundreds of
            different pharmaceutical stakeholders, helping ensure drugs and their data are
            delivered timely and in conformance with regulatory requirements.
            Additionally, Bryan leads GTM strategy for new product offerings and marketing
            initiatives, bringing greater awareness to industry noncompliance while helping
            trade partners navigate the complexities of conformance.
          </p>
          <p>
            In the meantime, Bryan is building an automated early-stage company evaluation
            platform, leveraging large language models to add efficiencies to the sourcing
            and diligences processes. Alongside the platform, Bryan is developing an
            investment thesis centered around his &ldquo;Second Layer&rdquo; perspective,
            which emphasizes a forward-looking approach to venture investing that considers
            industries beyond the ones which are most notable today.
          </p>
          <p>
            Bryan graduated from Babson College in 2024, summa cum laude, with a Bachelor of
            Science in Business Administration. As someone with a boundless interest in the
            entrepreneurship space, whether you&rsquo;re a current entrepreneur, aspiring
            entrepreneur, or just interested in the world of startups and VC, don&rsquo;t
            hesitate to reach out.
          </p>
        </div>

        <aside className="md:col-span-4">
          <div className="border-t border-ink pt-5 md:sticky md:top-28">
            <p className="eyebrow">[ Elsewhere ]</p>
            <ul className="mt-5 divide-y divide-rule border-y border-rule">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center justify-between py-4 hover:text-accent transition-colors"
                  >
                    <span className="font-display text-2xl">{l.label}</span>
                    <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mono text-gray-500 mt-6">Based in New York, USA</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
