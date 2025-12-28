import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Content/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    initials: 'JD',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'User Avatar',
  },
};

export const Small: Story = {
    args: {
        initials: 'SM',
        size: 'small',
    }
}

export const Large: Story = {
    args: {
        initials: 'LG',
        size: 'large',
    }
}
