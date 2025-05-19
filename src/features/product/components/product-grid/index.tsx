import { cn } from '@/lib/utils/cn';

import { IProductCard } from '../../types';
import ProductCard from '../product-card';

interface ProductGridProps {
  fetchItems: () => Promise<IProductCard[] | undefined>;
  fullWidth?: boolean;
  noResults?: React.ReactNode;
}

export default async function ProductGrid({
  fetchItems,
  fullWidth = true,
  noResults,
}: ProductGridProps) {
  const items = await fetchItems();

  if (items && items.length === 0 && noResults) {
    return noResults;
  }

  if (items) {
    return (
      <ul
        className={cn('grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4', {
          'xl:grid-cols-4': fullWidth,
          'xl:grid-cols-3': !fullWidth,
        })}
      >
        {items.map((product) => (
          <li key={`${product.product.product_id}-related-card`}>
            <ProductCard cardData={product} />
          </li>
        ))}
      </ul>
    );
  }
}
