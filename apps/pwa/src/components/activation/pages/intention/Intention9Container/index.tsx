import MainActivationModule from '@components/activation/MainActivationModule';
import WeightHeightModule from '@components/activation/WeightHeightModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Intention9ContainerProps } from './types';

const Intention9Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
  onContinue,
}: Intention9ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: number) => {
    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
    payloadHandler({ weight: v });
  };

  return (
    <>
      <MainActivationModule
        onContinue={onContinue}
        isLoading={isLoading}
        onRegister={onRegister}
        {...pageInfo}
        btnTestId="btn_intention9"
      >
        <WeightHeightModule type="weight" valueHandler={valueHandler} testId="wheelPicker_weight" />
      </MainActivationModule>
    </>
  );
};

export default Intention9Container;
