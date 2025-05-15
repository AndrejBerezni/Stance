import ProductFilters from '@/features/product/components/product-filters';
import ProductGrid from '@/features/product/components/product-grid';
import ProductSort from '@/features/product/components/product-sort';
import { getLatestArrivals } from '@/features/product/server-actions';

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ color: string }>;
}) {
  return (
    <div className="section-wrapper grid grid-cols-2 grid-rows-[40px_1fr] gap-8 xl:grid-cols-4">
      <div className="col-span-1 row-span-1 xl:relative xl:row-span-2">
        <ProductFilters />
      </div>
      <div className="col-span-1 row-span-1 place-items-end xl:col-span-3">
        <ProductSort />
      </div>
      <section className="col-span-2 xl:col-span-3">
        <ProductGrid
          fetchItems={async () => await getLatestArrivals()}
          fullWidth={false}
        />
      </section>
    </div>
  );
}
