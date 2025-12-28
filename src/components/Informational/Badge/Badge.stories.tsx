import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Informational/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] 
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: '99+',
    variant: 'danger',
  },
};
