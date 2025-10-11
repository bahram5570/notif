import { colorFormatConverter } from '@utils/scripts';

import DateModule from '@components/activation/DateModule';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
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
  const { periodStart, periodEnd } = useDateIntervals();
  const { submitHandler, isLoading } = useSubmitLastPeriod(editPageHandler);
  const { callEvent } = useAnalytics();

  const clickHandler = () => {
    submitHandler(startTime);
    callEvent('Edit_Start_Cycle_Press');
  };

  return (
    <>
      <Typography scale="Body" size="Medium" style={{ paddingTop: HEADER_HEIGHT }}>
        {data.title}
      </Typography>

      <Typography scale="Title" size="Small" className="mt-1 mb-[80px]">
        {data.description}
      </Typography>

      <DateModule valueHandler={startTimeHandler} startDate={periodStart} endDate={periodEnd} />

      <Button
        size="medium"
        variant="fill"
        color="FREE-STYLES"
        className="mt-auto"
        isLoading={isLoading}
        onClick={clickHandler}
        buttonColor={colorFormatConverter(data.button.backgroundColor)}
        contentsColor={colorFormatConverter(data.button.foregroundColor)}
      >
        {data.button.text}
      </Button>
    </>
  );
};

export default PopUpEditCycleLastPeriod;
