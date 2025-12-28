import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
    it('renders with label', () => {
        render(<Switch label="Toggle" />);
        expect(screen.getByLabelText('Toggle')).toBeInTheDocument();
    });

    it('handles change events', () => {
        const handleChange = vi.fn();
        render(<Switch label="Toggle" onChange={handleChange} />);
        
        const input = screen.getByLabelText('Toggle');
        fireEvent.click(input);
        
        expect(handleChange).toHaveBeenCalled();
        expect(input).toBeChecked();
    });

    it('renders as switch role', () => {
        render(<Switch label="Toggle" />);
        expect(screen.getByRole('switch')).toBeInTheDocument();
    });
});
