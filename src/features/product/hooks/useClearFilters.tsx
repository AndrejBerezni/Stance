'use client';

import { useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useClearFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const validSearchParams = ['collection', 'category', 'color', 'rating'];

  const [filterCount, setFilterCount] = useState<number>(0);

  useEffect(() => {
    let newFilterCount = 0;

    for (const filter of searchParams.keys()) {
      if (validSearchParams.includes(filter)) {
        newFilterCount++;
      }
    }

    setFilterCount(newFilterCount);
  }, [searchParams]);

  const clearFilters = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    validSearchParams.forEach((param) => {
      if (newSearchParams.has(param)) {
        newSearchParams.delete(param);
      }
    });

    replace(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  };

  return { clearFilters, filterCount };
}
