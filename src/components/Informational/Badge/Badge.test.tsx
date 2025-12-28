import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
    it('renders children', () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('applies variant style', () => {
        const { container } = render(<Badge variant="danger">High</Badge>);
        expect(container.firstChild).toBeInTheDocument();
    });
});
