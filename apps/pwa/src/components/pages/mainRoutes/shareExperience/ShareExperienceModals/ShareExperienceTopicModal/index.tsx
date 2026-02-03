import { SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import CustomModal from '@components/ui/CustomModal';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceTopicModalContainer from './ShareExperienceTopicModalContainer';
import { QueryDataShareExperienceTopicModal, ShareExperienceTopicModalProps } from './type';

const ShareExperienceTopicModal = ({ avatarImage }: ShareExperienceTopicModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME) !== null;

  const shareExperienceTopicParam = getQueryParams(SHARE_EXPERIENCE_TOPIC_MODAL_QUERY_NAME);
  const queryData =
    shareExperienceTopicParam === null
      ? null
      : (JSON.parse(shareExperienceTopicParam) as QueryDataShareExperienceTopicModal);

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0 overflow-y-auto !px-0">
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
