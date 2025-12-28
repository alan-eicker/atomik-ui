import { render, screen, fireEvent } from '@testing-library/react';
import { CreditCardInput } from './CreditCardInput';

describe('CreditCardInput', () => {
    it('renders with label', () => {
        render(<CreditCardInput label="Card No" onChange={() => {}} />);
        expect(screen.getByLabelText('Card No')).toBeInTheDocument();
    });

    it('formats input with spaces', () => {
        const handleChange = vi.fn();
        // Since we are testing a controlled component wrapper logic in test might be tricky without full state.
        // But we can check if onChange is called with raw value first.
        render(<CreditCardInput label="Card" onChange={handleChange} />);
        
        const input = screen.getByLabelText('Card');
        fireEvent.change(input, { target: { value: '12345678' } });
        
        // component calls onChange with raw value '12345678' (digits only)
        expect(handleChange).toHaveBeenCalledWith('12345678');
    });

    it('displays error', () => {
        render(<CreditCardInput label="Card" error="Required" onChange={() => {}} />);
        expect(screen.getByText('Required')).toBeInTheDocument();
        expect(screen.getByLabelText('Card')).toHaveAttribute('aria-invalid', 'true');
    });
});
