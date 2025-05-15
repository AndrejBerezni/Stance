import { useMemo } from 'react';

import Accordion from '@/components/ui/accordion';

import MultipleSelectFilter from './multiple-select-filter';
export default function Filters() {
  const filters = useMemo(
    () => [
      {
        id: 'two',
        title: 'Collection',
        content: (
          <MultipleSelectFilter
            name="collection"
            filterValues={[
              { label: 'men', value: 'men' },
              { label: 'women', value: 'women' },
            ]}
          />
        ),
      },
    ],
    []
  );
  return <Accordion items={filters} />;
}
