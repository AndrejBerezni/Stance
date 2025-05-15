import ProductFilters from '@/features/product/components/product-filters';
import ProductSort from '@/features/product/components/product-sort';
import { getFilters } from '@/features/product/server-actions/filters';

/* Placing filters and sort in layout so that they do not re-render when URLSearchParams change
   (since this is how we handle filter and sort), but only list of products.
   Having this layout, we needed to move dynamic routes for single product outside
   (before we had /products/[productId])
*/

export default async function ProductsLayout({
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
      <section className="col-span-2 xl:col-span-3">{children}</section>
    </div>
  );
}
