import { useState } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';

import KitTestRangeResult from './KitTestRangeResult';
import KitTestRangeSlider from './KitTestRangeSlider';
import { KIT_TEST_RANGE_DEFAULT_RANGE_VALUE, kitTestScripts } from './constants';
import { KitTestRangeProps, RangeValueHandlerTypes } from './types';

const KitTestRange = ({ moduleType, subimtHandler, AnalytisId }: KitTestRangeProps) => {
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [rangeValue, setRangeValue] = useState(KIT_TEST_RANGE_DEFAULT_RANGE_VALUE);

  const rangeValueHandler: RangeValueHandlerTypes = (v) => {
    setRangeValue(v);
    setIsValueSelected(true);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <KitTestRangeResult moduleType={moduleType} rangeValue={rangeValue} isValueSelected={isValueSelected} />

      <KitTestRangeSlider rangeValue={rangeValue} rangeValueHandler={rangeValueHandler} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground mb-4 mt-2">
        {kitTestScripts[moduleType].guideScript}
      </CustomTypography>

      <Dark_Button
        id={AnalytisId}
        fontSize="Lable_Large"
        isDisable={!isValueSelected}
        onClick={() => subimtHandler(rangeValue / 100)}
      >
        ادامه
      </Dark_Button>
    </div>
  );
};

export default KitTestRange;
