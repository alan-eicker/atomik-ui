import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Disclosure/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithState = (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Modal Title</h2>
                <p>This is a modal!</p>
            </Modal>
        </div>
    )
}

export const Default: Story = {
  render: (args) => <ModalWithState {...args} />,
};
