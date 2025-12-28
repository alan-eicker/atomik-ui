import type { Meta, StoryObj } from '@storybook/react';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { useState } from 'react';

const meta: Meta<typeof PaymentMethodSelector> = {
  title: 'Payment/PaymentMethodSelector',
  component: PaymentMethodSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PaymentMethodSelector>;

const options = [
    { id: 'card', label: 'Credit Card', icon: '💳' },
    { id: 'paypal', label: 'PayPal', icon: '🅿️' },
    { id: 'apple', label: 'Apple Pay', icon: '🍎' },
];

const InteractiveSelector = () => {
    const [selected, setSelected] = useState('card');
    return <PaymentMethodSelector options={options} selectedValue={selected} onChange={setSelected} />;
};

export const Default: Story = {
  render: () => <InteractiveSelector />,
};
