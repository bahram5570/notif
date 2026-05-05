import { ShareExperienceToast } from '@repo/core/components/ShareExperience';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { NewReplyBtnProps } from './types';

const NewReplyBtn = ({ text, isLoading, submitHandler, toast }: NewReplyBtnProps) => {
  const { callEvent } = useAnalytics();
  const isDisable = text.trim().length < 1;

  const clickHandler = () => {
    submitHandler();
    callEvent('ShareExperienceComment');
  };

  return (
    <div className="mt-auto px-4 py-6" style={{ top: 0 }}>
      {toast && (
        <div className="my-4">
          <ShareExperienceToast toastMessage={toast} />
        </div>
      )}

      <CustomButton
        className="!w-fit !bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={clickHandler}
      >
        پست کردن
      </CustomButton>
    </div>
  );
};

export default NewReplyBtn;
