import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Informational/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: 'Tooltip text',
    children: <button>Hover me</button>,
    position: 'top',
  },
};

export const Right: Story = {
  args: {
    content: 'More info here',
    children: <span>Hover text</span>,
    position: 'right',
  },
};
