import { ProductInfoTitle } from '@/features/product/types';

const mockCardData = {
  product_id: 'urban-drift-bucket-hat',
  name: 'Urban Drift Bucket Hat',
  description:
    'Navigate the urban jungle with our Urban Drift Bucket Hat. It is not only trendy but also practical, offering shade from the hustle and bustle.',
  category: 'unisex',
  collection: 'urban',
  created_at: new Date(),
  sizing_convention: null,
  available_colors: ['black', 'white'],
  stripe_id: 'prod_SSDdfQYpX3MOdP',
  number_of_reviews: 7,
  rating: 4.3,
  updated_at: new Date(),
  list_price: 15.0,
  product_info: [
    {
      title: 'shipping' as ProductInfoTitle,
      product_id: 'urban-drift-bucket-hat',
      description: [
        'Free standard shipping on all orders - no minimum spend required.',
        'Expedited shipping available at an additional cost.',
        'Packaged in biodegradable materials to reduce environmental impact.',
      ],
    },
    {
      title: 'fabric' as ProductInfoTitle,
      product_id: 'urban-drift-bucket-hat',
      description: [
        'Hand wash with mild detergent.',
        'Air dry flat to maintain shape.',
        'Do not bleach or iron.',
        'Store out of direct sunlight to prevent fading.',
      ],
    },
    {
      title: 'features' as ProductInfoTitle,
      product_id: 'urban-drift-bucket-hat',
      description: [
        'Made from durable,lightweight fabric.',
        'Wide brim offers excellent sun protection.',
        'Moisture-wicking band inside for enhanced comfort.',
        'Easy to fold and pack,ideal for travel.',
        'Stylish design complements both urban and outdoor attire.',
      ],
    },
  ],
  inventory: [
    {
      sku: 'udbh-black',
      size: null,
      sold: 65,
      color: 'black',
      stock: 435,
      discount: null,
      list_price: 15,
      product_id: 'urban-drift-bucket-hat',
      sale_price: 12,
      discount_percentage: 20,
      list_price_stripe_id: 'price_1RXJCfBSdJqpejTdvj2yRgvX',
      sale_price_stripe_id: null,
    },
    {
      sku: 'udbh-white',
      size: null,
      sold: 65,
      color: 'white',
      stock: 435,
      discount: null,
      list_price: 15,
      product_id: 'urban-drift-bucket-hat',
      sale_price: null,
      discount_percentage: null,
      list_price_stripe_id: 'price_1RXJCfBSdJqpejTdvj2yRgvX',
      sale_price_stripe_id: null,
    },
  ],
  images: [
    {
      color: 'black',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-1.jpg',
      product_id: 'urban-drift-bucket-hat',
    },
    {
      color: 'black',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-2.jpg',
      product_id: 'urban-drift-bucket-hat',
    },
    {
      color: 'black',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-3.jpg',
      product_id: 'urban-drift-bucket-hat',
    },
    {
      color: 'black',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-4.jpg',
      product_id: 'urban-drift-bucket-hat',
    },
    {
      color: 'white',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-5.jpg',
      product_id: 'urban-drift-bucket-hat',
    },
    {
      color: 'white',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-6.jpg',
      product_id: 'urban-drift-bucket-hat',
    },
    {
      color: 'white',
      image_url:
        'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-7.jpg',
      product_id: 'urban-drift-bucket-hat',
    },
  ],
};

export default mockCardData;
