import { useEffect, useRef } from 'react';

import { PERIOD_CYCLE_HISTORY_VIEW_ALL } from '@repo/core/components/Widgets/WidgetGenerators/WidgetPeriodCycleHistory';
import { isDevelopeMode } from '@repo/core/utils/system';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { ResponseTypes } from './types';

const useGetData = () => {
  const router = useCustomRouter();
  const { getQuery } = useCustomReactQuery();
  const isFirstTime = useRef(isDevelopeMode());

  const data = getQuery<ResponseTypes>({ queryKey: [PERIOD_CYCLE_HISTORY_VIEW_ALL] });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      if (typeof data === 'undefined') {
        router.back();
      }
    }
  }, [data, isFirstTime.current]);

  return { data };
};

export default useGetData;
