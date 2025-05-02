import AccordionItem, { IAccordionItem } from './accordion-item';

interface AccordionProps {
  items: IAccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-8" aria-label="Accordion">
      {items.map((item) => (
        <AccordionItem item={item} key={item.id} />
      ))}
    </div>
  );
}
