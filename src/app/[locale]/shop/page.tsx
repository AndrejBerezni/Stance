import { useTranslations } from 'next-intl';

export default function Shop() {
  const translate = useTranslations('navigation');
  return (
    <h1 className="capitalize font-bold text-7xl">{translate('shopAll')}</h1>
  );
}
