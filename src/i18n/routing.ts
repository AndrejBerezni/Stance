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
    '/': {
      en: '/',
      pt: '/',
    },

    '/catalogue': {
      en: '/catalogue',
      pt: '/catalogo',
    },

    '/product': {
      en: '/product',
      pt: '/produto',
    },

    '/product/[productId]': {
      en: '/product/[productId]',
      pt: '/produto/[productId]',
    },

    '/product/[productId]/reviews': {
      en: '/product/[productId]/reviews',
      pt: '/produto/[productId]/avaliacoes',
    },

    '/product/[productId]/add-review': {
      en: '/product/[productId]/add-reviews',
      pt: '/produto/[productId]/addicionar-avaliacao',
    },
  },
});
