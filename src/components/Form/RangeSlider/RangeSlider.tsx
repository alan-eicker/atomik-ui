import React, { useState, useEffect } from 'react';
import styles from './RangeSlider.module.css';

export interface RangeSliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  min?: number;
  max?: number;
  showValue?: boolean;
}

export const RangeSlider = React.forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ label, min = 0, max = 100, step = 1, showValue = true, className = '', id, onChange, value: propValue, defaultValue, ...props }, ref) => {
    const inputId = id || React.useId();
    // Manage internal state for display if uncontrolled, or strictly use propValue if controlled.
    // However, to keep it simple and show value, we might need a local state mirror or derive from prop.
    // If controlled (propValue !== undefined), use it. If uncontrolled, use local state initialized with defaultValue or min.
    
    const isControlled = propValue !== undefined;
    const [localValue, setLocalValue] = useState<number>(
        (propValue as number) ?? (defaultValue as number) ?? min
    );

    useEffect(() => {
        if (isControlled) {
            setLocalValue(propValue as number);
        }
    }, [propValue, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (!isControlled) {
            setLocalValue(newValue);
        }
        onChange?.(e);
    };

    return (
      <div className={`${styles.container} ${className}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.sliderContainer}>
            <input
            ref={ref}
            type="range"
            id={inputId}
            className={styles.slider}
            min={min}
            max={max}
            step={step}
            value={isControlled ? propValue : localValue}
            onChange={handleChange}
            {...props}
            />
            {showValue && <span className={styles.value}>{localValue}</span>}
        </div>
      </div>
    );
  }
);

RangeSlider.displayName = 'RangeSlider';
