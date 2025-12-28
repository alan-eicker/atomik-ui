import React from 'react';
import styles from './Hint.module.css';

export interface HintProps {
  children: React.ReactNode;
  type?: 'default' | 'error' | 'warning' | 'success';
  className?: string;
  id?: string;
}

export const Hint = ({ children, type = 'default', className = '', id }: HintProps) => {
  return (
    <span id={id} className={`${styles.hint} ${type !== 'default' ? styles[type] : ''} ${className}`}>
      {children}
    </span>
  );
};
