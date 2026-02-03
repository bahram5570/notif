import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import CustomModal from '@components/ui/CustomModal';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import ShareExperienceNewExerciseModalContainer from './ShareExperienceNewExerciseModalContainer';
import { ShareExperienceNewExerciseModalProps } from './types';

const ShareExperienceNewExerciseModal = ({
  onSuccessNewHandler,
  avatarImage,
  username,
}: ShareExperienceNewExerciseModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const newExperienceParms = getQueryParams(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME);
  const isOpen = newExperienceParms !== null;

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0" zIndex={75}>
        <>
          {isOpen && (
            <ShareExperienceNewExerciseModalContainer
              onSuccessNewHandler={onSuccessNewHandler}
              key={isOpen ? 'k1' : 'k2'}
              avatarImage={avatarImage}
              username={username}
              queryParam={newExperienceParms}
            />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default ShareExperienceNewExerciseModal;
