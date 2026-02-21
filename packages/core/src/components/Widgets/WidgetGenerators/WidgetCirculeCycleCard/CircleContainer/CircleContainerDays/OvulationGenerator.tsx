import { toPersianNumbers } from '../../../../../../utils/numbers';
import { typographyFontStylesMaker } from '../../../../../../utils/system';
import { circleItemRotateMaker } from '../__utils__';

import { useSystem } from '../../../../../../hooks/useSystem';
import { OvulationGeneratorProps } from './types';

const OvulationGenerator = ({ colors, currentDay, ovulationDay, cycleLength }: OvulationGeneratorProps) => {
  const { operatingSystem } = useSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });

  const rotate = circleItemRotateMaker(ovulationDay, cycleLength);

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
