import { MetadataRoute } from 'next';

import { getProductsForSiteMap } from '@/features/product/data';
import { baseUrl } from '@/lib/utils/url';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProductsForSiteMap();
  const productRoutes: MetadataRoute.Sitemap = [];

  if (products) {
    products.forEach((product) =>
      productRoutes.push({
        url: `${baseUrl}/en/${product.product_id}`,
        lastModified: product.updated_at,
        alternates: {
          languages: {
            pt: `${baseUrl}/pt/${product.product_id}`,
          },
        },
      })
    );
  }

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pt: `${baseUrl}/pt`,
        },
      },
    },
    {
      url: `${baseUrl}/en/products`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pt: `${baseUrl}/pt/produtos`,
        },
      },
    },
    ...productRoutes,
  ];
}
