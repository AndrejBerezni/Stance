import Head from 'next/head';
import Image from 'next/image';

import { ProductImage } from '@/features/product/types';

export default function CurrentImage({ image }: { image: ProductImage }) {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={image.image_url} />
      </Head>
      <div className="relative md:h-[600px] lg:h-[800px] overflow-x-hidden h-[400px] w-full rounded-xl mb-6">
        <Image
          src={image.image_url ?? '/images/no-image'}
          alt={image.product_id}
          fill
          sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 720px"
          className="object-cover object-center"
          priority
          loading="eager"
        />
      </div>
    </>
  );
}
