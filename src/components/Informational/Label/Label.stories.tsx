import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Informational/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Username',
    htmlFor: 'username',
  },
};

export const Required: Story = {
  args: {
    children: 'Email',
    required: true,
    htmlFor: 'email',
  },
};
