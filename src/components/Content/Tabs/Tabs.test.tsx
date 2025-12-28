import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

describe('Tabs', () => {
    it('renders tabs and switch content', () => {
        render(
            <Tabs defaultActiveTab="tab1">
                <TabList>
                    <Tab id="tab1">Tab 1</Tab>
                    <Tab id="tab2">Tab 2</Tab>
                </TabList>
                <TabPanel id="tab1">Content 1</TabPanel>
                <TabPanel id="tab2">Content 2</TabPanel>
            </Tabs>
        );

        expect(screen.getByText('Content 1')).toBeInTheDocument();
        expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

        fireEvent.click(screen.getByText('Tab 2'));

        expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
        expect(screen.getByText('Content 2')).toBeInTheDocument();
    });
});
