import WomenPageLayout from '@components/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';
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
  const { data, isLoading } = useShareExperenceProfileGetData(userId);

  const rightElementScript = !isLoading && data ? `پروفایل ${data?.isSelf ? 'شما' : data?.profile.username}` : '';

  const optionList = data
    ? [
        {
          text: data?.selfTitleText,
          id: ShareExperienceProfileTabEnum.Self,
        },
        {
          text: data?.activitiesTitleText,
          id: ShareExperienceProfileTabEnum.Activities,
        },
      ]
    : [];

  return (
    <WomenPageLayout paddingTop={0} rightElement="BackButton" rightElementScript={rightElementScript}>
      <div
        className=" h-[100dvh] flex flex-col px-3"
        style={{ paddingTop: HEADER_HEIGHT + 16, paddingBottom: HEADER_HEIGHT }}
      >
        {isLoading && (
          <div className="w-full flex justify-center pb-10">
            <Dark_Spinner className="border-impo_Primary_Primary" />
          </div>
        )}

        {!isLoading && data && (
          <>
            <ShareExperienceProfileTopPart
              followCount={data.followCount}
              storyCount={data.storyCount}
              isFollow={data.isFollow}
              profile={data.profile}
              isSelf={data.isSelf}
            />

            <ShareExperienceTabs tab={tab} tabHandler={tabHandler} options={optionList} />

            <ShareExperenceProfileTabList id={data.profile.id} isSelf={data.isSelf} tab={tab} />
          </>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default ShareExperienceProfileModalContainer;
