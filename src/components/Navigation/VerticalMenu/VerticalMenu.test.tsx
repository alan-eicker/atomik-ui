import { render, screen } from '@testing-library/react';
import { VerticalMenu, MenuItem } from './VerticalMenu';

describe('VerticalMenu', () => {
    it('renders menu items', () => {
        render(
            <VerticalMenu>
                <MenuItem href="#">Dash</MenuItem>
                <MenuItem href="#">Settings</MenuItem>
            </VerticalMenu>
        );
        expect(screen.getByText('Dash')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    it('applies active styles/attributes', () => {
        render(
            <VerticalMenu>
                <MenuItem href="#" active>Active Item</MenuItem>
            </VerticalMenu>
        );
        const link = screen.getByRole('menuitem', { name: 'Active Item' });
        expect(link).toHaveAttribute('aria-current', 'page');
    });

    it('handles disabled items', () => {
        render(
            <VerticalMenu>
                <MenuItem href="#" disabled>Disabled Item</MenuItem>
            </VerticalMenu>
        );
        const link = screen.getByRole('menuitem', { name: 'Disabled Item' });
        expect(link).toHaveAttribute('aria-disabled', 'true');
    });
});
