import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Form/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    children: (
        <>
            <button>Left</button>
            <button>Middle</button>
            <button>Right</button>
        </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children: (
        <>
            <button>Top</button>
            <button>Middle</button>
            <button>Bottom</button>
        </>
    ),
  },
};
