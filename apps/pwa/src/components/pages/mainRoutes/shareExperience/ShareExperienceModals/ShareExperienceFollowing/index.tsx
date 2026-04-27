import { SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceFollowingModalContainer from './ShareExperienceFollowingModalContainer';
import { QueryDataShareExperienceFollowingModal } from './type';

const ShareExperienceFollowingModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME) !== null;

  const shareExperienceFollowerParam = getQueryParams(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME);
  const queryData =
    shareExperienceFollowerParam === null
      ? null
      : (JSON.parse(shareExperienceFollowerParam) as QueryDataShareExperienceFollowingModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME, queryData?.userId);

  return (
    <CustomModal
      isOpen={isOpen}
      zIndex={zIndex}
      isFullScreen={true}
      isSlidingMode={true}
      className="!py-0 overflow-y-auto !px-0"
    >
      <>
        {isOpen && (
          <ShareExperienceFollowingModalContainer
            userId={queryData?.userId}
            queryParam={shareExperienceFollowerParam}
          />
        )}
      </>
    </CustomModal>
  );
};

export default ShareExperienceFollowingModal;
