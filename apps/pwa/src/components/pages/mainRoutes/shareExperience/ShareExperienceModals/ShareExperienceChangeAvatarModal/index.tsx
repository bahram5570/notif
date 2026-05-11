import { SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import ShareExperienceChangeAvatarModalContainer from './ShareExperienceChangeAvatarModalContainer';
import { QueryDataShareExperienceChangeAvatarModal } from './type';

const ShareExperienceChangeAvatarModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceHandlers();
  const isOpen = getQueryParams(SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME) !== null;

  const queryParams = getQueryParams(SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME);
  const queryData =
    queryParams === null ? null : (JSON.parse(queryParams) as QueryDataShareExperienceChangeAvatarModal);

  const zIndex = getZIndex(SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME, queryData?.id);

  return (
    <CustomModal isSlidingMode={true} isOpen={isOpen} zIndex={zIndex}>
      <>{isOpen && <ShareExperienceChangeAvatarModalContainer username={queryData?.username} id={queryData?.id} />}</>
    </CustomModal>
  );
};

export default ShareExperienceChangeAvatarModal;
