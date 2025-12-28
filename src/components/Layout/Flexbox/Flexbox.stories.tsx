import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flexbox } from './Flexbox';

const meta: Meta<typeof Flexbox> = {
  title: 'Layout/Flexbox',
  component: Flexbox,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row', 'column', 'rowReverse', 'columnReverse'] },
    wrap: { control: 'select', options: ['nowrap', 'wrap', 'wrapReverse'] },
    justify: { control: 'select', options: ['start', 'end', 'center', 'between', 'around', 'evenly'] },
    align: { control: 'select', options: ['start', 'end', 'center', 'baseline', 'stretch'] },
    gap: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Flexbox>;

const Box = ({ color }: { color: string }) => (
    <div style={{ width: 50, height: 50, backgroundColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Box
    </div>
);

export const Row: Story = {
  args: {
    gap: '10px',
    children: (
        <>
            <Box color="red" />
            <Box color="blue" />
            <Box color="green" />
        </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: '10px',
    align: 'center',
    children: (
        <>
            <Box color="red" />
            <Box color="blue" />
            <Box color="green" />
        </>
    ),
  },
};

export const Center: Story = {
  args: {
    style: { height: '200px', backgroundColor: '#f0f0f0' },
    justify: 'center',
    align: 'center',
    children: <Box color="purple" />,
  },
};
