import Dark_Typography from '@components/ui/Dark_Typography';

import {
  KIT_TEST_RANGE_HIGH_LIMIT,
  KIT_TEST_RANGE_LOW_LIMIT,
  KIT_TEST_RANGE_RESULT_HEIGHT,
  kitTestScripts,
} from './constants';
import { KitTestRangeResultProps } from './types';

const KitTestRangeResult = ({ moduleType, rangeValue, isValueSelected }: KitTestRangeResultProps) => {
  let result = '';

  if (isValueSelected) {
    if (rangeValue <= KIT_TEST_RANGE_LOW_LIMIT) {
      result = kitTestScripts[moduleType].resultLow;
    } else if (rangeValue >= KIT_TEST_RANGE_HIGH_LIMIT) {
      result = kitTestScripts[moduleType].resultHigh;
    } else {
      result = kitTestScripts[moduleType].resultAverage;
    }
  }

  return (
    <div
      className="w-full pt-[10px] flex flex-col items-center rounded-lg mb-6 bg-impo_Neutral_Surface"
      style={{ height: KIT_TEST_RANGE_RESULT_HEIGHT }}
    >
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        نتیجه تست
      </Dark_Typography>
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {result}
      </Dark_Typography>
    </div>
  );
};

export default KitTestRangeResult;
