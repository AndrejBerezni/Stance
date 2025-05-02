import { useEffect, useRef, useState } from 'react';

import { AccordionItem } from './accordion-item';

interface AccordionItemContentProps {
  isExpanded: boolean;
  item: AccordionItem;
}

export default function AccordionItemContent({
  isExpanded,
  item,
}: AccordionItemContentProps) {
  const contentRef = useRef<HTMLUListElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, item.content]);

  return (
    <ul
      id={item.id}
      ref={contentRef}
      aria-labelledby={item.title}
      style={{ maxHeight: `${contentHeight}px` }}
      className="pl-1.5 list-disc list-inside origin-top overflow-hidden transition-all duration-300 ease-in-out"
    >
      {item.content.map((line) => (
        <li key={line} className="text-secondary-foreground">
          {line}
        </li>
      ))}
    </ul>
  );
}
