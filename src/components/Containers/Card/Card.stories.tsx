import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Containers/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a card',
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
        <div>
            <h3>Card Title</h3>
            <p>Some more content goes here.</p>
        </div>
    ),
  },
};
