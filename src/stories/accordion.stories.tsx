import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Accordion from '@/components/ui/accordion';

type StoryProps = ComponentProps<typeof Accordion>;

const meta: Meta<StoryProps> = {
  component: Accordion,
  title: 'Components/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<StoryProps>;

export const ProductInfoAccordion: Story = {
  args: {
    items: [
      {
        id: 'a',
        title: 'Features',
        content: [
          'Made from 100% organic wool, offering superior warmth and breathability.',
          'Features intricate cable knit patterns for a classic aesthetic.',
          'Pre-shrunk to ensure a consistent fit over time.',
          'Naturally odor-resistant, ideal for repeated use between washes.',
          'Ribbed cuffs and hem to retain shape and warmth.',
        ],
      },
      {
        id: 'b',
        title: 'Fabric & Care',
        content: [
          'Hand wash in lukewarm water with a wool-safe detergent.',
          "Lay flat to dry to maintain the garment's shape.",
          'Avoid hanging to prevent stretching.',
          'Use a wool conditioner occasionally to restore natural oils.',
        ],
      },
      {
        id: 'c',
        title: 'Shipping',
        content: [
          'Free standard shipping on all orders - no minimum spend required.',
          'Expedited shipping available at an additional cost.',
          'Packaged in biodegradable materials to reduce environmental impact.',
        ],
      },
    ],
  },
  render: (args) => <Accordion {...args} />,
};
