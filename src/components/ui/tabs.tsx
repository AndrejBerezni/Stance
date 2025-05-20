'use client';

import { useId, useState } from 'react';

import { cn } from '@/lib/utils/cn';

export interface Tab {
  value: string;
  label: string;
  panel: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
}

export default function Tabs({ tabs, defaultValue }: TabsProps) {
  const tabsId = useId(); // there might be more tab components on the screen, so we need unique value for aria attributes
  const [activeTab, setActiveTab] = useState<string>(
    defaultValue ?? tabs[0].value
  );
  return (
    <div>
      <div
        role="tablist"
        className="no-scrollbar flex overflow-x-scroll border-b-[1px]"
      >
        {tabs.map(({ label, value }) => {
          const isActive = activeTab === value;
          return (
            <button
              id={`${tabsId}-tab-${value}`}
              key={value}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tabsId}-tab-panel-${value}`}
              onClick={() => setActiveTab(value)}
              className={cn(
                'border-b-[1px] px-2 pt-0 pb-3 hover:cursor-pointer',
                {
                  'text-primary border-b-primary': isActive,
                  'text-ink-600 border-b-transparent': !isActive,
                }
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {tabs.map(({ panel, value }) => (
          <div
            id={`${tabsId}-tab-panel-${value}`}
            key={value}
            role="tabpanel"
            aria-labelledby={`${tabsId}-tab-${value}`}
            className="py-4"
            hidden={value !== activeTab}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
