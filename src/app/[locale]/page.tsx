'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const translate = useTranslations('homepage');
  return (
    <section className="section-wrapper">
      <h1 className="capitalize font-bold text-xl">{translate('welcome')} </h1>
    </section>
  );
}
