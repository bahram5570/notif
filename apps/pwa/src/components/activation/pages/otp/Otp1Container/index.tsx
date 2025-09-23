import { useEffect } from 'react';

import { toEnglishNumbers } from '@utils/numbers';

import ActivationInputModule from '@components/activation/ActivationInputModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import useIsRendered from '@hooks/useIsRendered';

import Otp1Footer from './Otp1Footer';
import RegisterTypeBtn from './RegisterTypeBtn';
import useIsPhone from './__hooks__/useIsPhone';
import useRegisterStatus from './__hooks__/useRegisterStatus';
import useValidation from './__hooks__/useValidation';
import { Otp1ContainerProps } from './types';

const Otp1Container = ({ payload, payloadHandler, otp1CompleteHandler, onContinue }: Otp1ContainerProps) => {
  const { isRendered } = useIsRendered();
  const { isPhone, isPhoneToggleHandler, scripts } = useIsPhone();

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
      <RegisterTypeBtn isPhone={isPhone} isPhoneToggleHandler={isPhoneToggleHandler} />

      <MainActivationModule
        showContinueBtn={payload.identity.trim().length > 0}
        invalidMessage={invalidMessage}
        onRegister={fetchHandler}
        onContinue={onContinue}
        isLoading={isLoading}
        className="pt-5"
        {...customPageInfo}
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

          <Otp1Footer />
        </>
      </MainActivationModule>
    </>
  );
};

export default Otp1Container;
