import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  /** The content to display inside the card */
  children: React.ReactNode;
  /** Optional class name to append to the card */
  className?: string;
  /** Optional style object */
  style?: React.CSSProperties;
}

export const Card = ({ children, className = '', style }: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      {children}
    </div>
  );
};
