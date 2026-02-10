import { MainPageLayoutHeader } from '@repo/core/components/MainPageLayout';

import { useOverflowHandler } from '@repo/core/hooks/useOverflowHandler';

import ShareExperienceFollowListModule from '../../../ShareExperienceModules/ShareExperienceFollowListModule';
import { ShareExperienceFollowingModalContainerProps } from './type';

const ShareExperienceFollowingModalContainer = ({
  queryParam,
  userId,
}: ShareExperienceFollowingModalContainerProps) => {
  useOverflowHandler(queryParam !== null);

  return (
    <>
      <MainPageLayoutHeader
        rightElement="BackButton"
        middleScript="دنبال شده‌ها"
        className="!bg-impo_Neutral_Surface"
      />
      <ShareExperienceFollowListModule
        userId={userId}
        EmptyStateScript="هنوز کسی رو دنبال نکردی"
        pageType="following"
      />
    </>
  );
};

export default ShareExperienceFollowingModalContainer;
