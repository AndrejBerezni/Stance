import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { getLatestCollections } from '../../server-actions';
import { Collection as ICollection } from '../../types';

function Collection({ collection }: { collection: ICollection }) {
  return (
    <Link
      href={`/products?collection=${collection.collection_id}`}
      className="relative rounded-xl overflow-hidden first:row-span-2 col-span-1 min-h-[276px] group"
    >
      <Image
        src={collection.image_url ?? '/images/no-image.jpg'}
        alt={collection.description}
        fill
        sizes="(max-width: 768px) 100vw, 45vw"
        className="object-cover object-center group-hover:scale-105 duration-300"
      />
      <div className="absolute bottom-4 left-4 text-background z-20">
        <h3 className=" text-sm">{collection.name}</h3>
        <p className="text-lg font-medium">{collection.description}</p>
      </div>
      <div className="hidden z-10 transition-all group-hover:block absolute inset-0 bg-gradient-to-b from-transparent to-[90%] to-black/50"></div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-7">
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
