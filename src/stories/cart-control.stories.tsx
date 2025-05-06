import { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import CartControl from '@/features/cart/components/cart-control';

type StoryProps = ComponentProps<typeof CartControl>;

const meta: Meta<StoryProps> = {
  component: CartControl,
  title: 'Components/CartControl',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    max: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultCartControl: Story = {
  args: {
    max: 20,
    amount: 1,
  },
  render: (args) => {
    const Demo = () => {
      const [amount, setAmount] = useState(args.amount ?? 1);
      const max = args.max ?? 5;

      const handleIncrement = () => {
        if (amount < max) {
          setAmount(amount + 1);
        }
      };

      const handleDecrement = () => {
        if (amount > 1) {
          setAmount(amount - 1);
        }
      };

      return (
        <CartControl
          {...args}
          amount={amount}
          max={max}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      );
    };

    return <Demo />;
  },
};
