import React from 'react';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  showLabel?: boolean;
  striped?: boolean;
  animated?: boolean;
  className?: string;
}

export const ProgressBar = ({ 
    value, 
    max = 100, 
    variant = 'primary', 
    showLabel = false, 
    striped = false, 
    animated = false,
    className = '' 
}: ProgressBarProps) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div 
            className={`${styles.container} ${className}`}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
        >
            <div 
                className={`
                    ${styles.bar} 
                    ${variant !== 'primary' ? styles[variant] : ''}
                    ${striped ? styles.striped : ''}
                    ${animated ? styles.animated : ''}
                `}
                style={{ width: `${percentage}%` }}
            >
                {showLabel && `${Math.round(percentage)}%`}
            </div>
        </div>
    );
};
