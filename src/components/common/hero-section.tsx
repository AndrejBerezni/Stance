import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { BLUR_DATA_URL } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

import buttonVariants from '../ui/button/styles';

export default async function HeroSection({ locale }: { locale: string }) {
  const translate = await getTranslations('home');

  return (
    <section
      className="section-wrapper grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8"
      data-testid="hero-section"
    >
      <div className="flex flex-col items-start justify-center">
        <div className="mb-8 xl:mb-16">
          <h1 className="mb-4 text-4xl font-semibold md:mb-6 md:text-5xl xl:text-6xl">
            {translate('heroHead')}
          </h1>
          <p className="text-ink-600 text-lg xl:text-xl">
            {translate('heroText')}
          </p>
        </div>
        <Link
          href={`/${locale}/catalogue`}
          className={cn(
            buttonVariants({ variant: 'primary', size: 'lg' }),
            'md:px-12 md:text-lg xl:px-16'
          )}
        >
          {translate('shopNow')}
        </Link>
      </div>
      <Image
        src="/images/hero-image.png"
        alt={translate('heroImgAlt')}
        width={696}
        height={526}
        className="w-full rounded-2xl"
        priority
        loading="eager"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
      />
    </section>
  );
}
