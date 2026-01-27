import Dark_Typography from '@components/ui/Dark_Typography';

import useSampleCycleHeadingInfo from './__hooks__/useSampleCycleHeadingInfo';
import { SAMPLE_CYCLE_HEADING_HEIGHT } from './constants';
import { SampleCycleHeadingProps } from './types';

const SampleCycleHeading = ({ payload }: SampleCycleHeadingProps) => {
  const { headingInfo, todayScript } = useSampleCycleHeadingInfo({ payload });

  return (
    <>
      <div
        style={{ minHeight: SAMPLE_CYCLE_HEADING_HEIGHT }}
        className={`absolute top-0 left-0 right-0 h-fit flex flex-col items-center justify-end gap-1 p-3 z-10 ${headingInfo.backgroundColor}`}
      >
        <Dark_Typography fontSize="Body_Large" className="text-impo_White text-center">
          طبق اطلاعاتی که وارد کردی، ایمپو برات این پیش بینی رو کرده
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className={`text-center ${headingInfo.textColor}`}>
          {headingInfo.text}
        </Dark_Typography>
      </div>

      <div style={{ height: SAMPLE_CYCLE_HEADING_HEIGHT }} />

      <div
        className="absolute left-0 right-0 flex justify-center z-10"
        style={{ top: SAMPLE_CYCLE_HEADING_HEIGHT + 30 }}
      >
        <Dark_Typography fontSize="Lable_Medium" className={`text-center text-impo_Neutral_OnBackground`}>
          {todayScript}
        </Dark_Typography>
      </div>
    </>
  );
};

export default SampleCycleHeading;
