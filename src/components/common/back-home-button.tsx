'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils/cn';

import buttonVariants from '../ui/button/styles';

export default function BackHomeButton() {
  const translate = useTranslations('notFoundPage');

  return (
    <Link
      href={`/`}
      className={cn(buttonVariants({ variant: 'primary', size: 'md' }))}
    >
      {translate('backHome')}
    </Link>
  );
}
