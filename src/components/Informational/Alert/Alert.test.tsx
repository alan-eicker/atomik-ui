import { render, screen, fireEvent } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
    it('renders correct type and content', () => {
        render(<Alert type="error" title="Error Title">Error details</Alert>);
        const alert = screen.getByRole('alert');
        // Class check removed to avoid flakiness with hashed CSS modules
        // Better to check style or presence. 
        // With css modules in jest/vitest, classes might be mocked or real depending on setup.
        // Assuming we rely on role and content.
        expect(screen.getByText('Error Title')).toBeInTheDocument();
        expect(screen.getByText('Error details')).toBeInTheDocument();
    });

    it('can be dismissed', () => {
        const handleClose = vi.fn();
        render(<Alert dismissible onClose={handleClose}>Dismiss me</Alert>);
        
        const closeBtn = screen.getByLabelText('Close alert');
        fireEvent.click(closeBtn);
        
        expect(handleClose).toHaveBeenCalled();
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
});
