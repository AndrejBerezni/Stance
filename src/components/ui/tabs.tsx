'use client';

import { KeyboardEvent, useId, useState } from 'react';

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

  const setActiveTabUsingIndex = (index: number) => {
    const newActiveTab = tabs[index].value;
    setActiveTab(newActiveTab);

    document.getElementById(`${tabsId}-tab-${newActiveTab}`)?.focus();
  };

  const handleKeyInput = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowLeft': {
        const index = tabs.findIndex((tab) => tab.value === activeTab);
        setActiveTabUsingIndex((index - 1 + tabs.length) % tabs.length);
        break;
      }
      case 'ArrowRight': {
        const index = tabs.findIndex((tab) => tab.value === activeTab);
        setActiveTabUsingIndex((index + 1) % tabs.length);
        break;
      }
      case 'Home': {
        setActiveTabUsingIndex(0);
        break;
      }
      case 'End': {
        setActiveTabUsingIndex(tabs.length - 1);
        break;
      }
      default:
        break;
    }
  };
  return (
    <div>
      <div
        role="tablist"
        className="no-scrollbar flex overflow-x-scroll border-b-[1px]"
        onKeyDown={(e) => handleKeyInput(e)}
        tabIndex={-1}
      >
        {tabs.map(({ label, value }) => {
          const isActive = activeTab === value;
          return (
            <button
              id={`${tabsId}-tab-${value}`}
              key={value}
              type="button"
              role="tab"
              tabIndex={isActive ? 0 : -1}
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
            tabIndex={0}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
