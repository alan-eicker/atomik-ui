import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Informational/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'React',
  },
};

export const Removable: Story = {
  args: {
    children: 'Filter: Active',
    onClose: () => alert('Removed'),
  },
};

export const Clickable: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Clicked'),
  },
};
