import React, { useState } from 'react';
import styles from './Alert.module.css';

export interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
  dismissible?: boolean;
}

export const Alert = ({ type = 'info', title, children, onClose, className = '', dismissible = false }: AlertProps) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        onClose?.();
    };

    if (!visible) return null;

    return (
        <div className={`${styles.alert} ${styles[type]} ${className}`} role="alert">
            <div style={{ flex: 1 }}>
                {title && <span className={styles.title}>{title}</span>}
                <div>{children}</div>
            </div>
            {dismissible && (
                <button className={styles.closeButton} onClick={handleClose} aria-label="Close alert">
                    &times;
                </button>
            )}
        </div>
    );
};
