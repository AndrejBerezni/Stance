import sql from '@/lib/db/connect';

import { Collection } from '../types';

export const getLatestCollections = async (): Promise<
  Collection[] | undefined
> => {
  const collections = (await sql`
  SELECT * FROM collections ORDER BY created_at DESC LIMIT 3;`) as Collection[];

  if (!collections) return;

  return collections;
};
