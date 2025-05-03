import ImageGalleryContent from './image-gallery-content';
import NoImagesFound from './no-images-found';
import { getProductImages } from '../../server-actions';

interface ImageGalleryProps {
  productId: string;
  color: string;
}

export default async function ImageGallery({
  productId,
  color,
}: ImageGalleryProps) {
  const images = await getProductImages(productId, color);

  if (!images) return <NoImagesFound />;

  return <ImageGalleryContent images={images} />;
}
