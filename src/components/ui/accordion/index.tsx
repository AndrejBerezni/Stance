import { cn } from '@/lib/utils/cn';

import AccordionItem, { IAccordionItem } from './accordion-item';

interface AccordionProps {
  items: IAccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  return (
    <div
      className={cn('flex flex-col gap-6', className)}
      aria-label="Accordion"
    >
      {items.map((item) => (
        <AccordionItem item={item} key={item.id} />
      ))}
    </div>
  );
}
