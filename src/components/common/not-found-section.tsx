import { useTranslations } from 'next-intl';

import BackHomeButton from './back-home-button';

export default function NotFoundSection() {
  const translate = useTranslations('notFoundPage');
  return (
    <section className="flex min-h-[70vh] w-full items-center justify-center rounded-t-lg bg-[url(/images/abstract-background.jpg)] bg-cover">
      <div className="section-wrapper flex flex-col items-start">
        <div className="mb-5 md:mb-6">
          <h2 className="text-primary mb-2 text-base font-semibold md:mb-3">
            {translate('notFound')}
          </h2>
          <h1 className="text-4xl font-semibold md:text-5xl xl:text-6xl">
            {translate('cantFindPage')}
          </h1>
        </div>
        <p className="text-ink-600 mb-8 text-lg md:mb-16 md:text-xl">
          {translate('noPageText')}
        </p>
        <BackHomeButton />
      </div>
    </section>
  );
}
