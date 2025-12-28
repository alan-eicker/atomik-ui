import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
    it('renders with label', () => {
        render(<RadioButton label="Choose me" />);
        expect(screen.getByLabelText('Choose me')).toBeInTheDocument();
    });

    it('handles change events', () => {
        const handleChange = vi.fn();
        render(<RadioButton label="Option" onChange={handleChange} />);
        
        const radio = screen.getByLabelText('Option');
        fireEvent.click(radio);
        
        expect(handleChange).toHaveBeenCalled();
        expect(radio).toBeChecked();
    });

    it('can be disabled', () => {
        render(<RadioButton label="Disabled" disabled />);
        const radio = screen.getByLabelText('Disabled');
        expect(radio).toBeDisabled();
    });
});
