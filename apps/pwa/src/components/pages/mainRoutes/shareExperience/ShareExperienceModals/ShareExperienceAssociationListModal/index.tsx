import { SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceAssociationListContainer from './ShareExperienceAssociationListContainer';

const ShareExperienceAssociationListModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME) !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME);

  return (
    <CustomModal zIndex={zIndex} isOpen={isOpen} isFullScreen>
      {isOpen && <ShareExperienceAssociationListContainer />}
    </CustomModal>
  );
};

export default ShareExperienceAssociationListModal;
