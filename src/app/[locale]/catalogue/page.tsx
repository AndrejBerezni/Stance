import { Suspense } from 'react';

import NoResultsFound from '@/features/product/components/product-filters/no-results-found';
import ProductGrid from '@/features/product/components/product-grid';
import ProductGridSkeleton from '@/features/product/components/product-grid/product-grid-skeleton';

export default async function CataloguePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const resolvedParams = await searchParams;
  // we recreate suspense boundary by assigning new key to show skeleton while loading new items
  const reloadKey = JSON.stringify(resolvedParams);

  return (
    <section className="col-span-2 xl:col-span-3">
      <Suspense
        key={reloadKey}
        fallback={<ProductGridSkeleton items={6} fullWidth={false} />}
      >
        <ProductGrid
          searchParams={resolvedParams}
          fullWidth={false}
          noResults={<NoResultsFound />}
          hasPagination
          withPriorityLoading
        />
      </Suspense>
    </section>
  );
}
