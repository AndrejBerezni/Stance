import { NeonQueryPromise } from '@neondatabase/serverless';

import sql from '@/lib/db/connect';

import { FilterItem } from '../../types';

export const getCategoriesFilterQuery = () =>
  sql`SELECT category_id value, name label FROM categories;` as NeonQueryPromise<
    false,
    false,
    FilterItem[]
  >;
