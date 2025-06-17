import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { AppLocale, routing } from '@/i18n/routing';

export default function useIsCheckoutPage() {
  const pathname = usePathname();
  const locale = useLocale();
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    if (!pathname || !locale) return;

    const localizedCheckoutPath =
      routing.pathnames['/checkout']?.[locale as AppLocale];

    setIsCheckout(pathname.includes(localizedCheckoutPath));
  }, [pathname, locale]);

  return isCheckout;
}
