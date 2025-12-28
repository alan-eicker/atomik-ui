import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Form/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    accept: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: 'Upload Document',
  },
};

export const CustomButtonText: Story = {
  args: {
    label: 'Profile Picture',
    buttonText: 'Browse...',
    accept: 'image/*',
  },
};

export const WithError: Story = {
  args: {
    label: 'Report',
    error: 'File is required',
  },
};
