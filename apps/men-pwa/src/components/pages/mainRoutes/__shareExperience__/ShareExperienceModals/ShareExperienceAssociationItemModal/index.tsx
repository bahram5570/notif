import { SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceAssociationItemContainer from './ShareExperienceAssociationItemContainer';

const ShareExperienceAssociationItemModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME) !== null;

  const dataParam = getQueryParams(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME);

  const AssociationId = dataParam === null ? undefined : dataParam;

  const zIndex = getZIndex(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME, AssociationId);

  return (
    <CustomModal zIndex={zIndex} isOpen={isOpen} isFullScreen className="!py-0 overflow-y-auto !px-0">
      <ShareExperienceAssociationItemContainer AssociationId={AssociationId} />
    </CustomModal>
  );
};

export default ShareExperienceAssociationItemModal;
