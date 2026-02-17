'use client';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { toEnglishNumbers } from '@repo/core/utils/numbers';

import MainActivationModule from '@components/activation/MainActivationModule';
import { useIsRendered } from '@repo/core/hooks/useIsRendered';

import Codes from './Codes';
import CountDown from './CountDown';
import EditLink from './EditIdentyLink';
import LoginSuccess from './LoginSuccess';
import OptionList from './OptionList';
import Otp2Skeleton from './Otp2Skeleton';
import useCode from './__hooks__/useCode';
import useLogin from './__hooks__/useLogin';
import useOtpInfo from './__hooks__/useOtpInfo';
import useOtpStatus from './__hooks__/useOtpStatus';
import useValidation from './__hooks__/useValidation';
import { Otp2ContainerProps } from './types';

const Otp2Container = ({
  isRegisterLoading = false,
  isRegisterSuccess = false,
  applyOtpStatus = null,
  onSubmitRegister,
  onSubmitLogin,
}: Otp2ContainerProps) => {
  const { identity, isPhone, isRegister, password } = useOtpInfo();
  const { otpStatus, otpStatusHandler } = useOtpStatus(applyOtpStatus);

  const { resetCodeHandler, otpInfo, getDataLoading } = useCode({ identity, isRegister });

  const { loginHandler, loginLoading, isLoginSuccess } = useLogin({
    identity,
    password,
    onSubmitLogin,
    otpStatusHandler,
  });

  const validationCompleteHandler = () => {
    if (isRegister) {
      loginHandler();
    } else {
      onSubmitRegister();
    }
  };

  const { submitHandler, isValidateLoading } = useValidation({
    isRegister,
    otpStatusHandler,
    validationCompleteHandler,
    identity: toEnglishNumbers(identity || ''),
  });

  const customPageInfo = {
    scripts: { title: otpInfo?.title || '', description: '', subtitle: otpInfo?.subTitle || '' },
    orderOfQuestionScripts: { title: 1, subtitle: 3, description: 2 },
    showContinueBtn: false,
    nextActivationList: {},
    nextActivation: '',
    payloadKeys: [],
    firstName: '',
  };

  const isLoading = isValidateLoading || loginLoading || isRegisterLoading;
  const isLoginRegisterSuccess = isLoginSuccess || isRegisterSuccess;
  const hasOptionList = otpInfo && otpInfo.options.length > 0;

  const { isRendered } = useIsRendered();

  if (!isRendered) {
    return <></>;
  }

  return (
    <>
      {getDataLoading && !otpInfo && <Otp2Skeleton />}

      {!getDataLoading && otpInfo && (
        <MainActivationModule banner={otpInfo.banner} {...customPageInfo} isShowLogo={false} className="pt-5">
          <div className="flex flex-col items-center ">
            <Codes submitHandler={submitHandler} isLoading={isLoading} otpStatus={otpStatus} />

            <CountDown
              waitTime={otpInfo.waitTime}
              waitMessage={otpInfo.waitMessage}
              resetCodeHandler={() => {
                resetCodeHandler(otpInfo.type);
              }}
            />

            {!isLoading && !isLoginRegisterSuccess && <EditLink isPhone={isPhone ? true : false} />}

            {isLoading && <CustomSpinner className="border-impo_PrimaryMan_PrimaryMan" />}

            {isLoginRegisterSuccess && <LoginSuccess />}

            {hasOptionList && (
              <OptionList
                resetCodeHandler={resetCodeHandler}
                isValidateLoading={isLoading}
                optionList={otpInfo.options}
                otpStatus={otpStatus}
              />
            )}
          </div>
        </MainActivationModule>
      )}
    </>
  );
};

export default Otp2Container;
