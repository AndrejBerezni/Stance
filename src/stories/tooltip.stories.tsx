import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Tooltip from '@/components/ui/tooltip';

type StoryProps = ComponentProps<typeof Tooltip>;

const meta: Meta<StoryProps> = {
  component: Tooltip,
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'select',
      },
    },
    delay: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Bottom: Story = {
  args: {
    children: (
      <div className="w-fit shadow-md bg-blue-200 p-4 flex rounded-lg items-center justify-center">
        Hover me!
      </div>
    ),
    content: 'Testing Tooltip',
    position: 'bottom',
    delay: 300,
  },
  render: ({ children, ...args }) => <Tooltip {...args}>{children}</Tooltip>,
};
