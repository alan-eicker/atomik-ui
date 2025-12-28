import React from 'react';
import styles from './Tag.module.css';

export interface TagProps {
  children: React.ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

export const Tag = ({ children, onClose, onClick, className = '' }: TagProps) => {
  return (
    <span 
        className={`${styles.tag} ${onClick ? styles.clickable : ''} ${className}`}
        onClick={onClick}
        onKeyDown={(e) => {
            if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                onClick();
            }
        }}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
    >
      {children}
      {onClose && (
        <button 
            className={styles.closeButton} 
            onClick={(e) => {
                e.stopPropagation();
                onClose();
            }}
            aria-label="Remove tag"
        >
          &times;
        </button>
      )}
    </span>
  );
};
