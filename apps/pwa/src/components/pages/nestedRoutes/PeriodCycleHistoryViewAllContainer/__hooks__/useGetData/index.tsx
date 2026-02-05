import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';

import { PERIOD_CYCLE_HISTORY_VIEW_ALL } from '@components/Widgets/widgetGenerator/WidgetPeriodCycleHistory/WidgetPeriodCycleHistoryViewAll/constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useRouter } from 'next/navigation';

import { ResponseTypes } from './types';

const useGetData = () => {
  const router = useRouter();
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
