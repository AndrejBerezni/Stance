import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '../globals.css';
import ProvidersWrapper from '@/lib/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description: 'A modern starter template to quickly spin up your app',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProvidersWrapper locale={locale}>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
