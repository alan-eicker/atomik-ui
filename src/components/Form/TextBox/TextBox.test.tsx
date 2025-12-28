import { render, screen } from '@testing-library/react';
import { TextBox } from './TextBox';

describe('TextBox', () => {
    it('renders with label', () => {
        render(<TextBox label="Username" />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('displays error message', () => {
        render(<TextBox label="Username" error="Invalid username" />);
        expect(screen.getByText('Invalid username')).toBeInTheDocument();
        expect(screen.getByLabelText('Username')).toHaveAttribute('aria-invalid', 'true');
    });

    it('passes standard input props', () => {
        render(<TextBox label="Password" type="password" placeholder="Enter password" />);
        const input = screen.getByLabelText('Password');
        expect(input).toHaveAttribute('type', 'password');
        expect(input).toHaveAttribute('placeholder', 'Enter password');
    });
});
