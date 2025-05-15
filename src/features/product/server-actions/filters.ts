'use server';
import categoriesData from '@/lib/temp-data/categories.json';
import collectionsData from '@/lib/temp-data/collections.json';
import colorsData from '@/lib/temp-data/colors.json';

import { IFilters } from '../types';

export const getFilters = async (): Promise<IFilters> => {
  const filters: IFilters = {
    collections: [],
    categories: [],
    colors: [],
    rating: [],
  };

  const collections = collectionsData.map((collection) => ({
    label: collection.name,
    value: collection.collection_id,
  }));
  if (collections && collections.length > 0) {
    filters.collections = [
      ...collections,
      { label: 'Latest Arrivals', value: 'latestArrivals' },
    ];
  }

  const categories = categoriesData.map((cat) => ({
    label: cat.name,
    value: cat.category_id,
  }));
  if (categories && categories.length > 0) {
    filters.categories = categories;
  }

  const colors = colorsData.map((color) => ({
    label: color,
    value: color,
  }));
  if (colors && colors.length > 0) {
    filters.colors = colors;
  }

  filters.rating = Array.from({ length: 5 }, (_, index) => index + 1).map(
    (item) => ({
      label: item.toString(),
      value: item.toString(),
    })
  );

  return filters;
};
