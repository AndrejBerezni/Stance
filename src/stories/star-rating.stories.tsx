import { ComponentProps } from 'react';

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
    initial: {
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
    initial: 6.9,
  },
  render: (args) => <StarRating {...args} />,
};

export const Descriptive: Story = {
  args: {
    max: 10,
    initial: 8.2,
    locked: true,
  },
  render: (args) => <StarRating {...args} />,
};
