import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
    it('renders children correctly', () => {
        render(<Card>Test Content</Card>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies custom class name', () => {
        const { container } = render(<Card className="custom-class">Content</Card>);
        expect(container.firstChild).toHaveClass('custom-class');
    });
});
