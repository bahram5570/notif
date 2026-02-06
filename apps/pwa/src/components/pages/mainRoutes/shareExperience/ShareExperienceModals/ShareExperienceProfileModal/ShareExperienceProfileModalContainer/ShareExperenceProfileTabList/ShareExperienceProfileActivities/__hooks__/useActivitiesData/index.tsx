import { useEffect, useState } from 'react';

import useShareExperiencePageNo from '@components/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/__hooks__/useShareExperiencePageNo';
import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@components/pages/mainRoutes/shareExperience/constants';
import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SelfExperienceDataType, UseActivitiesDataPropsType } from './type';

const useActivitiesData = ({ id }: UseActivitiesDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['activities']);
  const { updatePageNo: changePageNoHandler } = useShareExperiencePageNo(`${id}-activities`);

  const selfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['activities'] });

  const successHandler = (v: SelfExperienceDataType) => {
    if (selfExperienceData) {
      const list = { ...selfExperienceData, list: [...selfExperienceData.list, ...v.list] };
      updateQuery({ queryKey: ['activities'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['activities'] });
    }
  };

  const api = `shareeexperience/v3/profile/${id}/activity/${pageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`;

  const { isLoading, callApi } = usePwaApi<SelfExperienceDataType>({
    api,
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`shareExperienceActivitiesExperienceProfile-${id}`],
  });

  useEffect(() => {
    if (id !== undefined) {
      callApi();
    }
  }, [id, pageNo]);

  const updatePageNo = () => {
    setPageNo((prev) => prev + 1);
    changePageNoHandler(pageNo + 1);
  };

  return { isLoading, selfExperienceData, updatePageNo, pageNo };
};

export default useActivitiesData;
