import { getFirebaseCookieToken } from '@utils/cookies';

import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { SubmitHandlerTypes, SuccessHandlerTypes, UseValidationProps } from './types';

const useValidation = ({ validationCompleteHandler, otpStatusHandler, isRegister, identity }: UseValidationProps) => {
  const successHandler: SuccessHandlerTypes = ({ result }) => {
    // # Check validity of the OTP

    if (result) {
      validationCompleteHandler();
    } else {
      otpStatusHandler('wrong');
    }
  };

  const api = isRegister ? 'customerAccount/Validate' : 'customerAccount/ValidateIdentity';

  const { isLoading: isValidateLoading, callApi } = usePwaApi({ api, method: 'POST', onSuccess: successHandler });

  const submitHandler: SubmitHandlerTypes = (code) => {
    const payload = { identity, code, phoneModel: '', deviceToken: getFirebaseCookieToken() };
    callApi(payload);

    (document.activeElement as HTMLElement)?.blur();
  };

  return { submitHandler, isValidateLoading };
};

export default useValidation;
