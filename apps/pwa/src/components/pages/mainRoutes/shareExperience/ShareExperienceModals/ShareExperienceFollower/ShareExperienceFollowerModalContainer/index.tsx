import MainPageLayoutHeader from '@components/MainPageLayout/MainPageLayoutHeader';
import useOverflowHandler from '@hooks/useOverflowHandler';

import ShareExperienceFollowListModule from '../../../ShareExperienceModules/ShareExperienceFollowListModule';
import { ShareExperienceFollowerModalContainerProps } from './type';

const ShareExperienceFollowerModalContainer = ({ userId, queryParam }: ShareExperienceFollowerModalContainerProps) => {
  useOverflowHandler(queryParam !== null);

  return (
    <>
      <MainPageLayoutHeader
        rightElement="BackButton"
        middleScript="دنبال کننده ها"
        className="!bg-impo_Neutral_Surface"
      />
      <ShareExperienceFollowListModule
        userId={userId}
        EmptyStateScript="هنوز دنبال کننده ایی نداری"
        pageType="followers"
      />
    </>
  );
};

export default ShareExperienceFollowerModalContainer;
