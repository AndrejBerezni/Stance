import { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import StarRating from '@/components/ui/star-rating';

type StoryProps = ComponentProps<typeof StarRating>;

const meta: Meta<StoryProps> = {
  component: StarRating,
  title: 'Components/StarRating',
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
    rating: {
      control: {
        type: 'number',
      },
    },
    locked: {
      options: [true, false],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Input: Story = {
  args: {
    max: 10,
    rating: 6.9,
  },
  render: (args) => {
    const Demo = () => {
      const [rating, setRating] = useState<number>(args.rating as number);
      return (
        <StarRating
          max={args.max}
          rating={rating}
          handleClick={(star: number) => setRating(star)}
        />
      );
    };
    return <Demo />;
  },
};

export const Descriptive: Story = {
  args: {
    max: 10,
    rating: 8,
    locked: true,
  },
  render: (args) => <StarRating {...args} />,
};
