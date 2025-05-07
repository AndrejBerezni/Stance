import { redirect } from 'next/navigation';

import ProductDetailsSection from '@/features/product/components/product-details-section';
import ProductSpecificationsSection from '@/features/product/components/product-specifications-section';
import { getProduct } from '@/features/product/server-actions';
import { setDefaultColorAndSize } from '@/features/product/utils';

export default async function Product({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
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
    </>
  );
}
