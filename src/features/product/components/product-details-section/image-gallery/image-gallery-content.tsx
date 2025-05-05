'use client';
import { useEffect, useState } from 'react';

import { ProductImage } from '@/features/product/types';

import CurrentImage from './current-image';
import ThumbnailList from './thumbnail-list';

export default function ImageGalleryContent({
  images,
}: {
  images: ProductImage[];
}) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  /* If user changes color of product, new images will be fetched,
  so we need to reset current image */
  useEffect(() => {
    setCurrentImage(0);
  }, [images]);

  /* Since useEffect is running after render, to prevent app from breaking,
  that is caused by undefined image because of accessing index higher than images length,
  we calculate safe index
   */
  const safeCurrentImage = Math.min(currentImage, images.length - 1);

  return (
    <div className="w-full lg:min-w-1/2 lg:max-w-1/2">
      <CurrentImage image={images[safeCurrentImage]} />
      {images.length > 1 && (
        <ThumbnailList
          images={images}
          currentImage={currentImage}
          selectImage={setCurrentImage}
        />
      )}
    </div>
  );
}
