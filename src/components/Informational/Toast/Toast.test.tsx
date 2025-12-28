import { render, screen, fireEvent } from '@testing-library/react';
import { ToastProvider, useToast } from './Toast';

const TestComponent = () => {
    const { addToast } = useToast();
    return (
        <button onClick={() => addToast({ type: 'info', title: 'Info', message: 'Hello World' })}>
            Trigger Toast
        </button>
    );
};

describe('Toast', () => {
    it('shows toast when triggered', async () => {
        render(
            <ToastProvider>
                <TestComponent />
            </ToastProvider>
        );

        fireEvent.click(screen.getByText('Trigger Toast'));
        
        expect(await screen.findByText('Hello World')).toBeInTheDocument();
        expect(screen.getByText('Info')).toBeInTheDocument();
    });

    it('removes toast when close button clicked', async () => {
        render(
            <ToastProvider>
                <TestComponent />
            </ToastProvider>
        );

        fireEvent.click(screen.getByText('Trigger Toast'));
        const toastMessage = await screen.findByText('Hello World');
        expect(toastMessage).toBeInTheDocument();

        const closeBtn = screen.getByLabelText('Close toast');
        fireEvent.click(closeBtn);

        expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
    });
});
