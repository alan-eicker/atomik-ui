import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Informational/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    max: { control: 'number' },
    value: { control: 'number' },
    readOnly: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

const InteractiveRating = () => {
    const [rating, setRating] = useState(0);
    return <Rating value={rating} onChange={setRating} />;
}

export const Interactive: Story = {
  render: () => <InteractiveRating />,
};
