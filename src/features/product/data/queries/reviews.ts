import sql from '@/lib/db/connect';

export const reviewsPerProductQuery = ({
  productId,
  sort,
  limit,
  offset,
}: {
  productId: string;
  sort: 'rating' | 'created_at';
  limit: number;
  offset: number;
}) =>
  sql`SELECT *
    FROM product_reviews
    WHERE product_id=${productId}
    SORT BY ${sort}
    DESC LIMIT ${limit}
    OFFSET ${offset}`;

export const numberOfReviewsQuery = (
  productId: string
) => sql`SELECT number_of_reviews
     FROM products
     WHERE product_id=${productId}`;
