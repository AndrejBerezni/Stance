'use client';

import { useTranslations } from 'next-intl';

import SizeSelector from '@/features/product/components/size-selector.tsx';

export default function Home() {
  const translate = useTranslations('homepage');
  return (
    <section className="section-wrapper">
      <h1 className="capitalize font-bold text-xl">{translate('welcome')} </h1>
      <SizeSelector
        sizes={[
          { name: 'xs', inStock: true },
          { name: 's', inStock: true },
          { name: 'm', inStock: false },
          { name: 'l', inStock: true },
          { name: 'xl', inStock: false },
        ]}
      />
    </section>
  );
}
