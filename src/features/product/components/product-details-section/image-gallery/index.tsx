import { ProductImage } from '@/features/product/types';

import ImageGalleryContent from './image-gallery-content';
import NoImagesFound from './no-images-found';

interface ImageGalleryProps {
  productImages: ProductImage[];
  color: string;
}

export default function ImageGallery({
  productImages,
  color,
}: ImageGalleryProps) {
  const images = productImages.filter((image) => image.color === color);

  if (!images) return <NoImagesFound />;

  return <ImageGalleryContent images={images} />;
}
