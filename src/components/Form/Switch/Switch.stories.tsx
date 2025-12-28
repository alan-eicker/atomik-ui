import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled setting',
    disabled: true,
    checked: true,
  },
};
