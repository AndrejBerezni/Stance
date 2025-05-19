import { render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { assert, describe, it } from 'vitest';

import ColorSelectButton from '@/features/product/components/product-details-section/product-attributes/color-select-button';

import messages from '../../messages/en.json';

describe('Color select button', () => {
  render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <ColorSelectButton
        color={{ name: 'beige', inStock: false }}
        handleSelect={() => {}}
        selected={false}
      />
      <ColorSelectButton
        color={{ name: 'red', inStock: true }}
        handleSelect={() => {}}
        selected={true}
      />
    </NextIntlClientProvider>
  );

  it('display diagonal line when out of stock', () => {
    const button = screen.getByTestId('beige-select');
    const diagonalLine = within(button).queryByTestId('out-of-stock');
    assert.exists(diagonalLine);
  });

  it('no diagonal line when in stock', () => {
    const button = screen.getByTestId('red-select');
    const diagonalLine = within(button).queryByTestId('out-of-stock');
    assert.notExists(diagonalLine);
  });

  it('check icon when selected', () => {
    const button = screen.getByTestId('red-select');
    const checkIcon = within(button).getByTestId('check-icon');

    assert.exists(checkIcon);
  });
});
