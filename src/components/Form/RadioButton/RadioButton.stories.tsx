import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Form/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'options',
    value: '1',
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <RadioButton name="group" value="A" label="Option A" />
        <RadioButton name="group" value="B" label="Option B" />
        <RadioButton name="group" value="C" label="Option C" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};
