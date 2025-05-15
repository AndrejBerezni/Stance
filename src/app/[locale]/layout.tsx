import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import '../globals.css';
import MainLayout from '@/components/common/main-layout';
import ProvidersWrapper from '@/lib/providers';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E-commerce App',
  description: 'Clothing web shop',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} font-noto flex min-h-screen flex-col items-center bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] px-4 pb-16 antialiased lg:pb-4 dark:from-[#262626] dark:to-[#3F3F46]`}
      >
        <ProvidersWrapper locale={locale}>
          <MainLayout>{children}</MainLayout>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
