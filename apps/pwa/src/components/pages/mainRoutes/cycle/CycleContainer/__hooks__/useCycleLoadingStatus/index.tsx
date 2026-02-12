import { useEffect, useState } from 'react';

import useSignInteractiveBanner from '@hooks/__sign__/useSignInteractiveBanner';
import useCountDown from '@hooks/useCountDown';
import { CycleLoadingStatusEnum } from '@repo/core/providers/WidgetActionsProvider';

import { UseCycleLoadingStatusProps } from './types';

const useCycleLoadingStatus = ({ hasData }: UseCycleLoadingStatusProps) => {
  const { isLoadedHandler } = useSignInteractiveBanner();
  const [loadingStatus, setLoadingStatus] = useState<CycleLoadingStatusEnum>(CycleLoadingStatusEnum.loading);

  const { startCounter: startSuccessed } = useCountDown({
    time: 2,
    onCallBack: () => {
      isLoadedHandler();
      setLoadingStatus(CycleLoadingStatusEnum.successed);
    },
  });

  const { startCounter: startLoaded } = useCountDown({
    time: 3,
    onCallBack: () => {
      startSuccessed();
      setLoadingStatus(CycleLoadingStatusEnum.loaded);
    },
  });

  useEffect(() => {
    if (hasData) {
      startLoaded();
    }
  }, [hasData]);

  return { loadingStatus };
};

export default useCycleLoadingStatus;
