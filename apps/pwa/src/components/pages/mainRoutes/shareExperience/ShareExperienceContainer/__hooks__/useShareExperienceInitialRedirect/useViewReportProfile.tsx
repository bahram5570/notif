import { useEffect, useState } from 'react';

import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SHARE_EXPERIENCE_ORDER_QUERY_NAME, SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '../../../constants';

const useViewReportProfile = (isLoaded: boolean) => {
  const [id, setId] = useState('');
  const { increaseZIndex } = useOverlayIndex();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const profileIdHandler = (v: string) => {
    setId(v);
  };

  useEffect(() => {
    if (id && isLoaded) {
      setTimeout(() => {
        pageNavigationHandler({ id, showProgressBar: true });

        const paramsData = JSON.stringify({ id, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });
        newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: paramsData });
        increaseZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, id);
      }, 1000);
    }
  }, [id, isLoaded]);

  return { profileIdHandler };
};

export default useViewReportProfile;
