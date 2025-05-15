'use client';
import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils/cn';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locales = routing.locales;
  const currentLocale = useLocale();

  const handleLocaleChange = (locale: string): void => {
    router.push(pathname, { locale });
  };

  return (
    <ul className="flex gap-0" role="radiogroup">
      {locales.map((locale) => (
        <li
          key={`${locale}-select`}
          className="border-l-[1px] px-2 first:border-l-0"
        >
          <button
            type="button"
            role="radio"
            aria-checked={locale === currentLocale}
            aria-label={`Select ${locale} language`}
            onClick={() => handleLocaleChange(locale)}
            className={cn('text-xs uppercase hover:cursor-pointer', {
              'text-ink-500 hover:text-ink-700': locale !== currentLocale,
              'text-ink-700 font-semibold': locale === currentLocale,
            })}
          >
            {locale}
          </button>
        </li>
      ))}
    </ul>
  );
}
