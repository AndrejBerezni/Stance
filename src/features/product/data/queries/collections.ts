import { NeonQueryPromise } from '@neondatabase/serverless';

import sql from '@/lib/db/connect';

import { Collection } from '../../types';

export const getAllConnectionsQuery = () =>
  sql`SELECT collection_id value, name label FROM collections;` as NeonQueryPromise<
    false,
    false,
    Record<string, any>[]
  >;

export const getLatestCollectionsQuery = () =>
  sql`SELECT * FROM collections ORDER BY created_at DESC LIMIT 3` as NeonQueryPromise<
    false,
    false,
    Collection[]
  >;
