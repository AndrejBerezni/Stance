import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Star } from 'lucide-react';

import Button from '@/components/ui/button';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'primary',
        'secondary',
        'tertiary',
        'link',
        'link-gray',
        'destructive',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
    iconOnly: {
      options: [true, false],
      control: {
        type: 'select',
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: 'Testing',
    variant: 'primary',
    size: 'md',
    iconOnly: false,
    disabled: false,
  },
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const PrimaryTextAndIcon: Story = {
  args: {
    children: (
      <>
        <Star size={16} />
        Testing
      </>
    ),
    variant: 'primary',
    size: 'md',
    iconOnly: false,
    disabled: false,
  },
  render: ({ children, ...args }) => (
    <Button disabled {...args}>
      {children}
    </Button>
  ),
};

export const PrimaryIconOnly: Story = {
  args: {
    children: <Star />,
    variant: 'primary',
    size: 'md',
    iconOnly: true,
    disabled: false,
  },
  render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};
