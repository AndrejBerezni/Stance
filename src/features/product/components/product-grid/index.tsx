import { ProductCard as IProductCard } from '../../types';
import ProductCard from '../product-card';

interface ProductGridProps {
  items: IProductCard[];
  title: string;
  maxItems?: number;
}

export default function ProductGrid({
  items,
  title,
  maxItems,
}: ProductGridProps) {
  const displayedItems = maxItems ? items.slice(0, maxItems - 1) : items;

  return (
    <section className="section-wrapper">
      <h2 className="font-semibold text-2xl md:text-3xl mb-8">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {displayedItems.map((product) => (
          <li key={`${product.product.product_id}-related-card`}>
            <ProductCard cardData={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
