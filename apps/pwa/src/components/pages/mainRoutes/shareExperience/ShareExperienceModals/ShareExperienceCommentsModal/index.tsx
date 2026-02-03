import { SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import CustomModal from '@components/ui/CustomModal';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceCommentsModalContainer from './ShareExperienceCommentsModalContainer';
import { ShareExperienceCommentsModalProps } from './types';

const ShareExperienceCommentsModal = (props: ShareExperienceCommentsModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const ShareExperienceCommnetModalParms = getQueryParams(SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME);
  const queryData =
    ShareExperienceCommnetModalParms === null ? null : (JSON.parse(ShareExperienceCommnetModalParms) as { id: string });
  const isOpen = queryData !== null;

  const zIndex = props.shareExperienceOrdersList?.[SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME];

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
