import Dark_Button from '@components/ui/Dark_Button';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import useSignSelected from './__hooks__/useSignSelected';
import { SingsFooterPropsType } from './type';

const SingsFooter = ({ singSelectedList, selectedDate, isDisableBtn }: SingsFooterPropsType) => {
  const { addSingHandler, isLoading } = useSignSelected({ singSelectedList, selectedDate });

  return (
    <div
      style={{ height: FOOTER_HEIGTH, maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed left-0 right-0 bottom-0 px-4 pb-4 mx-auto flex bg-impo_Neutral_Background items-end z-40"
    >
      <Dark_Button fontSize="Title_Small" isLoading={isLoading} onClick={addSingHandler} isDisable={isDisableBtn}>
        ثبت نشانه‌ها
      </Dark_Button>
    </div>
  );
};

export default SingsFooter;
