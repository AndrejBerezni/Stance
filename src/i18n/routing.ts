import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported (add your own)
  locales: ['en', 'pt'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Translate pathnames (add your own)
  /*
  Example:
     '/accounts': {
       en: '/accounts',
       pt: '/contas',
     },
  */
  pathnames: {
    '/': '/',
  },
});
