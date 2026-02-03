import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { CONTINUE_BTN_HEIGHT } from '@components/activation/ActivationHeading/constants';
import useCustomToast from '@hooks/useCustomToast';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import { PartnerCodeInputContinueBtnProps } from './types';

const PartnerCodeInputContinueBtn = ({
  showContinueBtn,
  invalidMessage,
  isLoading,
  onSubmit,
}: PartnerCodeInputContinueBtnProps) => {
  const toast = useCustomToast();

  const clickHandler = () => {
    if (invalidMessage) {
      toast.notifyToastHandler({ message: invalidMessage, type: 'error' });
    } else {
      onSubmit();
    }
  };

  return (
    <div
      className="fixed left-0 right-0 mx-auto px-4 pt-4 duration-200 z-30"
      style={{ bottom: showContinueBtn ? '0' : '-100%', height: CONTINUE_BTN_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex mx-auto w-[204px] min-w-fit">
        <CustomButton fontSize="Lable_Large" isLoading={isLoading} onClick={clickHandler}>
          ادامه
        </CustomButton>
      </div>
    </div>
  );
};

export default PartnerCodeInputContinueBtn;
