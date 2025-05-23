'use client';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { FilterItem } from '@/features/product/types';
import useModifySearchParam from '@/hooks/useModifySearchParam';
import { cn } from '@/lib/utils/cn';

import { colorButtonVariants } from '../../product-card/styles';
import { AvailableColor } from '../../product-details-section/product-attributes/color-select-button';

export default function ColorFilter({ colors }: { colors: FilterItem[] }) {
  const translate = useTranslations('colors');
  const { appendOrDeleteSearchParam, currentValuesArray, isPending } =
    useModifySearchParam({ param: 'color', pageResetOnChange: true });

  return (
    <fieldset>
      <legend className="sr-only">{translate('colors')}</legend>

      <ul className="mt-2 flex min-h-fit flex-wrap gap-3">
        {colors.map((color) => {
          const selected = currentValuesArray.includes(color.value);
          return (
            <li key={`${color.value}-color-filter`}>
              <button
                type="button"
                title={translate(color.value) ?? color.value}
                onClick={() => appendOrDeleteSearchParam(color.value)}
                disabled={isPending}
                role="checkbox"
                aria-label={translate(color.value) ?? color.value}
                aria-checked={selected}
                className={cn(
                  'flex items-center justify-center transition-opacity duration-500 disabled:opacity-50 disabled:hover:cursor-default',
                  colorButtonVariants({
                    color: color.value as AvailableColor,
                  })
                )}
              >
                {selected && (
                  <Check
                    size={14}
                    className={cn({
                      'text-background':
                        color.value !== 'white' && color.value !== 'black',
                      'text-ink-900 dark:text-background':
                        color.value === 'white',
                      'text-background dark:text-ink-900':
                        color.value === 'black',
                    })}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
