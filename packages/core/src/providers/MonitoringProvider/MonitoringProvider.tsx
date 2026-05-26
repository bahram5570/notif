'use client';

import { createContext } from 'react';

import useMonitoring_api from './__hooks__/useMonitoring_api';
import useMonitoring_navigation from './__hooks__/useMonitoring_navigation';
import { MonitoringContextTypes } from './types';

export const MonitoringContext = createContext<MonitoringContextTypes>({
  api: () => {},
  navigation: () => {},
});

export const MonitoringProvider = ({ children }: { children: React.ReactNode }) => {
  const isActive = process.env.NODE_ENV === 'production';

  const api = useMonitoring_api(isActive);
  const navigation = useMonitoring_navigation(isActive);

  return (
    <MonitoringContext.Provider value={{ api, navigation }}>
      <>{children}</>
    </MonitoringContext.Provider>
  );
};
