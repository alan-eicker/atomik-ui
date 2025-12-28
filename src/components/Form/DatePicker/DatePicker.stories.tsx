import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    min: { control: 'text' },
    max: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Birth Date',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Appointment',
    value: '2023-12-25',
  },
};

export const WithError: Story = {
  args: {
    label: 'Deadline',
    error: 'Invalid date selected',
  },
};
