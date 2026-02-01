import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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
        <CustomTypography fontSize="Body_Large" className="text-impo_White text-center">
          طبق اطلاعاتی که وارد کردی، ایمپو برات این پیش بینی رو کرده
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className={`text-center ${headingInfo.textColor}`}>
          {headingInfo.text}
        </CustomTypography>
      </div>

      <div style={{ height: SAMPLE_CYCLE_HEADING_HEIGHT }} />

      <div
        className="absolute left-0 right-0 flex justify-center z-10"
        style={{ top: SAMPLE_CYCLE_HEADING_HEIGHT + 30 }}
      >
        <CustomTypography fontSize="Lable_Medium" className={`text-center text-impo_Neutral_OnBackground`}>
          {todayScript}
        </CustomTypography>
      </div>
    </>
  );
};

export default SampleCycleHeading;
