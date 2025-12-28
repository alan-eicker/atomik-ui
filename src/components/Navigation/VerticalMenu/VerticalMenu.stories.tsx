import type { Meta, StoryObj } from '@storybook/react-vite';
import { VerticalMenu, MenuItem } from './VerticalMenu';

const meta: Meta<typeof VerticalMenu> = {
  title: 'Navigation/VerticalMenu',
  component: VerticalMenu,
  tags: ['autodocs'],
  subcomponents: { MenuItem } as Record<string, unknown>,
};

export default meta;
type Story = StoryObj<typeof VerticalMenu>;

export const Default: Story = {
  render: (args) => (
    <VerticalMenu {...args}>
      <MenuItem href="#" active>Dashboard</MenuItem>
      <MenuItem href="#">Accounts</MenuItem>
      <MenuItem href="#">Transfers</MenuItem>
      <MenuItem href="#">Settings</MenuItem>
    </VerticalMenu>
  ),
};

export const WithDisabled: Story = {
  render: (args) => (
    <VerticalMenu {...args}>
      <MenuItem href="#">Public Profile</MenuItem>
      <MenuItem href="#" disabled>Account Settings (Admin)</MenuItem>
      <MenuItem href="#">Logout</MenuItem>
    </VerticalMenu>
  ),
};
