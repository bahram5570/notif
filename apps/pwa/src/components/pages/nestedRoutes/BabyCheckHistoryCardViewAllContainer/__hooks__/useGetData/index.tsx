import { useEffect, useRef } from 'react';

import { BABY_CHECK_HISTORY_CARD_VIEW_ALL } from '@repo/core/components/Widgets/WidgetGenerators/WidgetBabyCheckHistoryCard';
import { isDevelopeMode } from '@repo/core/utils/system';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';

import { ResponseTypes } from './types';

const useGetData = () => {
  const router = useCustomRouter();
  const { getQuery } = useCustomReactQuery();
  const isFirstTime = useRef(isDevelopeMode());

  const data = getQuery<ResponseTypes>({ queryKey: [BABY_CHECK_HISTORY_CARD_VIEW_ALL] });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (typeof data === 'undefined') {
      router.back();
    }
  }, [data]);

  return { data };
};

export default useGetData;
