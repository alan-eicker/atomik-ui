import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Informational/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['success', 'info', 'warning', 'error'] },
    dismissible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    type: 'info',
    children: 'Here is some relevant information.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    children: 'Operation completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    children: 'Please check your inputs.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    children: 'Something went wrong.',
    dismissible: true,
  },
};
