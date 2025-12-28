import type { Meta, StoryObj } from '@storybook/react-vite';
import { Statistic } from './Statistic';

const meta: Meta<typeof Statistic> = {
  title: 'Informational/Statistic',
  component: Statistic,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Statistic>;

export const Default: Story = {
  args: {
    title: 'Active Users',
    value: '1,234',
  },
};

export const WithPrefix: Story = {
  args: {
    title: 'Revenue',
    value: '50,000',
    prefix: '$',
  },
};

export const WithSuffix: Story = {
  args: {
    title: 'Growth',
    value: 15.5,
    suffix: '%',
  },
};
