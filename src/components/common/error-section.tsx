'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { cn } from '@/lib/utils/cn';

import Button from '../ui/button';
import buttonVariants from '../ui/button/styles';

export default function ErrorSection({ reset }: { reset: () => void }) {
  const translate = useTranslations('errorPage');
  const locale = useLocale();

  return (
    <section className="flex min-h-[70vh] w-full items-center justify-center rounded-t-lg bg-[url(/images/abstract-background.jpg)] bg-cover">
      <div className="section-wrapper flex flex-col items-start">
        <div className="mb-5 md:mb-6">
          <h2 className="text-destructive mb-2 text-base font-semibold md:mb-3">
            {translate('error')}
          </h2>
          <h1 className="text-4xl font-semibold md:text-5xl xl:text-6xl">
            {translate('errorOccurred')}
          </h1>
        </div>
        <p className="text-ink-600 mb-8 text-lg md:mb-16 md:text-xl">
          {translate('explanation')}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={reset} variant="destructive" size="md">
            {translate('reload')}
          </Button>
          <Link
            href={`/${locale}`}
            className={cn(buttonVariants({ variant: 'secondary', size: 'md' }))}
          >
            {translate('backHome')}
          </Link>
        </div>
      </div>
    </section>
  );
}
