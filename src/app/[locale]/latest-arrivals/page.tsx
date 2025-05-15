import { useTranslations } from 'next-intl';

export default function LatestArrivals() {
  const translate = useTranslations('navigation');
  return (
    <h1 className="text-7xl font-bold capitalize">
      {translate('latestArrivals')}
    </h1>
  );
}
