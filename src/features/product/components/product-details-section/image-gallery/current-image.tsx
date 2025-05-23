import Head from 'next/head';
import Image from 'next/image';

import { ProductImage } from '@/features/product/types';
import { BLUR_DATA_URL } from '@/lib/utils/constants';

export default function CurrentImage({ image }: { image: ProductImage }) {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={image.image_url} />
      </Head>
      <div className="relative mb-6 h-[400px] w-full overflow-x-hidden rounded-xl md:h-[600px] lg:h-[800px]">
        <Image
          src={image.image_url ?? '/images/no-image'}
          alt={image.product_id}
          fill
          sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 720px"
          className="object-cover object-center"
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>
    </>
  );
}
