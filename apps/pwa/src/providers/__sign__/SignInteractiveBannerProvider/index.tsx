'use client';

import { createContext } from 'react';

import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';

import { SignInteractiveBannerContextType } from './type';

export const SignInteractiveBannerContext = createContext<SignInteractiveBannerContextType>({
  interactiveBannerActionHandler: () => {},
});

const SignInteractiveBannerProvider = ({ children }: { children: React.ReactNode }) => {
  const { actionHandler } = useWidgetActions();

  const interactiveBannerActionHandler = (action: ActionTypes) => {
    actionHandler(action);
  };

  return (
    <SignInteractiveBannerContext.Provider value={{ interactiveBannerActionHandler }}>
      <>{children}</>
    </SignInteractiveBannerContext.Provider>
  );
};

export default SignInteractiveBannerProvider;
