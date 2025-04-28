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
        <header className="w-screen flex justify-center items-center">
          <Navbar />
        </header>
        <Sidebar />
      </SidebarProvider>

      <main className="content-wrapper flex-1 w-full">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
