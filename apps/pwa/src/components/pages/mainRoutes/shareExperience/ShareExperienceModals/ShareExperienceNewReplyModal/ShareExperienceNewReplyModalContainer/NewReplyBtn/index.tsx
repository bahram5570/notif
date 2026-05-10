import { ShareExperienceToast } from '@repo/core/components/ShareExperience';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import OverlayBar from '@components/ui/OverlayBar';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { NewReplyBtnProps } from './types';

const NewReplyBtn = ({ text, isLoading, submitHandler, btnTop, toast }: NewReplyBtnProps) => {
  const { callEvent } = useAnalytics();
  const isDisable = text.trim().length < 1;

  const clickHandler = () => {
    submitHandler();
    callEvent('ShareExperienceComment');
  };

  return (
    <OverlayBar className="mt-auto px-4 py-6" btnTop={btnTop}>
      {toast && (
        <div className="my-4">
          <ShareExperienceToast toastMessage={toast} />
        </div>
      )}

      <CustomButton className="!w-fit" isDisable={isDisable} isLoading={isLoading} onClick={clickHandler}>
        پست کردن
      </CustomButton>
    </OverlayBar>
  );
};

export default NewReplyBtn;
