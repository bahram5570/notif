import { SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceEditProfileModalContainer from './ShareExperienceEditProfileModalContainer';
import { QueryDataShareExperienceEditProfileModal } from './type';

const ShareExperienceEditProfileModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME) !== null;
  const queryParams = getQueryParams(SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME);
  const queryData = queryParams === null ? null : (JSON.parse(queryParams) as QueryDataShareExperienceEditProfileModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME, queryData?.id);

  return (
    <CustomModal isSlidingMode={false} isOpen={isOpen} isFullScreen zIndex={zIndex}>
      <>{isOpen && <ShareExperienceEditProfileModalContainer id={queryData?.id} />}</>
    </CustomModal>
  );
};

export default ShareExperienceEditProfileModal;
