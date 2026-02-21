import { CustomModal } from '@repo/core/components/ui/CustomModal';

import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME } from '../../constants';
import ShareExperienceAssociationListContainer from './ShareExperienceAssociationListContainer';

const ShareExperienceAssociationListModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME) !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_ASSOCIATION_LIST_QUERY_NAME);

  return (
    <CustomModal zIndex={zIndex} isOpen={isOpen} isFullScreen>
      <ShareExperienceAssociationListContainer />
    </CustomModal>
  );
};

export default ShareExperienceAssociationListModal;
