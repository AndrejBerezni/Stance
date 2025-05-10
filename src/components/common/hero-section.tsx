import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import Button from '../ui/button';

export default async function HeroSection() {
  const translate = await getTranslations('home');

  return (
    <section className="section-wrapper grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-8">
      <div className="flex flex-col justify-center items-start">
        <div className="mb-8 xl:mb-16">
          <h1 className="mb-4 md:mb-6 font-semibold text-4xl md:text-5xl xl:text-6xl">
            {translate('heroHead')}
          </h1>
          <p className="text-ink-600 text-lg xl:text-xl">
            {translate('heroText')}
          </p>
        </div>
        <Button size="lg" className="md:px-12 xl:px-16  md:text-lg">
          {translate('shopNow')}
        </Button>
      </div>
      <Image
        src="/images/hero-image.png"
        alt={translate('heroImgAlt')}
        width={696}
        height={526}
        className="w-full rounded-2xl"
      />
    </section>
  );
}
