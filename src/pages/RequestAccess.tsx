import { Link } from 'react-router-dom';
import PageHeader from '../components/Layout/PageHeader';

const MAILTO =
  'mailto:bry.hanley2@gmail.com' +
  '?subject=' + encodeURIComponent('Dealflow access request') +
  '&body=' + encodeURIComponent(
    "Hi Bryan,\n\nI'd like access to the dealflow. A bit about me:\n\n- Who I am:\n- Why I'm interested:\n\nThanks.",
  );

const INSIDE = [
  {
    title: 'The ranked board',
    body: 'Every company the pipeline has surfaced — second-layer logic, verified funding (cited or flagged), strengths, and risks — filterable by vertical and funding range.',
  },
  {
    title: 'The watchlist',
    body: 'Companies that aren’t ready yet, re-checked every run for a new raise, hiring, or press.',
  },
];

export default function RequestAccess() {
  return (
    <div>
      <PageHeader eyebrow="Dealflow — private" title={<>Access is <em className="text-accent">by request.</em></>}>
        The <Link to="/map" className="link-slide text-accent-dark">Second Layer Map</Link> is
        the public view. The dealflow itself — the working surface — holds live analysis,
        so it&rsquo;s deliberately gated.
      </PageHeader>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p className="eyebrow">[ What&rsquo;s inside ]</p>
          <ol className="mt-6 border-t border-ink">
            {INSIDE.map((x, i) => (
              <li key={x.title} className="grid grid-cols-12 gap-4 py-7 border-b border-rule">
                <span className="mono text-accent col-span-2 sm:col-span-1">0{i + 1}</span>
                <div className="col-span-10 sm:col-span-11">
                  <h2 className="font-display text-3xl leading-tight">{x.title}</h2>
                  <p className="text-gray-600 mt-2 leading-relaxed text-[0.95rem]">{x.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="border border-ink bg-paper p-8 shadow-offset">
            <p className="eyebrow">[ Request ]</p>
            <p className="font-display text-3xl leading-tight mt-3">
              Investor, operator, or evaluating this work?
            </p>
            <p className="text-gray-600 mt-3 text-[0.95rem] leading-relaxed">
              Send a note and I&rsquo;ll set you up.
            </p>
            <a href={MAILTO} className="btn-ink mt-7">
              Request access <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="mt-6">
              <Link to="/login" className="mono text-gray-500 hover:text-accent transition-colors">
                I already have a password &rarr;
              </Link>
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
