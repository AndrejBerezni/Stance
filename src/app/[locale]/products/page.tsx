import { Suspense } from 'react';

import ProductGrid from '@/features/product/components/product-grid';
import ProductGridSkeleton from '@/features/product/components/product-grid/product-grid-skeleton';
import { getLatestArrivals } from '@/features/product/server-actions';

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ color: string }>;
}) {
  return (
    <Suspense fallback={<ProductGridSkeleton items={6} fullWidth={false} />}>
      <ProductGrid
        fetchItems={async () => await getLatestArrivals()}
        fullWidth={false}
      />
    </Suspense>
  );
}
