import { SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import ShareExperienceEditProfileModalContainer from './ShareExperienceEditProfileModalContainer';

const ShareExperienceEditProfileModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME);
  const userId = queryParams === null ? null : (queryParams as string);
  const isOpen = userId !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME, userId || '');

  return (
    <CustomModal isSlidingMode={false} isOpen={isOpen} isFullScreen zIndex={zIndex}>
      <>{isOpen && <ShareExperienceEditProfileModalContainer id={userId || ''} />}</>
    </CustomModal>
  );
};

export default ShareExperienceEditProfileModal;
