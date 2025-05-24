'use client';

import { Fragment } from 'react';

import useModifySearchParam from '@/hooks/useModifySearchParam';

interface AttributeSelectorProps<T> {
  attribute: string;
  heading: string;
  options: T[];
  getOptionValue: (option: T) => string;
  renderOption: (
    option: T,
    selected: boolean,
    handleSelect: () => void
  ) => React.ReactNode;
}

export default function AttributeSelector<T>({
  attribute,
  heading,
  options,
  getOptionValue,
  renderOption,
}: AttributeSelectorProps<T>) {
  const { setSearchParam: handleSelect, currentValue } = useModifySearchParam({
    param: attribute,
  });

  return (
    <div className="flex flex-col gap-4">
      <h2 id={`${attribute}-selector-heading`} className="text-ink-500 text-sm">
        {heading}
      </h2>

      <div
        className="flex flex-wrap gap-4"
        role="radiogroup"
        aria-labelledby={`${attribute}-selector-heading`}
      >
        {options.map((option: T) => {
          const value = getOptionValue(option);
          const selected = value === currentValue;
          return (
            <Fragment key={value}>
              {renderOption(option, selected, () => handleSelect(value))}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
