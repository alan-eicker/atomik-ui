import React, { useState } from 'react';
import styles from './Tabs.module.css';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export interface TabsProps {
    children: React.ReactNode;
    defaultActiveTab?: string;
    className?: string;
}

export const Tabs = ({ children, defaultActiveTab, className = '' }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || '');

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={`${styles.tabs} ${className}`}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

export const TabList = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return <div className={`${styles.tabList} ${className}`} role="tablist">{children}</div>;
};

export const Tab = ({ id, children, className = '' }: { id: string, children: React.ReactNode, className?: string }) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error('Tab must be used within Tabs');
    const { activeTab, setActiveTab } = context;
    const isActive = activeTab === id;
    
    return (
        <button 
            className={`${styles.tab} ${isActive ? styles.active : ''} ${className}`}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveTab(id)}
            tabIndex={isActive ? 0 : -1}
        >
            {children}
        </button>
    );
};

export const TabPanel = ({ id, children, className = '' }: { id: string, children: React.ReactNode, className?: string }) => {
    const context = React.useContext(TabsContext);
    if (!context) throw new Error('TabPanel must be used within Tabs');
    const { activeTab } = context;
    if (activeTab !== id) return null;
    
    return <div role="tabpanel" className={`${styles.tabPanel} ${className}`}>{children}</div>;
};
