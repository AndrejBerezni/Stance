import ProductGrid from '@/features/product/components/product-grid';
import { getLatestArrivals } from '@/features/product/server-actions';

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ color: string }>;
}) {
  return (
    <ProductGrid
      fetchItems={async () => await getLatestArrivals()}
      fullWidth={false}
    />
  );
}
