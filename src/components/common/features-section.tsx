import { ArrowLeftRight, ShieldCheck, Truck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import IconContainer from '../ui/icon-container';

interface IFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default async function FeaturesSection() {
  const translate = await getTranslations('home');

  const features: IFeature[] = [
    {
      id: 'c-shipping',
      title: translate('complimentaryShipping'),
      description: translate('complimentaryShippingText'),
      icon: <Truck size={20} />,
    },
    {
      id: 'q-promise',
      title: translate('qualityPromise'),
      description: translate('qualityPromiseText'),
      icon: <ShieldCheck size={20} />,
    },
    {
      id: 'e-exchange',
      title: translate('easyExchanges'),
      description: translate('easyExchangesText'),
      icon: <ArrowLeftRight size={20} />,
    },
  ];

  return (
    <section className="section-wrapper text-center">
      <div className="mb-12 md:mb-16 md:px-[40px] lg:px-[160px]">
        <h3 className="text-primary mb-3 font-semibold">
          {translate('featuresSubtitle')}
        </h3>
        <h2 className="mb-5 text-3xl font-semibold md:text-5xl">
          {translate('featuresTitle')}
        </h2>
        <p className="text-ink-600 text-lg md:text-xl">
          {translate('featuresDescription')}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.id} className="flex flex-col items-center">
            <IconContainer className="mb-5"> {feature.icon}</IconContainer>
            <h4 className="mb-2 text-xl font-semibold">{feature.title}</h4>
            <p className="text-ink-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
