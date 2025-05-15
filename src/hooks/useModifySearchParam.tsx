import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useModifySearchParam(param: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setSearchParam = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(param, value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const appendOrDeleteSearchParam = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (params.has(param, value)) {
      params.delete(param, value);
    } else {
      params.append(param, value);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const currentValue = searchParams.get(param) || '';
  const currentValuesArray = searchParams.getAll(param) || '';

  return {
    setSearchParam,
    appendOrDeleteSearchParam,
    currentValue,
    currentValuesArray,
  };
}
