import { getTranslations } from 'next-intl/server';

import { getRelatedProductCards } from '../../server-actions';
import ProductGrid from '../product-grid';

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
      <ProductGrid
        items={relatedProducts}
        title={translate('inCollection')}
        maxItems={4}
      />
    );
  }
}
