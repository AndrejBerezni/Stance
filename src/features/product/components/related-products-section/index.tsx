import { getTranslations } from 'next-intl/server';

import { getRelatedProductCards } from '../../server-actions';
import ProductCard from '../product-card';

interface RelatedProductsSectionProps {
  productId: string;
  collection: string;
}

export default async function RelatedProductsSection({
  productId,
  collection,
}: RelatedProductsSectionProps) {
  const translate = await getTranslations('productPage');
  const relatedProducts = await getRelatedProductCards(productId, collection);

  if (relatedProducts) {
    return (
      <section className="section-wrapper">
        <h2 className="font-semibold text-2xl md:text-3xl mb-8">
          {translate('inCollection')}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {relatedProducts.map((product) => (
            <li key={`${product.product.product_id}-related-card`}>
              <ProductCard cardData={product} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
