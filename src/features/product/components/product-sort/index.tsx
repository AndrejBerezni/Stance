'use client';

import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import DropdownMenu from '@/components/ui/dropdown-menu';
import useModifySearchParam from '@/hooks/useModifySearchParam';

import SortButton from './sort-button';

export default function ProductSort() {
  const translate = useTranslations('filterAndSort');
  const { setSearchParam, currentValue } = useModifySearchParam('sort');

  const sortButtons = [
    { value: 'date', label: translate('newest') },
    { value: 'rating', label: translate('bestRating') },
    { value: 'price-asc', label: translate('priceLow') },
    { value: 'price-desc', label: translate('priceHigh') },
  ].map((button) => (
    <SortButton
      key={`${button.value}-sort-item`}
      label={button.label}
      selected={currentValue === button.value}
      handleSort={() => setSearchParam(button.value)}
    />
  ));

  return (
    <DropdownMenu
      trigger={
        <Button
          variant="secondary"
          size="sm"
          className="max-h-full gap-1.5 text-xs sm:text-sm"
        >
          {translate('sortBy')}
          <ChevronDown size={12} />
        </Button>
      }
      position="bottom"
      items={sortButtons}
      align="right"
    />
  );
}
