import React from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Initials to display if image is not provided */
  initials?: string;
  /** Size of the avatar */
  size?: 'small' | 'medium' | 'large';
  /** Optional class name */
  className?: string;
}

export const Avatar = ({ src, alt = 'Avatar', initials, size = 'medium', className = '' }: AvatarProps) => {
  return (
    <div className={`${styles.avatar} ${styles[size]} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className={styles.img} />
      ) : (
        <span>{initials || '?'}</span>
      )}
    </div>
  );
};
