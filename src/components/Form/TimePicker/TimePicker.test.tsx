import { render, screen, fireEvent } from '@testing-library/react';
import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
    it('renders with label', () => {
        render(<TimePicker label="Select Time" />);
        expect(screen.getByLabelText('Select Time')).toBeInTheDocument();
    });

    it('handles change events', () => {
        const handleChange = vi.fn();
        render(<TimePicker label="Time" onChange={handleChange} />);
        
        const input = screen.getByLabelText('Time');
        fireEvent.change(input, { target: { value: '13:00' } });
        
        expect(handleChange).toHaveBeenCalled();
        expect(input).toHaveValue('13:00');
    });

    it('displays error message', () => {
        render(<TimePicker label="Time" error="Invalid time" />);
        expect(screen.getByText('Invalid time')).toBeInTheDocument();
    });
});
