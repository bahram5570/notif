import ActivationInputModule from '@components/activation/ActivationInputModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import InterfaceCodeContainer from './InterfaceCodeContainer';
import { Goal1ContainerProps } from './types';

const Goal1Container = ({
  payloadHandler,
  activationData,
  onRegister,
  onContinue,
  isLoading,
  payload,
  info,
}: Goal1ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: string) => {
    nextPageHandler({
      rewardId: pageInfo.nextActivationList.condition1?.rewardId,
      nextActivation: pageInfo.nextActivationList.condition1?.url || '',
    });

    payloadHandler({ firstName: v });
  };

  const interfaceCodeHandler = (v: string) => {
    payloadHandler({ interfaceCode: v });
  };

  const firstNameLength = payload.firstName.trim().length;
  const invalidMessage = firstNameLength < 3 && 'حداقل باید سه حرف باشه';
  const showContinueBtn = firstNameLength > 0;

  return (
    <MainActivationModule
      {...pageInfo}
      isLoading={isLoading}
      onContinue={onContinue}
      onRegister={onRegister}
      invalidMessage={invalidMessage}
      showContinueBtn={showContinueBtn}
    >
      <>
        <ActivationInputModule
          isTextTyps={true}
          value={payload.firstName}
          placeHolder="اینجا بنویس"
          valueHandler={valueHandler}
        />

        <InterfaceCodeContainer onComplete={interfaceCodeHandler} />
      </>
    </MainActivationModule>
  );
};

export default Goal1Container;
