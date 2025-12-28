import React from 'react';
import styles from './HorizontalMenu.module.css';

export interface HorizontalMenuProps {
  children: React.ReactNode;
  className?: string;
}

export const HorizontalMenu = ({ children, className = '' }: HorizontalMenuProps) => {
  return (
    <nav className={className}>
      <ul className={styles.menu} role="menubar">
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

HorizontalMenu.Item = MenuItem;
