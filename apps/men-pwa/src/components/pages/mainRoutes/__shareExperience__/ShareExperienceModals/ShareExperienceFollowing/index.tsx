import { SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import ShareExperienceFollowingModalContainer from './ShareExperienceFollowingModalContainer';

const ShareExperienceFollowingModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();

  const queryParam = getQueryParams(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME);
  const userId = queryParam === null ? null : (queryParam as string);
  const isOpen = userId !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME, userId || '');

  return (
    <CustomModal
      isOpen={isOpen}
      zIndex={zIndex}
      isFullScreen={true}
      isSlidingMode={true}
      className="!py-0 overflow-y-auto !px-0"
    >
      <>{isOpen && <ShareExperienceFollowingModalContainer userId={userId || ''} />}</>
    </CustomModal>
  );
};

export default ShareExperienceFollowingModal;
