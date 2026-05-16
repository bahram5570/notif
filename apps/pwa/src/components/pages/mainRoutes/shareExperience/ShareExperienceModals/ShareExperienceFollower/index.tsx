import { SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import ShareExperienceFollowerModalContainer from './ShareExperienceFollowerModalContainer';

const ShareExperienceFollowerModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();

  const queryParam = getQueryParams(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME);
  const userId = queryParam === null ? null : (queryParam as string);
  const isOpen = userId !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME, userId || '');

  return (
    <CustomModal
      zIndex={zIndex}
      isOpen={isOpen}
      isFullScreen={true}
      isSlidingMode={true}
      className="!py-0 overflow-y-auto !px-0"
    >
      <>{isOpen && <ShareExperienceFollowerModalContainer userId={userId || ''} />}</>
    </CustomModal>
  );
};

export default ShareExperienceFollowerModal;
