'use client';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';

export default function ProductSort() {
  const translate = useTranslations('filterAndSort');
  return (
    <Button
      variant="secondary"
      size="sm"
      className="max-h-full gap-1.5 text-xs sm:text-sm"
    >
      {translate('sortBy')}
      <ChevronDown size={12} />
    </Button>
  );
}
