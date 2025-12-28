import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
    it('renders with correct role and attributes', () => {
        render(<ProgressBar value={50} max={100} />);
        const progress = screen.getByRole('progressbar');
        expect(progress).toBeInTheDocument();
        expect(progress).toHaveAttribute('aria-valuenow', '50');
        expect(progress).toHaveAttribute('aria-valuemax', '100');
    });

    it('displays label when showLabel is true', () => {
        render(<ProgressBar value={75} showLabel />);
        expect(screen.getByText('75%')).toBeInTheDocument();
    });
});
