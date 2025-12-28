import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    label: 'Choose an option',
    options,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required selection',
    options,
    value: '',
    error: 'Selection is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options,
    disabled: true,
  },
};
