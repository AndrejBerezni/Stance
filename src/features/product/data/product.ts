'server only';

import sql from '@/lib/db/connect';

import { ExtendedProduct, ProductsResponse } from '../types';
import { convertSearchParamsToFilters } from '../utils';
import {
  countProductsQuery,
  multipleProductsQuery,
  singleProductQuery,
} from './queries/product';

export const getProduct = async (
  productId: string
): Promise<ExtendedProduct | null> => {
  try {
    const result = (await singleProductQuery(productId)) as ExtendedProduct[];

    if (result.length === 0) {
      throw new Error('Product not found');
    }

    return result[0];
  } catch (error) {
    console.error(
      `Error fetching product with ID ${productId}:`,
      (error as Error).message
    ); // TO DO: implement error tracking system and then log error to it

    return null;
  }
};

export const getProducts = async (
  searchParams: Record<string, string | string[]>
): Promise<ProductsResponse> => {
  try {
    const { sort, page, limit, offset, where } =
      convertSearchParamsToFilters(searchParams);

    const [productsResult, countResult] = await sql.transaction(
      [
        multipleProductsQuery({ where, sort, limit, offset }),
        countProductsQuery(where),
      ],
      {
        isolationLevel: 'RepeatableRead',
        readOnly: true,
      }
    );

    const totalItems = Number(countResult[0].total);
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: productsResult as ExtendedProduct[],
      meta: {
        page,
        totalPages,
        pageSize: limit,
        totalItems,
      },
    };
  } catch (error) {
    console.error(`Error fetching products:`, (error as Error).message);
    return {
      data: [] as ExtendedProduct[],
      meta: {
        page: 1,
        totalPages: 1,
        pageSize: 6,
        totalItems: 0,
      },
    };
  }
};
