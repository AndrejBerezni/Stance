'use client';

import { Shirt } from 'lucide-react';
import { useTranslations } from 'next-intl';

import Button from '@/components/ui/button';
import IconContainer from '@/components/ui/icon-container';

import useClearFilters from '../../hooks/useClearFilters';

export default function NoResultsFound() {
  const translate = useTranslations('filterAndSort');
  const { clearFilters } = useClearFilters();

  return (
    <article className="flex h-full flex-col items-center justify-center gap-5">
      <IconContainer>
        <Shirt size={20} />
      </IconContainer>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-xl font-medium">{translate('nothingFound')}</h2>
        <p>{translate('adjustFilters')}</p>
      </div>
      <Button size="sm" onClick={clearFilters}>
        {translate('resetFilters')}
      </Button>
    </article>
  );
}
