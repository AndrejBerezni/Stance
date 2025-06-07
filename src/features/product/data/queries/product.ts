import { NeonQueryPromise } from '@neondatabase/serverless';

import sql from '@/lib/db/connect';

export const multipleProductsQuery = ({
  where,
  sort,
  limit,
  offset,
}: {
  where: string;
  sort: string;
  limit: number;
  offset: number;
}) =>
  sql`SELECT 
    p.product_id,
    p.name,
    p.description,
    p.category,
    p.collection,
    p.created_at,
    p.sizing_convention,
    p.available_colors,
    p.stripe_id,
    p.number_of_reviews,
    p.rating,
    p.updated_at,

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
          'list_price_stripe_id', i.list_price_stripe_id,
          'discount', i.discount,
          'discount_percentage', i.discount_percentage,
          'sale_price', i.sale_price,
          'sale_price_stripe_id', i.sale_price_stripe_id,
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
    LIMIT ${limit}
    OFFSET ${offset}` as NeonQueryPromise<false, false, Record<string, any>[]>;

export const countProductsQuery = (where: string) =>
  sql`SELECT COUNT(*) AS total FROM products ${sql.unsafe(where)}`;

export const singleProductQuery = (productId: string) => sql`
      SELECT 
        p.product_id,
        p.name,
        p.description,
        p.category,
        p.collection,
        p.created_at,
        p.sizing_convention,
        p.available_colors,
        p.stripe_id,
        p.number_of_reviews,
        p.rating,
        p.updated_at,

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
                'list_price_stripe_id', i.list_price_stripe_id,
                'discount', i.discount,
                'discount_percentage', i.discount_percentage,
                'sale_price', i.sale_price,
                'sale_price_stripe_id', i.sale_price_stripe_id,
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
    `;

export const sitemapProductsQuery = () =>
  sql`SELECT product_id, updated_at FROM products`;

export const metadataProductQuery = (productId: string) =>
  sql`SELECT name, description, category FROM products WHERE product_id=${productId}`;
