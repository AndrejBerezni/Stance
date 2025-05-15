import { Suspense } from 'react';

import Skeleton from '@/components/ui/skeleton';

import AddToCart from './add-to-cart';
import ImageGallery from './image-gallery';
import ProductAttributes from './product-attributes';
import ProductInfo from './product-info';
import ProductPrice from './product-price';
import ProductRating from './product-rating';
import { ProductWithInventory } from '../../types';

interface ProductDetailsSectionProps {
  product: ProductWithInventory;
  color: string;
}

/* Certain children are async components that fetch data,
and they are wrapped in Suspense, while others receive
data from page component (product, color) */

export default async function ProductDetailsSection({
  product,
  color,
}: ProductDetailsSectionProps) {
  const {
    product_id: productId,
    name,
    description,
    sizing_convention,
    available_colors,
    inventory,
  } = product;

  return (
    <section className="section-wrapper flex flex-col gap-12 lg:flex-row lg:gap-8">
      <Suspense
        fallback={
          <Skeleton className="relative mb-6 h-[400px] w-full md:h-[600px] lg:h-[800px] lg:max-w-1/2 lg:min-w-1/2" />
        }
      >
        <ImageGallery productId={productId} color={color} />
      </Suspense>

      <div className="flex flex-col gap-8">
        <div>
          <h1 className="mb-5 text-3xl font-semibold md:text-5xl">{name}</h1>

          <ProductPrice product={product} />

          <Suspense fallback={<Skeleton className="mt-3 h-7 w-1/2" />}>
            <ProductRating productId={productId} />
          </Suspense>
        </div>

        <p className="text-ink-600">{description}</p>

        <ProductAttributes
          sizing_convention={sizing_convention}
          available_colors={available_colors}
          inventory={inventory}
          currentColor={color}
        />

        <AddToCart product={product} />

        <Suspense fallback={<Skeleton className="h-[250px] w-full" />}>
          <ProductInfo productId={productId} />
        </Suspense>
      </div>
    </section>
  );
}
