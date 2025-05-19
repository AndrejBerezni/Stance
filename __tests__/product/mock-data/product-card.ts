const mockCardData = {
  product: {
    product_id: 'urban-drift-bucket-hat',
    name: 'Urban Drift Bucket Hat',
    description:
      "Navigate the urban jungle with our Urban Drift Bucket Hat. It's not only trendy but also practical, offering shade from the hustle and bustle.",
    category: 'unisex',
    collection: 'urban',
    created_at: '2024-04-04',
    sizing_convention: null,
    available_colors: ['black', 'white'],
  },
  images: {
    black:
      'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-1.jpg',
    white:
      'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/urban-drift-bucket-hat/urban-drift-bucket-hat-5.jpg',
  },
  prices: {
    black: { list_price: 15, sale_price: 10 },
    white: { list_price: 15, sale_price: null },
  },
};

export default mockCardData;
