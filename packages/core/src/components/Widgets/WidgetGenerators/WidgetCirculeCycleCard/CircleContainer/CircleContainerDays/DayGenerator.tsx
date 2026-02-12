import { toPersianNumbers } from '../../../../../../utils/numbers';
import { typographyFontStylesMaker } from '../../../../../../utils/system';
import { circleItemRotateMaker } from '../__utils__';

import { useOperatingSystem } from '../../../../../../hooks/useOperatingSystem';
import { DayGeneratorProps } from './types';

const DayGenerator = ({ currentDay, cycleLength, day, colors, ovulationDay }: DayGeneratorProps) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });

  const rotate = circleItemRotateMaker(day, cycleLength);

  if (day === currentDay) {
    return <></>;
  }

  if (typeof ovulationDay !== 'undefined' && ovulationDay === day) {
    return <></>;
  }

  return (
    <div
      style={{ rotate: `${rotate}deg` }}
      className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -translate-y-[calc(50%_+_4px)]"
    >
      <div className={`${colors.text}`} style={{ ...typographyFontStyles, rotate: `${-rotate}deg` }}>
        {toPersianNumbers(day)}
      </div>
    </div>
  );
};

export default DayGenerator;
