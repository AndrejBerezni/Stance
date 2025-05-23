import { NeonQueryPromise } from '@neondatabase/serverless';

import sql from '@/lib/db/connect';

export const getlAllCategoriesQuery = () =>
  sql`SELECT category_id value, name label FROM categories;` as NeonQueryPromise<
    false,
    false,
    Record<string, any>[]
  >;
