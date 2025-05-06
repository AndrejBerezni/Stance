import { Suspense } from 'react';

import AddToCart from './add-to-cart';
import ImageGallery from './image-gallery';
import { Product } from '../../types';
import ImageGallerySkeleton from './image-gallery/image-gallery-skeleton';
import ProductAttributes from './product-attributes';
import ProductInfo from './product-info';
import ProductPrice from './product-price';
import ProductRating from './product-rating';

interface ProductDetailsSectionProps {
  product: Product;
  color: string;
}

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
      <Suspense fallback={<ImageGallerySkeleton />}>
        <ImageGallery productId={productId} color={color} />
      </Suspense>

      <div className="flex gap-8 flex-col">
        <div>
          <h1 className="font-semibold text-3xl md:text-5xl mb-5">{name}</h1>
          <ProductPrice product={product} />
          <ProductRating productId={productId} />
        </div>

        <p className="text-secondary-foreground">{description}</p>

        <ProductAttributes
          sizing_convention={sizing_convention}
          available_colors={available_colors}
          inventory={inventory}
          currentColor={color}
        />
        <AddToCart product={product} />
        <ProductInfo productId={productId} />
      </div>
    </section>
  );
}
