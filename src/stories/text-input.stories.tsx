import { ComponentProps, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Mail } from 'lucide-react';

import TextInput from '@/components/ui/text-input';

type StoryProps = ComponentProps<typeof TextInput>;

const meta: Meta<StoryProps> = {
  component: TextInput,
  title: 'Components/TextInput',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'tel', 'url', 'search'],
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
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Standard: Story = {
  args: {
    type: 'text',
    disabled: false,
  },
  render: (args) => {
    const Demo = () => {
      const [value, setValue] = useState<string>('');

      return (
        <TextInput
          id="test"
          type={args.type}
          name="test"
          value={value}
          onValueChange={setValue}
          clearInput={() => setValue('')}
          label="Username"
          placeholder="Enter username"
          disabled={args.disabled}
          icon={Mail}
        />
      );
    };
    return <Demo />;
  },
};
