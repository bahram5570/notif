'use client';

import { actionRouteConverter } from './actionRouteConverter/__utils__';

import { WidgetActionsProvider } from '@repo/core/providers/WidgetActionsProvider';

const PwaWidgetActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const callBackHandler = (name: string) => {
    console.log(name);
  };

  return (
    <WidgetActionsProvider internalRoutesConverter={actionRouteConverter} onCallBack={callBackHandler}>
      <>{children}</>
    </WidgetActionsProvider>
  );
};

export default PwaWidgetActionsProvider;
