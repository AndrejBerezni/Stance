import { useMemo } from 'react';

import { useTranslations } from 'next-intl';

import Accordion from '@/components/ui/accordion';

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
            name="collections"
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
    ],
    []
  );
  return <Accordion items={filterItems} />;
}
