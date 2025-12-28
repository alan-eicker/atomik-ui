import { render, screen } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
    it('renders with label', () => {
        render(<TextArea label="Description" />);
        expect(screen.getByLabelText('Description')).toBeInTheDocument();
    });

    it('displays error message', () => {
        render(<TextArea label="Comments" error="Invalid comment" />);
        expect(screen.getByText('Invalid comment')).toBeInTheDocument();
        expect(screen.getByLabelText('Comments')).toHaveAttribute('aria-invalid', 'true');
    });

    it('passes standard textarea props', () => {
        render(<TextArea label="Bio" rows={5} placeholder="Tell us about yourself" />);
        const textarea = screen.getByLabelText('Bio');
        expect(textarea).toHaveAttribute('rows', '5');
        expect(textarea).toHaveAttribute('placeholder', 'Tell us about yourself');
    });
});
