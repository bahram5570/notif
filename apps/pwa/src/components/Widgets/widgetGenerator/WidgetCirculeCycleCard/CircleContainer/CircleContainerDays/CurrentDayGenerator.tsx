import { circleItemRotateMaker } from '../__utils__';
import { toPersianNumbers } from '@repo/core/utils/numbers';

import useDayGeneratorFontStyles from './__hooks__/useDayGeneratorFontStyles';
import { CurrentDayGeneratorProps } from './types';

const CurrentDayGenerator = ({ colors, currentDay, cycleLength }: CurrentDayGeneratorProps) => {
  const typographyFontStyles = useDayGeneratorFontStyles('Body_Small');

  const updatedCurrentDay = currentDay > cycleLength ? cycleLength : currentDay;
  const rotate = circleItemRotateMaker(updatedCurrentDay, cycleLength);

  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -translate-y-[calc(50%_-_8px)]"
    >
      <div
        style={{ ...typographyFontStyles, rotate: `${-rotate}deg` }}
        className={`w-8 h-8 rounded-full flex flex-col items-center justify-center text-impo_White ${colors.background}`}
      >
        <div className="h-4 scale-75">امروز</div>

        <div className="h-4">{toPersianNumbers(currentDay)}</div>
      </div>
    </div>
  );
};

export default CurrentDayGenerator;
