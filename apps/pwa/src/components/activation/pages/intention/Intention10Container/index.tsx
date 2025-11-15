import MainActivationModule from '@components/activation/MainActivationModule';
import WeightHeightModule from '@components/activation/WeightHeightModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Intention10ContainerProps } from './types';

const Intention10Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
  onContinue,
}: Intention10ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: number) => {
    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
    payloadHandler({ height: v });
  };

  return (
    <>
      <MainActivationModule
        onContinue={onContinue}
        isLoading={isLoading}
        onRegister={onRegister}
        {...pageInfo}
        btnTestId="btn_intention10"
      >
        <WeightHeightModule type="height" valueHandler={valueHandler} testId="wheelPicker_height" />
      </MainActivationModule>
    </>
  );
};

export default Intention10Container;
