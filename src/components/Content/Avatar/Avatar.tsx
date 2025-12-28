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

export const Avatar = (props: AvatarProps) => {
  const { src, alt = 'Avatar', initials, size = 'medium', className = '' } = props;

  const [imgError, setImgError] = React.useState(false);

  const fallbackSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/250px-Default_pfp.svg.png';
  
  return (
    <div className={`${styles.avatar} ${styles[size]} ${className}`}>
      {src ? (
        <img 
          src={imgError ? fallbackSrc : src} 
          alt={alt} 
          className={styles.img} 
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={styles.initials}>{initials || '?'}</span>
      )}
    </div>
  );
};
