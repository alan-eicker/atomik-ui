import { render, screen } from '@testing-library/react';
import { Flexbox } from './Flexbox';

describe('Flexbox', () => {
    it('renders children', () => {
        render(<Flexbox>Content</Flexbox>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('applies gap style', () => {
        const { container } = render(<Flexbox gap="20px">Content</Flexbox>);
        // Check inline style for gap
        expect(container.firstChild).toHaveStyle({ gap: '20px' });
    });

    it('renders as specified component', () => {
        render(<Flexbox as="section">Section Content</Flexbox>);
        const section = screen.getByText('Section Content').closest('section');
        expect(section).toBeInTheDocument();
    });
});
