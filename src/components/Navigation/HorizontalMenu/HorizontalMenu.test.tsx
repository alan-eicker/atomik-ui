import { render, screen } from '@testing-library/react';
import { HorizontalMenu, MenuItem } from './HorizontalMenu';

describe('HorizontalMenu', () => {
    it('renders menu items', () => {
        render(
            <HorizontalMenu>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">About</MenuItem>
            </HorizontalMenu>
        );
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
    });

    it('applies active class', () => {
        render(
            <HorizontalMenu>
                <MenuItem href="#" active>Active</MenuItem>
            </HorizontalMenu>
        );
        const link = screen.getByRole('menuitem', { name: 'Active' });
        expect(link).toHaveAttribute('aria-current', 'page');
    });

    it('handles disabled items', () => {
        render(
            <HorizontalMenu>
                <MenuItem href="#" disabled>Disabled</MenuItem>
            </HorizontalMenu>
        );
        const link = screen.getByRole('menuitem', { name: 'Disabled' });
        expect(link).toHaveAttribute('aria-disabled', 'true');
    });
});
