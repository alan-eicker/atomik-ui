import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, ListItem } from './List';

const meta: Meta<typeof List> = {
  title: 'DataDisplay/List',
  component: List,
  tags: ['autodocs'],
  subcomponents: { ListItem } as any,
  argTypes: {
    as: { control: 'radio', options: ['ul', 'ol'] },
    styleType: { control: 'select', options: ['ordered', 'unordered', 'none'] },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Unordered: Story = {
  args: {
    as: 'ul',
    styleType: 'unordered',
    children: (
        <>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
        </>
    ),
  },
};

export const Ordered: Story = {
  args: {
    as: 'ol',
    styleType: 'ordered',
    children: (
        <>
            <ListItem>First</ListItem>
            <ListItem>Second</ListItem>
            <ListItem>Third</ListItem>
        </>
    ),
  },
};
