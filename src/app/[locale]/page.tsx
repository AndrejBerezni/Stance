import { Suspense } from 'react';

import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import FeaturesSection from '@/components/common/features-section';
import HeroSection from '@/components/common/hero-section';
import buttonVariants from '@/components/ui/button/styles';
import CollectionsGrid from '@/features/product/components/collections-grid';
import CollectionsGridSkeleton from '@/features/product/components/collections-grid/collections-grid-skeleton';
import ProductGrid from '@/features/product/components/product-grid';
import ProductGridSkeleton from '@/features/product/components/product-grid/product-grid-skeleton';
import { getLatestArrivals } from '@/features/product/server-actions';
import { cn } from '@/lib/utils/cn';

export default async function Home() {
  const translate = await getTranslations('home');

  return (
    <>
      <HeroSection />
      <Suspense fallback={<ProductGridSkeleton items={8} />}>
        <ProductGrid
          fetchItems={async () => await getLatestArrivals()}
          title={translate('latestArrivals')}
          headerAction={
            <Link
              href="/products"
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
          maxItems={8}
        />
      </Suspense>
      <Suspense fallback={<CollectionsGridSkeleton />}>
        <CollectionsGrid />
      </Suspense>
      <FeaturesSection />
    </>
  );
}
