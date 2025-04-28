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
      <body className={`${notoSans.variable} antialiased font-noto`}>
        <ProvidersWrapper locale={locale}>
          <MainLayout>{children}</MainLayout>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
