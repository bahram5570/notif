import { SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceDefultAvatarListModalContainer from './ShareExperienceDefultAvatarListModalContainer';
import { QueryDataShareExperienceDefultAvatarListModal } from './type';

const ShareExperienceDefultAvatarListModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME) !== null;

  const queryParams = getQueryParams(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME);
  const queryData =
    queryParams === null ? null : (JSON.parse(queryParams) as QueryDataShareExperienceDefultAvatarListModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_DEFULT_AVATAR_LIST_QUERY_NAME, queryData?.id);

  return (
    <CustomModal
      className=" !min-h-fit mt-32 !rounded-s-xl !rounded-e-xl !px-0"
      isSlidingMode={false}
      isOpen={isOpen}
      zIndex={zIndex}
      isFullScreen
    >
      <>{isOpen && <ShareExperienceDefultAvatarListModalContainer id={queryData?.id} />}</>
    </CustomModal>
  );
};

export default ShareExperienceDefultAvatarListModal;
