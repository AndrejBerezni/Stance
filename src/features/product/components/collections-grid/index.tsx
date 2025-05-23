import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { getLatestCollections } from '../../data';
import { Collection as ICollection } from '../../types';

function Collection({ collection }: { collection: ICollection }) {
  return (
    <Link
      href={`/products?collection=${collection.collection_id}`}
      className="group relative col-span-1 min-h-[276px] overflow-hidden rounded-xl first:row-span-2"
    >
      <Image
        src={collection.image_url ?? '/images/no-image.jpg'}
        alt={collection.description}
        fill
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover object-center duration-300 group-hover:scale-105"
      />
      <div className="text-background absolute bottom-4 left-4 z-20 dark:text-shadow-[0_0_4px_white]">
        <h3 className="text-sm">{collection.name}</h3>
        <p className="text-lg font-medium">{collection.description}</p>
      </div>
      <div className="absolute inset-0 z-10 hidden bg-gradient-to-b from-transparent to-black/50 to-[90%] transition-all group-hover:block"></div>
    </Link>
  );
}

export default async function CollectionsGrid() {
  const translate = await getTranslations('home');
  const collections = await getLatestCollections();

  if (collections) {
    return (
      <section className="section-wrapper">
        <h2 className="mb-8 text-3xl font-semibold">
          {translate('ourCollections')}
        </h2>
        <div className="grid grid-cols-1 grid-rows-4 gap-7 sm:grid-cols-2 sm:grid-rows-2">
          {collections.map((collection) => (
            <Collection
              key={collection.collection_id}
              collection={collection}
            />
          ))}
        </div>
      </section>
    );
  }
}
