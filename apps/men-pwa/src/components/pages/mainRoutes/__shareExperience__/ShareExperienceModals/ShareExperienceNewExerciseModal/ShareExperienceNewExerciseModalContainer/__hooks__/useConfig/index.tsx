import { useState } from 'react';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { ConfigResponseType } from './type';

const useConfigNewExperience = () => {
  const [config, setConfig] = useState<ConfigResponseType>();
  const { accessOptionHandler } = useShareExperienceHandlers();

  const successHandler = (v: ConfigResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    setConfig(v);
  };

  const { isLoading } = usePwaApi<ConfigResponseType>({
    api: 'manshareeexperience/v3/experience/config',
    method: 'GET',
    queryKey: ['configNewExperience'],
    onSuccess: successHandler,
  });

  return { config, configLoading: isLoading };
};

export default useConfigNewExperience;
