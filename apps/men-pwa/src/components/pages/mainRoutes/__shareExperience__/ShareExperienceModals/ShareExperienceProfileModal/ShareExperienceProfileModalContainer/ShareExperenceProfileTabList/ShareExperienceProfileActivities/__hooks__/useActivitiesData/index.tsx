import { useEffect, useState } from 'react';

import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { SelfExperienceDataType, UseActivitiesDataPropsType } from './type';

const useActivitiesData = ({ id }: UseActivitiesDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['activities']);
  const { accessOptionHandler } = useShareExperienceHandlers();

  const selfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['activities'] });

  const successHandler = (v: SelfExperienceDataType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    if (selfExperienceData) {
      const list = { ...selfExperienceData, list: [...selfExperienceData.list, ...v.list] };
      updateQuery({ queryKey: ['activities'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['activities'] });
    }
  };

  const api = `manshareeexperience/v3/profile/${id}/activity/${pageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`;

  const { isLoading, callApi } = usePwaApi<SelfExperienceDataType>({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`ActivitiesExperienceProfile-${id}`],
  });

  useEffect(() => {
    if (id !== undefined) {
      callApi();
    }
  }, [id, pageNo]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
  };

  return { isLoading, selfExperienceData, updatePageNo, pageNo };
};

export default useActivitiesData;
