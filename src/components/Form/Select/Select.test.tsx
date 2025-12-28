import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

const options = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
];

describe('Select', () => {
    it('renders with label and options', () => {
        render(<Select label="Numbers" options={options} />);
        expect(screen.getByLabelText('Numbers')).toBeInTheDocument();
        expect(screen.getByText('One')).toBeInTheDocument();
        expect(screen.getByText('Two')).toBeInTheDocument();
    });

    it('handles change events', () => {
        const handleChange = vi.fn();
        render(<Select label="Numbers" options={options} onChange={handleChange} />);
        
        fireEvent.change(screen.getByLabelText('Numbers'), { target: { value: '2' } });
        expect(handleChange).toHaveBeenCalled();
        expect(screen.getByLabelText('Numbers')).toHaveValue('2');
    });

    it('displays error message', () => {
        render(<Select label="Numbers" options={options} error="Error msg" />);
        expect(screen.getByText('Error msg')).toBeInTheDocument();
    });
});
