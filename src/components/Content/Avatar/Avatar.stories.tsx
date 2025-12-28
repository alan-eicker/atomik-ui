import type { Meta, StoryObj } from '@storybook/react-vite';
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
    src: 'https://miro.medium.com/v2/resize:fit:2400/1*fzxR1Mqh6a_uSgPbxSnX2A.png',
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
