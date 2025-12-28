import { render, screen, fireEvent } from '@testing-library/react';
import { PaymentMethodSelector } from './PaymentMethodSelector';

const options = [
    { id: 'card', label: 'Card' },
    { id: 'bank', label: 'Bank' },
];

describe('PaymentMethodSelector', () => {
    it('renders options', () => {
        render(<PaymentMethodSelector options={options} />);
        expect(screen.getByLabelText('Card')).toBeInTheDocument();
        expect(screen.getByLabelText('Bank')).toBeInTheDocument();
    });

    it('handles selection', () => {
        const handleChange = vi.fn();
        render(<PaymentMethodSelector options={options} onChange={handleChange} />);
        
        fireEvent.click(screen.getByLabelText('Bank'));
        expect(handleChange).toHaveBeenCalledWith('bank');
    });

    it('reflects selected value', () => {
        render(<PaymentMethodSelector options={options} selectedValue="card" />);
        expect(screen.getByLabelText('Card')).toBeChecked();
        expect(screen.getByLabelText('Bank')).not.toBeChecked();
    });
});
