import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', id, disabled, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <label htmlFor={inputId} className={`${styles.container} ${disabled ? styles.disabled : ''} ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          className={styles.input}
          disabled={disabled}
          {...props}
        />
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
