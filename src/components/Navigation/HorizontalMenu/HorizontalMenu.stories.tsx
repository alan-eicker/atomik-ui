import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalMenu, MenuItem } from './HorizontalMenu';

const meta: Meta<typeof HorizontalMenu> = {
  title: 'Navigation/HorizontalMenu',
  component: HorizontalMenu,
  tags: ['autodocs'],
  subcomponents: { MenuItem } as any, // Cast to any to avoid type issues with subcomponents in some older SB versions or generic types
};

export default meta;
type Story = StoryObj<typeof HorizontalMenu>;

export const Default: Story = {
  render: (args) => (
    <HorizontalMenu {...args}>
      <MenuItem href="#" active>Home</MenuItem>
      <MenuItem href="#">About</MenuItem>
      <MenuItem href="#">Services</MenuItem>
      <MenuItem href="#">Contact</MenuItem>
    </HorizontalMenu>
  ),
};

export const WithDisabledItem: Story = {
  render: (args) => (
    <HorizontalMenu {...args}>
      <MenuItem href="#">Dashboard</MenuItem>
      <MenuItem href="#" disabled>Settings (Locked)</MenuItem>
      <MenuItem href="#">Profile</MenuItem>
    </HorizontalMenu>
  ),
};
