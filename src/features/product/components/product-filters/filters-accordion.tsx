import { useMemo } from 'react';

import { useTranslations } from 'next-intl';

import Accordion from '@/components/ui/accordion';

import ColorFilter from './filters/color-filter';
import MultipleSelectFilter from './filters/multiple-select-filter';
import { IFilters } from '../../types';

interface FiltersAccordionProps {
  filters: IFilters;
}

export default function FiltersAccordion({ filters }: FiltersAccordionProps) {
  const translate = useTranslations('filterAndSort');
  const filterItems = useMemo(
    () => [
      {
        id: 'collections-filters',
        title: translate('collections'),
        content: (
          <MultipleSelectFilter
            name="collection"
            filterValues={filters.collections}
          />
        ),
      },
      {
        id: 'category-filters',
        title: translate('category'),
        content: (
          <MultipleSelectFilter
            name="category"
            filterValues={filters.categories}
          />
        ),
      },
      {
        id: 'colors-filters',
        title: translate('colors'),
        content: <ColorFilter colors={filters.colors} />,
      },
    ],
    []
  );
  return <Accordion items={filterItems} />;
}
