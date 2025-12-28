import React, { useState, createContext, useContext, useRef, useEffect } from 'react';
import styles from './Accordion.module.css';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (id: string) => void;
  allowMultiple?: boolean;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  className?: string;
}

export const Accordion = ({ children, allowMultiple = false, defaultOpenItems = [], className = '' }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={`${styles.accordion} ${className}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ id, children, className = '' }: { id: string, children: React.ReactNode, className?: string }) => {
    return <div className={`${styles.item} ${className}`}>{children}</div>;
};

export const AccordionHeader = ({ id, children, className = '' }: { id: string, children: React.ReactNode, className?: string }) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error('AccordionHeader must be used within Accordion');
    const { openItems, toggleItem } = context;
    const isOpen = openItems.includes(id);

    return (
        <div 
            className={`${styles.header} ${className}`} 
            onClick={() => toggleItem(id)}
            role="button"
            aria-expanded={isOpen}
        >
            {children}
            <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>▼</span>
        </div>
    );
};

export const AccordionPanel = ({ id, children, className = '' }: { id: string, children: React.ReactNode, className?: string }) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error('AccordionPanel must be used within Accordion');
    const { openItems } = context;
    const isOpen = openItems.includes(id);
    const panelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (panelRef.current && contentRef.current) {
            if (isOpen) {
                // Set height to 0 first, then to scrollHeight to trigger animation
                panelRef.current.style.height = '0px';
                requestAnimationFrame(() => {
                    if (panelRef.current && contentRef.current) {
                        const contentHeight = contentRef.current.scrollHeight;
                        panelRef.current.style.height = `${contentHeight}px`;
                    }
                });
            } else {
                // Get current height first, then animate to 0
                const contentHeight = contentRef.current.scrollHeight;
                panelRef.current.style.height = `${contentHeight}px`;
                requestAnimationFrame(() => {
                    if (panelRef.current) {
                        panelRef.current.style.height = '0px';
                    }
                });
            }
        }
    }, [isOpen]);

    return (
        <div 
            ref={panelRef}
            className={`${styles.panel} ${isOpen ? styles.open : ''} ${className}`}
        >
            <div ref={contentRef} className={styles.panelContent}>
                {children}
            </div>
        </div>
    );
};
