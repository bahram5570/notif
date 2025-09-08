import { useEffect, useState } from 'react';

import useShareExperiencePageNo from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/__hooks__/useShareExperiencePageNo';
import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { SelfExperienceDataType, UseSelfExperienceDataPropsType } from './type';

const useSelfExperienceData = ({ id, isSelf }: UseSelfExperienceDataPropsType) => {
  const [pageNo, setPageNo] = useState(0);
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['selfExperience']);
  const { updatePageNo: changePageNoHandler } = useShareExperiencePageNo(`${id}-selfExperience`);

  const selfExperienceData = getQuery<SelfExperienceDataType>({ queryKey: ['selfExperience'] });

  const successHandler = (v: SelfExperienceDataType) => {
    if (selfExperienceData) {
      const list = { ...selfExperienceData, list: [...selfExperienceData.list, ...v.list] };
      updateQuery({ queryKey: ['selfExperience'], payload: list });
    } else {
      newQuery({ payload: v, queryKey: ['selfExperience'] });
    }
  };

  const api = isSelf
    ? `shareeexperience/v3/experience/self/${pageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`
    : `shareeexperience/v3/profile/${id}/self/${pageNo}/${EXPERIENCES_PROFILE_PAGE_SIZE}`;

  const { isLoading, callApi } = useApi<SelfExperienceDataType>({
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
    changePageNoHandler(pageNo + 1);
  };

  return { isLoading, selfExperienceData, updatePageNo, pageNo };
};

export default useSelfExperienceData;
