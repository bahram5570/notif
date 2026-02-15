import { CustomModal } from '@repo/core/components/ui/CustomModal';

import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME } from '../../constants';
import ShareExperienceAssociationItemContainer from './ShareExperienceAssociationItemContainer';

const ShareExperienceAssociationItemModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME) !== null;

  const shareExperienceFollowerParam = getQueryParams(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME);
  const AssociationId =
    shareExperienceFollowerParam === null ? undefined : (JSON.parse(shareExperienceFollowerParam) as string);

  const zIndex = getZIndex(SHARE_EXPERIENCE_ASSOCIATION_ITEM_QUERY_NAME, AssociationId);

  return (
    <CustomModal zIndex={zIndex} isOpen={isOpen} isFullScreen className="!py-0 overflow-y-auto !px-0">
      <ShareExperienceAssociationItemContainer AssociationId={AssociationId} />
    </CustomModal>
  );
};

export default ShareExperienceAssociationItemModal;
