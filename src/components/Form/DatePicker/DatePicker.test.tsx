import { render, screen, fireEvent } from '@testing-library/react';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
    it('renders with label', () => {
        render(<DatePicker label="Select Date" />);
        expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
    });

    it('handles change events', () => {
        const handleChange = vi.fn();
        render(<DatePicker label="Date" onChange={handleChange} />);
        
        const input = screen.getByLabelText('Date');
        fireEvent.change(input, { target: { value: '2023-01-01' } });
        
        expect(handleChange).toHaveBeenCalled();
        expect(input).toHaveValue('2023-01-01');
    });

    it('displays error message', () => {
        render(<DatePicker label="Date" error="Required field" />);
        expect(screen.getByText('Required field')).toBeInTheDocument();
    });
});
