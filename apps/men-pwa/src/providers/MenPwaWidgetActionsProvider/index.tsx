'use client';

import { actionRouteConverter } from './__utils__';

import { WidgetActionsProvider } from '@repo/core/providers/WidgetActionsProvider';

const MenPwaWidgetActionsProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WidgetActionsProvider internalRoutesConverter={actionRouteConverter}>
      <>{children}</>
    </WidgetActionsProvider>
  );
};

export default MenPwaWidgetActionsProvider;
