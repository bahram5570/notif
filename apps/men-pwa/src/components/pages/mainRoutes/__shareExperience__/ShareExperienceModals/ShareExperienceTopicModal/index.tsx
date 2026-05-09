import { SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceTopicModalContainer from './ShareExperienceTopicModalContainer';
import { ShareExperienceTopicModalProps } from './type';

const ShareExperienceTopicModal = ({ avatarImage }: ShareExperienceTopicModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceOverlayIndex();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME);
  const topicId = queryParams === null ? null : (queryParams as string);
  const isOpen = topicId !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME, topicId || '');
  return (
    <>
      <CustomModal
        className="!py-0 overflow-y-auto !px-0"
        isSlidingMode={true}
        isFullScreen={true}
        isOpen={isOpen}
        zIndex={zIndex}
      >
        <>{isOpen && <ShareExperienceTopicModalContainer topicId={topicId || ''} avatarImage={avatarImage} />}</>
      </CustomModal>
    </>
  );
};

export default ShareExperienceTopicModal;
