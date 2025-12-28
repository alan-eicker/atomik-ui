import React, { useRef, useState } from 'react';
import styles from './FileUpload.module.css';

export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  buttonText?: string;
  error?: string;
  className?: string;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ label, buttonText = 'Choose File', error, className = '', id, onChange, ...props }, ref) => {
    const inputId = id || React.useId();
    const [fileName, setFileName] = useState<string>('');
    const internalRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
        onChange?.(e);
    };

    const handleButtonClick = () => {
        // Forward click to input
        if (ref && typeof ref !== 'function') {
            ref.current?.click();
        } else if (internalRef.current) {
            internalRef.current.click();
        }
    };

    return (
      <div className={`${styles.container} ${className}`}>
        {label && (
          <span className={styles.label}>
            {label}
          </span>
        )}
        <div>
            <button 
                type="button" 
                className={`${styles.uploadButton} ${error ? styles.error : ''}`} 
                onClick={handleButtonClick}
                aria-label={label || buttonText}
            >
                {buttonText}
            </button>
            <input
                ref={(node) => {
                    // Handle both forwarded ref and internal ref
                    internalRef.current = node;
                    if (typeof ref === 'function') ref(node);
                    else if (ref) ref.current = node;
                }}
                type="file"
                id={inputId}
                className={styles.input}
                onChange={handleFileChange}
                aria-invalid={!!error}
                aria-describedby={error ? `${inputId}-error` : undefined}
                {...props}
            />
            {fileName && <span className={styles.fileName}>{fileName}</span>}
        </div>
        
        {error && (
          <span id={`${inputId}-error`} className={styles.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
