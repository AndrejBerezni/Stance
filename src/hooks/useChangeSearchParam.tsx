import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useChangeSearchParam(param: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const changeSearchParam = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(param, value);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const currentValue = searchParams.get(param) || '';

  return { changeSearchParam, currentValue };
}
