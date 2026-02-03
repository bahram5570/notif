import { circleItemRotateMaker } from '../__utils__';
import { toPersianNumbers } from '@repo/core/utils/numbers';

import useDayGeneratorFontStyles from './__hooks__/useDayGeneratorFontStyles';
import { OvulationGeneratorProps } from './types';

const OvulationGenerator = ({ colors, currentDay, ovulationDay, cycleLength }: OvulationGeneratorProps) => {
  const rotate = circleItemRotateMaker(ovulationDay, cycleLength);
  const typographyFontStyles = useDayGeneratorFontStyles('Body_Large');

  if (currentDay === ovulationDay) {
    return <></>;
  }

  return (
    <>
      <div
        style={{ rotate: `${rotate}deg` }}
        className="absolute top-3 left-3 right-3 bottom-3 flex items-center justify-center -translate-y-[calc(50%_+_5px)]"
      >
        <div className={`w-5 h-5 rounded-full border-[5px] bg-impo_White ${colors.border}`} />
      </div>

      <div
        style={{ rotate: `${rotate}deg` }}
        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -translate-y-[calc(50%_+_12px)]"
      >
        <div className={`${colors.text}`} style={{ ...typographyFontStyles, rotate: `${-rotate}deg` }}>
          {toPersianNumbers(ovulationDay)}
        </div>
      </div>
    </>
  );
};

export default OvulationGenerator;
