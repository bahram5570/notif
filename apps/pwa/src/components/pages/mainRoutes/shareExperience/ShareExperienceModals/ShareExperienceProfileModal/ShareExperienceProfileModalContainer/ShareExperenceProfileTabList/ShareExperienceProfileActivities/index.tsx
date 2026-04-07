import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import ShareExperienceProfileData from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceProfileData';
import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@components/pages/mainRoutes/shareExperience/constants';

import useActivitiesData from './__hooks__/useActivitiesData';
import { ShareExperienceProfileActivitiesPropsType } from './type';

const ShareExperienceProfileActivities = ({ id, isSelf }: ShareExperienceProfileActivitiesPropsType) => {
  const { selfExperienceData, isLoading, pageNo, updatePageNo } = useActivitiesData({ id });

  return (
    <InfiniteScrollContainer
      isLoading={isLoading}
      pageSize={EXPERIENCES_PROFILE_PAGE_SIZE}
      totalCount={selfExperienceData?.totalCount || 0}
      pageNo={pageNo}
      callBack={updatePageNo}
      // height="100dvh"
    >
      <ShareExperienceProfileData experienceDataList={selfExperienceData?.list} isSelf={isSelf} isLoading={isLoading} />
    </InfiniteScrollContainer>
  );
};

export default ShareExperienceProfileActivities;
