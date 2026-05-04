import { SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceFollowingModalContainer from './ShareExperienceFollowingModalContainer';

const ShareExperienceFollowingModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceOverlayIndex();

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
