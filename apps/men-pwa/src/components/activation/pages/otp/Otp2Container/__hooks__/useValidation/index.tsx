import { getFirebaseTokenCookie } from '@actions/userCookies.actions';
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

  const api = isRegister ? 'ManAccount/Validate' : 'ManAccount/ValidateIdentity';

  const { isLoading: isValidateLoading, callApi } = usePwaApi({ api, method: 'POST', onSuccess: successHandler });

  const submitHandler: SubmitHandlerTypes = async (code) => {
    const deviceToken = await getFirebaseTokenCookie();
    const payload = { identity, deviceToken, code, phoneModel: '' };
    callApi(payload);

    (document.activeElement as HTMLElement)?.blur();
  };

  return { submitHandler, isValidateLoading };
};

export default useValidation;
