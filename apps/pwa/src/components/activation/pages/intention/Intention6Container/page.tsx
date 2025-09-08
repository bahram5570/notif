import ActivationCalendar from '@components/activation/ActivationCalendar';
import MainActivationModule from '@components/activation/MainActivationModule';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Intention6ContainerProps } from './types';

const Intention6Container = ({
  payload,
  info,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
  onContinue,
}: Intention6ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });
  const { periodStart, periodEnd } = useDateIntervals();

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: string) => {
    payloadHandler({ startPeriodDate: v });

    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
  };

  return (
    <>
      <MainActivationModule onContinue={onContinue} isLoading={isLoading} onRegister={onRegister} {...pageInfo}>
        <ActivationCalendar endDate={periodEnd} startDate={periodStart} valueHandler={valueHandler} />
      </MainActivationModule>
    </>
  );
};

export default Intention6Container;
