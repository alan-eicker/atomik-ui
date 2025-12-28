import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    it('renders with label', () => {
        render(<Checkbox label="Accept Terms" />);
        expect(screen.getByLabelText('Accept Terms')).toBeInTheDocument();
    });

    it('handles change events', () => {
        const handleChange = vi.fn();
        render(<Checkbox label="Check me" onChange={handleChange} />);
        
        const checkbox = screen.getByLabelText('Check me');
        fireEvent.click(checkbox);
        
        expect(handleChange).toHaveBeenCalled();
        expect(checkbox).toBeChecked();
    });

    it('can be disabled', () => {
        render(<Checkbox label="Disabled" disabled />);
        const checkbox = screen.getByLabelText('Disabled');
        expect(checkbox).toBeDisabled();
    });
});
