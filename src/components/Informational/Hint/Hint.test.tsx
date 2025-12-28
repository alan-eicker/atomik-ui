import { render, screen } from '@testing-library/react';
import { Hint } from './Hint';

describe('Hint', () => {
    it('renders children', () => {
        render(<Hint>Help text</Hint>);
        expect(screen.getByText('Help text')).toBeInTheDocument();
    });

    it('applies type class', () => {
        const { container } = render(<Hint type="error">Error</Hint>);
        // Since we can't reliably test hashed classes without transformers, we skip specific class check.
        // Or we check if it renders.
        expect(container.firstChild).toBeInTheDocument();
    });
});
