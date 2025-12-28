import React from 'react';
import styles from './Switch.module.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
          role="switch"
          {...props}
        />
        <span className={styles.toggle} />
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
