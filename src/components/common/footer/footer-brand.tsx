import { useTranslations } from 'next-intl';

import Brand from '../brand';

export default function FooterBrand() {
  const translate = useTranslations('footer');
  return (
    <div className="max-w-[320px] lg:max-w-[400px]">
      <Brand />
      <p className="text-ink-600 mt-6 md:mt-8">{translate('brandText')}</p>
    </div>
  );
}
