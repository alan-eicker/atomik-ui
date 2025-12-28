import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import React from 'react';

const meta: Meta = {
  title: 'Informational/Toast',
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;

const ToastDemo = () => {
    const { addToast } = useToast();

    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => addToast({ type: 'success', title: 'Success', message: 'Action completed!' })}>
                Show Success
            </button>
            <button onClick={() => addToast({ type: 'error', title: 'Error', message: 'Something went wrong.' })}>
                Show Error
            </button>
            <button onClick={() => addToast({ type: 'info', message: 'Just a quick update.' })}>
                Show Info
            </button>
        </div>
    );
};

export const Demo: StoryObj = {
  render: () => <ToastDemo />,
};
