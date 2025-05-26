'server only';

import sql from '@/lib/db/connect';

import { ExtendedProduct, ProductsResponse } from '../../types';
import { convertSearchParamsToFilters } from '../../utils';
import {
  countProductsQuery,
  metadataProductQuery,
  multipleProductsQuery,
  singleProductQuery,
  sitemapProductsQuery,
} from '../queries/product';

export const getProduct = async (
  productId: string
): Promise<ExtendedProduct | null> => {
  try {
    const productResult = (await singleProductQuery(
      productId
    )) as ExtendedProduct[];

    if (productResult.length === 0) {
      throw new Error('Product not found');
    }

    return productResult[0];
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

    const totalItems = parseInt(countResult[0].total);
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
    if (error instanceof Error) {
      console.error(`Error fetching products:`, error.message);
    }

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

export const getProductsForSiteMap = async () => {
  try {
    return await sitemapProductsQuery();
  } catch (error) {
    if (error instanceof Error)
      console.error(`Error fetching products:`, error.message);
  }
};

export const getProductForMetadata = async (productId: string) => {
  try {
    const productResult = await metadataProductQuery(productId);

    if (productResult.length === 0) {
      throw new Error('Product not found');
    }

    return productResult[0];
  } catch (error) {
    if (error instanceof Error)
      console.error(
        `Error fetching product with id ${productId}:`,
        error.message
      );
  }
};
