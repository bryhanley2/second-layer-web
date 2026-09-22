export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900">About</h1>

        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
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
            initiatives, bringing greater awareness to industry noncompliance while
            helping trade partners navigate the complexities of conformance.
          </p>
          <p>
            In the meantime, Bryan is building an automated early-stage company evaluation
            platform, leveraging large language models to add efficiencies to the sourcing
            and diligences processes. Alongside the platform, Bryan is developing an
            investment thesis centered around his &ldquo;Second Layer&rdquo; perspective,
            which emphasizes a forward-looking approach to venture investing that
            considers industries beyond the ones which are most notable today.
          </p>
          <p>
            Bryan graduated from Babson College in 2024, summa cum laude, with a Bachelor
            of Science in Business Administration. As someone with a boundless interest in
            the entrepreneurship space, whether you&rsquo;re a current entrepreneur,
            aspiring entrepreneur, or just interested in the world of startups and VC,
            don&rsquo;t hesitate to reach out.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-brand-700 font-semibold">
          <a
            href="https://www.linkedin.com/in/bryan-stanley-hanley/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-900"
          >
            LinkedIn
          </a>
          <a
            href="https://bryanhanley.substack.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-900"
          >
            Substack
          </a>
          <a href="mailto:bry.hanley2@gmail.com" className="hover:text-brand-900">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
