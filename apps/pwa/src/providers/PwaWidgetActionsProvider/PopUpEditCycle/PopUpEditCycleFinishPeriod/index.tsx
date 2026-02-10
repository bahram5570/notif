import { useState } from 'react';

import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import DateModule from '@components/activation/DateModule';
import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import useEditCycleDateIntervals from './__hooks__/useEditCycleDateIntervals';
import useSubmitFinishPeriod from './__hooks__/useSubmitFinishPeriod';
import { PopUpEditCycleFinishPeriodProps } from './types';

const PopUpEditCycleFinishPeriod = ({ data, startTime, periodLength }: PopUpEditCycleFinishPeriodProps) => {
  const [endTime, setEndTime] = useState('');
  const datesInterval = useEditCycleDateIntervals({ startTime, periodLength });

  const { callApi, isLoading } = useSubmitFinishPeriod(endTime);
  const { callEvent } = useAnalytics();

  const clickHandler = () => {
    callApi();
    callEvent('End_Cycle_Edited');
  };

  return (
    <>
      <CustomTypography
        fontSize="Body_Medium"
        className="text-impo_Neutral_OnBackground"
        style={{ paddingTop: HEADER_HEIGHT }}
      >
        {data.title}
      </CustomTypography>

      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground mt-1 mb-[80px]">
        {data.description}
      </CustomTypography>

      {datesInterval && (
        <DateModule
          valueHandler={setEndTime}
          endDate={datesInterval.endDate}
          startDate={datesInterval.startDate}
          defaultDate={datesInterval.defaultDate}
        />
      )}

      <CustomButton isLoading={isLoading} onClick={clickHandler} fontSize="Lable_Large" className="mt-auto">
        {data.button.text}
      </CustomButton>
    </>
  );
};

export default PopUpEditCycleFinishPeriod;
