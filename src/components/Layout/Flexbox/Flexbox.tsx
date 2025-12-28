import React from 'react';
import styles from './Flexbox.module.css';

export interface FlexboxProps extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  wrap?: 'nowrap' | 'wrap' | 'wrapReverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  gap?: number | string;
  children?: React.ReactNode;
  as?: React.ElementType; // allow rendering as section, main, etc.
}

export const Flexbox = ({ 
    inline = false,
    direction = 'row',
    wrap = 'nowrap',
    justify = 'start',
    align = 'stretch',
    gap,
    children,
    as: Component = 'div',
    className = '',
    style,
    ...props 
}: FlexboxProps) => {
    return (
        <Component 
            className={`
                ${inline ? styles.inline : styles.flex}
                ${styles[direction]}
                ${styles[wrap]}
                ${styles[`justify${justify.charAt(0).toUpperCase() + justify.slice(1)}`]}
                ${styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}`]}
                ${className}
            `}
            style={{ gap, ...style }}
            {...props}
        >
            {children}
        </Component>
    );
};
