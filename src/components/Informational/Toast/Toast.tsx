import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import styles from './Toast.module.css';
import { createPortal } from 'react-dom';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: ReactNode;
  duration?: number;
}

interface ToastContextType {
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

// Individual Toast Component
export const Toast = ({ id, type, title, message, onClose }: ToastMessage & { onClose: (id: string) => void }) => {
    return (
        <div className={`${styles.toast} ${styles[type]}`} role="alert">
            <div className={styles.content}>
                {title && <span className={styles.title}>{title}</span>}
                <div className={styles.message}>{message}</div>
            </div>
            <button className={styles.closeButton} onClick={() => onClose(id)} aria-label="Close toast">
                &times;
            </button>
        </div>
    );
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    const addToast = useCallback(({ type, title, message, duration = 5000 }: Omit<ToastMessage, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts(prev => [...prev, { id, type, title, message, duration }]);

        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
    }, [removeToast]);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            {createPortal(
                <div className={styles.toastContainer}>
                    {toasts.map(toast => (
                        <Toast key={toast.id} {...toast} onClose={removeToast} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};
