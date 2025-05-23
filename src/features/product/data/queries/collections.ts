import { NeonQueryPromise } from '@neondatabase/serverless';

import sql from '@/lib/db/connect';

import { Collection, FilterItem } from '../../types';

export const getCollectionsFilterQuery = () =>
  sql`SELECT collection_id AS value, name AS label FROM collections;` as NeonQueryPromise<
    false,
    false,
    FilterItem[]
  >;

export const getLatestCollectionsQuery = () =>
  sql`SELECT * FROM collections ORDER BY created_at DESC LIMIT 3` as NeonQueryPromise<
    false,
    false,
    Collection[]
  >;
