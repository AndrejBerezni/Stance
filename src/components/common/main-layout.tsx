import { SidebarProvider } from '@/lib/providers/sidebar-provider';

import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';
import UnderConstruction from './under-construction';

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
      <main className="bg-background flex w-full flex-1 flex-col items-center rounded-t-lg shadow-xl">
        {children}
      </main>
      <Footer />
      <UnderConstruction />
    </>
  );
}
