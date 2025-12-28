import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Form/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    min: { control: 'text' },
    max: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    label: 'Select Time',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Meeting Time',
    value: '14:30',
  },
};

export const WithError: Story = {
  args: {
    label: 'Time',
    error: 'Invalid time selected',
  },
};
