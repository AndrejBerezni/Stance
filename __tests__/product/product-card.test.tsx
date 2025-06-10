import { fireEvent, render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { assert, describe, expect, it } from 'vitest';

import ProductCard from '@/features/product/components/product-card/index';

import mockCardData from './mock-data/product-card';
import messages from '../../messages/en.json';

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
      mockCardData.images.find((img) => img.color === 'black')?.image_url
    );
  });

  it('switches to white variant on click', () => {
    const whiteButton = screen.getByTitle('White');
    fireEvent.click(whiteButton);

    const image = screen.getByRole('img') as HTMLImageElement;
    const src = image.getAttribute('src');
    const urlParam = new URLSearchParams(src!.split('?')[1]).get('url');

    expect(decodeURIComponent(urlParam as string)).toBe(
      mockCardData.images.find((img) => img.color === 'white')?.image_url
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
