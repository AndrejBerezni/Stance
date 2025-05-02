'use client';

import { useTranslations } from 'next-intl';

import ImageGallery from '@/features/product/components/image-gallery';

export default function Home() {
  const translate = useTranslations('homepage');
  return (
    <section className="section-wrapper">
      <h1 className="capitalize font-bold text-xl">{translate('welcome')} </h1>
      <ImageGallery
        images={[
          {
            product_id: 'voyager-hoodie',
            color: 'green',
            image_url:
              'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg',
          },
          {
            product_id: 'voyager-hoodie',
            color: 'green',
            image_url:
              'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-2.jpg',
          },
          {
            product_id: 'voyager-hoodie',
            color: 'green',
            image_url:
              'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-3.jpg',
          },
          {
            product_id: 'voyager-hoodie',
            color: 'green',
            image_url:
              'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-4.jpg',
          },
        ]}
      />
    </section>
  );
}
