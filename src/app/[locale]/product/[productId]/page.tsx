import { Suspense } from 'react';

import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import ProductDetailsSection from '@/features/product/components/product-details-section';
import ProductGrid from '@/features/product/components/product-grid';
import ProductGridHeader from '@/features/product/components/product-grid/product-grid-header';
import ProductGridSkeleton from '@/features/product/components/product-grid/product-grid-skeleton';
import ProductSpecificationsSection from '@/features/product/components/product-specifications-section';
import {
  getProduct,
  getProductForMetadata,
} from '@/features/product/data/server';
import { setDefaultColorAndSize } from '@/features/product/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProductForMetadata(productId);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) {
  const translate = await getTranslations('productPage');
  const { productId } = await params;

  const product = await getProduct(productId);
  if (!product) redirect('/catalogue');

  const { color, needsRedirect, updatedParams } = await setDefaultColorAndSize(
    searchParams,
    product
  );

  if (needsRedirect) {
    redirect(`/product/${productId}?${updatedParams.toString()}`);
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    productID: product.product_id,
    name: product.name,
    description: product.description,
    category: product.category,
    color: product.available_colors.join(' '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      <ProductDetailsSection product={product} color={color} />
      <ProductSpecificationsSection />
      <section className="section-wrapper">
        <Suspense fallback={<ProductGridSkeleton items={4} />}>
          <ProductGrid
            searchParams={{ collection: product.collection, limit: '4' }}
            excludeProductId={product.product_id}
            header={<ProductGridHeader title={translate('inCollection')} />}
          />
        </Suspense>
      </section>
    </>
  );
}
