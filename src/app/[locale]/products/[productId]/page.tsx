import { Suspense } from 'react';

import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import ProductDetailsSection from '@/features/product/components/product-details-section';
import ProductGrid from '@/features/product/components/product-grid';
import ProductGridSkeleton from '@/features/product/components/product-grid/product-grid-skeleton';
import ProductSpecificationsSection from '@/features/product/components/product-specifications-section';
import {
  getProduct,
  getRelatedProductCards,
} from '@/features/product/server-actions';
import { setDefaultColorAndSize } from '@/features/product/utils';

export default async function Product({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const translate = await getTranslations('productPage');
  const { productId } = await params;

  const product = await getProduct(productId);

  if (!product) redirect('/products');

  const { color, needsRedirect, updatedParams } = await setDefaultColorAndSize(
    searchParams,
    product
  );

  if (needsRedirect) {
    redirect(`/products/${productId}?${updatedParams.toString()}`);
  }

  return (
    <>
      <ProductDetailsSection product={product} color={color} />
      <ProductSpecificationsSection />
      <Suspense fallback={<ProductGridSkeleton items={4} />}>
        <ProductGrid
          fetchItems={async () =>
            await getRelatedProductCards(product.product_id, product.collection)
          }
          title={translate('inCollection')}
          maxItems={4}
        />
      </Suspense>
    </>
  );
}
