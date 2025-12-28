import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
    it('renders with correct role', () => {
        render(<Spinner />);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('has default accessible label', () => {
        render(<Spinner />);
        // Text is visually hidden but present for screen readers inside the status role
        expect(screen.getByText('Loading')).toBeInTheDocument();
    });

    it('accepts custom accessible label', () => {
        render(<Spinner aria-label="Processing..." />);
        expect(screen.getByText('Processing...')).toBeInTheDocument();
    });
});
