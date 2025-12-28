import React, { useState } from 'react';
import styles from './Rating.module.css';

export interface RatingProps {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  className?: string;
}

export const Rating = ({ max = 5, value = 0, onChange, readOnly = false, className = '' }: RatingProps) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div className={`${styles.rating} ${readOnly ? styles.readonly : ''} ${className}`} role={readOnly ? 'img' : 'radiogroup'} aria-label={`Rating: ${value} out of ${max}`}>
      {Array.from({ length: max }, (_, index) => {
        const ratingValue = index + 1;
        const isFilled = ratingValue <= displayValue;

        return (
          <button
            key={index}
            type="button"
            className={`${styles.star} ${isFilled ? styles.filled : ''}`}
            onClick={() => !readOnly && onChange?.(ratingValue)}
            onMouseEnter={() => !readOnly && setHoverValue(ratingValue)}
            onMouseLeave={() => !readOnly && setHoverValue(null)}
            disabled={readOnly}
            aria-label={`${ratingValue} Star`}
            aria-checked={ratingValue === value}
            role={readOnly ? undefined : 'radio'}
          >
            ★
          </button>
        );
      })}
    </div>
  );
};
