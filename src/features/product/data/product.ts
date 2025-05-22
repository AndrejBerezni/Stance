// 'use server';

import sql from '@/lib/db/connect';

import { ExtendedProduct, ProductsResponse } from '../types';
import { convertSearchParamsToFilters } from '../utils';

export const getProduct = async (
  productId: string
): Promise<ExtendedProduct | null> => {
  try {
    const result = (await sql`
      SELECT 
        p.product_id,
        p.name,
        p.description AS product_description,
        p.category,
        p.collection,
        p.created_at,
        p.sizing_convention,
        p.available_colors,
        p.stripe_id,
        p.number_of_reviews,
        p.rating,

        -- Aggregate product_info as array
        COALESCE(
          (
            SELECT json_agg(
              jsonb_build_object(
                'product_id', pi.product_id,
                'title', pi.title,
                'description', pi.description
              )
            )
            FROM product_info pi
            WHERE pi.product_id = p.product_id
          ),
          '[]'
        ) AS product_info,

        -- Aggregate inventory
        COALESCE(
          (
            SELECT json_agg(
              jsonb_build_object(
                'sku', i.sku,
                'product_id', i.product_id,
                'color', i.color,
                'size', i.size,
                'list_price', i.list_price,
                'discount', i.discount,
                'discount_percentage', i.discount_percentage,
                'sale_price', i.sale_price,
                'sold', i.sold,
                'stock', i.stock
              )
            )
            FROM inventory i
            WHERE i.product_id = p.product_id
          ),
          '[]'
        ) AS inventory,

        -- Aggregate images
        COALESCE(
          (
            SELECT json_agg(
              jsonb_build_object(
                'product_id', img.product_id,
                'color', img.color,
                'image_url', img.image_url
              )
            )
            FROM product_images img
            WHERE img.product_id = p.product_id
          ),
          '[]'
        ) AS images

      FROM products p
      WHERE p.product_id = ${productId}
    `) as ExtendedProduct[];

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
  searchParams: Record<string, string>
): Promise<ProductsResponse> => {
  try {
    const { sort, page, limit, offset, where } =
      convertSearchParamsToFilters(searchParams);

    const result = await sql`SELECT 
    p.product_id,
    p.name,
    p.description AS product_description,
    p.category,
    p.collection,
    p.created_at,
    p.sizing_convention,
    p.available_colors,
    p.stripe_id,
    p.number_of_reviews,
    p.rating,

    (
      SELECT json_agg(
        jsonb_build_object(
          'product_id', pi.product_id,
          'title', pi.title,
          'description', pi.description
        )
      )
      FROM product_info pi
      WHERE pi.product_id = p.product_id
    ) AS product_info,

    (
      SELECT json_agg(
        jsonb_build_object(
          'sku', i.sku,
          'product_id', i.product_id,
          'color', i.color,
          'size', i.size,
          'list_price', i.list_price,
          'discount', i.discount,
          'discount_percentage', i.discount_percentage,
          'sale_price', i.sale_price,
          'sold', i.sold,
          'stock', i.stock
        )
      )
      FROM inventory i
      WHERE i.product_id = p.product_id
    ) AS inventory,

    (
      SELECT json_agg(
        jsonb_build_object(
          'product_id', img.product_id,
          'color', img.color,
          'image_url', img.image_url
        )
      )
      FROM product_images img
      WHERE img.product_id = p.product_id
    ) AS images
    FROM products p
    ${sql.unsafe(where)}
    ORDER BY ${sql.unsafe(sort)}
    LIMIT ${limit} OFFSET ${offset}
`;
    const countResult = await sql`
  SELECT COUNT(*) AS total FROM products;
`;

    const totalItems = Number(countResult[0].total);
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: result as ExtendedProduct[],
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
        pageSize: 9,
        totalItems: 0,
      },
    };
  }
};
