'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils/cn';

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div>
      <div
        role="tablist"
        className="flex border-b-[1px] no-scrollbar overflow-x-scroll"
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'px-2 pb-3 pt-0 border-b-[1px] hover:cursor-pointer',
              {
                'text-primary border-b-primary': activeIndex === index,
                'text-ink-600 border-b-transparent': activeIndex !== index,
              }
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`tab-panel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
        className="py-4"
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}
