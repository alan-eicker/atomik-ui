import React from 'react';
import styles from './Spinner.module.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  className?: string;
  'aria-label'?: string;
}

export const Spinner = ({ 
    size = 'md', 
    variant = 'primary', 
    className = '',
    'aria-label': ariaLabel = 'Loading'
}: SpinnerProps) => {
    return (
        <div 
            className={`${styles.spinner} ${styles[size]} ${styles[variant]} ${className}`}
            role="status"
        >
            <span className={styles.srOnly}>{ariaLabel}</span>
        </div>
    );
};
