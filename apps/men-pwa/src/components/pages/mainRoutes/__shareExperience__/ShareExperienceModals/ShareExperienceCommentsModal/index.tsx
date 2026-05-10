import { SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceCommentsModalContainer from './ShareExperienceCommentsModalContainer';
import { ShareExperienceCommentsModalProps } from './types';

const ShareExperienceCommentsModal = ({ avatarImage }: ShareExperienceCommentsModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceOverlayIndex();

  const ShareExperienceCommnetModalParms = getQueryParams(SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME);
  const queryData = ShareExperienceCommnetModalParms === null ? null : (ShareExperienceCommnetModalParms as string);
  const isOpen = queryData !== null;

  const zIndex = getZIndex(SHARE_EXPERIENCE_COMMENTS_MODAL_QUERY_NAME, queryData || '');

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0 !px-0" zIndex={zIndex}>
        <>
          {isOpen && (
            <ShareExperienceCommentsModalContainer
              id={queryData}
              queryParam={ShareExperienceCommnetModalParms}
              avatarImage={avatarImage}
            />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default ShareExperienceCommentsModal;
