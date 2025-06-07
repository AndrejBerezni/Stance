import { ShoppingCart, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import buttonVariants from '@/components/ui/button/styles';
import IconContainer from '@/components/ui/icon-container';
import { cn } from '@/lib/utils/cn';

export default function CartEmpty() {
  const translate = useTranslations('cart');
  const locale = useLocale();

  return (
    <article className="flex min-h-[40vh] flex-col items-center justify-center gap-5 text-center">
      <IconContainer>
        <ShoppingCart size={20} />
      </IconContainer>
      <div>
        <h2 className="mb-2 text-xl font-medium">{translate('emptyCart')}</h2>
        <p>{translate('exploreCall')}</p>
      </div>
      <Link
        href={`/${locale}/catalogue`}
        className={cn(buttonVariants({ variant: 'primary', size: 'md' }))}
      >
        {translate('explore')}
        <MoveRight size={18} />
      </Link>
    </article>
  );
}
