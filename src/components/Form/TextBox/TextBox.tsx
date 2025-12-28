import React from 'react';
import styles from './TextBox.module.css';

export interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    // Generate a unique ID if not provided, for label association
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

TextBox.displayName = 'TextBox';
