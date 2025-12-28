import React from 'react';
import styles from './ButtonGroup.module.css';

export interface ButtonGroupProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const ButtonGroup = ({ children, orientation = 'horizontal', className = '' }: ButtonGroupProps) => {
  return (
    <div className={`${styles.group} ${orientation === 'vertical' ? styles.vertical : ''} ${className}`} role="group">
      {children}
    </div>
  );
};
