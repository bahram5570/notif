import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceCommentsModalContainer from './ShareExperienceCommentsModalContainer';

const ShareExperienceCommentsModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const ShareExperienceCommnetModalParms = getQueryParams(SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME);
  const queryData =
    ShareExperienceCommnetModalParms === null ? null : (JSON.parse(ShareExperienceCommnetModalParms) as { id: string });
  const isOpen = queryData !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME, queryData?.id);

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0 !px-0" zIndex={zIndex}>
        <>
          {isOpen && (
            <ShareExperienceCommentsModalContainer id={queryData.id} queryParam={ShareExperienceCommnetModalParms} />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default ShareExperienceCommentsModal;
