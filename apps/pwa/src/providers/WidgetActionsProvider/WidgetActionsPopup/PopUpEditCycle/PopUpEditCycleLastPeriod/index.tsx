import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import DateModule from '@components/activation/DateModule';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';

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
      <Dark_Typography
        fontSize="Body_Medium"
        style={{ paddingTop: HEADER_HEIGHT }}
        className="text-impo_Neutral_OnBackground"
      >
        {data.title}
      </Dark_Typography>

      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground mt-1 mb-[80px]">
        {data.description}
      </Dark_Typography>

      <DateModule valueHandler={startTimeHandler} startDate={periodStart} endDate={periodEnd} defaultDate={periodEnd} />

      <Dark_Button isLoading={isLoading} onClick={clickHandler} fontSize="Lable_Large" className="mt-auto">
        {data.button.text}
      </Dark_Button>
    </>
  );
};

export default PopUpEditCycleLastPeriod;
