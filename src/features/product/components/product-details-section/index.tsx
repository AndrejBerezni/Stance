import { Suspense } from 'react';

import { Product } from '../../types';
import ImageGallery from '../image-gallery';
import AddToCart from './add-to-cart';
import ProductAttributes from './product-attributes';
import ProductMetadata from './product-metadata';
import ProductSpecification from './product-specification';
import ImageGallerySkeleton from '../image-gallery/image-gallery-skeleton';

interface ProductDetailsSectionProps {
  product: Product;
  color: string;
  size: string;
}

export default async function ProductDetailsSection({
  product,
  color,
  size,
}: ProductDetailsSectionProps) {
  const { product_id: productId, name, description } = product;

  return (
    <section className="section-wrapper flex flex-col lg:flex-row gap-12 lg:gap-8">
      <Suspense fallback={<ImageGallerySkeleton />}>
        <ImageGallery productId={productId} color={color} />
      </Suspense>
      <div className="flex gap-8 flex-col">
        <div>
          <h1 className="font-semibold text-3xl md:text-5xl mb-5">{name}</h1>
          <ProductMetadata />
        </div>
        <p className="text-secondary-foreground">{description}</p>
        <ProductAttributes />
        <AddToCart productId={productId} max={5} disabled={false} />
        <ProductSpecification productId={productId} />
      </div>
    </section>
  );
}
