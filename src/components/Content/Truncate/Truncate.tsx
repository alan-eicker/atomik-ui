import React from 'react';
import styles from './Truncate.module.css';

export interface TruncateProps {
  children: string;
  lines?: number;
  className?: string;
  width?: string | number;
}

export const Truncate = ({ children, lines = 1, className = '', width }: TruncateProps) => {
  const isMultiline = lines > 1;
  const style: React.CSSProperties = {
     width,
  };

  if (isMultiline) {
      style.WebkitLineClamp = lines;
  }

  return (
    <span 
        className={`${isMultiline ? styles.multiline : styles.truncate} ${className}`} 
        style={style}
        title={children}
    >
      {children}
    </span>
  );
};
