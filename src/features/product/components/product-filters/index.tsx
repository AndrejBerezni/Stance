'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ProductFilters() {
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
  return (
    <section className="h-[800px] bg-blue-300 hidden xl:flex xl:col-span-1">
      <button onClick={() => changeSearchParam('collection', 'men')}>
        men
      </button>
      <button onClick={() => changeSearchParam('collection', 'women')}>
        women
      </button>
    </section>
  );
}
