import { useEffect, useState } from 'react';

import useSignInteractiveBanner from '@hooks/__sign__/useSignInteractiveBanner';
import useCountDown from '@hooks/useCountDown';

import { LoadingStatusEnum } from './loadingStatus.enum';
import { UseCycleLoadingStatusProps } from './types';

const useCycleLoadingStatus = ({ hasData }: UseCycleLoadingStatusProps) => {
  const { isLoadedHandler } = useSignInteractiveBanner();
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatusEnum>(LoadingStatusEnum.loading);

  const { startCounter: startSuccessed } = useCountDown({
    time: 2,
    onCallBack: () => {
      isLoadedHandler();
      setLoadingStatus(LoadingStatusEnum.successed);
    },
  });

  const { startCounter: startLoaded } = useCountDown({
    time: 3,
    onCallBack: () => {
      startSuccessed();
      setLoadingStatus(LoadingStatusEnum.loaded);
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
