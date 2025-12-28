import React from 'react';
import styles from './RadioButton.module.css';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, className = '', id, disabled, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <label htmlFor={inputId} className={`${styles.container} ${disabled ? styles.disabled : ''} ${className}`}>
        <input
          ref={ref}
          type="radio"
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

RadioButton.displayName = 'RadioButton';
