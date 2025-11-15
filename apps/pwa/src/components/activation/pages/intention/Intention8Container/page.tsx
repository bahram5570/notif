import CyclesModule from '@components/activation/CyclesModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Intention1ContainerProps } from '../Intention1Container/types';

const Intention8Container = ({
  info,
  payload,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
  onContinue,
}: Intention1ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (v: number) => {
    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
    payloadHandler({ periodLength: v });
  };

  return (
    <>
      <MainActivationModule
        onContinue={onContinue}
        isLoading={isLoading}
        onRegister={onRegister}
        {...pageInfo}
        btnTestId="btn_intention8"
      >
        <CyclesModule
          name="periodLength"
          totalCycleLength={payload.totalCycleLength}
          valueHandler={selectHandler}
          testId="wheelPicker_periodLength"
        />
      </MainActivationModule>
    </>
  );
};

export default Intention8Container;
