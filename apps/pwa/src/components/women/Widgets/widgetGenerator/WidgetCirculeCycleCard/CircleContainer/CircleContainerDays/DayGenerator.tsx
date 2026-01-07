import { circleItemRotateMaker } from '../__utils__';
import { toPersianNumbers } from '@utils/numbers';

import useDayGeneratorFontStyles from './__hooks__/useDayGeneratorFontStyles';
import { DayGeneratorProps } from './types';

const DayGenerator = ({ currentDay, cycleLength, day, color, ovulationDay }: DayGeneratorProps) => {
  const rotate = circleItemRotateMaker(day, cycleLength);
  const typographyFontStyles = useDayGeneratorFontStyles('Body_Large');

  if (day === currentDay) {
    return <></>;
  }

  if (typeof ovulationDay !== 'undefined' && ovulationDay === day) {
    return <></>;
  }

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -translate-y-[calc(50%_+_4px)]"
      style={{ rotate: `${rotate}deg` }}
    >
      <div className={`text-${color}`} style={{ ...typographyFontStyles, rotate: `${-rotate}deg` }}>
        {toPersianNumbers(day)}
      </div>
    </div>
  );
};

export default DayGenerator;
