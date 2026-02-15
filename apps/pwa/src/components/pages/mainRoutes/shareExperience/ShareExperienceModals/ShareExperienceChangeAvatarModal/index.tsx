import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { SHARE_EXPERIENCE_CHANGE_AVATAR_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceChangeAvatarModalContainer from './ShareExperienceChangeAvatarModalContainer';
import { QueryDataShareExperienceChangeAvatarModal } from './type';

const ShareExperienceChangeAvatarModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();
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
