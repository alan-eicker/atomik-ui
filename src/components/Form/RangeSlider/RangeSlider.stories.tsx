import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './RangeSlider';
import { useState } from 'react';

const meta: Meta<typeof RangeSlider> = {
  title: 'Form/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
  },
};

export const WithCustomSteps: Story = {
  args: {
    label: 'Steps of 10',
    min: 0,
    max: 100,
    step: 10,
  },
};

const ControlledSlider = () => {
    const [val, setVal] = useState(50);
    return <RangeSlider label="Controlled" value={val} onChange={(e) => setVal(Number(e.target.value))} />;
}

export const Controlled: Story = {
  render: () => <ControlledSlider />,
};

export const HideValue: Story = {
  args: {
    label: 'Range (Value Hidden)',
    showValue: false,
  },
};
