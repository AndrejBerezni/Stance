import { fireEvent, render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { expect, describe, it, assert } from 'vitest';

import ProductCard from '@/features/product/components/product-card/index';

import messages from '../../messages/en.json';

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

describe('ProductCard', () => {
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <ProductCard cardData={mockCardData} />
    </NextIntlClientProvider>
  );
  it('shows two prices when there is discount', () => {
    const price = screen.getByTestId('price');
    const previousPrice = within(price).queryByTestId('previous-price');
    const currentPrice = within(price).queryByTestId('current-price');

    assert.exists(previousPrice);
    assert.exists(currentPrice);
  });

  it('shows correct image for default color (black)', () => {
    const image = screen.getByRole('img') as HTMLImageElement;
    const src = image.getAttribute('src');
    const urlParam = new URLSearchParams(src!.split('?')[1]).get('url');

    expect(decodeURIComponent(urlParam as string)).toBe(
      mockCardData.images.black
    );
  });

  it('switches to white variant on click', () => {
    const whiteButton = screen.getByTitle('White');
    fireEvent.click(whiteButton);

    const image = screen.getByRole('img') as HTMLImageElement;
    const src = image.getAttribute('src');
    const urlParam = new URLSearchParams(src!.split('?')[1]).get('url');

    expect(decodeURIComponent(urlParam as string)).toBe(
      mockCardData.images.white
    );
  });
  it('shows one prices when there is no discount', () => {
    // in previous test we changed color to white, which does not have discounted price
    const price = screen.getByTestId('price');
    const previousPrice = within(price).queryByTestId('previous-price');
    const currentPrice = within(price).queryByTestId('current-price');

    assert.notExists(previousPrice);
    assert.exists(currentPrice);
  });
});
