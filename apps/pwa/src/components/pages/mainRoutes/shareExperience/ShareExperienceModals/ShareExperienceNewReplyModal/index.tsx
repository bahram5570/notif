import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceNewReplyModalContainer from './ShareExperienceNewReplyModalContainer';
import { NewReplyQueriesTypes } from './types';

const ShareExperienceNewReplyModal = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useOverlayIndex();

  const queries = getQueryParams(SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME);
  const queriesData = queries === null ? null : (JSON.parse(queries) as NewReplyQueriesTypes);

  const isOpen = queriesData !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME, queriesData?.shareId);

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0" zIndex={zIndex}>
        <>{isOpen && <ShareExperienceNewReplyModalContainer data={queriesData} />}</>
      </CustomModal>
    </>
  );
};

export default ShareExperienceNewReplyModal;
