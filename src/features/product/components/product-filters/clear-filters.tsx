import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

import useClearFilters from '../../hooks/useClearFilters';

export default function ClearFilters() {
  const translate = useTranslations('filterAndSort');
  const { clearFilters, filterCount } = useClearFilters();

  if (filterCount > 0)
    return (
      <Button variant="link" type="button" onClick={clearFilters} size="sm">
        {translate('clearAll')} ({filterCount})
      </Button>
    );
}
