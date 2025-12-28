import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'Informational/Hint',
  component: Hint,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'error', 'warning', 'success'] },
  },
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const Default: Story = {
  args: {
    children: 'This is a helpful hint.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'This field is required.',
  },
};
