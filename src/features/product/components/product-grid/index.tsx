import { ProductCard as IProductCard } from '../../types';
import ProductCard from '../product-card';

interface ProductGridProps {
  fetchItems: () => Promise<IProductCard[] | undefined>;
  title: string;
  headerAction?: React.ReactNode;
  maxItems?: number;
}

export default async function ProductGrid({
  fetchItems,
  title,
  headerAction,
  maxItems,
}: ProductGridProps) {
  const items = await fetchItems();
  if (items) {
    const displayedItems = maxItems ? items.slice(0, maxItems) : items;

    return (
      <section className="section-wrapper">
        <div className="flex mb-8 items-center justify-between">
          <h2 className="font-semibold text-2xl md:text-3xl">{title}</h2>
          {headerAction}
        </div>
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
}
