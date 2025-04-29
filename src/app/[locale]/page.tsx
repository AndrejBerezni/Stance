'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const translate = useTranslations('homepage');
  return (
    <h1 className="capitalize font-bold text-7xl">{translate('welcome')} </h1>
  );
}
