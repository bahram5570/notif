import { SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import ShareExperienceDefultAvatarListModalContainer from './ShareExperienceDefultAvatarListModalContainer';

const ShareExperienceDefultAvatarListModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();

  const queryParams = getQueryParams(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME);
  const queryData = queryParams === null ? null : (queryParams as string);
  const isOpen = queryData !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME, queryData || '');

  return (
    <CustomModal
      className=" !min-h-fit mt-32 !rounded-s-xl !rounded-e-xl !px-0"
      isSlidingMode={false}
      isOpen={isOpen}
      zIndex={zIndex}
      isFullScreen
    >
      <>{isOpen && <ShareExperienceDefultAvatarListModalContainer id={queryData || ''} />}</>
    </CustomModal>
  );
};

export default ShareExperienceDefultAvatarListModal;
