import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@repo/core/utils/system';
import { SelectNameGenderEnum } from '@services/selectNameServices/enums';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import useNameSelectorActivationData from '../useNameSelectorActivationData';

const useNameSelectorActivationSubmit = () => {
  const isFirstTime = useRef(isDevelopeMode());
  const { payload } = useNameSelectorActivationData();
  const { callApi, isLoading, data } = usePwaApi<{ valid: boolean }>({
    api: 'feature/babyname/initial',
    method: 'POST',
  });

  const isValidPayload =
    payload.gender !== SelectNameGenderEnum.None && payload.charFilter.length > 0 && payload.styles[0].length > 0;

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (isValidPayload) {
      callApi(payload);
    }
  }, []);

  const isSuccess = data && !isLoading ? true : false;

  return { isSuccess };
};

export default useNameSelectorActivationSubmit;
