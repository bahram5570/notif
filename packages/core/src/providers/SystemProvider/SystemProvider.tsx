'use client';

import { createContext } from 'react';

import useSystem_BreakPoint from './__hooks__/useSystem_BreakPoint';
import useSystem_BrowserInfo from './__hooks__/useSystem_BrowserInfo';
import useSystem_IsAddToHome from './__hooks__/useSystem_IsAddToHome';
import useSystem_OperatingSystem from './__hooks__/useSystem_OperatingSystem';
import { SystemContextTypes } from './types';

const initialValues: SystemContextTypes = {
  breakPoint: { mobile: true, tablet: true, laptop: true, desktop: false, wide: false },
  browserInfo: { browser: 'Other', version: '' },
  operatingSystem: 'windows',
  isAddToHome: null,
};

export const SystemContext = createContext<SystemContextTypes>(initialValues);

export const SystemProvider = ({ children }: { children: React.ReactNode }) => {
  const breakPoint = useSystem_BreakPoint();
  const isAddToHome = useSystem_IsAddToHome();
  const browserInfo = useSystem_BrowserInfo();
  const operatingSystem = useSystem_OperatingSystem();

  return (
    <SystemContext.Provider value={{ operatingSystem, isAddToHome, browserInfo, breakPoint }}>
      <>{children}</>
    </SystemContext.Provider>
  );
};
