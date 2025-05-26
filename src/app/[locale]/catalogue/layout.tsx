import ProductFilters from '@/features/product/components/product-filters';
import ProductSort from '@/features/product/components/product-sort';
import { getFilters } from '@/features/product/data/filters';

export default async function CatalogueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const filters = await getFilters();

  return (
    <div className="section-wrapper grid grid-cols-2 grid-rows-[40px_1fr] gap-8 xl:grid-cols-4">
      <div className="col-span-1 row-span-1 xl:relative xl:row-span-2">
        <ProductFilters filters={filters} />
      </div>
      <div className="col-span-1 row-span-1 place-items-end xl:col-span-3">
        <ProductSort />
      </div>
      {children}
    </div>
  );
}
