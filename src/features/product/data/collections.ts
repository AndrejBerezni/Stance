'use server';

import { Collection } from '../types';
import { getLatestCollectionsQuery } from './queries/collections';

export const getLatestCollections = async (): Promise<
  Collection[] | undefined
> => {
  try {
    const collections = await getLatestCollectionsQuery();

    if (!collections) return;

    return collections;
  } catch (error) {
    console.error('Error fetching latest collections:', error);
    return undefined;
  }
};
