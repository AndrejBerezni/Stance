'use client';
import { useSidebar } from '@/lib/providers/sidebar-provider';

export default function Sidebar() {
  const { isOpen } = useSidebar();
  if (isOpen) {
    return <nav>Hello</nav>;
  }
}
