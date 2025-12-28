import React from 'react';
import styles from './Statistic.module.css';

export interface StatisticProps {
  title: string;
  value: string | number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
}

export const Statistic = ({ title, value, prefix, suffix, className = '' }: StatisticProps) => {
  return (
    <div className={`${styles.statistic} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        {value}
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    </div>
  );
};
