import Button from '@/components/ui/button';

import useClearFilters from '../../hooks/useClearFilters';

export default function ClearFilters() {
  const { clearFilters, filterCount } = useClearFilters();

  if (filterCount > 0)
    return (
      <Button variant="link" type="button" onClick={clearFilters} size="sm">
        Clear All ({filterCount})
      </Button>
    );
}
