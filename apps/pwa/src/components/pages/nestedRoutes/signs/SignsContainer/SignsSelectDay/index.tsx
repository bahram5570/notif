import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import SignsNavigation from './SignsNavigation';
import WeekNamesList from './WeekNamesList';
import { SIGNS_SELECT_DAY_HEIGHT } from './constants';
import { SignsSelectDayProps } from './types';

const SignsSelectDay = ({ slide, slideHandler, infoList }: SignsSelectDayProps) => {
  return (
    <div
      style={{ height: SIGNS_SELECT_DAY_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed left-0 right-0 top-0 px-4 pb-4 mx-auto flex items-end z-40 !bg-impo_Neutral_Surface"
    >
      <div className="w-full rounded-xl px-4 pt-6 bg-impo_Neutral_Background">
        <WeekNamesList slide={slide} infoList={infoList} />

        <div className="w-full h-[1px] block mt-2 bg-impo_Neutral_Surface" />

        <SignsNavigation slide={slide} slideHandler={slideHandler} infoList={infoList} />
      </div>
    </div>
  );
};

export default SignsSelectDay;
