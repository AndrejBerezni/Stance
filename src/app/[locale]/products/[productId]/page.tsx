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

  let { color } = await searchParams;

  if (!color || !product.available_colors.includes(color)) {
    color = product.available_colors[0];
  }

  return <ProductDetailsSection product={product} color={color} />;
}
