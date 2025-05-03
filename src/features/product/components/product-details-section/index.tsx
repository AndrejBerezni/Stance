import { Suspense } from 'react';

import Accordion from '@/components/ui/accordion';

import ImageGallery from '../image-gallery';
import AddToCart from './add-to-cart';
import ProductAttributes from './product-attributes';
import ProductDetailsHeader from './product-details-header';
import ImageGallerySkeleton from '../image-gallery/image-gallery-skeleton';

const accordion = [
  {
    id: 'feat',
    title: 'Features',
    content: [
      'Designed for comfort and durability.',
      'Soft, breathable fabric ideal for travel and adventure.',
      'Large front pocket and adjustable hood.',
      'Minimalist design pairs well with any style.',
      'Made with eco-conscious materials.',
    ],
  },
  {
    id: 'fab',
    title: 'Fabric & Care',
    content: [
      'Machine wash cold on a gentle cycle.',
      'Tumble dry low or hang to dry.',
      'Do not use fabric softeners or bleach.',
      'Iron on a low setting if necessary.',
    ],
  },
  {
    id: 'ship',
    title: 'Shipping',
    content: [
      'Free standard shipping on all orders - no minimum spend required.',
      'Expedited shipping available at an additional cost.',
      'Packaged in biodegradable materials to reduce environmental impact.',
    ],
  },
];

interface ProductDetailsSectionProps {
  productId: string;
  color: string;
  size: string;
}

export default async function ProductDetailsSection({
  productId,
  color,
  size,
}: ProductDetailsSectionProps) {
  return (
    <section className="section-wrapper flex flex-col lg:flex-row gap-12 lg:gap-8">
      <Suspense fallback={<ImageGallerySkeleton />}>
        <ImageGallery productId={productId} color={color} />
      </Suspense>
      <div className="flex gap-8 flex-col">
        <ProductDetailsHeader />
        <p className="text-secondary-foreground">
          The Voyager Hoodie is for the explorer at heart. Its durable fabric
          and roomy pockets are perfect for those who are always searching for
          the next adventure.
        </p>
        <ProductAttributes />
        <AddToCart productId="test" max={5} disabled={false} />
        <Accordion items={accordion} />
      </div>
    </section>
  );
}
