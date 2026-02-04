import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceProfileModalContainer from './ShareExperienceProfileModalContainer';
import { QueryDataShareExperienceProfileModal, ShareExperienceProfileModalProps } from './type';

const ShareExperienceProfileModal = ({ shareExperienceOrdersList }: ShareExperienceProfileModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_PROFILE_QUERY_NAME) !== null;

  const shareExperienceProfileParam = getQueryParams(SHARE_EXPERIENCE_PROFILE_QUERY_NAME);
  const queryData =
    shareExperienceProfileParam === null
      ? null
      : (JSON.parse(shareExperienceProfileParam) as QueryDataShareExperienceProfileModal);

  const zIndex = shareExperienceOrdersList?.[SHARE_EXPERIENCE_PROFILE_QUERY_NAME];

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
