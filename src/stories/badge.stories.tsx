import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Badge from '@/components/ui/badge';

type StoryProps = ComponentProps<typeof Badge>;

const meta: Meta<StoryProps> = {
  component: Badge,
  title: 'Components/Badge',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['neutral', 'error', 'warning', 'success', 'brand'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type Story = StoryObj<StoryProps>;

export const BrandSmallBadge: Story = {
  args: {
    text: 'Badge',
    variant: 'brand',
    size: 'sm',
  },
  render: (args) => <Badge {...args} />,
};
export const WarningMediumBadge: Story = {
  args: {
    text: 'Badge',
    variant: 'warning',
    size: 'md',
  },
  render: (args) => <Badge {...args} />,
};
export const SuccessLargeBadge: Story = {
  args: {
    text: 'Badge',
    variant: 'success',
    size: 'lg',
  },
  render: (args) => <Badge {...args} />,
};
