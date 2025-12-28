import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
    it('renders when open', () => {
        render(
            <Modal isOpen={true} onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>
        );
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render when closed', () => {
        render(
            <Modal isOpen={false} onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>
        );
        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('calls onClose when close button clicked', () => {
        const onClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Content</div>
            </Modal>
        );
        fireEvent.click(screen.getByLabelText('Close'));
        expect(onClose).toHaveBeenCalled();
    });

    it('calls onClose when overlay clicked', () => {
        const onClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Content</div>
            </Modal>
        );
        // The overlay is the parent div. checking role dialog or class might differ
        // We assigned role dialog to overlay
        fireEvent.click(screen.getByRole('dialog'));
        expect(onClose).toHaveBeenCalled();
    });

    it('does not call onClose when modal content clicked', () => {
        const onClose = vi.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Content</div>
            </Modal>
        );
        fireEvent.click(screen.getByText('Content'));
        expect(onClose).not.toHaveBeenCalled();
    });
});
