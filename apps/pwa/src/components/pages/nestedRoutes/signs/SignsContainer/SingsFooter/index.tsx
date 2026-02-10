import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { FOOTER_HEIGTH, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import useSignSelected from './__hooks__/useSignSelected';
import { SingsFooterPropsType } from './type';

const SingsFooter = ({ singSelectedList, selectedDate, isDisableBtn }: SingsFooterPropsType) => {
  const { addSingHandler, isLoading } = useSignSelected({ singSelectedList, selectedDate });

  return (
    <div
      style={{ height: FOOTER_HEIGTH, maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed left-0 right-0 bottom-0 px-4 pb-4 mx-auto flex bg-impo_Neutral_Background items-end z-40"
    >
      <CustomButton fontSize="Title_Small" isLoading={isLoading} onClick={addSingHandler} isDisable={isDisableBtn}>
        ثبت نشانه‌ها
      </CustomButton>
    </div>
  );
};

export default SingsFooter;
