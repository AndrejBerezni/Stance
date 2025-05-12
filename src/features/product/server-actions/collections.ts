'use server';

import collectionsData from '@/lib/temp-data/collections.json';

import { Collection } from '../types';

export const getLatestCollections = async (): Promise<
  Collection[] | undefined
> => {
  const collections = collectionsData
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, 3);

  if (!collections) return;

  return collections;
};
