import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}

/** Shared page masthead: mono eyebrow, big serif title, optional deck. */
export default function PageHeader({ eyebrow, title, children }: Props) {
  return (
    <header className="border-b border-rule">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
        <p className="eyebrow reveal">[ {eyebrow} ]</p>
        <h1
          className="font-display text-5xl sm:text-7xl leading-[0.96] mt-5 max-w-4xl reveal"
          style={{ animationDelay: '80ms' }}
        >
          {title}
        </h1>
        {children && (
          <div
            className="text-gray-600 text-lg leading-relaxed max-w-2xl mt-7 reveal"
            style={{ animationDelay: '200ms' }}
          >
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
