import { render, screen } from '@testing-library/react';
import { List, ListItem } from './List';

describe('List', () => {
    it('renders unordered list by default', () => {
        render(
            <List>
                <ListItem>Item</ListItem>
            </List>
        );
        const list = screen.getByText('Item').parentElement;
        expect(list?.tagName).toBe('UL');
    });

    it('renders ordered list when configured', () => {
        render(
            <List as="ol" styleType="ordered">
                <ListItem>Item</ListItem>
            </List>
        );
        const list = screen.getByText('Item').parentElement;
        expect(list?.tagName).toBe('OL');
    });
});
