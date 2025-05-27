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
  sql`SELECT 
    r.id AS id,
    r.product_id AS product_id,
    r.user_id AS user_id,
    u.name AS user_name,
    u.avatar_url AS user_avatar,
    r.rating AS rating,
    r.content AS content,
    r.created_at AS created_at
    FROM product_reviews r
    LEFT JOIN customers u
    ON r.user_id = u.user_id
    WHERE r.product_id=${productId}
    ORDER BY ${sort}
    DESC LIMIT ${limit}
    OFFSET ${offset};`;

export const numberOfReviewsQuery = (
  productId: string
) => sql`SELECT number_of_reviews, rating
     FROM products
     WHERE product_id=${productId}`;

// TO DO: we need to store this info in db, not to count on every request
export const ratingStatisticsQuery = (
  productId: string
) => sql`SELECT rating, COUNT(*)::int AS count
    FROM product_reviews
    WHERE product_id =${productId}
    GROUP BY rating
    ORDER BY rating DESC;`;
