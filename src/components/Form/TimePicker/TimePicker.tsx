import React from 'react';
import styles from './TimePicker.module.css';

export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  className?: string;
}

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <div className={`${styles.container} ${className}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          type="time"
          id={inputId}
          className={`${styles.input} ${error ? styles.error : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span id={`${inputId}-error`} className={styles.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

TimePicker.displayName = 'TimePicker';
