import { useEffect } from 'react';

import { toEnglishNumbers } from '@repo/core/utils/numbers';

import ActivationInputModule from '@components/activation/ActivationInputModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import { useIsRendered } from '@repo/core/hooks/useIsRendered';

import useIsPhone from './__hooks__/useIsPhone';
import useRegisterStatus from './__hooks__/useRegisterStatus';
import useValidation from './__hooks__/useValidation';
import { Otp1ContainerProps } from './types';

const Otp1Container = ({ payload, payloadHandler, otp1CompleteHandler, onContinue }: Otp1ContainerProps) => {
  const { isRendered } = useIsRendered();
  const { isPhone, scripts } = useIsPhone();

  const { invalidMessage } = useValidation({ isPhone, value: payload.identity });

  const valueHandler = (v: string) => {
    if (isPhone && v.length > 11) {
      return;
    }

    payloadHandler({ identity: toEnglishNumbers(v) });
  };

  useEffect(() => {
    // # Reseting 'identity' value on changing the input type (isPhone)
    payloadHandler({ identity: '' });
  }, [isPhone]);

  const { fetchHandler, isLoading } = useRegisterStatus({
    identity: payload.identity,
    otp1CompleteHandler,
    isPhone,
  });

  const customPageInfo = {
    // # In this case, just "scripts" is required (others are set to default values)
    scripts: { title: scripts.description, description: scripts.title, subtitle: scripts.subtitle },
    orderOfQuestionScripts: { title: 1, subtitle: 3, description: 2 },
    firstName: payload.firstName,
    nextActivationList: {},
    noBackButton: true,
    nextActivation: '',
    payloadKeys: [],
  };

  if (!isRendered) {
    return <></>;
  }

  return (
    <>
      <MainActivationModule
        showContinueBtn={payload.identity.trim().length > 0}
        invalidMessage={invalidMessage}
        onRegister={fetchHandler}
        onContinue={onContinue}
        isLoading={isLoading}
        {...customPageInfo}
        btnTestId="otp1"
      >
        <>
          <ActivationInputModule
            isTextTyps={!isPhone}
            value={payload.identity}
            englishNumbers={!isPhone}
            placeHolder="اینجا بنویس"
            key={isPhone ? 'k1' : 'k2'}
            valueHandler={valueHandler}
          />
        </>
      </MainActivationModule>
    </>
  );
};

export default Otp1Container;
