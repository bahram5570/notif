import { SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import ShareExperienceAssociationListContainer from './ShareExperienceAssociationListContainer';

const ShareExperienceAssociationListModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME) !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME);

  return (
    <CustomModal zIndex={zIndex} isOpen={isOpen} isFullScreen>
      {isOpen && <ShareExperienceAssociationListContainer />}
    </CustomModal>
  );
};

export default ShareExperienceAssociationListModal;
