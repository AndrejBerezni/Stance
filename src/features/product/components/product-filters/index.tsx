'use client';

import { useRef, useState } from 'react';

import Separator from '@/components/ui/separator';
import SidebarOuter from '@/components/ui/sidebar-outer';
import useIsDesktop from '@/hooks/useIsDesktop';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { cn } from '@/lib/utils/cn';

import ClearFilters from './clear-filters';
import FiltersAccordion from './filters-accordion';
import ProductFiltersHeader from './product-filters-header';
import ProductFiltersTrigger from './product-filters-trigger';
import { IFilters } from '../../types';

interface ProductFiltersProps {
  filters: IFilters;
}

export default function ProductFilters({ filters }: ProductFiltersProps) {
  const filtersRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useIsDesktop();

  const handleClose = () => {
    if (isOpen && !isDesktop) setIsOpen(false);
  };

  useOnClickOutside({
    refs: filtersRef,
    handleClick: handleClose,
    visible: isOpen,
  });

  return (
    <>
      <ProductFiltersTrigger
        handleOpen={() => setIsOpen(true)}
        isOpen={isOpen}
      />
      <aside
        id="filters"
        ref={filtersRef}
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
        <Separator />
        <ClearFilters />
      </aside>
      <SidebarOuter show={!isDesktop && isOpen} />
    </>
  );
}
