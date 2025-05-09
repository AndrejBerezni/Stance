import { X } from 'lucide-react';

import { useSidebar } from '@/lib/providers/sidebar-provider';

import Brand from '../brand';

export default function SidebarHeader() {
  const { closeSidebar } = useSidebar();
  return (
    <div className="w-full flex justify-between items-center">
      <Brand />
      <button
        className="hover:cursor-pointer text-ink-600 hover:text-ink-900"
        onClick={closeSidebar}
      >
        <X />
      </button>
    </div>
  );
}
