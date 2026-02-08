import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME } from '../../constants';
import ShareExperienceFollowerModalContainer from './ShareExperienceFollowerModalContainer';
import { QueryDataShareExperienceFollowerModal, ShareExperienceFollowerModalProps } from './type';

const ShareExperienceFollowerModal = ({ shareExperienceOrdersList }: ShareExperienceFollowerModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME) !== null;

  const shareExperienceFollowerParam = getQueryParams(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME);
  const queryData =
    shareExperienceFollowerParam === null
      ? null
      : (JSON.parse(shareExperienceFollowerParam) as QueryDataShareExperienceFollowerModal);

  const zIndex = shareExperienceOrdersList?.[SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME];

  return (
    <CustomModal
      zIndex={zIndex}
      isOpen={isOpen}
      isFullScreen={true}
      isSlidingMode={true}
      className="!py-0 overflow-y-auto !px-0"
    >
      <>
        {isOpen && (
          <ShareExperienceFollowerModalContainer userId={queryData?.userId} queryParam={shareExperienceFollowerParam} />
        )}
      </>
    </CustomModal>
  );
};

export default ShareExperienceFollowerModal;
