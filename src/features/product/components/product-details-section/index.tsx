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
    <section className="section-wrapper flex flex-col lg:flex-row gap-12 lg:gap-8">
      <Suspense
        fallback={
          <Skeleton className="relative md:h-[600px] lg:min-w-1/2 lg:max-w-1/2 lg:h-[800px] h-[400px] w-full mb-6" />
        }
      >
        <ImageGallery productId={productId} color={color} />
      </Suspense>

      <div className="flex gap-8 flex-col">
        <div>
          <h1 className="font-semibold text-3xl md:text-5xl mb-5">{name}</h1>

          <ProductPrice product={product} />

          <Suspense fallback={<Skeleton className="h-7 w-1/2 mt-3" />}>
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
