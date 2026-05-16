import { SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME, ShareExperienceToast } from '@repo/core/components/ShareExperience';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { ShareExperienceNewContinueBtnProps } from './types';

const ShareExperienceNewContinueBtn = ({
  text,
  btnTop,
  sendEnable,
  toast,
  associationId,
  isSubmitLoading,
  submitHandler,
}: ShareExperienceNewContinueBtnProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

  const isDisable = text.trim().length < 1;
  const id = 'form';
  const isLoading = associationId ? isSubmitLoading : pageNavigationLoading === id;

  const clickHandler = () => {
    if (associationId) {
      return submitHandler();
    }
    pageNavigationHandler({ id, showProgressBar: false });

    newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME]: 'true' });
    increaseZIndex(SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME);
  };

  return (
    <div
      className="fixed right-0 left-0 flex flex-col justify-center  mt-auto px-4 py-6 z-40 gap-5"
      style={{ bottom: btnTop }}
    >
      {toast && <ShareExperienceToast toastMessage={toast} />}
      {sendEnable && (
        <CustomButton
          isDisable={isDisable}
          isLoading={isLoading}
          fontSize="Lable_Large"
          className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
          onClick={clickHandler}
        >
          بعدی
        </CustomButton>
      )}
    </div>
  );
};

export default ShareExperienceNewContinueBtn;
