import { render, screen, fireEvent } from '@testing-library/react';
import { RangeSlider } from './RangeSlider';

describe('RangeSlider', () => {
    it('renders with label and initial value', () => {
        render(<RangeSlider label="Volume" min={0} max={100} defaultValue={50} />);
        expect(screen.getByLabelText('Volume')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
        expect(screen.getByLabelText('Volume')).toHaveValue('50');
    });

    it('handles interactions', () => {
        const handleChange = vi.fn();
        render(<RangeSlider label="Volume" min={0} max={100} onChange={handleChange} />);
        
        const slider = screen.getByLabelText('Volume');
        fireEvent.change(slider, { target: { value: '75' } });
        
        expect(handleChange).toHaveBeenCalled();
        expect(screen.getByText('75')).toBeInTheDocument();
    });

    it('hides value when showValue is false', () => {
        render(<RangeSlider label="Volume" showValue={false} />);
        // initial is 0 by default min
        expect(screen.queryByText('0')).not.toBeInTheDocument(); // Careful if 0 is used elsewhere..
        // Better check span class
        // Since we didn't export styles to tests efficiently (no css modules in jsdom without setup), relying on text content is best default.
        // Assuming label text "Volume" is present, but "0" value is not.
    });
});
