import { useEffect, useState, useTransition } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface UseModifySearchParamProps {
  param: string;
  pageResetOnChange?: boolean;
  scroll?: boolean;
}

export default function useModifySearchParam({
  param,
  pageResetOnChange = false,
  scroll = true,
}: UseModifySearchParamProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Wrapping searchParams updates in startTransition to block updating UI while request is pending
  const [isPending, startTransition] = useTransition();

  // Using local values for immediate UI update
  const [localValue, setLocalValue] = useState<string>(
    searchParams.get(param) || ''
  );
  const [localValuesArray, setLocalValuesArray] = useState<string[]>(
    searchParams.getAll(param)
  );

  // Syncing local values with searchParams, in case searchParams are updated outside of this hook
  useEffect(() => {
    const currentValue = searchParams.get(param) || '';
    const currentValuesArray = searchParams.getAll(param);

    setLocalValue(currentValue);
    setLocalValuesArray(currentValuesArray);
  }, [searchParams, param]);

  const setSearchParam = (value: string) => {
    if (isPending) return;

    setLocalValue(value);

    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (param !== 'page' && pageResetOnChange) params.set('page', '1');
      params.set(param, value);
      replace(`${pathname}?${params.toString()}`, { scroll });
    });
  };

  const appendOrDeleteSearchParam = (value: string) => {
    if (isPending) return;

    setLocalValuesArray((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value);
      } else {
        return [...prev, value];
      }
    });

    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (param !== 'page' && pageResetOnChange) params.set('page', '1');
      if (params.has(param, value)) {
        params.delete(param, value);
      } else {
        params.append(param, value);
      }

      replace(`${pathname}?${params.toString()}`, { scroll });
    });
  };

  return {
    setSearchParam,
    appendOrDeleteSearchParam,
    currentValue: localValue,
    currentValuesArray: localValuesArray,
    isPending,
  };
}
