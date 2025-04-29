import { redirect } from 'next/navigation';

import {
  getProduct,
  getProductInventory,
} from '@/features/product/server-actions';

export default async function Product({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const { productId } = await params;
  const { color, size } = await searchParams;

  const product = await getProduct(productId);
  if (!product) redirect('/products');

  const inventory = await getProductInventory(productId);

  return (
    <section>
      <h1 className="text-blue-300">{product.name}</h1>
      {inventory && (
        <p className="text-red-200">
          {inventory[1].color} | {inventory[3].size}
        </p>
      )}
      {color && size && (
        <p>
          {color}|{size}
        </p>
      )}
    </section>
  );
}
