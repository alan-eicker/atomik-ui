import React from 'react';
import styles from './VerticalMenu.module.css';

export interface VerticalMenuProps {
  children: React.ReactNode;
  className?: string;
}

export const VerticalMenu = ({ children, className = '' }: VerticalMenuProps) => {
  return (
    <nav className={className}>
      <ul className={styles.menu} role="menu">
        {children}
      </ul>
    </nav>
  );
};

export interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const MenuItem = ({ active, disabled, children, className = '', ...props }: MenuItemProps) => {
  return (
    <li className={`${styles.item} ${active ? styles.active : ''} ${disabled ? styles.disabled : ''}`} role="none">
        <a 
            className={`${styles.link} ${className}`} 
            role="menuitem"
            aria-current={active ? 'page' : undefined}
            aria-disabled={disabled}
            onClick={(e) => disabled && e.preventDefault()}
            {...props}
        >
            {children}
        </a>
    </li>
  );
};

VerticalMenu.Item = MenuItem;
