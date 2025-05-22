import { NeonQueryPromise } from '@neondatabase/serverless';

import available_colors from '@/lib/colors';
import sql from '@/lib/db/connect';

import { FilterItem, IFilters } from '../types';

export const getFilters = async (): Promise<IFilters> => {
  const filters: IFilters = {
    collections: [],
    categories: [],
    colors: [...available_colors],
  };
  const [collections, categories] = await Promise.all([
    sql`SELECT collection_id value, name label FROM collections;` as NeonQueryPromise<
      false,
      false,
      Record<string, any>[]
    >,
    sql`SELECT category_id value, name label FROM categories;` as NeonQueryPromise<
      false,
      false,
      Record<string, any>[]
    >,
  ]);

  if (collections && collections.length > 0) {
    filters.collections = [...collections] as FilterItem[];
  }

  if (categories && categories.length > 0) {
    filters.categories = [...categories] as FilterItem[];
  }

  return filters;
};
