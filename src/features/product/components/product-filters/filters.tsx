import { usePathname, useRouter, useSearchParams } from 'next/navigation';
export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const changeSearchParam = (param: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (params.has(param, value)) {
      console.log('already there, removing');
      params.delete(param, value);
    } else {
      params.append(param, value);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return <></>;
}
