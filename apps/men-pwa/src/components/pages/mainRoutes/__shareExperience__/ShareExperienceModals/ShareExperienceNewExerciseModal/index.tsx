import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@repo/core/components/ShareExperience';
import { CustomModal } from '@repo/core/components/ui/CustomModal';

import { useShareExperienceOverlayIndex } from '@repo/core/hooks/useOverlayIndex';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceNewExerciseModalContainer from './ShareExperienceNewExerciseModalContainer';
import { ShareExperienceNewExerciseModalProps } from './types';

const ShareExperienceNewExerciseModal = ({
  onSuccessNewHandler,
  avatarImage,
  username,
}: ShareExperienceNewExerciseModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { getZIndex } = useShareExperienceOverlayIndex();

  const newExperienceParms = getQueryParams(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME);
  const queryData = newExperienceParms === null ? null : (JSON.parse(newExperienceParms) as { associationId: string });

  const isOpen = newExperienceParms !== null;

  const zIndex = queryData
    ? getZIndex(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME, queryData.associationId)
    : getZIndex(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME);

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0" zIndex={zIndex}>
        <>
          {isOpen && (
            <ShareExperienceNewExerciseModalContainer
              onSuccessNewHandler={onSuccessNewHandler}
              key={isOpen ? 'k1' : 'k2'}
              avatarImage={avatarImage}
              username={username}
              queryParam={newExperienceParms}
              associationId={queryData?.associationId}
            />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default ShareExperienceNewExerciseModal;
