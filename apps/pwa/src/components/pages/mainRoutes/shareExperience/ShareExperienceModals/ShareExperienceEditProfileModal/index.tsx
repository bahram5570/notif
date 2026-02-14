import { SHARE_EXPERIENCE_EDIT_PROFILE_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import CustomModal from '@components/ui/CustomModal';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

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
