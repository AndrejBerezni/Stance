'use client';
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import usePagination from '@/hooks/usePagination';

import Button from '../ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const {
    isFirstPage,
    isLastPage,
    goToFirst,
    goToPrevious,
    goToNext,
    goToLast,
  } = usePagination({ currentPage, totalPages });

  return (
    <div className="mt-6 flex w-full justify-center md:mt-8">
      <nav
        aria-label="Pagination Navigation"
        role="navigation"
        className="flex flex-nowrap items-center gap-1"
      >
        <Button
          variant="secondary"
          size="sm"
          iconOnly
          onClick={goToFirst}
          disabled={isFirstPage}
          aria-label="Go to first page"
          className="max-[320px]:hidden"
        >
          <ChevronFirst />
        </Button>

        <Button
          variant="secondary"
          size="sm"
          iconOnly
          onClick={goToPrevious}
          disabled={isFirstPage}
          aria-label="Go to previous page"
        >
          <ChevronLeft />
        </Button>

        <span
          aria-live="polite"
          className="bg-background mx-2 flex h-full items-center rounded-md px-2 text-xl font-medium text-nowrap"
        >
          {currentPage >= 1 ? currentPage : 1} / {totalPages}
        </span>

        <Button
          variant="secondary"
          size="sm"
          iconOnly
          onClick={goToNext}
          disabled={isLastPage}
          aria-label="Go to next page"
        >
          <ChevronRight />
        </Button>

        <Button
          variant="secondary"
          size="sm"
          iconOnly
          onClick={goToLast}
          disabled={isLastPage}
          aria-label="Go to last page"
          className="max-[320px]:hidden"
        >
          <ChevronLast />
        </Button>
      </nav>
    </div>
  );
}
