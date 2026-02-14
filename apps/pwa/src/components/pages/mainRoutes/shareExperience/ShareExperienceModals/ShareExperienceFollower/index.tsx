import CustomModal from '@components/ui/CustomModal';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME } from '../../constants';
import ShareExperienceFollowerModalContainer from './ShareExperienceFollowerModalContainer';
import { QueryDataShareExperienceFollowerModal, ShareExperienceFollowerModalProps } from './type';

const ShareExperienceFollowerModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME) !== null;

  const shareExperienceFollowerParam = getQueryParams(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME);
  const queryData =
    shareExperienceFollowerParam === null
      ? null
      : (JSON.parse(shareExperienceFollowerParam) as QueryDataShareExperienceFollowerModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_FOLLOWER_QUERY_NAME, queryData?.userId);

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
          <ShareExperienceFollowerModalContainer userId={queryData?.userId} queryParam={shareExperienceFollowerParam} />
        )}
      </>
    </CustomModal>
  );
};

export default ShareExperienceFollowerModal;
