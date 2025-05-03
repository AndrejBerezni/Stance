import { Suspense } from 'react';

import ProductDetailsSection from '@/features/product/components/product-details-section';

export default async function Product({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const { productId } = await params;
  const { color, size } = await searchParams;

  console.log(productId, color, size);

  return (
    <>
      <Suspense fallback={<div>Loading..</div>}>
        <ProductDetailsSection
          productId={productId}
          size={size}
          color={color}
        />
      </Suspense>
    </>
  );
}
