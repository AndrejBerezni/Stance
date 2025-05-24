'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

import { BLUR_DATA_URL } from '@/lib/constants';

import { Collection as ICollection } from '../../types';

export default function Collection({
  collection,
}: {
  collection: ICollection;
}) {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}/products?collection=${collection.collection_id}`}
      className="group relative col-span-1 min-h-[276px] overflow-hidden rounded-xl first:row-span-2"
    >
      <Image
        src={collection.image_url ?? '/images/no-image.jpg'}
        alt={collection.description}
        fill
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover object-center duration-300 group-hover:scale-105"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
      <div className="text-background absolute bottom-4 left-4 z-20 dark:text-shadow-[0_0_4px_white]">
        <h3 className="text-sm">{collection.name}</h3>
        <p className="text-lg font-medium">{collection.description}</p>
      </div>
      <div className="absolute inset-0 z-10 hidden bg-gradient-to-b from-transparent to-black/50 to-[90%] transition-all group-hover:block"></div>
    </Link>
  );
}
