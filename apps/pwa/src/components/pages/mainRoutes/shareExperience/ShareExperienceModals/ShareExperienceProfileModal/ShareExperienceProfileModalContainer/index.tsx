import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import useOverflowHandler from '@hooks/useOverflowHandler';

import ShareExperenceProfileTabList from './ShareExperenceProfileTabList';
import ShareExperienceProfileTopPart from './ShareExperienceProfileTopPart';
import ShareExperienceTabs from './ShareExperienceTabs';
import useShareExperenceProfileGetData from './__hooks__/useGetData';
import useShareExperienceProfileTabs from './__hooks__/useShareExperienceProfileTabs';
import { ShareExperienceProfileTabEnum } from './enum';
import { ShareExperienceProfileModalContainerPropsTypes } from './type';

const ShareExperienceProfileModalContainer = ({
  queryParam,
  userId,
}: ShareExperienceProfileModalContainerPropsTypes) => {
  useOverflowHandler(queryParam !== null);
  const { tab, tabHandler } = useShareExperienceProfileTabs();
  const { shareExperienceProfileData, isLoading } = useShareExperenceProfileGetData(userId);

  const rightElementScript =
    !isLoading && shareExperienceProfileData
      ? `پروفایل ${shareExperienceProfileData?.isSelf ? 'شما' : shareExperienceProfileData?.profile.username}`
      : '';

  const optionList = shareExperienceProfileData
    ? [
        {
          text: shareExperienceProfileData?.selfTitleText,
          id: ShareExperienceProfileTabEnum.Self,
        },
        {
          text: shareExperienceProfileData?.activitiesTitleText,
          id: ShareExperienceProfileTabEnum.Activities,
        },
      ]
    : [];

  return (
    <MainPageLayout paddingTop={0} rightElement="BackButton" rightElementScript={rightElementScript}>
      <div
        className=" h-[100dvh] flex flex-col px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16, paddingBottom: HEADER_HEIGHT }}
      >
        {isLoading && (
          <div className="w-full flex justify-center pb-10">
            <Dark_Spinner className="border-impo_Primary_Primary" />
          </div>
        )}

        {!isLoading && shareExperienceProfileData && (
          <>
            <ShareExperienceProfileTopPart
              followCount={shareExperienceProfileData.followCount}
              storyCount={shareExperienceProfileData.storyCount}
              isFollow={shareExperienceProfileData.isFollow}
              profile={shareExperienceProfileData.profile}
              isSelf={shareExperienceProfileData.isSelf}
            />

            <ShareExperienceTabs tab={tab} tabHandler={tabHandler} options={optionList} />

            <ShareExperenceProfileTabList
              id={shareExperienceProfileData.profile.id}
              isSelf={shareExperienceProfileData.isSelf}
              tab={tab}
            />
          </>
        )}
      </div>
    </MainPageLayout>
  );
};

export default ShareExperienceProfileModalContainer;
