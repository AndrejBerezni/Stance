import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import ProductDetailsSection from '@/features/product/components/product-details-section';
import { getProduct } from '@/features/product/server-actions';

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

  const { color, size } = await searchParams;

  return (
    <>
      <Suspense fallback={<div>Loading..</div>}>
        <ProductDetailsSection product={product} size={size} color={color} />
      </Suspense>
    </>
  );
}
