import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import ShareExperienceProfileModalContainer from './ShareExperienceProfileModalContainer';

const ShareExperienceProfileModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_PROFILE_QUERY_NAME);
  const queryData = queryParams === null ? null : (queryParams as string);
  const isOpen = queryData !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, queryData || '');

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        isSlidingMode={true}
        isFullScreen={true}
        className="!py-0 overflow-y-auto !px-0"
        zIndex={zIndex}
      >
        <>{isOpen && <ShareExperienceProfileModalContainer userId={queryData} />}</>
      </CustomModal>
    </>
  );
};

export default ShareExperienceProfileModal;
