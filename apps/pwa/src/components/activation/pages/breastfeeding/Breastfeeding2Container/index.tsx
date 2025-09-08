import MainActivationModule from '@components/activation/MainActivationModule';
import RadioModule from '@components/activation/RadioModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Breastfeeding2ContainerProps } from './types';

const Breastfeeding2Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
  onContinue,
}: Breastfeeding2ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });

  if (options === undefined) {
    return <></>;
  }

  const selectHandler = (v: number) => {
    nextPageHandler({
      rewardId: pageInfo.nextActivationList.condition1?.rewardId,
      nextActivation: pageInfo.nextActivationList.condition1?.url || '',
    });

    payloadHandler({ childBirthType: v });
  };

  const showContinueBtn = payload.childBirthType > -1;

  return (
    <>
      <MainActivationModule
        onContinue={onContinue}
        isLoading={isLoading}
        onRegister={onRegister}
        showContinueBtn={showContinueBtn}
        {...pageInfo}
      >
        <RadioModule options={options} onSelect={selectHandler} />
      </MainActivationModule>
    </>
  );
};

export default Breastfeeding2Container;
