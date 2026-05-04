import { useEffect, useState } from 'react';

import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '@repo/core/components/ShareExperience';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const useViewReportProfile = (isLoaded: boolean) => {
  const [id, setId] = useState('');
  const { increaseZIndex } = useShareExperienceOverlayIndex();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const profileIdHandler = (v: string) => {
    setId(v);
  };

  useEffect(() => {
    if (id && isLoaded) {
      setTimeout(() => {
        pageNavigationHandler({ id, showProgressBar: true });

        newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: id });
        increaseZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, id);
      }, 1000);
    }
  }, [id, isLoaded]);

  return { profileIdHandler };
};

export default useViewReportProfile;
