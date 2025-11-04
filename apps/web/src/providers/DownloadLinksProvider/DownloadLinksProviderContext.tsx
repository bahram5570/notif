'use client';

import { createContext } from 'react';

import { DownloadLinksProviderContextTypes, DownloadLinksTypes } from './types';

export const DownloadLinksContext = createContext<DownloadLinksTypes>({
  manDirectApplcationalink: '',
  womanDirectApplcationalink: '',
});

const DownloadLinksProviderContext = ({ children, links }: DownloadLinksProviderContextTypes) => {
  return (
    <DownloadLinksContext.Provider value={links}>
      <>{children}</>
    </DownloadLinksContext.Provider>
  );
};

export default DownloadLinksProviderContext;
