'use server';

import sql from '@/lib/db/connect';
import { AVAILABLE_COLORS } from '@/lib/utils/constants';

import { FilterItem, IFilters } from '../types';
import { getlAllCategoriesQuery } from './queries/categories';
import { getAllConnectionsQuery } from './queries/collections';

export const getFilters = async (): Promise<IFilters> => {
  const filters: IFilters = {
    collections: [],
    categories: [],
    colors: [...AVAILABLE_COLORS],
  };
  const [collectionsResult, categoriesResult] = await sql.transaction([
    getAllConnectionsQuery(),
    getlAllCategoriesQuery(),
  ]);

  if (collectionsResult && collectionsResult.length > 0) {
    filters.collections = [...collectionsResult] as FilterItem[];
  }

  if (categoriesResult && categoriesResult.length > 0) {
    filters.categories = [...categoriesResult] as FilterItem[];
  }

  return filters;
};
