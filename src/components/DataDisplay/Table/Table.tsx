import React from 'react';
import styles from './Table.module.css';

export const TableContainer = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export const Table = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <table className={`${styles.table} ${className}`}>{children}</table>;
};

export const TableHead = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <thead className={className}>{children}</thead>;
};

export const TableBody = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <tbody className={className}>{children}</tbody>;
};

export const TableRow = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <tr className={className}>{children}</tr>;
};

export const TableHeaderCell = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <th className={className}>{children}</th>;
};

export const TableCell = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <td className={className}>{children}</td>;
};
