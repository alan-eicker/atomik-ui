import { render, screen, fireEvent } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
    it('renders children', () => {
        render(<Tag>React</Tag>);
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('handles removal', () => {
        const handleClose = vi.fn();
        render(<Tag onClose={handleClose}>Removable</Tag>);
        
        fireEvent.click(screen.getByLabelText('Remove tag'));
        expect(handleClose).toHaveBeenCalled();
    });

    it('handles click', () => {
        const handleClick = vi.fn();
        render(<Tag onClick={handleClick}>Clickable</Tag>);
        
        fireEvent.click(screen.getByText('Clickable'));
        expect(handleClick).toHaveBeenCalled();
    });
});
