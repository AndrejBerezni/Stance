import { Suspense } from 'react';

import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import FeaturesSection from '@/components/common/features-section';
import HeroSection from '@/components/common/hero-section';
import buttonVariants from '@/components/ui/button/styles';
import CollectionsGrid from '@/features/product/components/collections-grid';
import CollectionsGridSkeleton from '@/features/product/components/collections-grid/collections-grid-skeleton';
import ProductGrid from '@/features/product/components/product-grid';
import ProductGridHeader from '@/features/product/components/product-grid/product-grid-header';
import ProductGridSkeleton from '@/features/product/components/product-grid/product-grid-skeleton';
import { cn } from '@/lib/utils/cn';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const translate = await getTranslations('home');
  const { locale } = await params;

  return (
    <>
      <HeroSection locale={locale} />

      <section
        className="section-wrapper"
        data-testid="latest-arrivals-section"
      >
        <Suspense fallback={<ProductGridSkeleton items={8} withHeader />}>
          <ProductGrid
            searchParams={{ sort: 'created-at', limit: '8' }}
            header={
              <ProductGridHeader
                title={translate('latestArrivals')}
                headerAction={
                  <Link
                    href={`/${locale}/catalogue`}
                    className={cn(
                      buttonVariants({
                        variant: 'secondary',
                        size: 'sm',
                        iconOnly: false,
                      })
                    )}
                  >
                    {translate('viewAll')}
                  </Link>
                }
              />
            }
          />
        </Suspense>
      </section>

      <Suspense fallback={<CollectionsGridSkeleton />}>
        <CollectionsGrid />
      </Suspense>

      <FeaturesSection />
    </>
  );
}
