import React from 'react';
import styles from './PaymentMethodSelector.module.css';

export interface PaymentMethodOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface PaymentMethodSelectorProps {
  options: PaymentMethodOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
}

export const PaymentMethodSelector = ({ 
    options, 
    selectedValue, 
    onChange, 
    name = 'paymentMethod',
    className = '' 
}: PaymentMethodSelectorProps) => {
  return (
    <div className={`${styles.container} ${className}`} role="radiogroup">
      {options.map((option) => (
        <div key={option.id} className={styles.option}>
          <input
            type="radio"
            id={`${name}-${option.id}`}
            name={name}
            value={option.id}
            checked={selectedValue === option.id}
            onChange={() => onChange?.(option.id)}
            className={styles.input}
          />
          <label htmlFor={`${name}-${option.id}`} className={styles.label}>
            {option.icon && <span className={styles.icon}>{option.icon}</span>}
            <span className={styles.methodName}>{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
