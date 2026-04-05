import PaperPlaneRightIcon from '@assets/shared/icons/PaperPlaneRight.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTextareaInput } from '@repo/core/components/ui/CustomTextareaInput';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import { PartnerMessageInputType } from './type';

const PartnerMessageInput = ({ submitHandler, valueHandler, messageValue, submitLoading }: PartnerMessageInputType) => {
  const onClick = () => {
    if (submitLoading || !messageValue.trim()) return;
    submitHandler();
  };

  const onChangeHandler = (v: string) => {
    valueHandler(v);
  };

  return (
    <div
      className="mt-auto fixed bottom-0 left-0 right-0 flex items-center gap-2 h-20 p-3  mx-auto z-50 bg-impo_Neutral_Background"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <CustomTextareaInput
        placeholder="اینجا تایپ کنید"
        rows={1}
        value={messageValue}
        onChangeHandler={onChangeHandler}
        className="outline-impo_PrimaryMan_PrimaryMan rounded-full"
      />

      <CustomButton
        className={`!h-11 !w-11 rounded-full flex justify-center items-center ${!messageValue ? '!bg-impo_Surface_SurfaceVariant !border-impo_Surface_SurfaceVariant' : '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'}`}
        style={{
          cursor: !messageValue ? 'not-allowed' : 'pointer',
        }}
        onClick={onClick}
      >
        <PaperPlaneRightIcon
          className={`w-6 h-6 ${!messageValue ? 'fill-impo_Surface_OutlineVariant' : 'fill-impo_PrimaryMan_OnPrimaryMan'}`}
        />
      </CustomButton>
    </div>
  );
};

export default PartnerMessageInput;
