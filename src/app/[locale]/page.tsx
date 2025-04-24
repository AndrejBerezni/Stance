'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const translate = useTranslations('homepage');
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-row gap-[32px] row-start-2 justify-center items-center">
        <h1 className="capitalize font-bold text-7xl">
          {translate('welcome')}{' '}
        </h1>
      </main>
    </div>
  );
}
