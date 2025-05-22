import { cn } from '@/lib/utils/cn';

import { getProducts } from '../../data';
import ProductCard from '../product-card';

interface ProductGridProps {
  searchParams: Record<string, string>;
  fullWidth?: boolean;
  noResults?: React.ReactNode;
  header?: React.ReactNode;
  excludeProductId?: string;
}

export default async function ProductGrid({
  searchParams,
  fullWidth = true,
  noResults,
  header,
  excludeProductId,
}: ProductGridProps) {
  const response = await getProducts(searchParams);
  const products = response.data;

  if (products && products.length === 0 && noResults) {
    return noResults;
  }

  if (products && products.length > 0) {
    return (
      <>
        {header}
        <ul
          className={cn(
            'grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4',
            {
              'xl:grid-cols-4': fullWidth,
              'xl:grid-cols-3': !fullWidth,
            }
          )}
        >
          {products.map((product, index) => {
            if (excludeProductId && product.product_id === excludeProductId)
              return null;
            return (
              <li key={`${product.product_id}-related-card`}>
                <ProductCard cardData={product} index={index} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
