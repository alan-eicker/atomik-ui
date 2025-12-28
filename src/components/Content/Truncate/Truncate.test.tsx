import { render, screen } from '@testing-library/react';
import { Truncate } from './Truncate';

describe('Truncate', () => {
    it('renders children with title attribute', () => {
        const text = 'Long text content';
        render(<Truncate>{text}</Truncate>);
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(text)).toHaveAttribute('title', text);
    });

    it('applies width style', () => {
        const { container } = render(<Truncate width={100}>Content</Truncate>);
        expect(container.firstElementChild).toHaveStyle({ width: '100px' });
    });
});
