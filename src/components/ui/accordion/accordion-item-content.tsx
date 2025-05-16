import { useEffect, useRef, useState } from 'react';

import { IAccordionItem } from './accordion-item';

interface AccordionItemContentProps {
  isExpanded: boolean;
  item: IAccordionItem;
}

export default function AccordionItemContent({
  isExpanded,
  item,
}: AccordionItemContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, item.content]);

  return (
    <div
      id={item.id}
      ref={contentRef}
      aria-labelledby={item.title}
      style={{ maxHeight: `${contentHeight}px` }}
      className="origin-top overflow-hidden pl-1.5 transition-all duration-300 ease-in-out"
    >
      {item.content}
    </div>
  );
}
