import React from 'react';
import styles from './DefinitionList.module.css';

export const DefinitionList = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <dl className={`${styles.list} ${className}`}>{children}</dl>;
};

export const DefinitionTerm = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <dt className={`${styles.term} ${className}`}>{children}</dt>;
};

export const DefinitionDescription = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <dd className={`${styles.description} ${className}`}>{children}</dd>;
};
