'use client';

import { createContext, useState } from 'react';

import { RoutinTabsContextType } from './type';

export const RoutinTabsContext = createContext<RoutinTabsContextType>({
  activeTab: 0,
  handleTabChange: () => {},
});

const RoutinTabsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  return <RoutinTabsContext.Provider value={{ activeTab, handleTabChange }}>{children}</RoutinTabsContext.Provider>;
};

export default RoutinTabsProvider;
