import { EXPERIENCES_PROFILE_PAGE_SIZE } from '@repo/core/components/ShareExperience';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import ShareExperiencePostCardModules from '@components/pages/mainRoutes/__shareExperience__/ShareExperienceModules/ShareExperiencePostCardModules';

import useActivitiesData from './__hooks__/useActivitiesData';
import { ShareExperienceProfileActivitiesPropsType } from './type';

const ShareExperienceProfileActivities = ({ id, isSelf }: ShareExperienceProfileActivitiesPropsType) => {
  const { selfExperienceData, isLoading, pageNo, updatePageNo } = useActivitiesData({ id });
  const hasData = selfExperienceData && selfExperienceData.list.length > 0;
  return (
    <InfiniteScrollContainer
      isLoading={isLoading}
      pageSize={EXPERIENCES_PROFILE_PAGE_SIZE}
      totalCount={selfExperienceData?.totalCount || 0}
      pageNo={pageNo}
      callBack={updatePageNo}
      // height="100dvh"
    >
      {hasData && (
        <div className="flex flex-col p-4">
          {selfExperienceData.list.map((item) => {
            return (
              <ShareExperiencePostCardModules
                {...item}
                key={item.id}
                isSelf={isSelf}
                className="border-b-[1px] border-b-impo_Neutral_Surface z-0"
                type="activitiesExperienceType"
                shareId={item.id}
                hasLinkTo
              />
            );
          })}
        </div>
      )}
    </InfiniteScrollContainer>
  );
};

export default ShareExperienceProfileActivities;
