import { SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceApproveModalsModule from '../../ShareExperienceModules/ShareExperienceApproveModalsModule';
import useShareExperienceFollow from './__hooks__/useShareExperienceFollow';

const ShareExperienceUnfollowModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME);
  const queryData = queryParams && JSON.parse(queryParams);
  const { followHandler, isFollowLoading } = useShareExperienceFollow(queryData?.experienceId);

  const applyHandler = () => {
    const userId = queryData?.userId;
    followHandler({ userId, isFollow: true, userName: queryData.userName });
  };

  const zIndex = getZIndex(SHARE_EXPERIENCE_UNFOLLOW_MODAL_QUERY_NAME, queryData?.userId);

  return (
    <>
      <ShareExperienceApproveModalsModule
        description={queryData?.description}
        isOpen={queryParams !== null}
        id={queryData?.experienceId}
        isLoading={isFollowLoading}
        applyHandler={applyHandler}
        title="لغو دنبال کردن"
        cancelButtonText="خیر"
        applyButtonText="بله"
        zIndex={zIndex}
      />
    </>
  );
};

export default ShareExperienceUnfollowModal;
