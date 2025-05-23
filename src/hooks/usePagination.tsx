'use client';
import { useCallback } from 'react';

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

  const goToFirst = useCallback(() => setPage('1'), []);
  const goToPrevious = () => setPage(String(currentPage - 1));
  const goToNext = () => setPage(String(currentPage + 1));
  const goToLast = () => setPage(String(totalPages));

  return {
    isFirstPage: currentPage <= 1,
    isLastPage: currentPage >= totalPages,
    goToFirst,
    goToPrevious,
    goToNext,
    goToLast,
  };
}
