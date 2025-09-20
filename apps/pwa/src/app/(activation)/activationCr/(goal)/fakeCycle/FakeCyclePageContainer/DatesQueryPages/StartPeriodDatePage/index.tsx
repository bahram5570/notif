import { useState } from 'react';

import ActivationCalendar from '@components/activation/ActivationCalendar';
import DateModule from '@components/activation/DateModule';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';

import { FAKE_CYCLE_QUESTIONS_NAME } from '../../constants';
import { FakeCycleDatesEnums } from '../../enums';
import DatesContainer from '../DatesContainer';
import { StartPeriodDatePageProps } from './types';

const StartPeriodDatePage = ({ payloadHandler }: StartPeriodDatePageProps) => {
  const [showBtn, setShowBtn] = useState(false);
  const { periodStart, periodEnd } = useDateIntervals();
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const valueHandler = (v: string) => {
    payloadHandler({ startPeriodDate: v });
    setShowBtn(true);
  };

  const continueHandler = () => {
    newQueryParamsHandler({ [FAKE_CYCLE_QUESTIONS_NAME]: FakeCycleDatesEnums.totalCycleLengthData });
  };

  return (
    <DatesContainer
      showBtn={showBtn}
      description="کاربر عزیز"
      continueHandler={continueHandler}
      title="تاریخ آخرین باری که پریود شدی رو بهمون بگو"
      subtitle="برای پیش‌بینی روزهایی که بیشترین احتمال بارداری وجود داره"
    >
      <ActivationCalendar valueHandler={valueHandler} startDate={periodStart} endDate={periodEnd} />
    </DatesContainer>
  );
};

export default StartPeriodDatePage;
