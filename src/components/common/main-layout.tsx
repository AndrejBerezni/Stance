import { SidebarProvider } from '@/lib/providers/sidebar-provider';

import Navbar from './navbar';
import Sidebar from './sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
      <main className="m-4 rounded-lg shadow-xl w-[calc(100%-32px)] flex-1 bg-background flex items-center flex-col">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
