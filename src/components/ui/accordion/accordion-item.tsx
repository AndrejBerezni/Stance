'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils/cn';

import AccordionItemContent from './accordion-item-content';
import AccordionItemTrigger from './accordion-item-trigger';

export interface IAccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function AccordionItem({ item }: { item: IAccordionItem }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex items-start justify-between gap-6 border-t-[1px] pt-6 first:border-t-0 first:pt-0">
      <div className="flex-1">
        <h3
          className={cn(
            'align-top text-lg font-medium duration-300 hover:cursor-pointer',
            {
              'mb-0': !isExpanded,
              'mb-2': isExpanded,
            }
          )}
          id={item.title}
        >
          {item.title}
        </h3>
        <AccordionItemContent item={item} isExpanded={isExpanded} />
      </div>
      <AccordionItemTrigger
        item={item}
        isExpanded={isExpanded}
        handleExpand={toggleExpanded}
      />
    </div>
  );
}
