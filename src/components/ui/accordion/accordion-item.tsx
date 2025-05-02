import { useState } from 'react';

import AccordionItemContent from './accordion-item-content';
import AccordionItemTrigger from './accordion-item-trigger';

export interface IAccordionItem {
  id: string;
  title: string;
  content: string[];
}

export default function AccordionItem({ item }: { item: IAccordionItem }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="border-t-[1px] first:border-t-0 pt-6 flex justify-between gap-6 items-start">
      <div className="flex-1">
        <h3 className="text-lg font-medium align-top mb-2" id={item.title}>
          {item.title}
        </h3>
        <AccordionItemContent item={item} isExpanded={isExpanded} />
      </div>
      <AccordionItemTrigger
        item={item}
        isExpanded={isExpanded}
        handleExpand={() => setIsExpanded((prev) => !prev)}
      />
    </div>
  );
}
