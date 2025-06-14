import { CirclePlus, CircleMinus } from 'lucide-react';

import Button from '../button';
import { IAccordionItem } from './accordion-item';

interface AccordionItemTriggerProps {
  isExpanded: boolean;
  handleExpand: () => void;
  item: IAccordionItem;
}

export default function AccordionItemTrigger({
  isExpanded,
  handleExpand,
  item,
}: AccordionItemTriggerProps) {
  return (
    <Button
      variant="ghost"
      aria-label={
        isExpanded ? `Collapse ${item.title}` : `Expand ${item.title}`
      }
      onClick={handleExpand}
      className="flex h-7 items-center"
      aria-expanded={isExpanded}
      aria-controls={item.id}
      iconOnly
    >
      {isExpanded ? <CircleMinus size={20} /> : <CirclePlus size={20} />}
    </Button>
  );
}
