import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import CustomModal from '@components/ui/CustomModal';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceProfileModalContainer from './ShareExperienceProfileModalContainer';
import { QueryDataShareExperienceProfileModal } from './type';

const ShareExperienceProfileModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_PROFILE_QUERY_NAME) !== null;

  const shareExperienceProfileParam = getQueryParams(SHARE_EXPERIENCE_PROFILE_QUERY_NAME);
  const queryData =
    shareExperienceProfileParam === null
      ? null
      : (JSON.parse(shareExperienceProfileParam) as QueryDataShareExperienceProfileModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, queryData?.id || '');

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        isSlidingMode={true}
        isFullScreen={true}
        className="!py-0 overflow-y-auto !px-0"
        zIndex={zIndex}
      >
        <>
          {isOpen && (
            <ShareExperienceProfileModalContainer userId={queryData?.id} queryParam={shareExperienceProfileParam} />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default ShareExperienceProfileModal;
