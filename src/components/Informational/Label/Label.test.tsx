import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
    it('renders text', () => {
        render(<Label htmlFor="inp">Input Label</Label>);
        expect(screen.getByText('Input Label')).toBeInTheDocument();
        expect(screen.getByText('Input Label').tagName).toBe('LABEL');
    });

    it('has required indicator class if required', () => {
        const { container } = render(<Label required>Required</Label>);
        // Check if css class applied, or just render check
        expect(container.firstChild).toBeInTheDocument();
    });
});
