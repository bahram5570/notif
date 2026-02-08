import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME } from '../../constants';
import ShareExperienceFollowingModalContainer from './ShareExperienceFollowingModalContainer';
import { QueryDataShareExperienceFollowingModal, ShareExperienceFollowingModalProps } from './type';

const ShareExperienceFollowingModal = ({ shareExperienceOrdersList }: ShareExperienceFollowingModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME) !== null;

  const shareExperienceFollowerParam = getQueryParams(SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME);
  const queryData =
    shareExperienceFollowerParam === null
      ? null
      : (JSON.parse(shareExperienceFollowerParam) as QueryDataShareExperienceFollowingModal);

  const zIndex = shareExperienceOrdersList?.[SHARE_EXPERIENCE_FOLLOWING_QUERY_NAME];

  return (
    <CustomModal
      isOpen={isOpen}
      isSlidingMode={true}
      isFullScreen={true}
      className="!py-0 overflow-y-auto !px-0"
      zIndex={zIndex}
    >
      <>
        {isOpen && (
          <ShareExperienceFollowingModalContainer
            userId={queryData?.userId}
            queryParam={shareExperienceFollowerParam}
          />
        )}
      </>
    </CustomModal>
  );
};

export default ShareExperienceFollowingModal;
