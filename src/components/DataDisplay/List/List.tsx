import React from 'react';
import styles from './List.module.css';

export interface ListProps {
  children: React.ReactNode;
  as?: 'ul' | 'ol';
  styleType?: 'ordered' | 'unordered' | 'none';
  className?: string;
}

export const List = ({ children, as = 'ul', styleType = 'unordered', className = '' }: ListProps) => {
  const Component = as;
  return (
    <Component className={`${styles.list} ${styles[styleType]} ${className}`}>
      {children}
    </Component>
  );
};

export const ListItem = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <li className={`${styles.item} ${className}`}>{children}</li>;
};
