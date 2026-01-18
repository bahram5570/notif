import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { RATING_FOOTER_HEIGHT } from './constants';
import { RatingFooterProps } from './types';

const RatingFooter = ({ rate, onClick }: RatingFooterProps) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-end gap-2 px-4 pb-6 mx-auto z-30 bg-impo_Neutral_Background"
      style={{ height: RATING_FOOTER_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
    >
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_Outline">
        نظراتت با حفظ حریم شخصی ثبت میشن!
      </Dark_Typography>

      {rate > 0 && (
        <Dark_Button fontSize="Lable_Large" onClick={onClick}>
          ثبت نظر
        </Dark_Button>
      )}
    </div>
  );
};

export default RatingFooter;
