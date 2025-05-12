import { Truck, ShieldCheck, ArrowLeftRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

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
      <div className="lg:px-[160px] md:px-[40px] mb-12 md:mb-16 ">
        <h3 className="text-primary font-semibold mb-3">
          {translate('featuresSubtitle')}
        </h3>
        <h2 className="text-3xl md:text-5xl font-semibold mb-5">
          {translate('featuresTitle')}
        </h2>
        <p className="text-ink-600 text-lg md:text-xl">
          {translate('featuresDescription')}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <article key={feature.id} className="flex flex-col items-center">
            <div className="text-primary h-12 w-12 flex items-center justify-center rounded-full aspect-square shadow-[0px_0px_4px_var(--ink-400)] mb-5">
              {feature.icon}
            </div>
            <h4 className="mb-2 font-semibold text-xl">{feature.title}</h4>
            <p className="text-ink-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
