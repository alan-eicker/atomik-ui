import { render, screen, fireEvent } from '@testing-library/react';
import { Rating } from './Rating';

describe('Rating', () => {
    it('renders stars based on max prop', () => {
        render(<Rating max={5} />);
        const stars = screen.getAllByRole('radio');
        expect(stars).toHaveLength(5);
    });

    it('renders read-only view correctly', () => {
        render(<Rating max={5} value={3} readOnly />);
        expect(screen.getByRole('img', { name: 'Rating: 3 out of 5' })).toBeInTheDocument();
        expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    });

    it('handles interaction', () => {
        const handleChange = vi.fn();
        render(<Rating onChange={handleChange} />);
        
        const thirdStar = screen.getByLabelText('3 Star');
        fireEvent.click(thirdStar);
        
        expect(handleChange).toHaveBeenCalledWith(3);
    });
});
