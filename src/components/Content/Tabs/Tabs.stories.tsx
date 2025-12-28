import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Content/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  subcomponents: { TabList, Tab, TabPanel } as any,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultActiveTab: 'tab1',
    children: (
        <>
            <TabList>
                <Tab id="tab1">Tab 1</Tab>
                <Tab id="tab2">Tab 2</Tab>
                <Tab id="tab3">Tab 3</Tab>
            </TabList>
            <TabPanel id="tab1">Content for Tab 1</TabPanel>
            <TabPanel id="tab2">Content for Tab 2</TabPanel>
            <TabPanel id="tab3">Content for Tab 3</TabPanel>
        </>
    ),
  },
};
