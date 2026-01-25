import { useState } from 'react';

import { HEADER_HEIGHT } from '@components/WomenPageLayout/constants';
import DateModule from '@components/activation/DateModule';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';

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
      <Dark_Typography
        fontSize="Body_Medium"
        className="text-impo_Neutral_OnBackground"
        style={{ paddingTop: HEADER_HEIGHT }}
      >
        {data.title}
      </Dark_Typography>

      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground mt-1 mb-[80px]">
        {data.description}
      </Dark_Typography>

      {datesInterval && (
        <DateModule
          valueHandler={setEndTime}
          endDate={datesInterval.endDate}
          startDate={datesInterval.startDate}
          defaultDate={datesInterval.defaultDate}
        />
      )}

      <Dark_Button isLoading={isLoading} onClick={clickHandler} fontSize="Lable_Large" className="mt-auto">
        {data.button.text}
      </Dark_Button>
    </>
  );
};

export default PopUpEditCycleFinishPeriod;
