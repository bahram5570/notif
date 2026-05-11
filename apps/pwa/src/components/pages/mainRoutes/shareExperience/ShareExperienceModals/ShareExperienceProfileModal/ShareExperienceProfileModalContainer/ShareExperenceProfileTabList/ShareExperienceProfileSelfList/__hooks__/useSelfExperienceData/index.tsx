import { useEffect, useState } from 'react';

import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@repo/core/components/ShareExperience';

import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SelfExperienceDataType, UseSelfExperienceDataPropsType } from './type';

const useSelfExperienceData = ({ id }: UseSelfExperienceDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['selfExperience']);

  const selfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['selfExperience'] });

  const successHandler = (v: SelfExperienceDataType) => {
    if (selfExperienceData) {
      const list = { ...selfExperienceData, list: [...selfExperienceData.list, ...v.list] };
      updateQuery({ queryKey: ['selfExperience'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['selfExperience'] });
    }
  };

  const api = `shareeexperience/v3/profile/${id}/self/${pageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`;

  const { isLoading, callApi } = usePwaApi<SelfExperienceDataType>({
    api: api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`shareExperienceSelfExperienceProfile-${id}-${pageNo}`],
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

export default useSelfExperienceData;
