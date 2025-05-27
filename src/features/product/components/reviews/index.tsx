'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import OverallRating from './overall-rating';
import ReviewsList from './reviews-list';
import ReviewsSkeleton from './reviews-skeleton';
import { fetchReviewsForProduct } from '../../data/client';

interface ReviewsProps {
  productId: string;
}

export default function Reviews({ productId }: ReviewsProps) {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['reviews', productId],
      queryFn: async ({ pageParam }) =>
        await fetchReviewsForProduct({
          productId,
          sort: 'created_at',
          limit: 10,
          page: pageParam,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.meta.page;
        const totalPages = lastPage.meta.totalPages;
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    });

  if (error) {
    // This error will be caught by error boundary and error page will be displayed
    throw new Error(error.message);
  }

  if (!data) return <ReviewsSkeleton />;

  if (data) {
    return (
      <div className="flex flex-col gap-10 xl:flex-row xl:gap-8">
        <OverallRating
          statistics={data.pages[0].data.statistics}
          total={data.pages[0].data.total}
        />
        <ReviewsList
          reviews={data.pages.flatMap((page) => page.data.reviews)}
          loadMore={fetchNextPage}
          isLoadingMore={isFetchingNextPage}
          hasMore={hasNextPage}
        />
      </div>
    );
  }
}
