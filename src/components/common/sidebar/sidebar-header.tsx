import { X } from 'lucide-react';

import { useSidebar } from '@/lib/providers/sidebar-provider';

import Brand from '../brand';

export default function SidebarHeader() {
  const { closeSidebar } = useSidebar();
  return (
    <div className="flex w-full items-center justify-between">
      <Brand />
      <button
        type="button"
        className="text-ink-600 hover:text-ink-900 hover:cursor-pointer"
        onClick={closeSidebar}
      >
        <X />
      </button>
    </div>
  );
}
