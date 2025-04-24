'use client';

import { useTranslations } from 'next-intl';

import ThemeToggle from '@/components/theme-toggle';

export default function Home() {
  const translate = useTranslations('homepage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-row gap-[32px] row-start-2 justify-center items-center">
        <h1 className="capitalize font-bold">{translate('welcome')} </h1>
        <ThemeToggle />
      </main>
    </div>
  );
}
