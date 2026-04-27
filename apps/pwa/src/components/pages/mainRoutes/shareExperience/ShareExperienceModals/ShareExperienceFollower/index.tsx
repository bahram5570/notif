import { SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceFollowerModalContainer from './ShareExperienceFollowerModalContainer';
import { QueryDataShareExperienceFollowerModal } from './type';

const ShareExperienceFollowerModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME) !== null;

  const shareExperienceFollowerParam = getQueryParams(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME);
  const queryData =
    shareExperienceFollowerParam === null
      ? null
      : (JSON.parse(shareExperienceFollowerParam) as QueryDataShareExperienceFollowerModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME, queryData?.userId);

  return (
    <CustomModal
      zIndex={zIndex}
      isOpen={isOpen}
      isFullScreen={true}
      isSlidingMode={true}
      className="!py-0 overflow-y-auto !px-0"
    >
      <>
        {isOpen && (
          <ShareExperienceFollowerModalContainer userId={queryData?.userId} queryParam={shareExperienceFollowerParam} />
        )}
      </>
    </CustomModal>
  );
};

export default ShareExperienceFollowerModal;
