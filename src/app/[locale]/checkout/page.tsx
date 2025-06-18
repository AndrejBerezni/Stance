import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import buttonVariants from '@/components/ui/button/styles';
import CheckoutForm from '@/features/cart/components/checkout-form';
import CheckoutSummary from '@/features/cart/components/checkout-summary';
import { cn } from '@/lib/utils/cn';

export default async function CheckoutPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ sessionId: string }>;
}) {
  const { sessionId } = await searchParams;

  if (!sessionId) {
    redirect('/');
  }

  const translate = await getTranslations('checkout');
  const { locale } = await params;

  return (
    <div className="section-wrapper flex flex-col gap-8">
      <Link
        href={`/${locale}/cart`}
        className={cn(buttonVariants({ variant: 'link', size: 'sm' }), 'w-fit')}
      >
        <ChevronLeft size={18} />
        {translate('backToCart')}
      </Link>
      <h1 className="text-2xl font-semibold md:text-3xl xl:text-4xl">
        {translate('checkout')}
      </h1>
      <div className="flex flex-col gap-8 xl:flex-row">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  );
}
