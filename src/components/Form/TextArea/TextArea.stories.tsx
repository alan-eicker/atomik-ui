import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
  },
};

export const WithError: Story = {
  args: {
    label: 'Feedback',
    value: '',
    error: 'Feedback is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Note',
    disabled: true,
    value: 'Some content that cannot be edited.',
  },
};
