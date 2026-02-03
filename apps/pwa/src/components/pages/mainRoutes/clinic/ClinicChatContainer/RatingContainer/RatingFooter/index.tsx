import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import { RATING_FOOTER_HEIGHT } from './constants';
import { RatingFooterProps } from './types';

const RatingFooter = ({ rate, onClick }: RatingFooterProps) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-end gap-2 px-4 pb-6 mx-auto z-30 bg-impo_Neutral_Background"
      style={{ height: RATING_FOOTER_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
    >
      <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_Outline">
        نظراتت با حفظ حریم شخصی ثبت میشن!
      </CustomTypography>

      {rate > 0 && (
        <CustomButton fontSize="Lable_Large" onClick={onClick}>
          ثبت نظر
        </CustomButton>
      )}
    </div>
  );
};

export default RatingFooter;
