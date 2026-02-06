import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import DateModule from '@components/activation/DateModule';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import useSubmitLastPeriod from './__hooks__/useSubmitLastPeriod';
import { PopUpEditCycleLastPeriodProps } from './types';

const PopUpEditCycleLastPeriod = ({
  startTimeHandler,
  editPageHandler,
  startTime,
  data,
}: PopUpEditCycleLastPeriodProps) => {
  const { callEvent } = useAnalytics();
  const { periodStart, periodEnd } = useDateIntervals();
  const { submitHandler, isLoading } = useSubmitLastPeriod(editPageHandler);

  const clickHandler = () => {
    submitHandler(startTime);
    callEvent('Edit_Start_Cycle_Press');
  };

  return (
    <>
      <CustomTypography
        fontSize="Body_Medium"
        style={{ paddingTop: HEADER_HEIGHT }}
        className="text-impo_Neutral_OnBackground"
      >
        {data.title}
      </CustomTypography>

      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground mt-1 mb-[80px]">
        {data.description}
      </CustomTypography>

      <DateModule valueHandler={startTimeHandler} startDate={periodStart} endDate={periodEnd} defaultDate={periodEnd} />

      <CustomButton isLoading={isLoading} onClick={clickHandler} fontSize="Lable_Large" className="mt-auto">
        {data.button.text}
      </CustomButton>
    </>
  );
};

export default PopUpEditCycleLastPeriod;
