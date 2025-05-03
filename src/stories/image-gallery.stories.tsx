import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import ImageGallery from '@/features/product/components/image-gallery';

type StoryProps = ComponentProps<typeof ImageGallery>;

const meta: Meta<StoryProps> = {
  component: ImageGallery,
  title: 'Components/ImageGallery',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<StoryProps>;

export const OneImage: Story = {
  args: {
    images: [
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg',
      },
    ],
  },
  render: (args) => (
    <div className="w-[768px] border-2 p-12 flex justify-center">
      <ImageGallery {...args} />
    </div>
  ),
};
export const TwoImages: Story = {
  args: {
    images: [
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg',
      },
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-2.jpg',
      },
    ],
  },
  render: (args) => (
    <div className="w-[768px] border-2 p-12 flex justify-center">
      <ImageGallery {...args} />
    </div>
  ),
};
export const ThreeImages: Story = {
  args: {
    images: [
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg',
      },
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-2.jpg',
      },
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-3.jpg',
      },
    ],
  },
  render: (args) => (
    <div className="w-[768px] border-2 p-12 flex justify-center">
      <ImageGallery {...args} />
    </div>
  ),
};
export const FourImages: Story = {
  args: {
    images: [
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-1.jpg',
      },
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-2.jpg',
      },
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-3.jpg',
      },
      {
        product_id: 'voyager-hoodie',
        color: 'green',
        image_url:
          'https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/voyager-hoodie/voyager-hoodie-4.jpg',
      },
    ],
  },
  render: (args) => (
    <div className="w-[768px] border-2 p-12 flex justify-center">
      <ImageGallery {...args} />
    </div>
  ),
};
