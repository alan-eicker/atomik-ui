import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreditCardInput } from './CreditCardInput';
import { useState } from 'react';

const meta: Meta<typeof CreditCardInput> = {
  title: 'Payment/CreditCardInput',
  component: CreditCardInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreditCardInput>;

const InteractiveInput = (args: Record<string, unknown>) => {
    const [val, setVal] = useState('');
    return <CreditCardInput {...args} value={val} onChange={setVal} />;
};

export const Default: Story = {
  render: () => <InteractiveInput label="Card Number" />,
};

export const WithError: Story = {
  render: () => <InteractiveInput label="Card Number" error="Invalid card number" />,
};
