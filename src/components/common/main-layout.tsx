import { SidebarProvider } from '@/lib/providers/sidebar-provider';

import Footer from './footer';
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
      <main className="rounded-t-lg shadow-xl w-full flex-1 bg-background flex items-center flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
