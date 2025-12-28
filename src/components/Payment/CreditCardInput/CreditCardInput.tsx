import React from 'react';
import styles from './CreditCardInput.module.css';

export interface CreditCardInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const formatCardNumber = (value: string) => {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return v;
  }
};

export const CreditCardInput = React.forwardRef<HTMLInputElement, CreditCardInputProps>(
  ({ label, error, onChange, className = '', value, ...props }, ref) => {
    const inputId = props.id || React.useId();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, ''); // strip non-digits
        // simple limit for standard cards 16 digits, up to 19 for some. 
        // Let's cap at 19 for now.
        if (rawValue.length > 19) return;
        
        onChange?.(rawValue);
    };

    // Format display value
    const displayValue = value ? formatCardNumber(String(value)) : '';

    return (
      <div className={`${styles.container} ${className}`}>
        {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
        <div className={styles.inputWrapper}>
            <input
                ref={ref}
                type="text"
                id={inputId}
                className={`${styles.input} ${error ? styles.error : ''}`}
                value={displayValue}
                onChange={handleChange}
                placeholder="0000 0000 0000 0000"
                maxLength={23} // 19 digits + 4 spaces
                inputMode="numeric"
                autoComplete="cc-number"
                aria-invalid={!!error}
                aria-describedby={error ? `${inputId}-error` : undefined}
                {...props}
            />
             {/* Simple Icon placeholder */}
            <span className={styles.icon}>💳</span>
        </div>
        {error && <span id={`${inputId}-error`} className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

CreditCardInput.displayName = 'CreditCardInput';
