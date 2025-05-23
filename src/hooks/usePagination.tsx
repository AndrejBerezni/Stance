'use client';

import useModifySearchParam from './useModifySearchParam';

interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function usePagination({
  currentPage,
  totalPages,
}: UsePaginationProps) {
  const { setSearchParam: setPage } = useModifySearchParam({
    param: 'page',
    scroll: true,
  });

  const goToFirst = () => setPage('1');

  const goToPrevious = () => {
    if (currentPage > 1) {
      setPage(String(currentPage - 1));
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setPage(String(currentPage + 1));
    }
  };

  const goToLast = () => {
    if (totalPages > 0) {
      setPage(String(totalPages));
    }
  };

  return {
    isFirstPage: currentPage <= 1,
    isLastPage: currentPage >= totalPages,
    goToFirst,
    goToPrevious,
    goToNext,
    goToLast,
  };
}
