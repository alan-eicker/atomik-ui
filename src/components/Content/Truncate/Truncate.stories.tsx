import type { Meta, StoryObj } from '@storybook/react';
import { Truncate } from './Truncate';

const meta: Meta<typeof Truncate> = {
  title: 'Content/Truncate',
  component: Truncate,
  tags: ['autodocs'],
  argTypes: {
    lines: { control: 'number' },
    width: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Truncate>;

export const Default: Story = {
  args: {
    children: 'This is a very long text that should be truncated because it exceeds the container width.',
    width: 200,
  },
};

export const MultiLine: Story = {
  args: {
    children: 'This is a very long text that should be truncated after multiple lines. ' + 
              'It has enough content to span across several lines if the container is narrow enough. ' + 
              'This checks if line-clamp works as expected.',
    lines: 2,
    width: 200,
  },
};
