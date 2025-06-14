import { getTranslations } from 'next-intl/server';

import Collection from './collection';
import { getLatestCollections } from '../../data/server';

export default async function CollectionsGrid() {
  const translate = await getTranslations('home');
  const collections = await getLatestCollections();

  if (collections) {
    return (
      <section className="section-wrapper" data-testid="collections-section">
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
