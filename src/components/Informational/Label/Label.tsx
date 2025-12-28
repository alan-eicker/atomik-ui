import React from 'react';
import styles from './Label.module.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

export const Label = ({ children, required, className = '', ...props }: LabelProps) => {
  return (
    <label className={`${styles.label} ${required ? styles.required : ''} ${className}`} {...props}>
      {children}
    </label>
  );
};
