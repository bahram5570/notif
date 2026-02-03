import { useContext, useEffect, useState } from 'react';

import useUpdateCycleCard from '@hooks/__cycle__/useUpdateCycleCard';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useSplash from '@hooks/useSplash';
import { ErrorContext } from '@providers/ErrorProvider';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { CycleResponseTypes } from '../../types';

const useGetData = () => {
  const { onError } = useContext(ErrorContext);
  const { splashCompleteHandler } = useSplash();
  const { refetchQuery } = useCustomReactQuery();
  const { getQueryParams } = useQueryParamsHandler();
  const [cycleResetKey, setCycleResetKey] = useState(0);
  const { cycleCardStatus, cycleCardStatusHandler } = useUpdateCycleCard();

  const isPopUpModalOpen = getQueryParams(MODALS.WIDGET_POPUP) !== null;

  const successHandler = () => {
    if (!isPopUpModalOpen) {
      setCycleResetKey(Math.random());
    }

    splashCompleteHandler();
  };

  const errorHandler = () => {
    onError('server');
    splashCompleteHandler();
  };

  const { data, isLoading } = useApi<CycleResponseTypes>({
    api: 'wigets',
    method: 'GET',
    queryKey: ['wigets'],
    onError: errorHandler,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (cycleCardStatus === 'refetch' && !isPopUpModalOpen) {
      cycleCardStatusHandler('normal');
      refetchQuery({ queryKey: ['wigets'] });
    }
  }, [cycleCardStatus, isPopUpModalOpen]);

  const hasError = !data && !isLoading;

  return { data, cycleResetKey, hasError };
};

export default useGetData;
