import { SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceTopicModalContainer from './ShareExperienceTopicModalContainer';
import { QueryDataShareExperienceTopicModal, ShareExperienceTopicModalProps } from './type';

const ShareExperienceTopicModal = ({ avatarImage }: ShareExperienceTopicModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME) !== null;

  const shareExperienceTopicParam = getQueryParams(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME);
  const queryData =
    shareExperienceTopicParam === null
      ? null
      : (JSON.parse(shareExperienceTopicParam) as QueryDataShareExperienceTopicModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME, queryData?.id);

  return (
    <>
      <CustomModal
        className="!py-0 overflow-y-auto !px-0"
        isSlidingMode={true}
        isFullScreen={true}
        isOpen={isOpen}
        zIndex={zIndex}
      >
        <>
          {isOpen && (
            <ShareExperienceTopicModalContainer
              topicId={queryData?.id}
              avatarImage={avatarImage}
              queryParam={shareExperienceTopicParam}
            />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default ShareExperienceTopicModal;
