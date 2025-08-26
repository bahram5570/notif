import { UserCookieTypes } from '@actions/cookie.actions';
import { ACTIVATION_CR_REGISTER_QUERY_NAME } from '@constants/routes.constants';

const useActivationCrRegister = () => {
  const completeRegisterHandler = (v: UserCookieTypes) => {
    const data = JSON.stringify(v);
    const registerInfo = `${ACTIVATION_CR_REGISTER_QUERY_NAME}=${data}`;

    window.parent.postMessage({ type: 'ACTIVATION_CR_REGISTER', registerInfo }, '*');
  };

  return { completeRegisterHandler };
};

export default useActivationCrRegister;
