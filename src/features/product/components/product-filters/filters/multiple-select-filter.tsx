import { Check } from 'lucide-react';

import { FilterItem } from '@/features/product/types';
import useModifySearchParam from '@/hooks/useModifySearchParam';

interface MultipleSelectFilterProps {
  name: string;
  filterValues: FilterItem[];
}

export default function MultipleSelectFilter({
  name,
  filterValues,
}: MultipleSelectFilterProps) {
  const { appendOrDeleteSearchParam, currentValuesArray, isPending } =
    useModifySearchParam(name);

  return (
    <fieldset>
      <legend className="sr-only">{name}</legend>
      <ul className="mt-2 flex flex-col gap-4">
        {filterValues.map((item) => (
          <li
            key={`${name}-${item.value}`}
            className="group flex items-center gap-3"
          >
            <span className="relative flex h-4 w-4 hover:cursor-pointer">
              <input
                id={item.label}
                type="checkbox"
                disabled={isPending}
                checked={currentValuesArray.includes(item.value)}
                onChange={() => appendOrDeleteSearchParam(item.value)}
                className="checked:bg-primary disabled:bg-ink-300 checked:border-primary disabled:border-ink-300 border-ink-300 bg-background focus:border-primary focus:outline-primary/12 h-4 w-4 cursor-pointer appearance-none rounded border-[1px] transition-all duration-200 focus:outline-2"
              />
              {currentValuesArray.includes(item.value) && (
                <Check
                  className="text-background pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  size={14}
                  aria-hidden="true"
                />
              )}
            </span>
            <label
              htmlFor={item.label}
              className="text-ink-600 group-hover:text-ink-900 capitalize duration-150 group-hover:cursor-pointer"
            >
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
