'use client';

import { useState } from 'react';

import ModalOuter from '@/components/common/modal/modal-outer';
import useIsDesktop from '@/hooks/useIsDesktop';
import { cn } from '@/lib/utils/cn';

import FiltersAccordion from './filters-accordion';
import ProductFiltersHeader from './product-filters-header';
import ProductFiltersTrigger from './product-filters-trigger';
import { IFilters } from '../../types';

interface ProductFiltersProps {
  filters: IFilters;
}

export default function ProductFilters({ filters }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useIsDesktop();

  const handleClose = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ProductFiltersTrigger
        handleClose={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
      <aside
        id="filters"
        aria-modal={isDesktop ? undefined : true}
        aria-hidden={!isDesktop && !isOpen ? true : undefined}
        inert={!isDesktop && !isOpen ? true : undefined}
        className={cn(
          'bg-background fixed top-0 left-0 z-20 flex h-full w-full origin-left transform flex-col gap-6 p-4 pt-8 transition-transform duration-500 ease-in sm:w-80 xl:sticky xl:h-auto xl:w-auto xl:p-4 xl:duration-0',
          {
            'translate-x-0': isOpen,
            'pointer-events-none -translate-x-full xl:pointer-events-auto xl:translate-x-0':
              !isOpen,
          }
        )}
      >
        <ProductFiltersHeader handleClose={handleClose} />
        <FiltersAccordion filters={filters} />
      </aside>
      <ModalOuter closeModal={handleClose} show={!isDesktop && isOpen} />
    </>
  );
}
