import ProductFilters from '@/features/product/components/product-filters';
import ProductGrid from '@/features/product/components/product-grid';
import { getLatestArrivals } from '@/features/product/server-actions';

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ color: string }>;
}) {
  return (
    <div className="grid xl:grid-cols-4 section-wrapper gap-16">
      <ProductFilters />
      <ProductGrid
        fetchItems={async () => await getLatestArrivals()}
        fullWidth={false}
      />
    </div>
  );
}
