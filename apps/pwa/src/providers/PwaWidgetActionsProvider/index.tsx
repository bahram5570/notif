'use client';

import { actionRouteConverter } from './__utils__';

import useUpdateCycleCard from '@hooks/__cycle__/useUpdateCycleCard';
import { WidgetActionsProvider } from '@repo/core/providers/WidgetActionsProvider';

import PopUpEditCycle from './PopUpEditCycle';

const PwaWidgetActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const { cycleCardStatusHandler } = useUpdateCycleCard();

  const callBackHandler = (name: string) => {
    if (name === 'cycle') {
      const isCyclePage = location.pathname.includes('cycle');

      if (isCyclePage) {
        cycleCardStatusHandler('refetch');
      }
    }
  };

  return (
    <WidgetActionsProvider
      onCallBack={callBackHandler}
      PopUpEditCycle={PopUpEditCycle}
      internalRoutesConverter={actionRouteConverter}
    >
      <>{children}</>
    </WidgetActionsProvider>
  );
};

export default PwaWidgetActionsProvider;
